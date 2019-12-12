const pro = document.getElementById('pro');
const basic = document.getElementById('basic');
const enterprise = document.getElementById('enterprise');

function activateButton(id){
    pro.classList.remove('active');
    basic.classList.remove('active');
    enterprise.classList.remove('active');

    console.log(id);
    document.getElementById(id).classList.add('active');
}