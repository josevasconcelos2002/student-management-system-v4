package com.jose.student_management.controller;

import com.jose.student_management.model.Student;
import com.jose.student_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    public Student createStudent(@RequestBody Student student)
    {
        return this.studentService.saveStudent(student);
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id)
    {
        return this.studentService.getStudentById(id);
    }

    @GetMapping
    public List<Student> getAllStudents()
    {
        return this.studentService.getAllStudents();
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Integer id)
    {
        this.studentService.deleteStudent(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Integer id, @RequestBody Student student)
    {
        return this.studentService.updateStudent(id, student);
    }
}