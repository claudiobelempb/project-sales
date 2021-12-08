package br.com.surb.salesapi.modules.product.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.surb.salesapi.modules.product.dto.ProductCreateDTO;
import br.com.surb.salesapi.modules.product.dto.ProductUpdateDTO;
import br.com.surb.salesapi.modules.product.productUseCase.productCreateUseCase.ProductCreateUseCase;
import br.com.surb.salesapi.modules.product.productUseCase.productUpdateUseCase.ProductUpdateUseCase;

@Controller
@RequestMapping(value = "/api/products")
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	private ProductCreateUseCase productCreateUseCase;
	
	@Autowired
	private ProductUpdateUseCase productUpdateUseCase;
	
	@PostMapping
	public ResponseEntity<ProductCreateDTO> create(@RequestBody ProductCreateDTO productCreateDTO){
		productCreateDTO = productCreateUseCase.excute(productCreateDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(productCreateDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(productCreateDTO);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<ProductUpdateDTO> update(@PathVariable Long id, @RequestBody ProductUpdateDTO productUpdateDTO){
		productUpdateDTO = productUpdateUseCase.execute(id, productUpdateDTO);
		return ResponseEntity.ok().body(productUpdateDTO);
	}
	
	
}
