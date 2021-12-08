package br.com.surb.salesapi.shared.exceptions.services;

import java.io.Serializable;

public class DataBaseException extends RuntimeException implements Serializable {
  private static final long serialVersionUID = 1L;

  public DataBaseException(String message) {
    super(message);
  }
}
