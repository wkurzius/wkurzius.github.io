//Stop drop down menus from opening top link (desktop site only)
$(document).ready(function() {
    $(".sw-channel-item").children("[aria-haspopup=true]").attr("href","#");
});