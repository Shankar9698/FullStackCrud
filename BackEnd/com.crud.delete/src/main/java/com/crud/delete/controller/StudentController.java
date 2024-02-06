package com.crud.delete.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.delete.payloads.ApiResponse;
import com.crud.delete.service.StudentIService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/studentsd/")
public class StudentController {
	@Autowired
	private StudentIService studentIService;
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> delete(@PathVariable Long id) {
		studentIService.deleteStudent(id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted student with id "+id+" successfully", true),HttpStatus.OK);
	}

}
