// dom element list
var canvas = document.getElementById("display");
var webcamera = document.getElementById("webcamera");
webcamera.style.width  = "640px";
webcamera.style.height = "480px";
// var connected = false;



function hasGetUserMedia() {
  // Note: Opera builds are unprefixed.
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}


function connect(){

    navigator.mediaDevices.getUserMedia({video : true, audio : false})
        .then(function (stream) {
            // videoタグの箇所へ、カメラの映像を挿入します。
            webcamera.srcObject = stream;
            webcamera.play();
        }).catch(function (error){
            // もし許可されなかった場合、エラーの場合にはエラーログを表示します。
            console.error('mediaDevices.getUserMedia() error:', error);
            return;
      });
}

// function play(){
//     if(connected) 
// }

function entry_point(){
    if (hasGetUserMedia()) {
        // Good to go!
        // connect();
    } else {
        alert('getUserMedia() is not supported in your browser');
    }
}

entry_point();