
function adduser() {
   var username=document.forms["myform"]["uname"].value;
   if (username=="") {
    alert("Username must be filled out!");
    return false;
   }
   var email=document.forms["myform"]["email"].value;
   if (email=="") {
    alert("Email must be filled out!");
    return false;
   }
   var pwd=document.forms["myform"]["pswd1"].value;
   if (pwd=="") {
    alert("Password must be filled out!");
    return false;
   }
   if (pwd.length<6) {
    alert("Password is too short!");
    return false;
   }
   var repwd = document.forms["myform"]["pswd2"].value;
   if (repwd=="") {
    alert("Re-password must be filled out!");
    return false;
   }
  if (pwd != repwd) {
   alert("Password does not match!");
   return false;
  }
  
var user = {
   un: username,
   email: email,
   pwd1: pwd,
   pwd2: repwd,
};

var data=(JSON.parse(localstorage.getItem("user")));
if(data){
   for(var i=0;i<data.length;i++){
      if(data[i].email==user.email){
         notexistemail=data[i].email;
      }
   }
}

if(notexistemail != user.email || data == null){
   if(user.pwd1==user.pwd2){
      userArray=(JSON.parse(localstorage.getItem("user")));
      userArray.push(user);
      localStorage.setItem("user" , JSON.stringify(userArray));
      alert("Successfully Registered!");
   }
   else{
      alert("Password does not match!");
      return false;
   }
}
else{
   alert("User exist, already registered!");
   return true;
}
}

function validate(){
   var email=document.forms["myform"]["email"].value;
   if (email=="") {
    alert("Email must be filled out!");
    return false;
   }
   var pwd=document.forms["myform"]["pswd1"].value;
   if (pwd=="") {
    alert("Password must be filled out!");
    return false;
   }
   console.log("Enter Email=" , email);
   console.log("Enter Password" , pwd);
   
   var user=(JSON.parse(localStorage.getItem("user")));
   console.log("data",user)

   if(user==null){
      alert("No data in database");
      window.location.replace("signup.html");
      return false;
   }
   else{
      console.log("length", user.length);
      for(var i=0;i<user.length;i++){
         if(user[i].email==email && user[i].pwd1==pwd){
            var validEmail=user[i].email;
            var validPwd=user[i].pwd1;
            var validuname=user[i].un;
            break;
         }
      }
      alert("Valid Email=" , validEmail);
      alert("Valid Password=" , validPwd);
      
      if(validEmail== email && validPwd==pwd1){
         alert("Successfully Logged In!");
         localStorage.setItem("loginUsername",JSON.stringify(validuname));
      }
      else if(validEmail != email) {
         alert("Your email is incorrect");
         return false;
      }
      else if(validPwd != pwd1) {
         alert("Your password is incorrect");
         return false;
      }
   }
}