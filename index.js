function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json())
      .then((data) => {
        document.body.innerHTML += `<p>ID: ${data.id}</p>`;
      })
      .catch((error) => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  
  submitData("John Doe", "john@example.com");
  