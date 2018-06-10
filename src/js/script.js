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
});