package com.pharma.PharmaApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * 
 * Handler for CustomException class
 * 
 * @author Matthew Luka
 *
 */
@ControllerAdvice
public class ExceptionControllerAdvice {

	/**
	 * 
	 * Handler method for CustomException
	 * 
	 * @param exception Exception of type CustomException
	 * @return Response including message and HTTP status
	 */
    @ExceptionHandler(value = CustomException.class)
    public final ResponseEntity<String> handleUpdateFailException(CustomException exception){
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
    }
	
}
