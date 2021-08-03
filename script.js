console.log('Working ...');

window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

const skill_element = document.querySelector('.home-content .t3 .skill');

skill_element.innerHTML = '';


const arraySkills = {
    skill_1: " Freelancer",
    skill_2: ['', 'D', 'e', 'v', 'e', 'l', 'o', 'p',  'e', 'r']
};


setTimeout(function(){
    animationTyping();
}, 10)

setInterval(function(){
    animationTyping();
}, 4450);




function animationTyping() {
    let tmp = 2000;
    let step1 = 100;

    // typing
    setTimeout(function(){ // 2200
        skill_element.innerHTML = arraySkills.skill_1.slice(0,1);
    }, tmp+(1*step1));
    
    setTimeout(function(){ // 2400
        skill_element.innerHTML = arraySkills.skill_1.slice(0,2);
    }, tmp+(2*step1)); 
    
    setTimeout(function(){ // 2600
        skill_element.innerHTML = arraySkills.skill_1.slice(0,3);
    }, tmp+(3*step1)); 
    
    setTimeout(function(){ // 2800
        skill_element.innerHTML = arraySkills.skill_1.slice(0,4);
    }, tmp+(4*step1)); 
    
    setTimeout(function(){ // 3000
        skill_element.innerHTML = arraySkills.skill_1.slice(0,5);
    }, tmp+(5*step1)); 
    
    setTimeout(function(){ // 3200
        skill_element.innerHTML = arraySkills.skill_1.slice(0,6);
    }, tmp+(6*step1)); 
    
    setTimeout(function(){ // 3400
        skill_element.innerHTML = arraySkills.skill_1.slice(0,7);
    }, tmp+(7*step1)); 
    
    setTimeout(function(){ // 3600
        skill_element.innerHTML = arraySkills.skill_1.slice(0,8);
    }, tmp+(8*step1)); 
    
    setTimeout(function(){ // 3800
        skill_element.innerHTML = arraySkills.skill_1.slice(0,9);
    }, tmp+(9*step1)); 
    
    setTimeout(function(){ // 4000
        skill_element.innerHTML = arraySkills.skill_1.slice(0,10);
    }, tmp+(10*step1)); 
    
    setTimeout(function(){ // 4200
        skill_element.innerHTML = arraySkills.skill_1.slice(0,11);
    }, tmp+(11*step1)); 


    // unstyping
    tmp = 3300;
    setTimeout(function(){ // 6200
        skill_element.innerHTML = arraySkills.skill_1.slice(0,11);
    }, tmp+(1*step1)); 
    
    setTimeout(function(){ // 6400
        skill_element.innerHTML = arraySkills.skill_1.slice(0,10);
    }, tmp+(2*step1)); 
    
    setTimeout(function(){ // 6600
        skill_element.innerHTML = arraySkills.skill_1.slice(0,9);
    }, tmp+(3*step1)); 
    
    setTimeout(function(){ // 6800
        skill_element.innerHTML = arraySkills.skill_1.slice(0,8);
    }, tmp+(4*step1)); 
    
    setTimeout(function(){ // 7000
        skill_element.innerHTML = arraySkills.skill_1.slice(0,7);
    }, tmp+(5*step1)); 
    
    setTimeout(function(){ // 7200
        skill_element.innerHTML = arraySkills.skill_1.slice(0,6);
    }, tmp+(6*step1)); 
    
    setTimeout(function(){ // 7400
        skill_element.innerHTML = arraySkills.skill_1.slice(0,5);
    }, tmp+(7*step1)); 
    
    setTimeout(function(){ // 7600
        skill_element.innerHTML = arraySkills.skill_1.slice(0,4);
    }, tmp+(8*step1)); 
    
    setTimeout(function(){ // 7800
        skill_element.innerHTML = arraySkills.skill_1.slice(0,3);
    }, tmp+(9*step1)); 
    
    setTimeout(function(){ // 8000
        skill_element.innerHTML = arraySkills.skill_1.slice(0,2);
    }, tmp+(10*step1)); 
    
    setTimeout(function(){ // 8200
        skill_element.innerHTML = arraySkills.skill_1.slice(0,1);
    }, tmp+(11*step1)); 

    console.log('... '+arraySkills.skill_1);
    if(arraySkills.skill_1 === ' Freelancer'){
        arraySkills.skill_1 = ' Developer ';
    } else {
        arraySkills.skill_1 = ' Freelancer';
    }
    
    
}