var burger = document.getElementById("burger");
var del = document.getElementById("del");
var menu = document.getElementById("menu-bg");
var brg_ul = document.getElementById("opened-menu");
var next = document.getElementById("next-button");
var into = document.getElementById("part2");

next.onclick = function goDown(){
    into.scrollIntoView({behaviour: "smooth", block: "end"});
};

burger.onclick = function brgClick(){
    menu.style.display = "block";
    brg_ul.style.display = "block";
    burger.style.display = "none";
    del.style.display = "block";
};

del.onclick = function delClick(){
    menu.style.display = "none";
    brg_ul.style.display = "none";
    burger.style.display = "block";
    del.style.display = "none";
};

function openCourse(){
    window.open("course.html", "_self");
};

var send_btn = document.querySelector('#send_button');

send_btn.onclick = function send(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aweb.edu.a@gmail.com",
        Password : "1C5995618795AAFF2D27D5C616AA7ECD12EB",
        To : 'movsisjanareg@gmail.com',
        From : "aweb.edu.a@gmail.com",
        Subject : "One Quesion",
        Body : "Hello! I am Areg. And this is the body"
    }).then(
        message => alert(message)
      );
};