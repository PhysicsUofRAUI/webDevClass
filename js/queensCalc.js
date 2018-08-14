/*
Calculates the points contributed by the
queens of spades that the user has collected
*/
function calculateSpades(num)
{
  return 100 * num;
}

/*
Calculates the points contributed by the
twos that the user has collected
*/
function calculateTwos(num)
{
  return 20 * num;
}

/*
Calculates the points contributed by the
5 point cards that the user has collected
*/
function calculate5Points(num1, num2, num3, num4, num5, num6, num7)
{
  var total = num1 + num2 + num3 + num4 + num5 + num6 + num7;

  return 5 * total;
}

/*
Calculates the points contributed by the
jokers that the user has collected
*/
function calculateJokers(num)
{
  return 50 * num;
}

/*
Calculates the points contributed by the
aces that the user has collected
*/
function calculateAces(num)
{
  return 15 * num;
}

/*
Calculates the points contributed by the
10 point cards that the user has collected
*/
function calculate10Points(num1, num2, num3, num4)
{
  var total = num1 + num2 + num3 + num4;

  return 10 * total;
}

/*
This function calculates all the points the user collected
during their hand
*/
function calculateScoreOfHand(jokers, twos, threes, fours, fives, sixs,
    sevens, eights, nines, tens, jacks, regQueens, spadeQueens, kings, aces)
{
  var total = 0;
  total = total + calculateAces(aces);
  total = total + calculateTwos(twos);
  total = total + calculateJokers(jokers);
  total = total + calculateSpades(spadeQueens);
  total = total + calculate5Points(threes, fours, fives, sixs,
    sevens, eights, nines);
  total = total + calculate10Points(tens, jacks, regQueens, kings);

  return total;
}

function updateScore()
{
  /*
  Following code is from stack overflow
  https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery

  This guy wrote it
  https://stackoverflow.com/users/147949/clox
  */
  var formElements=document.getElementById("frm1").elements;
  var postData={};
  for (var i=0; i<formElements.length; i++)
    if (formElements[i].type!="button")//we dont want to include the submit-buttom
    {
        postData[formElements[i].name]=formElements[i].value;
    }

  /*
  End of the stackoverflow code
  */


  //gets the score of the current hand
  var score = calculateScoreOfHand(Number(postData["jokers"]), Number(postData["twos"]), Number(postData["threes"]),
      Number(postData["fours"]), Number(postData["fives"]), Number(postData["sixs"]), Number(postData["sevens"]),
      Number(postData["eights"]), Number(postData["nines"]), Number(postData["tens"]), Number(postData["jacks"]),
      Number(postData["regQueens"]), Number(postData["spadeQueens"]), Number(postData["kings"]), Number(postData["aces"]));

  //resets the form
  for (var i=0; i<formElements.length; i++)
    if (formElements[i].type!="button")//we dont want to include the submit-buttom
    {
      formElements[i].value = 0;
    }

  /*
  This if else section checks what player needs its score updated
  and then updates it.
  */
  if (postData["playerNumber"] == 1)
  {
    var currScore = document.getElementById('playerOne').innerHTML;
    document.getElementById('playerOne').innerHTML = score + Number(currScore);
  } else if (postData["playerNumber"] == 2)
  {
    var currScore = document.getElementById('playerTwo').innerHTML;
    document.getElementById('playerTwo').innerHTML = score + Number(currScore);
  } else if (postData["playerNumber"] == 3)
  {
    var currScore = document.getElementById('playerThree').innerHTML;
    document.getElementById('playerThree').innerHTML = score + Number(currScore);
  } else if (postData["playerNumber"] == 4)
  {
    var currScore = document.getElementById('playerFour').innerHTML;
    document.getElementById('playerFour').innerHTML = score + Number(currScore);
  } else if (postData["playerNumber"] == 5)
  {
    var currScore = document.getElementById('playerFive').innerHTML;
    document.getElementById('playerFive').innerHTML = score + Number(curreScore);
  }
}


function updateScoreWithInputedScore()
{
  /*
  Following code is from stack overflow
  https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery

  This guy wrote it
  https://stackoverflow.com/users/147949/clox
  */
  var formElements=document.getElementById("frm2").elements;
  var postData={};
  for (var i=0; i<formElements.length; i++)
    if (formElements[i].type!="button")//we dont want to include the submit-buttom
    {
        postData[formElements[i].name]=formElements[i].value;
    }

  /*
  End of the stackoverflow code
  */
  //sets the score variable to the value entered
  score = postData['points'];

  //updates the selected score
  if (postData["player"] == 1)
  {
    var currScore = document.getElementById('playerOne').innerHTML;
    document.getElementById('playerOne').innerHTML = Number(score) + Number(currScore);
  } else if (postData["player"] == 2)
  {
    var currScore = document.getElementById('playerTwo').innerHTML;
    document.getElementById('playerTwo').innerHTML = Number(score) + Number(currScore);
  } else if (postData["player"] == 3)
  {
    var currScore = document.getElementById('playerThree').innerHTML;
    document.getElementById('playerThree').innerHTML = Number(score) + Number(currScore);
  } else if (postData["player"] == 4)
  {
    var currScore = document.getElementById('playerFour').innerHTML;
    document.getElementById('playerFour').innerHTML = Number(score) + Number(currScore);
  } else if (postData["player"] == 5)
  {
    var currScore = document.getElementById('playerFive').innerHTML;
    document.getElementById('playerFive').innerHTML = Number(score) + Number(curreScore);
  }

  //resets the form
  for (var i=0; i<formElements.length; i++)
    if (formElements[i].type!="button")//we dont want to include the submit-buttom
    {
      formElements[i].value = 0;
    }
}

$(document).ready(function () {

  var player = $("#player_win")[0];

  $("button").click(function() {
    player.play();
  });
});
