package br.com.surb.salesapi.modules.product.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.surb.salesapi.modules.product.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
