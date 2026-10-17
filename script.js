const form = document.getElementById("user-form");
form.addEventListener("submit", function(event){
event.preventDefault();

const name=document.getElementById("name").value;
const age=Number(document.getElementById("age").value);

localStorage.setItem("name",name);
localStorage.setItem("age",age);

displayUser();
});

function displayUser(){
    const name=localStorage.getItem("name");
    const age=Number(localStorage.getItem("age"));

    document.getElementById("greeting").textContent=`Welcome back, ${name}!`;

    const ageInMonths=age * 12;
    document.getElementById("months").textContent=`You are ${ageInMonths} months old.`;

    if (age>=18){
        document.getElementById("access-message").textContent="You are old enough to access adult content.";
    } else{
        document.getElementById("access-message").textContent="You are too young for adult content";
    }
}

if(localStorage.getItem("name")!== null){
    displayUser();
}

const quotes=[
   "Believe in yourself. You can do it! 💪🏽",
    "Every day is a new opportunity to grow. 🌱",
    "Small steps lead to big achievements. ✨",
    "Never give up on your dreams. 🌈",
    "You are capable of amazing things! 🌸" 
];

for (let i = 0; i < 5; i++) {
    document.getElementById("quotes").innerHTML +=
        `<p class="quote">${quotes[i]}</p>`;
}
  