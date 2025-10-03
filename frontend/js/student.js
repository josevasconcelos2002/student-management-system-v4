const API_URL = "http://localhost:8080/students";
const form = document.querySelector("form");

async function getStudentData() {
    const params = new URLSearchParams(window.location.search);
    const studentId = params.get("id");
    if (!studentId) {
        alert("No student ID provided in URL.");
        return;
    }

    try {
        const response = await axios.get(`${API_URL}/${studentId}`);
        const student = response.data;

        document.getElementById("studentId").value = student.id;
        document.getElementById("studentName").value = student.name;
        document.getElementById("studentAge").value = student.age;

    } catch (error) {
        console.error("Error fetching student:", error);
        alert("Could not fetch student data.");
    }
}

document.addEventListener("DOMContentLoaded", getStudentData);


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const studentId = document.getElementById("studentId").value;
    const updatedStudent = {
        id: studentId,
        name: document.getElementById("studentName").value,
        age: document.getElementById("studentAge").value
    };

    try {
        const response = await axios.put(`${API_URL}/${studentId}`, updatedStudent);
        alert('Student updated successfully!');
        console.log(response.data);

        window.location.href = './index.html';
    } catch (error) {
        console.error(error);
        alert('Error updating student');
    }
});