console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', postJoke)
}

    let whoseJokeIn = [];
    let questionIn = [];
    let punchlineIn = [];

function postJoke () {

    whoseJokeIn = $('#whoseJokeIn').val();
    questionIn = $('#questionIn').val();
    punchlineIn = $('#punchlineIn').val();

    // package up inputs as an object
    let myData = {        
        whoseJoke: whoseJokeIn,
        jokeQuestion: questionIn,
        punchLine: punchlineIn
    }
    console.log('Posting Joke',myData);
    // make POST request and handle response
        $.ajax({
            method: 'post',
            url: '/newjoke',
            data: myData
        }) // end .ajax
        .then( function(response){
            console.log(response);
            // refresh jokes
            appendNewJokes(response)
        }) // end .then
        .catch(function (err){
            console.log('You got an error',err);
        }) // end .catch
    }

function appendNewJokes (response){

     $.ajax({
            method: 'get',
            url: '/newjoke',
        }) // end .ajax
        .then( function(response){
            console.log('Here is the response from the server',response);
            //loop the response array. This is where we can append.
            for (let i = 0; i < response.jokes.length; i++) {
                let newLi = $('<li>').text(response.jokes[i]);
                $('#jokeCollection').append(newLi)
            }
        }) 
        .catch(function (err){
            console.log('You got an error',err);
        });
}