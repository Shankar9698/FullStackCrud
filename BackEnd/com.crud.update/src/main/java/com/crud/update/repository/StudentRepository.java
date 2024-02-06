package com.crud.update.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.update.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
