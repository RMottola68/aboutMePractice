var slideInterval = 5000;

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
};

function moveForward() {
    var pointer;
    var figures = getFigures();
    for(let i = 0; i < figures.length; i++){
        if(figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback(){
    setTimeout(moveForward, slideInterval);
}

startPlayback();

//fake login validation
function logIn () {
    var datAccount = document.forms["loginForm"]["account"].value;
    var datPass = document.forms["loginForm"]["password"].value;
    if (datAccount == true && datPass == true) {
        window.location="Settings.html";
    }
}



//button takes user to facebook signup
function facebookSignup () {
    window.location="https://www.facebook.com/reg/";
}

function twitchSignup () {
    window.location="https://www.twitch.tv/signup";
}

function YTSignup () {
    window.location="https://accounts.google.com/signup/v2/webcreateaccount?service=youtube&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DUZCO5k1Nu70&hl=en&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&nogm=true";
}
console.log(datAccount);
console.log(datPass);