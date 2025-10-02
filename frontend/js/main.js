const API_URL = "http://localhost:8080/students"; // backend Spring Boot v3

async function loadStudents() {
  try {
    const response = await axios.get(API_URL);
    const students = response.data;
    console.log(students);

    const tableBody = document.getElementById("studentsTable");
    tableBody.innerHTML = "";

    students.forEach(student => {
      const row = `
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">${student.id}</td>
          <td class="py-3 px-6 text-left">${student.name}</td>
          <td class="py-3 px-6 text-left">${student.age}</td>
          <td >
            <button>Edit</button>
            <button>Delete</button>
            <button>See more</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

  } catch (error) {
    console.error("Error fetching students:", error);
    alert("Could not fetch students. Check if backend is running.");
  }
}

// Chama automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", loadStudents);
