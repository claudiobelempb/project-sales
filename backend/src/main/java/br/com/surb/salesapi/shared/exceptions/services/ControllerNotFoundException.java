package br.com.surb.salesapi.shared.exceptions.services;

import java.io.Serializable;

public class ControllerNotFoundException extends RuntimeException implements Serializable {
	private static final long serialVersionUID = 1L;

	  public ControllerNotFoundException(String message) {
	    super(message);
	  }
}
