package com.crud.delete.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.delete.exceptions.ResourceNotFoundException;
import com.crud.delete.model.Student;
import com.crud.delete.repository.StudentRepository;
import com.crud.delete.service.StudentIService;
@Service
public class StudentServiceImpl implements StudentIService {
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public void deleteStudent(Long id) {
		Student student=studentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("student", "id", id));
		studentRepository.delete(student);
	}

}
