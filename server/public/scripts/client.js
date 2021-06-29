console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
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
            // refresh jokes (removing the call for appendNewJokes from line 36)
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
            //loop the response array. This is where we can append.
            for (let i = 0; i < response.jokes.length; i++) {
                let newLi = $('<li>').text(response.jokes[i]);
                $('#jokeCollection').append(newLi);
                console.log('What is the newLi doing?',response);
                //Why wont this log show up in console? 
            }
        }) 
        .catch(function (err){
            console.log('You got an error',err);
        });
        console.log('Here is the response from the server',response);
        //response coming back as Created. Sounds like it's getting a 201 
        //status but that's in the app.post and not the app.get.
}
//removing appendNewJokes from line 36 resolved the error message but still 
//not appending to DOM.