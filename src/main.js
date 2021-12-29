
import chatWindow from './ChatWindow/chatwindow.html';
import './ChatWindow/chatwindow.css'
import btn from './button/button.html'
import { handleSubmitMessage } from './chat-socket.js'
import { getCookie, setCookie } from './utils/cookies.js'
import { addNewUser } from './utils/http.service.js'
import { v4 as uuidv4 } from 'uuid';
const { io } = require("socket.io-client");



document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function app() {
        
        const socket = io('127.0.0.1:3000')
        const user = false
        const uuid = getCookie('uuid') || null
    
        console.log('JS-Widget starting');
    
        let content = document.createElement('div')
        content.innerHTML = `
            ${chatWindow}
            ${btn}
        `
        document.body.appendChild(content);

        
        const checkUser = () => {
            const username = getCookie('widgetusername')
            const useremail = getCookie('widgetuseremail')
            if (username && useremail) {
                document.getElementById('chatAreaWidget').classList.remove('hide')
                document.getElementById('userDataArea').classList.add('hide')
            }
            if (!uuid) {
                uuid = uuidv4()
                setCookie(uuid)
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
            let userEmail = getCookie('widgetuseremail')
            let userName = getCookie('widgetusername')
            handleSubmitMessage(userInput.value, userEmail, userName, uuid)
            document.getElementById('chatAreaWidget').insertAdjacentHTML("beforeend", temp);
            // inputElm.value = '';
            userInput.value = '';
        }

        socket.on(`messageFromAgent-${uuid}`, (message) => {
            console.log('message from agent', message)
        })
    }
    
    app();
});



