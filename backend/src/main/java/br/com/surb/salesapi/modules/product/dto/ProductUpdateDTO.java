package br.com.surb.salesapi.modules.product.dto;

import java.math.BigDecimal;
import java.time.Instant;

import br.com.surb.salesapi.modules.product.entities.Product;

public class ProductUpdateDTO {
	
	private Long id;
	private String name;
	private String description;
	private BigDecimal price;
	private String imgUrl;
	private Instant createdAt;
    private Instant updatedAt;
	
	public ProductUpdateDTO() {}
	
	
	
	public ProductUpdateDTO(Long id, String name, String description, BigDecimal price, String imgUrl) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgUrl = imgUrl;
	}
	
	public ProductUpdateDTO(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.imgUrl = product.getImgUrl();
		this.createdAt = product.getCreatedAt();
		this.updatedAt = product.getUpdatedAt();
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
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public BigDecimal getPrice() {
		return price;
	}
	
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
	public String getImgUrl() {
		return imgUrl;
	}
	
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	
	public Instant getCreatedAt() {
	  return createdAt;
	}

	public Instant getUpdatedAt() {
	  return updatedAt;
	}
	
}
