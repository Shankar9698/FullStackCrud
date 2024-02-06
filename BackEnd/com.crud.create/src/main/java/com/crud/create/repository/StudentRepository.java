package com.crud.create.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.create.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
