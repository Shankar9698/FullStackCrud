package com.crud.update.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.update.model.Student;
import com.crud.update.service.StudentIService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/studentsu/")
public class StudentController {
	@Autowired
	private StudentIService studentIService;
	
	@PutMapping("/{id}")
	public ResponseEntity<Student> update(@PathVariable long id,@RequestBody Student student){
		Student student2=studentIService.updateStudent(student, id);
		return ResponseEntity.ok(student2);
		
		
	}

}
