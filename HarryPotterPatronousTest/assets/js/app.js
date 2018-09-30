let state = {
   /*========================
        DATA
==========================*/
Ahoo: AhooData,
Cat: CatData ,
Kittern: KitternData ,
Dog: DogData ,
Dolphin: DolphinData ,
Eagle: eagleData,
fok: fokData ,
FOx: foxData ,
Goat: goatData ,
Goose: gooseData,
Horse: HorseData,
Peer: PeerData,
Rabbit: RabitData,
Wolf: wolfData
}



$(document).ready(function() {
    /**********************set timer to show questions in 10 second */
    $('#winText').hide();
    $('#gameContent > form:gt(0)').hide();
    timer;

});

var i = 0;
var timer = setInterval(function() {
  $('#gameContent > form:first')
         .fadeOut(10)
         .next()
         .fadeIn(1000)
         .end()
         .appendTo('#gameContent');
  if(document.getElementById('endform').style.display != 'none'){
    clearInterval(timer);
    $('#Patronous').show();
  } 
}, 10000);


/***************************show patronous btn */
$('#Patronous').on('click', function(){
   event.preventDefault();
   let myArray = [];
   let horseSum = 0, catSum = 0, dolphinSum = 0, AhooSum = 0, kitternSum = 0, dogSum = 0,
eagleSum = 0, fokSum = 0, fOxSum = 0, goatSum = 0, gooseSum = 0, peerSum = 0, rabbitSum = 0,
wolfSum= 0;
   
   myArray.push(document.getElementById("mySelect1").value);
   myArray.push(document.getElementById("mySelect2").value);
   myArray.push(document.getElementById("mySelect3").value);
   myArray.push(document.getElementById("mySelect4").value);
   for (let i = 0; i < myArray.length; i++) {
        horseSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Horse[i].answer)));
        catSum +=  Math.abs(parseFloat(myArray[i] - parseFloat(state.Cat[i].answer))); 
        dolphinSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Dolphin[i].answer)));
        AhooSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Ahoo[i].answer)));
        kitternSum +=  Math.abs(parseFloat(myArray[i] - parseFloat(state.Kittern[i].answer))); 
        dogSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Dog[i].answer)));
        eagleSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Eagle[i].answer)));
        fokSum +=  Math.abs(parseFloat(myArray[i] - parseFloat(state.fok[i].answer))); 
        fOxSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.FOx[i].answer)));
        goatSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Goat[i].answer)));
        gooseSum +=  Math.abs(parseFloat(myArray[i] - parseFloat(state.Goose[i].answer))); 
        peerSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Peer[i].answer)));
        rabbitSum += Math.abs(parseFloat(myArray[i] - parseFloat(state.Rabbit[i].answer)));
        wolfSum +=  Math.abs(parseFloat(myArray[i] - parseFloat(state.Wolf[i].answer)));
   }
   let compareArray = [horseSum, catSum, dolphinSum, AhooSum, kitternSum, dogSum,
    eagleSum, fokSum, fOxSum, goatSum, gooseSum, peerSum, rabbitSum,
    wolfSum];
   compareArray.horseSum = horseSum;
   compareArray.catSum = catSum;
   compareArray.dolphinSum = dolphinSum;
   compareArray.AhooSum = AhooSum;
   compareArray.kitternSum = kitternSum;
   compareArray.dogSum = dogSum;
   compareArray.eagleSum = eagleSum;
   compareArray.fokSum = fokSum;
   compareArray.fOxSum = fOxSum;
   compareArray.goatSum = goatSum;
   compareArray.gooseSum = gooseSum;
   compareArray.peerSum = peerSum;
   compareArray.rabbitSum = rabbitSum;
   compareArray.wolfSum = wolfSum;
   compareArray = compareArray.sort(function(a, b){return a-b});

   if(horseSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/hors.png')";
    else if(catSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/cat.jpg')";
    else if(dolphinSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/dolphin.png')";
    else if(AhooSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/Ahoo.jpg')";
    else if(kitternSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/cettern.jpg')";
    else if(dogSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/dog.png')";
    else if(eagleSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/egel.jpg')";
    else if(fokSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/fok.png')";
    else if(fOxSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/fox.png')";
    else if(goatSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/goat.png')";
    else if(gooseSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/goose.jpg')";
    else if(peerSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/peer.jpg')";
    else if(rabbitSum === compareArray[0])
        document.getElementById('winText').style.backgroundImage = "url('assets/img/rabit.png')";
    else
        document.getElementById('winText').style.backgroundImage = "url('assets/img/wolf.jpg')";
    
    $('#gameContent').hide();
    $('#winText').show();
      
       $('#warning').text('your Patronous');
});

/**********************reset btn fxn */
let restart = function(){
    clearInterval(timer);
    location.reload();
}  