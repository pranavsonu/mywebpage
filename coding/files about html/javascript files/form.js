document.getElementById("done").onclick = function(){
    let firstName = document.getElementById("firstname").value; 
    let lastName = document.getElementById("lastname").value;
    console.log("hello", firstName, lastName)
    let job = document.getElementById("job").value; 
    console.log("your job is a", job + "!", "That is amazing.")
    let age = document.getElementById("age").value; 
    console.log("your age is", age + "!")
    let allAboutYou = {
        firstname: firstName,
        lastname: lastName,
        Job: job,
        age: age,
        fullname: firstName +" "+ lastName
    }
    console.log(allAboutYou)
    let allAboutMe = {
        firstname: "Pranav",
        lastname: "Sonu",
        Job: 'software engineer',
        age: 8,
        fullname: "Pranav Sonu"
    }
    console.log(allAboutMe)
    const allAboutPerson = `${firstName} has an age of ${age} and your job is ${job}! ${firstName + " " + lastName} you are amazing`;
    console.log(allAboutPerson)
    }

