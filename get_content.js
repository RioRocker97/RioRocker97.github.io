//var getcontent = new Request("./mycontent.txt");
//var content= fetch(getcontent).then(x => x.text())
//console.log(content)
var content ={
    c1 : {a : "Kasin Yamsri <Chang>",b:"I like to do computer stuff.<br>I hope i can do something cool and useful to other peoples !"},
    c2 : {a : "Who am i ?",b:"A regular boy who like to use computer for good.<br><br> Got mad coding skills<br><br> Professional time killer."},
    c3 : {head: "My Mad skill",a:"Computer is good",b:"Coding is ok"},
    c4 : {head: "My Experience",a:"I used to do a lot of things <br><br> Hope that help !"},
    c5 : {head: "Call me?",a:"084-744-0744"},
}
const con1 = document.getElementById("c1");
const con1_2 = document.getElementById("c1_2");

const con2 = document.getElementById("c2");
const con2_2 = document.getElementById("c2_2");

const con3 = document.getElementById("c3");
const con32 = document.getElementById("c3_h2");
const con3_1 = document.getElementById("c3_1");
const con3_2 = document.getElementById("c3_2");

const con4 = document.getElementById("c4");
const con4_1 = document.getElementById("c4_1");

const con5 = document.getElementById("c5");
const con5_1 = document.getElementById("c5_1");

con1.innerHTML+= content.c1.a;
con1_2.innerHTML+= content.c1.b;

con2.innerHTML+= content.c2.a;
con2_2.innerHTML+= content.c2.b;

con3.innerHTML+= content.c3.head;
con32.innerHTML+= content.c3.head;
con3_1.innerHTML+= content.c3.a;
con3_2.innerHTML+= content.c3.b;

con4.innerHTML+= content.c4.head;
con4_1.innerHTML+= content.c4.a;

con5.innerHTML+= content.c5.head;
con5_1.innerHTML+= content.c5.a;

