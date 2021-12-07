
import chatWindow from './ChatWindow/chatwindow.html';
import './ChatWindow/chatwindow.css'
import btn from './button/button.html'

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    function app() {
        const chatBtn = document.querySelector('.chat-btn');
        const popup = document.querySelector('.chat-popup');
    
        console.log('JS-Widget starting');
    
        let content = document.createElement('div')
        content.innerHTML = `
            ${chatWindow}
            ${btn}
        `
        document.body.appendChild(content);
        console.log(chatBtn)
        // btn.addEventListener('click', ()=>{
        //     console.log('btn clicked')
        //     popup.classList.toggle('show');
        // })
        document.getElementById('btnToggleWidget').onclick = function(e){
            console.log('btn clicked')
            // popup.classList.toggle('show');
            document.getElementsByClassName('chat-popup').className += 'show'
            
        }
        
        // send msg 
        // submitBtn.addEventListener('click', ()=>{
        //     let userInput = inputElm.value;
        
        //     let temp = `<div class="out-msg">
        //     <span class="my-msg">${userInput}</span>
        //     <img src="img/me.jpg" class="avatar">
        //     </div>`;
        
        //     chatArea.insertAdjacentHTML("beforeend", temp);
        //     inputElm.value = '';
        
        // })
    }
    
    app();
});



