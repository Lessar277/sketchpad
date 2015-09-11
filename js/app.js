//main div height and width, used to calculate small divs;
var $containerWidth = $('#container').width();
var $containerHeight = $('#container').height();

//function to generate random rgb color
function randomRGB() {
    var randNum = function () {return Math.floor(Math.random() * 256);};
    return 'rgb(' + randNum() + ', ' + randNum() + ', ' + randNum() + ')';
}
//generate a default 16x16 grid
$(document).ready(function(){
    var divCounter = 16;
    var $smallDiv = $('<div class="smallDiv"></div>');
    var $smallDivWidth = $containerWidth / divCounter + 'px';
    var $smallDivHeight = $containerHeight / divCounter + 'px';
    //add squares to grid
    for (i = 1; i <= divCounter * divCounter; i++){
        $('#container').append($smallDiv.clone());
    }
    $('.smallDiv').css("width", $smallDivWidth);
    $('.smallDiv').css("height", $smallDivHeight);
    $('.smallDiv').css('opacity', 1);
       $('.smallDiv').mouseenter(function(){
            $(this).css('background-color', 'white');
        });
        $('.smallDiv').click(function(){
            $(this).css('background-color', 'black');
        });

});
//function to show the settings menu
function showSettings() {
    $('#settings').slideToggle();
    $('#show-settings').toggleClass('pressed');
}

//Menu up and Show Settings button as unpressed after user begins drawing
function menuUp() {
    $('#settings').slideUp("slow");
    $('#show-settings').removeClass('pressed');
}

$('#container').mouseenter(function(){
    menuUp();
});

//ask the user what size his sketchpad will be and set dimension vars
//appropriately;
//this function will set the grid values as per the user's input
function gridSettings(){
    //clear contents of main container div;
    $('#container').empty();
    //ask user for width of grid and check to see it's a valid number smaller than 100;
    var divCounter = prompt('Select a grid width (or leave blank for default(16x16):');
        if(isNaN(divCounter)){
            divCounter = prompt('Oops. That is not a number. Please enter the desired grid width again:');
        } else if(divCounter>100) {
            divCounter = prompt('That number is too large and it will murder your browser in your sleep. Choose again:');
        } else if(divCounter === '') {
            divCounter = 16;
        }
    //declare DOM object to be inserted and variables to make width relative to parent container;
    var $smallDiv = $('<div class="smallDiv"></div>');
    var $smallDivWidth = $containerWidth / divCounter + 'px';
    var $smallDivHeight = $containerHeight / divCounter + 'px';
    //add squares to grid based on user input and set its dimensions according to the above formula;
    for (i = 1; i <= divCounter * divCounter; i++){
        $('#container').append($smallDiv.clone());
    }
    $('.smallDiv').css("width", $smallDivWidth);
    $('.smallDiv').css("height", $smallDivHeight);
    $('.smallDiv').css('opacity', 1);
}

//This prompts and loads the grid with a default black mouseover;
function setGridDefault() {
    $(gridSettings()).ready(function(){
        $('.smallDiv').mouseenter(function(){
            $(this).css('background-color', 'white');
        });
        $('.smallDiv').click(function(){
            $(this).css('background-color', 'black');
        });
    });
}
//Mouseover will have different random colors
function setGridRandom() {
    $(gridSettings()).ready(function(){
        $('.smallDiv').mouseenter(function(){
            $(this).css('background-color', randomRGB());
        });
        $('.smallDiv').click(function(){
            $(this).css('background-color', 'black');
        });
    });
}
//Function to slowly decreace opacity of moused over element;

function setGridGradient() {
    $(gridSettings()).ready(function(){
        // $('.smallDiv').css('opacity', 1);
        $('.smallDiv').css('background-color', 'black');
        $('.smallDiv').mouseenter(function(){
            var opacity = $(this).css('opacity');
            if (opacity > 0.1) {
                $(this).css('opacity', opacity - 0.1);
            } else {
                $(this).css('opacity', 0);
            }
        });
    });
}

//function to generate a trail of white
function setGridTrail() {
    $(gridSettings()).ready(function(){
        $('.smallDiv').css('background-color', 'black');
        // $('.smallDiv').css('opacity', 1);
        $('.smallDiv').mouseenter(function(){
            $(this).fadeTo(300, 0.1);
        });
        $('.smallDiv').mouseleave(function(){
            $(this).fadeTo(800, 1);
        });
    });
}


//function to clean the grid without resetting it
function cleanGrid () {
    $('.smallDiv').css('background-color', 'black');
    $('.smallDiv').css('opacity', 1); 
}
