package com.crud.viewAll.service.impl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.viewAll.model.Student;
import com.crud.viewAll.repository.StudentRepository;
import com.crud.viewAll.service.StudentIService;
@Service
public class StudentServiceImpl implements StudentIService{
	private static final Logger logger = LoggerFactory.getLogger(StudentServiceImpl.class);

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public List<Student> viewAllStudents() {
		logger.info("Service: Retrieving all students");
		List<Student> students=studentRepository.findAll();
		logger.info("Service: Number of students retrieved: {}", students.size());
		return students;
	}

}
