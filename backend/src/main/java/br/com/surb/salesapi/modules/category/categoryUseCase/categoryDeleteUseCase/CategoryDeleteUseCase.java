package br.com.surb.salesapi.modules.category.categoryUseCase.categoryDeleteUseCase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.surb.salesapi.modules.category.repositories.CategoryRepository;
import br.com.surb.salesapi.shared.exceptions.services.ControllerNotFoundException;
import br.com.surb.salesapi.shared.exceptions.services.DataBaseException;

@Service
public class CategoryDeleteUseCase {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public void execute(Long id) {
		try {
			categoryRepository.deleteById(id);
		}catch (EmptyResultDataAccessException e) {
			throw new ControllerNotFoundException("Id not found id: " + id);
		}catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation");
		}
	}
}
