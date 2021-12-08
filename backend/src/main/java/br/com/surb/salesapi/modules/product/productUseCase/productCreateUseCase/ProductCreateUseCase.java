package br.com.surb.salesapi.modules.product.productUseCase.productCreateUseCase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.salesapi.modules.product.dto.ProductCreateDTO;
import br.com.surb.salesapi.modules.product.entities.Product;
import br.com.surb.salesapi.modules.product.repositories.ProductRepository;

@Service
public class ProductCreateUseCase {
	@Autowired
	private ProductRepository productRepository;

	@Transactional
	public ProductCreateDTO excute(ProductCreateDTO productCreateDTO) {
		Product product = new Product();
		product.setName(productCreateDTO.getName());
		product.setDescription(productCreateDTO.getDescription());
		product.setPrice(productCreateDTO.getPrice());
		product.setImgUrl(productCreateDTO.getImgUrl());
		product.setSku(productCreateDTO.getSku());
		product = productRepository.save(product);
		return new ProductCreateDTO(product);
	}
}
