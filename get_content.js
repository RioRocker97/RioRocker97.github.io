var content ={
    c1 : "Hello c1",
    c2 : "Hello c2",
    c3 : "Hello c3",
    c4 : "Hello c4"
}
const con1 = document.getElementById("c1");
const con2 = document.getElementById("c2");
const con3 = document.getElementById("c3");
const con4 = document.getElementById("c4");
con1.innerHTML+= content.c1;
con2.innerHTML+= content.c2;
con3.innerHTML+= content.c3;
con4.innerHTML+= content.c4;