package com.jose.student_management.service;

import com.jose.student_management.model.Student;
import com.jose.student_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student saveStudent(Student student) {
        return this.studentRepository.save(student);
    }

    public Student getStudentById(Integer id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    public List<Student> getAllStudents() {
        return this.studentRepository.findAll();
    }

    public void deleteStudent(Integer id) {
        this.studentRepository.deleteById(id);
    }

    public Student updateStudent(Integer id, Student updatedStudent) {
        Student student = getStudentById(id);
        student.setName(updatedStudent.getName());
        student.setAge(updatedStudent.getAge());
        return studentRepository.save(student);
    }
}
