let formBtn = document.querySelector('.submit-btn');

formBtn.addEventListener('click', () =>{
    let fullname = document.queryCommandValue('#name')
    let email = document.queryCommandValue('#email')
    let password = document.queryCommandValue('#password')
    let number = document.queryCommandValue('#number')
    let tac = document.queryCommandValue('#tc')

//form validation
if(fullname.value.length < 3){
    alert('name must be 3 letters long');
}
//  else if(!email.value.length){
//     showFormError('please enter your email');
// } else if(password.value.length < 6){
//     showFormError('password must be 6 characters long');
// } else if(Number(number) || number.value.length < 10){
//     showFormError('Invaild number, please enter a valid one');
// } else if(!tac.checked){
//     showFormError('you must agree to our terms and conditions');
// } else {
//     //submit form
// }
})

