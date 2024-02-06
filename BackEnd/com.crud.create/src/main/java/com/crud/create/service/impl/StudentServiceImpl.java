package com.crud.create.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.create.model.Student;
import com.crud.create.repository.StudentRepository;
import com.crud.create.service.StudentIService;

@Service
public class StudentServiceImpl implements StudentIService{
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student createStudent(Student student) {
		return studentRepository.save(student);
	}

}
