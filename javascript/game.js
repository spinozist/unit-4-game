var crystalArray = [];


$("document").ready(function () {
    var matchRand = Math.floor(Math.random() * 251) + 100;

    $("#match-number").text(matchRand);

    for (var i = 0; i < 4; i++) {
        var crystalRand = Math.floor(Math.random() * 51);
        crystalArray.push(crystalRand);
        var button = $("<button>");
        button.attr("id", "button" + i);
        $(button).css("background-image", "url(assets/images/crystal-" + i + ".png");
        $("#button-row").append(button);
    }

    $("#guess-number").text(0);

    console.log("ready :)");

});