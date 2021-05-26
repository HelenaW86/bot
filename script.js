var date = new Date();
var day = date.getDay();
let theDay = ''
if(day == [2]){
theDay ='Whopp Whopp';
}

//document.getElementById("ansvere").innerHTML = theDay;


function myFunction(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = 'Om 6 dagar. idag är det Söndag.';
    weekday[1] = '5 dagar kvar....idag är det bara en sketen Måndag.';
    weekday[2] = 'Om 4 dagar, Tisdag idag.';
    weekday[3] = 'Om 3 dagar. men lill lördag är det idag=)';
    weekday[4] = 'Nu börjar det närma sig. 2 dagar kvar! Torsdag idag.'
    weekday[5] = 'Imorgon är det Lördag! Fredag idag.';
    weekday[6] = 'Wohoooooo! det är Lördag!';

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
}