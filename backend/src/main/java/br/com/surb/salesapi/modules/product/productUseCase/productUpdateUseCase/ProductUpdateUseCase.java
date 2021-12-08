package br.com.surb.salesapi.modules.product.productUseCase.productUpdateUseCase;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.salesapi.modules.product.dto.ProductUpdateDTO;
import br.com.surb.salesapi.modules.product.entities.Product;
import br.com.surb.salesapi.modules.product.repositories.ProductRepository;
import br.com.surb.salesapi.shared.exceptions.services.ControllerNotFoundException;

@Service
public class ProductUpdateUseCase {
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional
	public ProductUpdateDTO execute(Long id, ProductUpdateDTO productUpdateDTO) {
		try {
			Product product = productRepository.getOne(id);
			product.setName(productUpdateDTO.getName());
			product.setDescription(productUpdateDTO.getDescription());
			product.setPrice(productUpdateDTO.getPrice());
			product = productRepository.save(product);
			return new ProductUpdateDTO(product);
		}catch (EntityNotFoundException e) {
			throw new ControllerNotFoundException("Id not found id: " + id);
		}
	}
}
