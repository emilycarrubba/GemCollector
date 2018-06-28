// This function creates the 'Gem Goal'between 19-120
$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19);

  // This function connects the 'randomNumber' id to the html document
  $("randomNumber").text(Random);

  //Each gem needs a random number assigned to add up to the goal number
  var gem1;
  var gem2;
  var gem3;
  var gem4;

  // Vars for score keeping
  var userTotal;
  var userWins = 0;
  var userLosses = 0;
  $("#numberWins").text(userWins);
  $("#numberLosses").text(userLosses);
  reset();
  // Function to reset the game
//   var calculateGEnfunction () {
// 	  return Math.floor(Math.random() * 10 + 1);
//   }

  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random);
    $("#randomNumber").text(Random);
    gem1 = Math.floor(Math.random() * 10 + 1);
    gem2 = Math.floor(Math.random() * 10 + 1);
    gem3 = Math.floor(Math.random() * 10 + 1);
    gem4 = Math.floor(Math.random() * 10 + 1);
    userTotal = 0;
    $("finalTotal").text(userTotal);
  }

  // Function to add winning combinations to userTotal category
  function winner() {
    alert("Winner!");
    userWins++;
    $("#numberWins").text(userWins);
    reset();
  }

  // Function to add losing combinations to userTotal category
  function loser() {
    alert("So Close! Try again?");
    userLosses++;
    $("#numberLosses").text(userLosses);
    reset();
  }

  $(".GemImage").on("click", function() {});

  // Function for clicking on gems
  $("#one").on("click", function() {
    userTotal = userTotal + gem1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#two").on("click", function() {
    userTotal = userTotal + gem2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#three").on("click", function() {
    userTotal = userTotal + gem3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    // Function for the winning and losing conditions
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#four").on("click", function() {
    userTotal = userTotal + gem4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
		loser();
    }
  });
});
