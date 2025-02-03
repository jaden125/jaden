function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

function goToPage2() {
    goToPage(2);
}

function goToPage3() {
    goToPage(3);
}

function goToPage4() {
    goToPage(4);
}

function setYellow() {
    currentMode = 'yellow';
}

function setGreen() {
    currentMode = 'green';
}

function addCar() {
    currentMode = 'car';
}

function playRaceInfo() {
    let textToSpeak = "最近的場次資訊";
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'zh-HK';
    utterance.rate = 1;  
    utterance.pitch = 1; 

    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(utterance);
}
