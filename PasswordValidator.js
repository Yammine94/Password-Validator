<script type= "text/javascript">
function isPasswordValid(input){
  if(!hasUppercase(input)){
    console.log("Password needs a capital letter.");
  }
  if(!hasLowercase(input)){
    console.log("Password needs a lower case letter.");
  }
  if(!passwordLength(input)){
    console.log("Password must contain a minimum of 8 characters.");
  }
  if(hasSpecialCharacters(input)){
    console.log("Password cannot contain any special characters");
  }
}

function hasUppercase(input){

  for(var i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase()){
      return true;
    }
  }
}

function hasLowercase(input){
  for(var j = 0; j < input.length; j++){
    if(input[j] === input[j].toLowerCase()){
      return true;
    }
  }
}

function passwordLength(input){
  if(input.length >= 8){
    return true;
  }
}

function hasSpecialCharacters(input){
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+'];
 for (var k = 0; k < input.length; k++) {
    for (var l = 0; l < specialCharacters.length; l++) {
        if (input[k] === specialCharacters[l]) {
            return true;
			}
    }
 	}
}

isPasswordValid(prompt("Enter your password:"));

<script>
