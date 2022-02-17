// khai bao bien cho cac nut nhan Singin

var signinModal = document.querySelector('.signin');
var signinModalOpen = document.querySelector('.signin-modal');
var iconSigninClose = document.querySelector('.signin-modal-header i');
var openModalSignup = document.querySelector('.signin-modal-footer button')

// khai bao bien cho cac nut nhan Singup
var signupModal = document.querySelector('.signup')
var signupModalOpen = document.querySelector('.signup-modal')
var iconSignupClose = document.querySelector('.signup-modal-header i')
var openModalSignin = document.querySelector('.change-modal')


// ham thay doi trang thai an hien modal singin
function toggleModalSignin(){
    signinModalOpen.classList.toggle('hide') 

}
// ham thay doi trang thai an hien modal singup

function toggleModalSignup(){
    signupModalOpen.classList.toggle('signup-hide')
}



// bat su kien click cho cac nut nhan Signin

signinModal.addEventListener('click',toggleModalSignin)
iconSigninClose.addEventListener('click', toggleModalSignin)
openModalSignup.addEventListener('click', toggleModalSignup)
openModalSignup.addEventListener('click', toggleModalSignin)
signinModalOpen.addEventListener('click',function(e){
    if (e.target == e.currentTarget){
        toggleModalSignin()
    }
})


// bat su kien click cho cac nut nhan Signup
signupModal.addEventListener('click',toggleModalSignup)
iconSignupClose.addEventListener('click', toggleModalSignup)
openModalSignin.addEventListener('click', toggleModalSignin)
openModalSignin.addEventListener('click', toggleModalSignup)
signupModalOpen.addEventListener('click',function(e){
    if (e.target == e.currentTarget){
        toggleModalSignup()
    }
})
