
import chatWindow from './ChatWindow/chatwindow.html';
import './ChatWindow/chatwindow.css'
import btn from './button/button.html'
import { handleSubmitMessage } from './chat-socket.js'
import { getCookie, setCookie } from './utils/cookies.js'
import { addNewUser } from './utils/http.service.js'

 
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function app() {

        const user = false
    
        console.log('JS-Widget starting');
    
        let content = document.createElement('div')
        content.innerHTML = `
            ${chatWindow}
            ${btn}
        `
        document.body.appendChild(content);

        console.log(getCookie('widgetusername'))
        const checkUser = () => {
            const username = getCookie('widgetusername')
            const useremail = getCookie('widgetuseremail')
            if (username && useremail) {
                document.getElementById('chatAreaWidget').classList.remove('hide')
                document.getElementById('userDataArea').classList.add('hide')
            }
        }
        checkUser()

        document.getElementById('widgetSubmitUser').onclick = function() {
            const username = document.getElementById('widgetInputName').value
            const email = document.getElementById('widgetInputEmail').value
            console.log('about to write cookies for user', username, email)
            setCookie('widgetusername', username, 7)
            setCookie('widgetuseremail', email, 7)
            addNewUser(username, email)
            checkUser()
        }

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
        document.getElementById('submitMessage').onclick = (e) => {
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



