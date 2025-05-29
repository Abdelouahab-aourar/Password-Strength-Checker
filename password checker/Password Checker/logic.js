const passwordInput = document.getElementById("inputPass");
const eye = document.getElementById("eye_icon")
document.getElementById('eye_icon').addEventListener('click', toggleP);
document.getElementById('copy_icon').addEventListener('click', copyPassword);
const text = document.getElementById('text')
const textColor = document.getElementById('textColor')
function copyPassword() {
  navigator.clipboard.writeText(passwordInput.value);
}
function toggleP(){
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eye.src = "/figures/eye_open.svg";
  } else {
    passwordInput.type = "password";
    eye.src = "/figures/eye_closed.svg";
  }
}
DetectorImg=document.getElementById('barDetector')
passwordInput.addEventListener('input', () => {
  isdigit=/[0-9]/.test(passwordInput.value);
  islower=/[a-z]/.test(passwordInput.value);
  isupper=/[A-Z]/.test(passwordInput.value);
  islengthy=passwordInput.value.length >= 12;
  isspecial=/[^a-zA-Z0-9]/.test(passwordInput.value);
  isgood=passwordInput.value.length >= 10;

  if (passwordInput.value === "") {
        text.innerHTML = 'Check Your Password <span id="textColor" style="color:#FF0004;">Now</span>';
        DetectorImg.src="/figures/empty.svg"
  }
  else {
        text.innerHTML = 'Your Password is <span id="textColor" style="color:#FF0004;">Weak</span>';
        DetectorImg.src="/figures/red.svg"
  }
  if(isdigit && islengthy && isupper && islower &&isspecial){
    DetectorImg.src="/figures/green.svg"
    text.innerHTML = 'Your Password is <span id="textColor" style="color:#00FF48;">So Strong</span>';
  }
  else if( isgood && isupper && (islower||isdigit) || isgood && islower && (isupper||isdigit) || (islengthy && (islower || isupper || isspecial))){
    DetectorImg.src="/figures/yellow.svg"
    text.innerHTML = 'Your Password is <span id="textColor" style="color:#FFE000;">Good</span>';
  }
  if(isdigit){
    digit=document.getElementById('digit');
    digit.src="/figures/valid.svg";}
  else{
    digit.src="/figures/invalid.svg";
  }
  if(islower){
    lower=document.getElementById('lower');
    lower.src="/figures/valid.svg";}
  else{
    lower.src="/figures/invalid.svg";
  }
  if(isupper){
    upper=document.getElementById('upper');
    upper.src="/figures/valid.svg";}
  else{
    upper.src="/figures/invalid.svg";
  }
  if(islengthy){
    lengthy=document.getElementById('lengthy');
    lengthy.src="/figures/valid.svg";}
  else{
    lengthy.src="/figures/invalid.svg";
  }
  if(isspecial){
    special=document.getElementById('special');
    special.src="/figures/valid.svg";}
  else{
    special.src="/figures/invalid.svg";
  }
});