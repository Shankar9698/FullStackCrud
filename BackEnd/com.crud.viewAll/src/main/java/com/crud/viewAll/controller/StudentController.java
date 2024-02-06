package com.crud.viewAll.controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.viewAll.model.Student;
import com.crud.viewAll.service.StudentIService;


@RestController
@RequestMapping("/students/")
public class StudentController {
	 private static final Logger logger = LoggerFactory.getLogger(StudentController.class);

	@Autowired
	private StudentIService studentIService;
	@GetMapping("/viewall")
//	@CrossOrigin(origins = "http://localhost:3000")
	@CrossOrigin(origins = "*")
	public ResponseEntity<List<Student>> viewAllStudents(){
		logger.info("Received request for /api/students/viewall");
		List<Student> students=studentIService.viewAllStudents();
		logger.info("Number of students retrieved: {}", students.size());
		return ResponseEntity.ok(students);
	}

}