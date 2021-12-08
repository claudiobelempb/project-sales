package br.com.surb.salesapi.modules.category.categoryUseCase.categoryUpdateUseCase;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.salesapi.modules.category.dto.CategoryUpdateDTO;
import br.com.surb.salesapi.modules.category.entities.Category;
import br.com.surb.salesapi.modules.category.repositories.CategoryRepository;
import br.com.surb.salesapi.shared.exceptions.services.ControllerNotFoundException;

@Service
public class CategoryUpdateUseCase {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	
	@Transactional
	public CategoryUpdateDTO execute(Long id, CategoryUpdateDTO categoryUpdateDTO) {
		try {
			Category category = categoryRepository.getOne(id);
			category.setName(categoryUpdateDTO.getName());
			category = categoryRepository.save(category);
			return new CategoryUpdateDTO(category);
		}catch (EntityNotFoundException e) {
			throw new ControllerNotFoundException("Id not found id: " + id);
		}
	}
}
