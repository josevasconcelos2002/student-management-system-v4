const API_URL = "http://localhost:8080/students";

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
          <td class="py-3 px-6 text-center space-x-2">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Edit</button>
            <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Delete</button>
            <button class="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs">See more</button>
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

document.addEventListener("DOMContentLoaded", loadStudents);
