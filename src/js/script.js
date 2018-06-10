var mouseUse = `
    .menuButton:active {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

var keyboardUse = `
    .menuButton:focus {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

$(function() {
    $("div[data-page]").css("display", "none");
    $("div[data-page-default]").css("display", "unset");

    $("div[data-for='" + $("div[data-page-default]").attr("data-page") + "']").addClass("selected");

    $("div[data-for]").click(function() {
        $("div[data-for]").removeClass("selected");
        $(this).addClass("selected");
        $("div[data-page]").css("display", "none");
        $("div[data-page='" + $(this).attr("data-for") + "']").css("display", "unset");
    });

    $("div[data-for]").attr("tabindex", "0");
    $(".menuButton").attr("tabindex", "0");

    $("*").keypress(function (e) {
        var key = e.which;

        if (key == 13) {
            $(this).click();
            return false;  
        }
    });

    $("*").hover(function() {
        $("#toggleStyle").text(mouseUse);
    });

    $("*").keydown(function() {
        $("#toggleStyle").text(keyboardUse);
    });
});