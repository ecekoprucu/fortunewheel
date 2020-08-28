    var fortuneWheel= document.getElementsByClassName("circle")[0];
    var numberx=0;
    var turns=0;


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var myAudio= document.getElementById('audio2');

    if(myAudio.currentTime!==0){
        myAudio.currentTime = 0;

    }
    var playPromise = document.getElementById('audio2').play();

    if(run){
        clearInterval(run);


    }


    var selectedNumber=getRandomInt(16);
    var notify=false;
    //var slowMe=0;
        function turn() {

        if(numberx>turns){
            clearInterval(run);
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    // We can now safely pause video...
                    document.getElementById('audio2').pause();
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }
            if(notify){
                $('#dialog').text("Tekrar deneyiniz.");
                $('#dialog').dialog();
            } else {
                if(selectedNumber===1 || selectedNumber===5 || selectedNumber===9 || selectedNumber===13){
                    $('#dialog').text("Bizden şahane bir ev kazandınız.");
                    $('#dialog').dialog();
                } else if(selectedNumber===2 || selectedNumber===6 || selectedNumber===10 || selectedNumber===14){
                    $('#dialog').text("Bizden şahane bir araba kazandınız.");
                    $('#dialog').dialog();
                } else if(selectedNumber===3 || selectedNumber===7 || selectedNumber===11 || selectedNumber===15){
                    $('#dialog').text("Bizden şahane bir ansiklopedi seti kazandınız.");
                    $('#dialog').dialog();
                } else {
                    $('#dialog').text("Bizden şahane bir indirim kazandınız.");
                    $('#dialog').dialog();
                }
            }

        } else {
            if(selectedNumber===0){
                console.log(selectedNumber);
                notify=true;
                selectedNumber=1;
                numberx+=1;
                turns= Math.floor(selectedNumber/4)*360 +selectedNumber*22.5;
                console.log(turns);

                    fortuneWheel.style.transform="rotate(-"+(numberx - 10)+"deg)";

            } else {
                turns= Math.floor(selectedNumber/4)*360+selectedNumber*22.5;
                console.log(turns);
                numberx+=1;

                    fortuneWheel.style.transform="rotate(-"+(numberx - 10)+"deg)";
                    
            }
        }
        //
        //console.log(numberx);
            console.log(selectedNumber);
    }


    var run= setInterval(turn,1);




