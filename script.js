const pro = document.getElementById('pro');
const basic = document.getElementById('basic');
const enterprise = document.getElementById('enterprise');

const email = document.getElementById('email');
let planSelected = 'pro';


function activateButton(id){
    pro.classList.remove('active');
    basic.classList.remove('active');
    enterprise.classList.remove('active');

    document.getElementById(id).classList.add('active');
    planSelected = id;
}

function send(){
    const emailValue = btoa(email.value);
    const queryString = `?email=${emailValue}&plan=${planSelected}`;
    
    window.location = "https://happybeansdesign.com/payment" + queryString;
}