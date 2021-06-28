console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', postJoke)
}

let whoseJokeIn = '';
let questionIn = '';
let punchlineIn = ''

function postJoke () {
    let myData = {
        "whoseJokeIn": whoseJokeIn,
        "questionIn": questionIn,
        "punchlineIn": punchlineIn
    }

    console.log('Posting Joke');
    whoseJokeIn = $('#whoseJokeIn').val();
    questionIn = $('#questionIn').val();
    punchlineIn = $('#punchlineIn').val();

    $.ajax({
        method: 'post',
        url: '/newjoke',
        data: myData
    })
    console.log(myData);
};