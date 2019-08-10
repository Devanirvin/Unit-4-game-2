$(document).ready(function() {
    //create variables to count the crystals
    var crystal1Counter = 0;
    var crystal2Counter = 0;
    var crystal3Counter = 0;
    var crystal4Counter = 0;

    //target number variable
    var targetNumber = 0;

    //total score variable
    var totalScore = 0

    //variables for wins and losses
    var wins = 0;
    var losses = 0;

    //variable for random number
    var randomNumber = 0;

    //create function to play game
   

    //generate function for random number
    function reset(){
        totalScore = 0;
        $("#total-score").text("Total Score: " + totalScore);
        $('#total-score').html(totalScore);
        console.log(totalScore)
  
        //target number from 19 to 120
    targetNumber = 19 + Math.floor(Math.random()*101);
    $('#target-number').html(targetNumber);
    //console.log(targetNumber)
 };

      //create functionn to display and generate random number
      function randomNumber(){
      
		randomNumber =  Math.floor(Math.random() * 119) + 1;
        $("#Random-number").html(randomNumber);
        //console.log("randomNumber: " + randNumber);
        
    }
    //function for win 
    function wins() {
            alert("You win! Play again!");
            wins = wins + 1;
            $("#wins").text("Wins: " + wins);
            reset();
            //console.log(wins)
            randomNumber()
          }

    //function for losses
    function losses() {
            alert("You Lost Ahh Haa! Play again!");
            losses = losses + 1;
            $("#losses").text("Losses: " + losses);
            reset();
            //console.log(losses)
            randomNumber()
          }
    

    //create button event for crystals 
    $('crystal-1').click(function() {
    totalScore = totalScore + crystal1Counter;
    crystal1Counter =  Math.floor(Math.random() * 12) + 1;
    if (totalScore = totalScore + crystal1Counter)
    wins()

    else if (totalScore > targetNumber) {
    losses();
  }
    reset()
        })

    $('crystal-2').click(function() {
    totalScore = totalScore + crystal2Counter;
    crystal2Counter =  Math.floor(Math.random() * 12) + 1;
    if (totalScore = totalScore + crystal2Counter)
    wins()

    else if (totalScore > targetNumber) {
        losses();
      }
    reset()
        })


    $('crystal-3').click(function() {
    totalScore = totalScore + crystal3Counter;
    crystal3Counter =  Math.floor(Math.random() * 12) + 1;
    if (totalScore = totalScore + crystal3Counter)
    wins()

    else if (totalScore > targetNumber) {
        losses();
      }
    reset()
    })

    $('crystal-4').click(function() {
    totalScore = totalScore + crystal4Counter;
    crystal4Counter =  Math.floor(Math.random() * 12) + 1;
    if (totalScore = totalScore + crystal4Counter)
    wins()

    else if (totalScore > targetNumber) {
        losses();
      }
    reset()

    })

});
