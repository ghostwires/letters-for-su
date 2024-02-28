let edit_buttons = document.getElementsByClassName("edit-button");
console.log(edit_buttons);
console.log(edit_buttons.length);

for (let i = 0; i < edit_buttons.length; i++) {
    console.log("sees " + edit_buttons[i].id);
    let id_suffix = edit_buttons[i].id.slice(12,);
    edit_buttons[i].onclick = function(){
        show("edit-text-" + id_suffix);
    };
}

if (document.getElementById("edit-button-6") != null) {
    document.getElementById("edit-button-6").onclick = function(){
        show("edit-text-6");
        hide("change-button-6-2");
        hide("change-button-6-3");
        hide("change-button-6-4");
    };
}

if (document.getElementById("change-button-1") != null) {
    document.getElementById("change-button-1").onclick = function(){
        hide("letter-text-1");
        hide("edit-text-1");
        show("letter-text-2");
    };
}

if (document.getElementById("change-button-2-1")) {
    document.getElementById("change-button-2-1").onclick = function(){
        hide("edit-button-2");
        hide("edit-text-2");
        show("letter-text-2-1");
        show("letter-text-3");
    };
}

if (document.getElementById("change-button-2-2")) {
    document.getElementById("change-button-2-2").onclick = function(){
        hide("edit-button-2");
        hide("edit-text-2");
        show("letter-text-2-2");
        show("letter-text-3");
    };
}

if (document.getElementById("change-button-2-3")) {
    document.getElementById("change-button-2-3").onclick = function(){
        hide("edit-button-2");
        hide("edit-text-2");
        show("letter-text-2-3");
    };
}

if (document.getElementById("change-button-2-3-1")) {
    document.getElementById("change-button-2-3-1").onclick = function(){
        hide("edit-text-2-3");
        hide("letter-text-2-3-1"); hide("letter-text-2-3");
        show("letter-text-3");
    };
}

if (document.getElementById("change-button-3")) {
    document.getElementById("change-button-3").onclick = function(){
        hide("edit-button-3");
        hide("edit-text-3");
        show("letter-text-4");
    };
}

if (document.getElementById("change-button-4-1")) {
    document.getElementById("change-button-4-1").onclick = function(){
        hide("edit-button-4-1");
        hide("edit-text-4-1");
        hide("letter-text-4-1");
        show("letter-text-5");
    };
}

if (document.getElementById("change-button-5-1")) {
    document.getElementById("change-button-5-1").onclick = function(){
        hide("edit-button-5");
        hide("edit-text-5");
        show("letter-text-5-1");
        show("send-button");
    };
}

if (document.getElementById("change-button-5-2")) {
    document.getElementById("change-button-5-2").onclick = function(){
        hide("edit-button-5");
        hide("edit-text-5");
        show("letter-text-5-2");
        show("send-button");
    };
}

if (document.getElementById("send-button")) {
    document.getElementById("send-button").onclick = function(){
        hide("letter");
        show("envelope");
    };
}

if (document.getElementById("change-button-6-1")) {
    document.getElementById("change-button-6-1").onclick = function(){
        show("envelope-text-6-1");
        show("change-button-6-2");
        show("change-button-6-3");
        show("change-button-6-4");
        document.getElementById("change-button-6-1").disabled = true;
    };
}

if (document.getElementById("change-button-6-2")) {
    document.getElementById("change-button-6-2").onclick = function(){
        console.log(isHidden("envelope-text-6-3"));
        document.getElementById("change-button-6-2").disabled = true;
        if (isHidden("envelope-text-6-3")) {
            show("envelope-text-6-2");
        }
        else {
            show("envelope-text-6-2-alternate");
        }
    };
}

if (document.getElementById("change-button-6-3")) {
    document.getElementById("change-button-6-3").onclick = function(){
        show("envelope-text-6-3");
        document.getElementById("change-button-6-3").disabled = true;
    };
}

if (document.getElementById("change-button-6-4")) {
    document.getElementById("change-button-6-4").onclick = function(){
        hide("edit-button-6");
        hide("edit-text-6");
        show("envelope-text-6-4");
        if (isHidden("envelope-text-6-3")) {
            showWithoutBlock("envelope-text-6-6");
        }
        else {
            showWithoutBlock("envelope-text-6-5");
        }
        show("fin-text");
    };
}

function hide(id) {
    let element = document.getElementById(id);
    element.style.display = "none";
}

function show(id) {
    let element = document.getElementById(id);
    element.style.display = "block";
    element.hidden = false;
}

function showWithoutBlock(id) {
    let element = document.getElementById(id);
    element.hidden = false;
}

function isHidden(id) {
    let element = document.getElementById(id);
    console.log(element);
    return (window.getComputedStyle(element).display === "none");
}