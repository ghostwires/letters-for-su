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
        // TODO
    };
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}