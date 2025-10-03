const API_URL = "http://localhost:8080/students";

    const form = document.getElementById('studentForm');
    const ageInput = document.getElementById('age');

    ageInput.addEventListener('change', (e) => {
      const age = parseInt(e.target.value, 10);

      if(isNaN(age) || age < 0){
        console.log("Invalid age: " + age);
        e.target.value = "";
        alert("Insert valid age!");
      } else if(age > 120) {
        console.log("Invalid age: " + age);
        e.target.value = "";
        alert("Insert valid age!");
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await axios.post(API_URL, data);
        alert('Student created successfully!');
        console.log(response.data);

        window.location.href = './index.html';
      } catch (error) {
        console.error(error);
        alert('Error creating student');
      }
    });