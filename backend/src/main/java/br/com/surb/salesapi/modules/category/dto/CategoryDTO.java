package br.com.surb.salesapi.modules.category.dto;

import java.time.Instant;

import br.com.surb.salesapi.modules.category.entities.Category;

public class CategoryDTO {
	
	private Long id;
	private String name;
	private Instant createdAt;
    private Instant updatedAt;
	
	public CategoryDTO() {}

	public CategoryDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public CategoryDTO(Category category) {
		this.id = category.getId();
		this.name = category.getName();
		this.createdAt = category.getCreatedAt();
		this.updatedAt = category.getUpdatedAt();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public Instant getCreatedAt() {
	  return createdAt;
	}

	public Instant getUpdatedAt() {
	  return updatedAt;
	}
	
	
	
}
