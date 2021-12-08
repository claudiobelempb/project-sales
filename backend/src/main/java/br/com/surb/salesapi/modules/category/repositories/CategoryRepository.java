package br.com.surb.salesapi.modules.category.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.surb.salesapi.modules.category.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
