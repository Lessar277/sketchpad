//main div height and width, used to calculate small divs;
var $containerWidth = $('#container').width();
var $containerHeight = $('#container').height();
//define small div to be appended to container
var $smallDiv = $('<div class="smallDiv"></div>');
//ask the user what size his sketchpad will be;
function ask(){
    divCounter = prompt('Select a grid width:');
}


function addDiv() {
    $('#container').append($smallDiv.clone());
}

ask();

//and set the small divs height and width based on user input;
var $smallDivWidth = $containerWidth / divCounter + 'px';
var $smallDivHeight = $containerHeight / divCounter + 'px';
function setDimensions(){
    $('.smallDiv').css("width", $smallDivWidth);
    $('.smallDiv').css("height", $smallDivHeight);
}
// loop to append small divs to html document;
for (i = 1; i <= divCounter * divCounter; i++){
    addDiv();
}

setDimensions();
