
autosize(document.querySelectorAll('textarea'));


function inputNote(){
    let inputText = document.getElementById("input");
    localStorage.setItem('noteID', inputText.value);

    let outputText = localStorage.getItem("noteID");
    }