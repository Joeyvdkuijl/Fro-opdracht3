$('#Juice p').click(function(){
    $('#Juice img').slideToggle(700);
})

$('figure img').mouseenter( function() {
    $(this).fadeTo(600, .01);
}).mouseleave(function() {
    $(this).fadeTo(1000, 1);
}).click( function() {
    $(this).next().toggle(700);
});


$("h3").dblclick(function(){
    $(this).hide(600).show(1200);
})
$('topRight').click(function(){
    $(this)
})