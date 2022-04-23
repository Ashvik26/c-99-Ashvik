var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();
function begin(){
    document.getElementById("box").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("box").innerHTML=content;
talk();
}
function talk(){
    var synth=window.speechSynthesis;
    var speak_data= document.getElementById("box").value;
var utter_this= new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
}
Webcam.set({
    width:360,
    height:250,
image_format:"jpeg",
jpeg_quality:90,
});
var cam=document.getElementById("camera");
Webcam.attach("#camera");
