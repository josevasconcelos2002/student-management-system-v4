const API_URL = "http://localhost:8080/students";

    const form = document.getElementById('studentForm');

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