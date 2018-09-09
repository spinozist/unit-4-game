
$("document").ready(function () {
    var wins = 0;
    var losses = 0;
    var crystalArray = [];
    var sumGuesses = 0;
    var matchRand = Math.floor(Math.random() * 401) + 100;;

    function writeGuesses(){
        $("#guess-number").html("<p id='user-e'>" + sumGuesses + "</p>" + "<strong>Your Energy</strong>");
    };
    function writeScore() { 
        $("#wins-losses").html("<h2 id='dialogue'></h2>" + "<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    };

    function writeRandom() {
        $("#match-number").html("<p id='univ-e'>" + matchRand + "</p>" + "<strong>Universal Energy</strong>");
    }

    function resetFunction() {
        for (var i = 0; i < 4; i++) {
            var crystalRand = Math.floor(Math.random() * 91) + 10;
            crystalArray.splice(i, 1, crystalRand);
            $("#button" + i).attr("value", crystalRand)
            console.log(crystalRand);
        };
        matchRand = Math.floor(Math.random() * 401) + 100;
        writeGuesses();
        writeScore();
        writeRandom();
    };

    for (var i = 0; i < 4; i++) {
        var crystalRand = Math.floor(Math.random() * 91) + 10;
        crystalArray.push(crystalRand);
        var button = $("<button>");
        button.attr("id", "button" + i);
        button.attr("value", crystalRand)
        $(button).css("background-image", "url(assets/images/crystal-" + i + ".png");
        $("#button-row").append(button);
    }

    $("button").on("click", function () {
        sumGuesses = +sumGuesses + +this.value;
        $("#dialogue").text("Pick another crystal.");
        writeGuesses();

        if (sumGuesses === matchRand) {
            wins++;
            sumGuesses = 0;
            resetFunction();
            $("#dialogue").text("You won! Keep playing.");
        }

        if (sumGuesses > matchRand) {
            losses++;
            sumGuesses = 0;
            resetFunction();
            $("#dialogue").text("You lose! Try again.");
        }
    });

    writeRandom();
    writeScore();
    writeGuesses();
});


