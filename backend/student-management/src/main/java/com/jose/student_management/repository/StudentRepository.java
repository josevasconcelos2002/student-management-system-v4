package com.jose.student_management.repository;

import com.jose.student_management.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}