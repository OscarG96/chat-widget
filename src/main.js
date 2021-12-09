
import chatWindow from './ChatWindow/chatwindow.html';
import './ChatWindow/chatwindow.css'
import btn from './button/button.html'
import { handleSubmitMessage } from './chat-socket.js'
 
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function app() {
    
        console.log('JS-Widget starting');
    
        let content = document.createElement('div')
        content.innerHTML = `
            ${chatWindow}
            ${btn}
        `
        document.body.appendChild(content);

        document.getElementById('btnToggleWidget').onclick = function(e){
            // popup.classList.toggle('show');
            let chatpopup = document.getElementsByClassName('chat-popup')[0]
            if (chatpopup.classList.contains('show')) {
                chatpopup.classList.remove('show')
            } else {
                chatpopup.classList.add('show')
            }
        }
        
        // send msg 
        document.getElementsByClassName('submit')[0].onclick = (e) => {
            let userInput = document.getElementById('userMsgInput')
        
            let temp = `<div class="out-msg">
            <span class="my-msg">${userInput.value}</span>
            <img src="img/me.jpg" class="avatar">
            </div>`;
            
            handleSubmitMessage(userInput.value)
            document.getElementById('chatAreaWidget').insertAdjacentHTML("beforeend", temp);
            // inputElm.value = '';
            userInput.value = '';

            
        
        }
    }
    
    app();
});



