package br.com.surb.salesapi.modules.category.controllers;


import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.surb.salesapi.modules.category.categoryUseCase.categoryCreateUseCase.CategoryCreateUseCase;
import br.com.surb.salesapi.modules.category.categoryUseCase.categoryDeleteUseCase.CategoryDeleteUseCase;
import br.com.surb.salesapi.modules.category.categoryUseCase.categoryFindAllUseCase.CategoryFindAllUseCase;
import br.com.surb.salesapi.modules.category.categoryUseCase.categoryFindByIdUseCase.CategoryFindByIdUseCase;
import br.com.surb.salesapi.modules.category.categoryUseCase.categoryUpdateUseCase.CategoryUpdateUseCase;
import br.com.surb.salesapi.modules.category.dto.CategoryCreateDTO;
import br.com.surb.salesapi.modules.category.dto.CategoryDTO;
import br.com.surb.salesapi.modules.category.dto.CategoryUpdateDTO;

@RestController
@RequestMapping(value = "/api/categories")
public class CategoryController {
	
	@Autowired
	private CategoryFindAllUseCase categoryFindAllUseCase;
	
	@Autowired
	private CategoryFindByIdUseCase categoryFindByIdUseCase;
	
	@Autowired
	private CategoryCreateUseCase categoryCreateUseCase;
	
	@Autowired
	private CategoryUpdateUseCase categoryUpdateUseCase;
	
	@Autowired
	private CategoryDeleteUseCase categoryDeleteUseCase;
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> findAll(){
		List<CategoryDTO> categories = categoryFindAllUseCase.execute();
		return ResponseEntity.ok().body(categories);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CategoryDTO> findById(@PathVariable Long id){
		CategoryDTO category = categoryFindByIdUseCase.execute(id);
		return ResponseEntity.ok().body(category);
	}
	
	@PostMapping
	public ResponseEntity<CategoryCreateDTO> create(@RequestBody CategoryCreateDTO categoryCreateDTO){
		categoryCreateDTO = categoryCreateUseCase.execute(categoryCreateDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(categoryCreateDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(categoryCreateDTO);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<CategoryUpdateDTO> update(@PathVariable Long id, @RequestBody CategoryUpdateDTO categoryUpdateDTO){
		categoryUpdateDTO = categoryUpdateUseCase.execute(id, categoryUpdateDTO);
		return ResponseEntity.ok().body(categoryUpdateDTO);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		categoryDeleteUseCase.execute(id);
		return ResponseEntity.noContent().build();
	}
}
