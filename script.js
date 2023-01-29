// oppgave 1
// var tal = 0;
// if (tal == 0)
// {
//      prompt("0")
// }
// else if (tal > 0)
//  {
//     prompt("positivt")
// }
// else (tal < 0)
// {
//     prompt("negativt")
// }

// oppgave 2
//var tall = 1;
//if (tall%2 ==0) {
//    console.log("tallet er partall");
//} else {
//    console.log("tallet er oddetall");
//}
// oppgave 3
//var karakter = 50
//if (karakter >= 50)
//{
//    console.log("beståt")
//}
//else{
//    console.log("ikke bestått")
//}

// oppgave 5
//var day = ;
//if (day == 1)
//{
//    console.log("monday")
//}
//else if (day == 2 )
//{
//    console.log("tuesday")
//}
//else if (day == 3 )
//{
//    console.log("wednesday")
//}
//else if (day == 4 )
//{
//    console.log("thursday")
//}
//else if (day == 5 )
//{
//    console.log("friday")
//}
//else if (day == 6 )
//{
//    console.log("saturday")
//}
//else if (day == 7)
//{
//    console.log("sunday")
//}

//oppgave 6
//var dag = 1
//switch (dag){
//    case 1:
//    console.log('manday');
//    break;
//    case 2:
//    console.log('tuesday');
//    break
//    case 3:
//    console.log('wednesday');
//    break
//    case 4:
//    console.log('thursday');
//    break
//    case 5:
//    console.log('friday');
//    break
//    case 6:
//    console.log('saturday');
//    break
//    case 7:
//    console.log('sunday');
//    break
//    default:
//      console.log('unavailable')
//}
// oppgave 7
//var tal1 = 8
//var tal2 = 4
//resultat = 'divide'
//switch(resultat)
//{
//case 'pluss':
//    console.log(tal1+tal2);
//    break
//case 'minus':
//    console.log(tal1-tal2);
//    break
//case 'multiply':
//    console.log(tal1*tal2);
//    break
//case 'divide':
//    console.log(tal1/tal2);
//    break
//}
// oppgave 8
//var a = 9
//var b = 9
//if (a > b)
//{
//    console.log(a , 'er større')
//}
//else if( b > a){
//    console.log(b ,'er større')
//}
//else{console.log( 'de er lik')}
// oppgave 9
//var math = 50
//var science = 20
//var average = (math+science)/2;
//if (average >= 50){
//    console.log( average , 'bestått')
//}
//else{console.log(average , 'ikke bestått')};
// oppgave 10 << ja >>
//var a = 4
//var b = 6
//var c = 8
//console.log(a/b/c);
//console.log(c/3);

// oppgave 11 << ja >>
//var a = 10000
//var b = 1000
//var c = 100
//var e = 10
//var f = 1
//console.log(a/b/c/e/f);
//console.log(c/5);
// oppgave 12 << ja >>
//var a = 200;
//console.log(a / 3 / 5);
// oppgave 13 << ja >>
// oppgave 14
//var minst = [12, 10, 40,];
//var min = minst[0];
//for (var i = 0; i > minst.length; i--){
//    if (minst[i] <= min){
//        min = minst[i];
//    }
//};
//console,console.log(minst);
// oppgave 15
//var sjekk = 'a'
//switch(sjekk){
//    case 'a':
//    case 'e':
//    case 'o':
//    case 'u':
//    case 'i':
//        console.log('det er vokal')
//        break
//    default: console.log('ikke vokal')
//};
// oppgave 16
var farge = document.getElementById("color");
farge.style.color='red' 

switch(farge){

    case "red":
        {farge.style.color='red' }
    case "blue":
        {farge.style.color='blue' }
    case "black":
        {farge.style.color='black' }
    
    default: console.log('unavailable')
};

