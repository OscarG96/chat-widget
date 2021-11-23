function app() {
    console.log('JS-Widget starting');
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "CLICK ME";                   // Insert text
    document.body.appendChild(btn);    
}

app();