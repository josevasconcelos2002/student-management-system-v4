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
            <button data-id="${student.id}" class="edit-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Edit</button>
            <button data-id="${student.id}" class="delete-btn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Delete</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

    attachDeleteListeners();
    attachEditListeners();

  } catch (error) {
    console.error("Error fetching students:", error);
    alert("Could not fetch students. Check if backend is running.");
  }
}

function attachDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', async (e) =>{
            const studentId = e.target.dataset.id;
            console.log("Delete student: " + studentId);
            const URL = `${API_URL}/${studentId}`;
            await axios.delete(URL);

            loadStudents();            
        });
    });
}

function attachEditListeners() {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(btn => {
        btn.addEventListener('click', async (e) =>{
            const studentId = e.target.dataset.id;
            console.log("getStudentById student: " + studentId);
            window.open(`student.html?id=${studentId}`, "_blank");

                       
        });
    });
}

document.addEventListener("DOMContentLoaded", loadStudents);