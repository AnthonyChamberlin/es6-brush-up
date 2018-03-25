// Global var - returns both outputs
if(true) {
    var x = 1;
    document.write( "x = " + x + "</br>");
}
document.write( "x = " + x + "</br>");

// Local let - returns output only inside block
if(true) {
    let y = 2;
    document.write( "y = " + y + "</br>");
}
document.write( "y = " + y + "</br>");

// returns 10
var z = 10;
if (true) {
    let z = 20;
}
document.write( "z = " + z + "</br>");