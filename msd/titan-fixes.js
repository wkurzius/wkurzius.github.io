//Stop drop down menus from opening top link (desktop site only)
// Breaks other things, clean up
/*$(window).load(function() {
    $(".sw-channel-item").children().attr("href","#");
});*/

// Staff directory doesn't support titles.
// Putting a title in first name breaks the initials avatar.
// Can't embed code since Blackboard loads a separate page on search.
// This is absurd.
// Oh, and it's onresize because they don't use onload.
window.onresize = function(){
    document.querySelector('div[data-lastname="Maroun"]').innerHTML = "JM";
};