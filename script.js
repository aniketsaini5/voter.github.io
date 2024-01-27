function checkVoterEligibility() {  
    var age = document.getElementById('ageInput').value;

    if(age === ""){ 
         alert("Please Enter Your Age")
    }
    else if (age < 18) {
        document.getElementById('result').innerText = "❌ You are not eligible to vote yet.";
        document.getElementById('result').style.color = "red"; 
    } else if (age < 105) {
        document.getElementById('result').innerText = " ✅ Congratulations! You are eligible to vote.";
        document.getElementById('result').style.color = "lightgreen"; 
    } else {
        alert("Please enter a valid age");
    }
}
function validate(){
    var age =  document.getElementById('ageInput').value;

    if(age.includes(".") ){
        document.getElementById('agevalidation').innerText = "Please enter a valid age without decimals.";
        document.getElementById('agevalidation').style.color = "red";
        document.getElementById('agevalidation').style.fontSize = "small"

    }   
    else if(!(age.includes(".") )){
        document.getElementById('agevalidation').innerText = " ";
    }
}
