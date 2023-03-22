// const loginForm = document.querySelector('#login-form');
// const nameInput = loginForm.querySelector("input[type='text']");
// const greeting = document.getElementById("greeting");

const KEY='name';
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput=document.querySelector('#login-form input');

const savedUsername=localStorage.getItem(KEY);
if(savedUsername===null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', loginSubmit);
}else{
  printGreeting(savedUsername);
}
function printGreeting(username){
  greeting.innerHTML=`안녕하세요. ${username}`;
  greeting.classList.remove('hidden');
}
function loginSubmit(event){
  // event.preventDefault();
  // loginForm.classList.add('hidden');
  const username=loginInput.value;
  localStorage.setItem(KEY,username);
  // printGreeting(username);
}


// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault(); 

//   const name = nameInput.value.trim();
//   greeting.innerText = `안녕하세요, ${name}님!`;

//   loginForm.classList.add('hidden');
//   greeting.classList.remove("hidden");
// });