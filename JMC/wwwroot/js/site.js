// Write your Javascript code.
function gcol() {

    var rn = Math.floor(Math.random() * 11)

    switch (rn) {
        case 0:
            return 'red';
            break;

        case 1:
            return 'black';
            break;

        case 2:
            return 'purple';
            break;

        case 3:
            return 'green';
            break;

        case 4:
            return 'orange';
            break;

        case 5:
            return 'yellow';
            break;

        case 6:
            return 'blue';
            break;

        case 7:
            return 'white';
            break;

        case 8:
            return 'brown';
            break;

        case 9:
            return 'pink';
            break;

        case 10:
            return 'cyan';
            break;

        default:
            return 'cyan';
            break;
    }


}

//function hidess() {
//    document.getElementById("csixfour").style.display = "none";
//    clearInterval(s2time);


//}

function allcol() {
    document.getElementById("lb1").style.background = gcol();
    document.getElementById("lb2").style.background = gcol();
    document.getElementById("lb3").style.background = gcol();
    document.getElementById("lb4").style.background = gcol();
    document.getElementById("lb5").style.background = gcol();
    document.getElementById("lb6").style.background = gcol();
    document.getElementById("lb7").style.background = gcol();
    document.getElementById("lb8").style.background = gcol();
    document.getElementById("lb9").style.background = gcol();
    document.getElementById("lb10").style.background = gcol();
    document.getElementById("lb11").style.background = gcol();
    document.getElementById("lb12").style.background = gcol();
    document.getElementById("lb13").style.background = gcol();
    document.getElementById("lb14").style.background = gcol();
    document.getElementById("lb15").style.background = gcol();
    document.getElementById("lb16").style.background = gcol();
    document.getElementById("lb17").style.background = gcol();
    document.getElementById("lb18").style.background = gcol();
    document.getElementById("lb19").style.background = gcol();
    document.getElementById("lb20").style.background = gcol();
    document.getElementById("lb21").style.background = gcol();
    document.getElementById("lb22").style.background = gcol();
    document.getElementById("lb23").style.background = gcol();
    document.getElementById("lb24").style.background = gcol();
    document.getElementById("lb25").style.background = gcol();
    document.getElementById("lb26").style.background = gcol();
    document.getElementById("lb27").style.background = gcol();
    document.getElementById("lb28").style.background = gcol();
    document.getElementById("lb29").style.background = gcol();
    document.getElementById("lb30").style.background = gcol();
    document.getElementById("lb31").style.background = gcol();
    document.getElementById("lb32").style.background = gcol();
    document.getElementById("lb33").style.background = gcol();
    document.getElementById("lb34").style.background = gcol();
    document.getElementById("lb35").style.background = gcol();
    document.getElementById("lb36").style.background = gcol();
    document.getElementById("lb37").style.background = gcol();
    document.getElementById("lb38").style.background = gcol();
    document.getElementById("lb39").style.background = gcol();
    document.getElementById("lb40").style.background = gcol();
    document.getElementById("lb41").style.background = gcol();
    document.getElementById("lb42").style.background = gcol();
    document.getElementById("lb43").style.background = gcol();
    document.getElementById("lb44").style.background = gcol();
    document.getElementById("lb45").style.background = gcol();
    document.getElementById("lb46").style.background = gcol();
    document.getElementById("lb47").style.background = gcol();
    document.getElementById("lb48").style.background = gcol();
    document.getElementById("lb49").style.background = gcol();
    document.getElementById("lb50").style.background = gcol();
    document.getElementById("lb51").style.background = gcol();
    document.getElementById("lb52").style.background = gcol();
    document.getElementById("lb53").style.background = gcol();
    document.getElementById("lb54").style.background = gcol();
    document.getElementById("lb55").style.background = gcol();
    document.getElementById("lb56").style.background = gcol();
    document.getElementById("lb57").style.background = gcol();
    document.getElementById("lb58").style.background = gcol();
    document.getElementById("lb59").style.background = gcol();
    document.getElementById("lb60").style.background = gcol();
    document.getElementById("lb61").style.background = gcol();
    document.getElementById("lb62").style.background = gcol();
    document.getElementById("lb63").style.background = gcol();
    document.getElementById("lb64").style.background = gcol();
    document.getElementById("lb65").style.background = gcol();
    document.getElementById("lb66").style.background = gcol();
    document.getElementById("lb67").style.background = gcol();
    document.getElementById("lb68").style.background = gcol();
    document.getElementById("lb69").style.background = gcol();
    document.getElementById("lb70").style.background = gcol();
    document.getElementById("lb71").style.background = gcol();
    document.getElementById("lb72").style.background = gcol();
    document.getElementById("lb73").style.background = gcol();
    document.getElementById("lb74").style.background = gcol();
    document.getElementById("lb75").style.background = gcol();
    document.getElementById("lb76").style.background = gcol();
    document.getElementById("lb77").style.background = gcol();
    document.getElementById("lb78").style.background = gcol();
    document.getElementById("lb79").style.background = gcol();
    document.getElementById("lb80").style.background = gcol();
    document.getElementById("lb81").style.background = gcol();
    document.getElementById("lb82").style.background = gcol();
    document.getElementById("lb83").style.background = gcol();
    document.getElementById("lb84").style.background = gcol();
    document.getElementById("lb85").style.background = gcol();
    document.getElementById("lb86").style.background = gcol();
    document.getElementById("lb87").style.background = gcol();
    document.getElementById("lb88").style.background = gcol();
    document.getElementById("lb89").style.background = gcol();
    document.getElementById("lb90").style.background = gcol();
    document.getElementById("lb91").style.background = gcol();
    document.getElementById("lb92").style.background = gcol();
    document.getElementById("lb93").style.background = gcol();
    document.getElementById("lb94").style.background = gcol();
    document.getElementById("lb95").style.background = gcol();
    document.getElementById("lb96").style.background = gcol();
    document.getElementById("lb97").style.background = gcol();
    document.getElementById("lb98").style.background = gcol();
    document.getElementById("lb99").style.background = gcol();
    document.getElementById("lb100").style.background = gcol();

}







function starttime() {

    var ltl = Math.floor(Math.random() * 20000) + 80000;
    var lt = Math.floor(Math.random() * 120000);
    
    s1time = setInterval("allcol()", 10);


}

starttime();


