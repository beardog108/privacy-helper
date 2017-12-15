function getElm(id){
    return document.getElementById(id);
}
function setQuestion(q){
    var questions = document.getElementsByClassName("questions");
    for (var i = questions.length - 1; i >= 0; i--) {
      questions[i].style.display = 'none';
    }
    getElm(q).style.display = 'block';
}
function showResults(){
    var threatModel = '';
    var threatAdvice = '';
    var desktop = '';
    var phone = '';
    var software = '';
    switch (user.threat){

        case 'person':
            threatModel = "<p class='mainP'>Note: Individuals are not typically the most technically advanced, motivated, or well funded adversaries to have. However, it is often difficult to escape their grasp. This guide only addresses abusive people's electronic threat.";
            threatAdvice = '<ul><li>Keep your devices locked</li><li>If the abuser is technically skilled, consider encrypting and/or hiding private files</li><li>Use self-deleting chats such as Snapchat</li></ul>';
        break;
        case 'employer':
            threatModel = "<p class='mainP'>Employers have substanial power over people under capitalism, especially those in the lower classes. In some cases keeping things private from an employer could mean the difference between affording rent next month and not.</p>";       
            threatAdvice = '<ul><li>Keep your personal devices locked</li><li>Avoid using work network for personal reasons</li><li>Use pseudonyms & varying usernames/email addresses for online accounts</li></ul>';
        break;
        case 'corporate':
            threatModel = "<p class='mainP'>Large corporations track your every move. Google probably knows more about you than your friends. Escaping their grasp can be difficult.</p>";
            threatAdvice = '<ul><li>Use alternatives to popular sites like Facebook, Google, etc</li><li>Use VPN services from trusted providers</li><li>Turn off location services</li></ul>';
        break;
        case 'government-generic':
            threatModel = "<p class='mainP'>Leaks from whistleblowers such as Edward Snowden have revleaed spying programs in many countries, especially the west. While organizations such as the NSA have very powerful capabilities, escaping their <b>generic</b> spying is a realistic but difficult endevour.</p>";
            threatAdvice = '<ul><li>Use alternatives to popular sites like Facebook, Google, etc</li><li>Use VPN services from trusted providers</li><li>Use public Wifi</li><li>Turn off location services</li><li>Minimize use of non-encrypted messaging</li></ul>';
        break;        
    }
    getElm('threatModel').innerHTML = threatModel;
    getElm('threatAdvice').innerHTML = threatAdvice;
    setQuestion('results');
}

getElm('start').style.display = 'block';

var user = {'desktop': '', 'phone': '', 'threat': '', 'skill': ''}

getElm('start').onclick = function(e){
    if (e.target.tagName !== 'A' && e.target.tagName !== 'I'){
        return
    }
    setQuestion('question1');
}

getElm('question1').onclick = function(e){
    if (e.target.tagName !== 'A' && e.target.tagName !== 'I'){
        return
    }
    data = e.target.dataset.name;
    user.desktop = data;
    setQuestion('question2');
}
getElm('question2').onclick = function(e){
    if (e.target.tagName !== 'A' && e.target.tagName !== 'I'){
        return
    }
    data = e.target.dataset.name;
    user.phone = data;
    setQuestion('question3');
}
getElm('question3').onclick = function(e){
    if (e.target.tagName !== 'A' && e.target.tagName !== 'I'){
        return
    }
    data = e.target.dataset.name;
    user.threat = data;
    getElm('threatGiven').innerHTML = data;
    setQuestion('question4');
}
getElm('question4').onclick = function(e){
    if (e.target.tagName !== 'A' && e.target.tagName !== 'I'){
        return
    }
    data = e.target.dataset.name;
    user.skill = data;
    showResults();
}