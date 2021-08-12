function message(text){
    var div=document.createElement('div')
    div.style.position='fixed';
    div.style.animation='msg 1s linear';
    div.setAttribute('id', 'div_Msg')
    div.style.backgroundColor = 'lightblue';
    div.style.display='flex';
    div.innerHTML='&nbsp;<center><h3 style="cursor: default;" class="msg-text">'+text+'</h3></center><button onclick="closeMsg()" class="msg-text" style="cursor: pointer; background-color: transparent; border: 0px; outline: none; color: grey;">&nbsp;&nbsp;X&nbsp;</button></center>';
    div.style.left='10px';
    div.style.top='10px';
    div.style.fontFamily="monospace";
    document.body.appendChild(div);
}

function closeMsg(){
    var x=document.getElementById('div_Msg');
    x.remove();
}

document.onload=load();
function load(){
    var link=document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://sancho1952007.github.io/msg.js/style.css')
    document.head.appendChild(link);
}
