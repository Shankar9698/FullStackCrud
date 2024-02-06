package com.crud.viewById.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.viewById.exceptions.ResourceNotFoundException;
import com.crud.viewById.model.Student;
import com.crud.viewById.repository.StudentRepository;
import com.crud.viewById.service.StudentIService;
@Service
public class StudentServiceImpl implements StudentIService {
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student viewById(Long id) {
		Student student=studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("student", "id",id));
		return student;
	}

}
