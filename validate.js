function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10 && !isNaN(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  let num = Number(candi);

  if (!isNaN(num) && num >= 1 && num <= 10) {
    return true;
  } else {
    return false;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID! (It must 0-9 and exactly 10 digits)");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No.! (It must be a number between 1 and 10)");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}