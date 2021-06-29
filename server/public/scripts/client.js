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
        whoseJokeIn: whoseJokeIn,
        questionIn: questionIn,
        punchlineIn: punchlineIn
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

    $('/jokes', function(response){
       $('#outputDiv')
    })
}