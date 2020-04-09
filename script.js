//help
//by Jared Grasby (40064014)
//This program uses jQuery to generate "help" cards. At every
//click of the help icon, a random card is displayed
//with a question seeking introspection. This is a
//digital/web based version of my previous book idea.
//
// Declare variables
let $card;
let $button;
let $nav;
let $box;
let $slot;
let $question;
let questions = [
  "Are you happy in your routine?",
  "When was the last time you were outside?",
  "When is the last time you have helped someone?",
  "How are you going to save yourself?",
  "Are you making an effort?",
  "Who are you doing this for?",
  "Where is this going?",
  "Are you doing something different?",
  "Do you believe in this?",
  "Are you in control?",
  "Have you taken a step back?",
  "Do you need a break?",
  "When was the last time you’ve reached out to somebody?",
  "Have you asked for help?",
  "What values do you hold?",
  "Do you sleep enough?",
  "When was the last time you’ve eaten some fruit?",
  "Do you need a hug?",
  "What are your boundaries?",
  "What gives you hope?",
  "What brings you joy?",
  "What gives you comfort?",
  "How do you want to help people?",
  "What have you learned from a recent experience?",
  "Have you treated yourself recently?",
  "What influences you?",
  "Do you have any questions?",
  "What’s your favourite story?",
  "How much of a priority is this?",
  "What has the past taught you?",
  "Could a new perspective be beneficial?",
  "What intimidates you?",
  "Do you want dessert?",
  "What is a good thing?",
  "Are you stuck in a cycle?",
  "Is your routine healthy?",
  "Who do you gravitate towards?",
  "What’s your favourite time of day?",
  "What do you take seriously?",
  "Can you laugh at yourself?",
  "Are you procrastinating?",
  "Do you have any advice?",
  "What are you doing this for?",
  "Would you break laws that you think are unfair?"
];

//When the page loads, do setup() function
window.onload = setup();

//setup()
//
//Set all the variables and event handlers
function setup() {

  // Attribute variables from the html
  $card = $("#card");
  $button = $("#nav-button");
  $nav = $("#nav");
  $box = $("#box-container");
  $slot = $("#slot-bottom");
  $question = $("#question");

  // Handle events
  $button.on("click", getCard);
}

//getCard()
//
// Function to pick a random card
function getCard() {
  //Choose a random question
  chooseQuestion();

  //Place nav "help" menu on top-left of the screen
  $nav.animate({
    "margin": "-10",
    "top": "5%"
  },"slow");

  //Get the card out of the slot
  $card.animate({
    "top": "10"
  },"slow", function() {
    //Put the box in background
    $('#box').css("z-index","-1000");
    $('#box').css("display","none");
    $box.css("background-color","white");
    $slot.css("background-color","white");

    //Zoom the card
    $card.animate({
      //put card on top
      "z-index": "1000",
      //Move card and change size
      "top": "-15vh",
      "left": "-10vw",
      "height": "470px",
      "width": "40vw",
      "margin": "0 auto"
    },"slow",function(){
      //Show question on card
      $question.fadeIn();
    })
  });
}

//chooseQuestion()
//
//Get a random question from the array
function chooseQuestion() {
  //Get random number
  i = Math.floor((Math.random() * (questions.length)));
  //Place the string as the paragraph inside the card
  $question.text(questions[i]);
}
