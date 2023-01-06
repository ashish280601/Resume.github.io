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

