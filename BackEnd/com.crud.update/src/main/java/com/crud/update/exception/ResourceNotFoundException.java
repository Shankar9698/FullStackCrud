package com.crud.update.exception;

public class ResourceNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String name;
	String key;
	Long value;
	public ResourceNotFoundException(String name, String key, Long value) {
		
		super(String.format("%s not found with %s:%s", name, key, value));
		this.name = name;
		this.key = key;
		this.value = value;
	}

}
