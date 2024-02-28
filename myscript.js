let X = 0;
let Y = 0;

$(document).ready(function(){

    $("#borde").hover(function(){

        $("#luz").css("opacity", 1);
    }, function(){
        
        $("#luz").css("opacity", 0);
    })

    $('#borde').mousemove(function(event){

        X = scaleValue(event.pageX-460, [0,1000], [-500,500]);
        Y = scaleValue(event.pageY-100, [0,800],  [-400,400]);
        if(X>=0 && Y>=0){
            angle=calcAngle(Math.abs(Y), Math.abs(X));
        } else if (X<0 && Y>=0){
            angle=calcAngle(Math.abs(X), Math.abs(Y))+90;
        } else if (X<0 && Y<0){
            angle=calcAngle(Math.abs(Y), Math.abs(X))+180;
        } else {
            angle=calcAngle(Math.abs(X), Math.abs(Y))+270;
        }
        
        $("#luz").css("transform", 'rotate(' + angle + 'deg)');
        $("#luz").css("background", 'hsl(' + angle + ',100%,50%)');
        $("#interior").text(X + ", " + Y + " = " + angle);
        
    })

})

function scaleValue( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent)*180/Math.PI;
  }