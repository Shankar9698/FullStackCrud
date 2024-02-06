package com.crud.viewById.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.viewById.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
