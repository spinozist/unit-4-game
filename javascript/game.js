$("document").ready(function () {
    var crystalArray = [];
    var sumGuesses = 0;
    var matchRand = Math.floor(Math.random() * 251) + 100;
    var drawReset = function () {
        resetButton = "<input id='resetButton' type='button' value='Play Again' onClick='window.location.reload()'>";
        $("#reset-box").html(resetButton);
        document.onkeydown = function (event) {
            event.preventDefault();
        };
    }

    $("#match-number").text(matchRand);

    for (var i = 0; i < 4; i++) {
        var crystalRand = Math.floor(Math.random() * 51);
        crystalArray.push(crystalRand);
        var button = $("<button>");
        button.attr("id", "button" + i);
        button.attr("value", crystalRand)
        $(button).css("background-image", "url(assets/images/crystal-" + i + ".png");
        $("#button-row").append(button);
    }

    $("#guess-number").text(sumGuesses);

    console.log("ready :)");

    $("button").on("click", function () {
        sumGuesses = +sumGuesses + +this.value;
        $("#guess-number").text(sumGuesses);

        if (sumGuesses === matchRand) {
            $("#wins-losses").html("<h1>You won!</h1>");
            drawReset();
        }

        if (sumGuesses > matchRand) {
            $("#wins-losses").html("<h1>You lose!</h1>");
            drawReset();
        }
    });
});


