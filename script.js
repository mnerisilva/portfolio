console.log('Working ...');

const skill_element = document.querySelector('.home-content .t3 .skill');

skill_element.innerHTML = '';

let step = 200;

const arraySkills = {
    skill_1: ['', 'F', 'r', 'e', 'e', 'l', 'a',  'n', 'c', 'e', 'r'],
    skill_2: ['', 'D', 'e', 'v', 'e', 'l', 'o', 'p',  'e', 'r']
};

    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[1];
    }, 200); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[2];
    }, 400); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[3];
    }, 600); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[4];
    }, 800); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[5];
    }, 1000); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[6];
    }, 1200); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[7];
    }, 1400); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[8];
    }, 1600); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[9];
    }, 1800); 
    
    setTimeout(function(){
        skill_element.innerHTML += arraySkills.skill_1[10];
    }, 2000); 



    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[10];
    }, 4000); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[9];
    }, 4200); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[8];
    }, 4400); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[7];
    }, 4600); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[6];
    }, 4800); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[5];
    }, 5000); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[4];
    }, 5200); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[3];
    }, 5400); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[2];
    }, 5600); 
    
    setTimeout(function(){
        skill_element.innerHTML -= arraySkills.skill_1[1];
    }, 5800); 


