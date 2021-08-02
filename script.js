console.log('Working ...');

window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

const skill_element = document.querySelector('.home-content .t3 .skill');

skill_element.innerHTML = '';

let step1 = 200;
let tmp = 2000;

const arraySkills = {
    skill_1: " Freelancer",
    skill_2: ['', 'D', 'e', 'v', 'e', 'l', 'o', 'p',  'e', 'r']
};

    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,1);
    }, tmp+(1*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,2);
    }, tmp+(2*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,3);
    }, tmp+(3*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,4);
    }, tmp+(4*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,5);
    }, tmp+(5*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,6);
    }, tmp+(6*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,7);
    }, tmp+(7*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,8);
    }, tmp+(8*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,9);
    }, tmp+(9*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,10);
    }, tmp+(10*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,11);
    }, tmp+(11*step1)); 

    /*
    step1 = 7000;


 
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,11);
    }, tmp+(11*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,10);
    }, tmp+(10*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,9);
    }, tmp+(9*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,8);
    }, tmp+(8*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,7);
    }, tmp+(7*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,6);
    }, tmp+(6*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,5);
    }, tmp+(5*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,4);
    }, tmp+(4*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,3);
    }, tmp+(3*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,2);
    }, tmp+(2*step1)); 
    
    setTimeout(function(){
        skill_element.innerHTML = arraySkills.skill_1.slice(0,1);
    }, tmp+(1*step1)); 
    */


