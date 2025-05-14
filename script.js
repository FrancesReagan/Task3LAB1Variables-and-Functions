//this is the function to check if they are eligible//
function checkEligibility(){
  //get the values from the form//
  let age = document.getElementById("ageInput").value;
  let isEmployed = document.getElementById("employedCheckbox").checked;

  //check the conditions are eligible or not//
  if (age>18&&isEmployed) {
    document.getElementById("result").innerHTML ="YOU ARE IN!! congrats on being eligible for the program!";
  }else if (age>18&&!isEmployed){
    document.getElementById("result".innerHTML = "You have conditional eligibility for the program."; {
      else {
        document.getElementById("result").innerHTML = "Sorry, you are not eligible for the program.";
      }
    }
  }
}