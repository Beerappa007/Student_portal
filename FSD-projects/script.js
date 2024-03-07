const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});yId("l1").value
  

  function show(){
    let id=document.getElementById("l1").value
    let pass=document.getElementById("ps1").value
    let temp_pass=localStorage.getItem(id);
    if(id!="" && pass!="")
    {
      if(temp_pass==pass){
        location.href="teacher_page.html";
        alert("Welcome....");
      }
      else{
        document.getElementById("msg").innerHTML="Incorrect credentials";
      }
    }
    else{
      document.getElementById("msg").innerHTML="All fields are mandatory";
    }
  }
function register_t()
{
    let tid=document.getElementById("tid").value;
    let pass1=document.getElementById("pass1").value;
    let pass2=document.getElementById("pass2").value; 
    if(tid!="" && pass1!="" && pass2!="")
    {
      if(pass1!=pass2)
      {
        document.getElementById("msg2").innerHTML="pass1 is not matching with pass2";
      }
      else{
        let temp_pass=localStorage.getItem(tid);
        if(temp_pass)
        {
          alert("already teacher is exist with this Id")
        }
        else{
          localStorage.setItem(tid,pass1)
          alert("Registerd successfully")
        }
    
      }
    }
    else{
      document.getElementById("msg2").innerHTML="All fields are mandatory";
    }

}
