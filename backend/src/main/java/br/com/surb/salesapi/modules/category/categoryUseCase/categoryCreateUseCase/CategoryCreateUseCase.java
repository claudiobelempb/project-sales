package br.com.surb.salesapi.modules.category.categoryUseCase.categoryCreateUseCase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.salesapi.modules.category.dto.CategoryCreateDTO;
import br.com.surb.salesapi.modules.category.entities.Category;
import br.com.surb.salesapi.modules.category.repositories.CategoryRepository;

@Service
public class CategoryCreateUseCase {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional
	public CategoryCreateDTO execute(CategoryCreateDTO categoryCreateDTO) {
		Category category = new Category();
		category.setName(categoryCreateDTO.getName());
		category = categoryRepository.save(category);
		return new CategoryCreateDTO(category);
	}
}
