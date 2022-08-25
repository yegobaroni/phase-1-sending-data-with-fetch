// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });



function submitData (name, email) {
    fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
        "Conternt-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(name,email),
})
.then(res => res.json())
.then(data => console.log(data))

.catch(error => console.log(error.message))
}