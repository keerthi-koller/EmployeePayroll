window.addEventListener("DOMContentLoaded", function (){
    console.log("Page Loaded");
    let h1 = this.window.document.getElementById("h1tag");
    console.log(h1);
    h1.textContent = "HII";
    let d = this.document.getElementById("div");
    d.innerHTML = `<h1>Hello</h1><br><h2>hi</h2>`
    const submit = this.document.getElementById("button-id")
    submit.addEventListener("click",function (){
        // window.alert("hello world ");
        console.log(message.value);
    
    })

    const message = this.document.querySelector("#name");
    message.addEventListener("input",function(){
        console.log("user entered");

    })
    console.log(message);

})