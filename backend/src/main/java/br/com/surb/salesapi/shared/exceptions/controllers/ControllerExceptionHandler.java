package br.com.surb.salesapi.shared.exceptions.controllers;

import java.io.Serializable;
import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.com.surb.salesapi.shared.exceptions.services.ControllerNotFoundException;
import br.com.surb.salesapi.shared.exceptions.services.DataBaseException;

@ControllerAdvice
public class ControllerExceptionHandler implements Serializable {
	  private static final long serialVersionUID = 1L;

	  @ExceptionHandler(ControllerNotFoundException.class)
	  public ResponseEntity<StandarError> entityNotFound(
		ControllerNotFoundException e, HttpServletRequest request) {
	    HttpStatus status = HttpStatus.NOT_FOUND;
	    StandarError err = new StandarError();
	    err.setTimestamp(Instant.now());
	    err.setStatus(status.value());
	    err.setError("Controller not found");
	    err.setMessage(e.getMessage());
	    err.setPath(request.getRequestURI());
	    return ResponseEntity.status(status).body(err);
	  }
	  
	  @ExceptionHandler(DataBaseException.class)
	  public ResponseEntity<StandarError> dataBaseException(
		DataBaseException e, HttpServletRequest request) {
	    HttpStatus status = HttpStatus.BAD_REQUEST;
	    StandarError err = new StandarError();
	    err.setTimestamp(Instant.now());
	    err.setStatus(status.value());
	    err.setError("DataBae Exception");
	    err.setMessage(e.getMessage());
	    err.setPath(request.getRequestURI());
	    return ResponseEntity.status(status).body(err);
	  }

}
