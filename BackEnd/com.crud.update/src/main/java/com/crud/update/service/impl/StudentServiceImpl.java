package com.crud.update.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.update.exception.ResourceNotFoundException;
import com.crud.update.model.Student;
import com.crud.update.repository.StudentRepository;
import com.crud.update.service.StudentIService;
@Service
public class StudentServiceImpl implements StudentIService {
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student updateStudent(Student student, Long id) {
		Student student2=studentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("student", "id", id));
		student2.setFirstName(student.getFirstName());
		student2.setLastName(student.getLastName());
		student2.setEmailId(student.getEmailId());
		
		
		return studentRepository.save(student2);
	}

}
