package br.com.surb.salesapi.modules.category.categoryUseCase.categoryFindAllUseCase;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.salesapi.modules.category.dto.CategoryDTO;
import br.com.surb.salesapi.modules.category.entities.Category;
import br.com.surb.salesapi.modules.category.repositories.CategoryRepository;

@Service
public class CategoryFindAllUseCase {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public List<CategoryDTO> execute(){
		List<Category> categories = categoryRepository.findAll();
		return categories.stream().map(category -> new CategoryDTO(category)).collect(Collectors.toList());
		
		
	}
}
