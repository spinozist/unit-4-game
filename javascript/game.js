

$("document").ready(function () {
    var wins = 0;
    var losses = 0;
    var crystalArray = [];
    var sumGuesses = 0;
    var matchRand = Math.floor(Math.random() * 251) + 100;;

    function writeGuesses(){
        $("#guess-number").text(sumGuesses);
    };
    function writeScore() { 
        $("#wins-losses").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    };

    function resetFunction() {
        for (var i = 0; i < 4; i++) {
            var crystalRand = Math.floor(Math.random() * 91) + 10;
            crystalArray.push(crystalRand);
            button.attr("id", "button" + i);
            button.attr("value", crystalRand)
        };
        matchRand = Math.floor(Math.random() * 251) + 100;
        writeGuesses();
        writeScore();
        $("#match-number").text(matchRand);
    };

    $("#match-number").text(matchRand);

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
        writeGuesses();

        if (sumGuesses === matchRand) {
            $("#dialogue").html("<h1>You won!</h1>");
            wins++;
            sumGuesses = 0;
            resetFunction();
        }

        if (sumGuesses > matchRand) {
            $("#dialogue").html("<h1>You lose!</h1>");
            losses++;
            sumGuesses = 0;
            resetFunction();
        }
    });
});


