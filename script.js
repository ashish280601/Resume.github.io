// smooth scroll

var newMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(newMenuAnchorTags);
for (i = 0 ; i < newMenuAnchorTags.length; i++){
    newMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        console.log(event);
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        var interval = setInterval(function(){
            var targetSectionCoordinate = targetSection.getBoundingClientRect();
            if (targetSectionCoordinate.top <= 0){
            clearInterval(interval);
            return;
            }
            window.scrollBy(0,50);
            },20);
    });
}
//create an skills bar 
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for (let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){

    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },3);
    }
}

function checkScroll(){

    // have to check wheather skills container is visible
    var coordinates  = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        console.log('Skills Section is Visible');
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}
