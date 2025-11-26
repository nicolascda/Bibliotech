document.addEventListener('DOMContentLoaded',()=>{
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const toast = document.getElementById('toast');


function showToast(msg){
toast.textContent = msg;
toast.classList.add('show');
setTimeout(()=>toast.classList.remove('show'),3000);
}


form.addEventListener('submit',(e)=>{
e.preventDefault();
emailError.textContent = '';
passError.textContent = '';


const emailVal = email.value.trim();
const passVal = password.value;


let ok = true;
if(!emailVal || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailVal)){
emailError.textContent = 'Informe um email válido';
ok = false;
}
if(!passVal || passVal.length < 6){
passError.textContent = 'Senha deve ter ao menos 6 caracteres';
ok = false;
}


if(!ok) return;



sessionStorage.setItem('biblio_user', JSON.stringify({email:emailVal, loggedAt:Date.now()}));
window.location.href = 'index.html';
showToast('Logado com sucesso! Redirecionando...');


setTimeout(()=>{
window.location.href = 'index.html';
},900);
});



document.getElementById('googleBtn').addEventListener('click',()=>{
showToast('Simulando login com Google...');
setTimeout(()=>{
sessionStorage.setItem('biblio_user', JSON.stringify({email:'google.user@exemplo.com', loggedAt:Date.now()}));
window.location.href = 'google.html';
},900);
}); 
});

