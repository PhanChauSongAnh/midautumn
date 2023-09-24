let register_form = document.querySelector(".form")
//value
var emailist = []
var passlist = []
var names = document.querySelector("#name")
var email = document.querySelector("#email")
// var dof = document.querySelector("date").value
var pass = document.querySelector("#pass")
var re_pass = document.querySelector("#re-pass")
register_form.addEventListener('submit',function(e){
    e.preventDefault()
    let isEmptyError = checkEmptyError([names, email, pass, re_pass])
    let isEmailError = CheckEmailError(email)
    let isUsernamelengthError = checkLengthError(names,8,14)
    let isPasswordlengthError = checkLengthError(pass,8,14)
    let isCheckPassword = checkPassWord(pass,re_pass)
    if (!(isEmptyError || isEmailError || isUsernamelengthError || isCheckPassword || isPasswordlengthError)){
        window.location.href = 'login.html'       
    }
//lay data tu local 
let user_email_list = JSON.parse(localStorage.getItem("user_email_list")) || []
let user_password_list = JSON.parse(localStorage.getItem("user_password_list")) || []
//
}) 
var names = document.querySelector("#name")
function showError(input, message){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}
function showSuccess(input,){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ""
}
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true;
            showError(input,"Please fill")
        }else{
            showSuccess(input)

        }
        
    });
    return isEmptyError
}

function CheckEmailError(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
        emailist.push(input.value)
        // console.log(emailist)
        localStorage.setItem("user_email_list",JSON.stringify(emailist))
    }else{
        showError(input,'Email Invalid')
    }
    return isEmailError
}
function checkLengthError(input,min,max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input,`At Least ${min} characters`)
        return true
    }
    if(input.value.length > max){
        showError(input,`At Max ${max} characters`)
        return true
    }
    return false 
}
function checkPassWord(passwordInput,cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput,'Password is not match')
        return true
    }else{
        passlist.push(cfPasswordInput.value)
        localStorage.setItem("user_password_list",JSON.stringify(passlist))
    }
    return false
}
