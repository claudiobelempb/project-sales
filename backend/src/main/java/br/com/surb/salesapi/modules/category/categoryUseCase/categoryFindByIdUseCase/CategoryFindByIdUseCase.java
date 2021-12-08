package br.com.surb.salesapi.modules.category.categoryUseCase.categoryFindByIdUseCase;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.salesapi.modules.category.dto.CategoryDTO;
import br.com.surb.salesapi.modules.category.entities.Category;
import br.com.surb.salesapi.modules.category.repositories.CategoryRepository;
import br.com.surb.salesapi.shared.exceptions.services.ControllerNotFoundException;

@Service
public class CategoryFindByIdUseCase {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public CategoryDTO execute(Long id) {
		Optional<Category> obj = categoryRepository.findById(id);
		Category category = obj.orElseThrow(() -> new ControllerNotFoundException("Entity not found id: " + id));
		return new CategoryDTO(category);
	}

}
