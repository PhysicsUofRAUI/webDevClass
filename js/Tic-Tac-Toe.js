/*
This object is created to keep track of the state
of the board

gridBools: is meant to just say whether or not the
  square is played or not

gridPlays: Keeps track of who has played the grid square
*/
var grid = {
            gridBools:[false, false, false
                      ,false, false, false
                      ,false, false, false],
            gridPlays:["", "", ""
                      ,"", "", ""
                      ,"", "", ""],

            gridNames:["grid-one", "grid-two", "grid-three"
                      ,"grid-four", "grid-five", "grid-six"
                      ,"grid-seven", "grid-eight", "grid-nine"]
            }
var i;


function playEndSound(playerWin)
{
  var player = $("#player_win")[0];
  var computer = $("#computer_win")[0];
  if(playerWin)
  {
    player.play();
  }
  else {
    computer.play();
  }
}

/*
This jQuery code is used to change all the html on the game's page

It is also used to put in motion the game's logic and to keep track of the

state of the board
*/
$(document).ready(function () {
    function computerPlay(gridSquareNum)
    {
      if (grid.gridBools[gridSquareNum - 1] == false){
        gridSquare = $('#' + grid.gridNames[gridSquareNum - 1]);

        gridSquare.text("O");

        grid.gridBools[gridSquareNum - 1] = true;
        grid.gridPlays[gridSquareNum - 1] = "O";

        if (gameOver())
        {
          reset();
        }
      }
    }

    function reset()
    {
      for(i = 0;i < 9; i++)
      {
        grid.gridBools[i] = false;
        grid.gridPlays[i] = "";;
      }


      $("td").text("");

    }
  /*
  The following functions will style the square the user played on
  and calls the function to make sure the play is recorded
  */
    $('#grid-one').click(function() {
      if (grid.gridBools[0] == false){

        $(this).text("X");

        grid.gridBools[0] = true;
        grid.gridPlays[0] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-two').click(function() {
      if (grid.gridBools[1] == false){

        $(this).text("X");

        grid.gridBools[1] = true;
        grid.gridPlays[1] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-three').click(function() {
      if (grid.gridBools[2] == false){

        $(this).text("X");

        grid.gridBools[2] = true;
        grid.gridPlays[2] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-four').click(function() {
      if (grid.gridBools[3] == false){

        $(this).text("X");

        grid.gridBools[3] = true;
        grid.gridPlays[3] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-five').click(function() {
      if (grid.gridBools[4] == false){

        $(this).text("X");

        grid.gridBools[4] = true;
        grid.gridPlays[4] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-six').click(function() {
      if (grid.gridBools[5] == false){

        $(this).text("X");

        grid.gridBools[5] = true;
        grid.gridPlays[5] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-seven').click(function() {
      if (grid.gridBools[6] == false){

        $(this).text("X");

        grid.gridBools[6] = true;
        grid.gridPlays[6] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-eight').click(function() {
      if (grid.gridBools[7] == false){

        $(this).text("X");

        grid.gridBools[7] = true;
        grid.gridPlays[7] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

    $('#grid-nine').click(function() {
      if (grid.gridBools[8] == false){

        $(this).text("X");

        grid.gridBools[8] = true;
        grid.gridPlays[8] = "X";

        var playerPlay = $("#player_play")[0];
        playerPlay.play();

        if (!gameOver())
        {
          computerPlay(computeCompMove());
        }else
        {
          reset();
        }
      }
    });

});

/*
This is supposed to compute the
computer's move but it is not working right now.
*/
function computeCompMove()
{
  var grid_square;
  do {
    grid_square = Math.floor(Math.random() * 10);
    if(grid_square == 0)
    {
      grid_square = 1;
    }
  } while (grid.gridBools[grid_square - 1]);
  return grid_square;
}

/*
This function is meant to update the score of the
player
*/
function updateScore(playerWin)
{
  if(playerWin)
  {
    playEndSound(playerWin);
    currScore = document.getElementById('score').innerHTML;
    currScore = Number(currScore) + 1;
    document.getElementById('score').innerHTML = currScore;
    alert("You won!")
  }
  else
  {
    playEndSound(playerWin);
    currScore = document.getElementById('score').innerHTML;
    currScore = Number(currScore) - 1;
    document.getElementById('score').innerHTML = currScore;
    alert("You lost")
  }
}

/*
This function checks whether or not the game is over
and if it is over and the computer or the player won
it will call updateScore function to update the running tally
*/
function gameOver()
{
  /*
  these next round of if else statements
  checks it there is a winner.
  */
  if(grid.gridBools[0] && grid.gridBools[1] && grid.gridBools[2])
  {
    if ((grid.gridPlays[0] == "X") && (grid.gridPlays[1] == "X") && (grid.gridPlays[2] == "X"))
    {
      updateScore(true);
      return true
    }
    if ((grid.gridPlays[0] == "O") && (grid.gridPlays[1] == "O") && (grid.gridPlays[2] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[3] && grid.gridBools[4] && grid.gridBools[5])
  {
    if ((grid.gridPlays[3] == "X") && (grid.gridPlays[4] == "X") && (grid.gridPlays[5] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[3] == "O") && (grid.gridPlays[4] == "O") && (grid.gridPlays[5] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[6] && grid.gridBools[7] && grid.gridBools[8])
  {
    if ((grid.gridPlays[6] == "X") && (grid.gridPlays[7] == "X") && (grid.gridPlays[8] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[6] == "O") && (grid.gridPlays[7] == "O") && (grid.gridPlays[8] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[2] && grid.gridBools[5] && grid.gridBools[8])
  {
    if ((grid.gridPlays[2] == "X") && (grid.gridPlays[5] == "X") && (grid.gridPlays[8] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[2] == "O") && (grid.gridPlays[5] == "O") && (grid.gridPlays[8] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[1] && grid.gridBools[4] && grid.gridBools[7])
  {
    if ((grid.gridPlays[1] == "X") && (grid.gridPlays[4] == "X") && (grid.gridPlays[7] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[1] == "O") && (grid.gridPlays[4] == "O") && (grid.gridPlays[7] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[0] && grid.gridBools[3] && grid.gridBools[6])
  {
    if ((grid.gridPlays[0] == "X") && (grid.gridPlays[3] == "X") && (grid.gridPlays[6] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[0] == "O") && (grid.gridPlays[3] == "O") && (grid.gridPlays[6] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[0] && grid.gridBools[4] && grid.gridBools[8])
  {
    if ((grid.gridPlays[0] == "X") && (grid.gridPlays[4] == "X") && (grid.gridPlays[8] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[0] == "O") && (grid.gridPlays[4] == "O") && (grid.gridPlays[8] == "O"))
    {
      updateScore(false);
      return true;
    }
  } if (grid.gridBools[2] && grid.gridBools[4] && grid.gridBools[6])
  {
    if ((grid.gridPlays[2] == "X") && (grid.gridPlays[4] == "X") && (grid.gridPlays[6] == "X"))
    {
      updateScore(true);
      return true;
    }
    if ((grid.gridPlays[2] == "O") && (grid.gridPlays[4] == "O") && (grid.gridPlays[6] == "O"))
    {
      updateScore(false);
      return true;
    }
  }

  var flag = true;
  for(i = 0;i < 9;i++)
  {
    if(grid.gridBools[i] == false)
    {
      flag = false;
    }
  }

  return flag;
}
