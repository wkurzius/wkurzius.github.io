//Stop drop down menus from opening top link (desktop site only)
$(window).load(function() {
    $(".sw-channel-item").children().attr("href","#");
});