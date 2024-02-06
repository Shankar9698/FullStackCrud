package com.crud.create.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.create.model.Student;
import com.crud.create.service.StudentIService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/studentsc/")
public class StudentController {
	@Autowired
	private StudentIService studentIService;
	
	@PostMapping("/create")
	public ResponseEntity<Student> createStudent(@RequestBody Student student){
		Student stu=studentIService.createStudent(student);
		return new ResponseEntity<Student>(stu,HttpStatus.CREATED);	
	}
}
