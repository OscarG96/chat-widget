import btn from './button/button.html'
import './button/button.css'
function app() {
    console.log('JS-Widget starting');
    console.log('button', typeof btn);
    // var btn = document.createElement("BUTTON");   // Create a <button> element
    let content = document.createElement('div')
    content.innerHTML = btn
    content.className = 'chat-widget'
    document.body.appendChild(content);
    
    document.getElementById('myBtn').onclick = function(e){
        alert('click');
    }
}

app();


// cellphones css
// background-color: blue;
//     color: white;
//     content: &&;
//     display: block;
//     height: 2rem;
//     width: 2rem;
//     border-radius: 50%;
//     border: 1px solid red;
// src/assets/message-svgrepo-com.svg