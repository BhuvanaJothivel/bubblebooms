MakeBubbleForm(30);
function MakeBubble(ident) {
    document.write('<input type="button" class="bubble" id="bubble'+ident+'" >');
  }
  function MakeBubbleForm(NoOfButtons) {
    for (var i=1; i<=NoOfButtons; i++) {
        MakeBubble(i);  
      
    }
  }

let score=0;
for(i=1; i<=30; i++){
let id = "bubble"+i;
let id_temp = 1;
document.getElementById(id).onclick = evt=>{

    if(evt.target.style.visibility = 'hidden')
    {
       score+=1;
       
       console.log(score);
       
    }
    document.getElementById('myAudio').play();
    document.getElementById('score_final').innerHTML = score;

}}

// var timer = new Timer();
// timer.start();
// timer.addEventListener('secondsUpdated', function (e) {
//     document.getElementById('basicUsage').html(timer.getTimeValues().toString());
// });

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds == 0) clearInterval(countdown);
    // if (seconds === 0) {alert('TimeOut'); window.location.href='end.html'}
     if (seconds === 0) { window.location.href='end.html'}
}, 1000);

