package com.crud.viewAll.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.viewAll.model.Student;



public interface StudentRepository extends JpaRepository<Student, Long>{

}
