var url = 'http://api.icndb.com/jokes/random';

//var button = document.getElementById('get-joke');
var $button = $('#get-joke').click(function(){
    getJoke();
});

//var paragraph = document.getElementById('joke');
var $paragraph = $('#joke');

/*
button.addEventListener('click', function(){
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
    var response = JSON.parse(xhr.response);
}
*/
function getJoke(){
    $.ajax({
        method: 'GET',
        url: url,
    })
}