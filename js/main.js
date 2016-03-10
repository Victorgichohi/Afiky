var txt = ['mission', 'vision'],
    n = txt.length,
    $swap = $('#swap'),
    $span,
    c = -1;

// CREATE SPANS INSIDE SPAN
for(var i=0; i<txt.length; i++) $swap.append($('<span />',{text:txt[i]}));
// HIDE AND COLLECT THEM
$span = $("span", $swap).hide();

(function loop(){
    c = ++c % n;
    $swap.animate({width: $span.eq( c ).width() });
    $span.stop().fadeOut().eq(c).fadeIn().delay(5000).show(0, loop);
}());


// swap for the second span
var txt2 = ['As a network of software professionals, we work independently but with the support of the group.',
            'Lorem ipsum dolor sit amet, has no perfecto postulant. Ut nonumy fierent mea.'],
    n2 = txt2.length,
    $swap2 = $('#swap2'),
    $span2,
    c2 = -1;

// CREATE SPANS INSIDE SPAN
for(var x=0; x<txt2.length; x++) $swap2.append($('<span />',{text:txt2[x]}));
// HIDE AND COLLECT THEM
$span2 = $("span", $swap2).hide();

(function loop(){
    c2 = ++c2 % n2;
    $swap2.animate({width: $span2.eq( c2 ).width() });
    $span2.stop().fadeOut().eq(c).fadeIn().delay(5000).show(0, loop);
}());
