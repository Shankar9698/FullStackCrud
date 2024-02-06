package com.crud.viewById.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.viewById.model.Student;
import com.crud.viewById.service.StudentIService;

@RestController
@RequestMapping("/students/")
public class StudentController {
	
	@Autowired
	private StudentIService studentIService;
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{id}")
	public ResponseEntity<Student> viewUserById(@PathVariable Long id) {
		Student student=studentIService.viewById(id);
		return ResponseEntity.ok(student);
	}

}
