const myform=document.getElementById("myform")


function sendEmail(e){
    e.preventDefault();
    
const name= document.getElementById("name")
const useremail=document.getElementById("useremail")
const msg= document.getElementById("msg")


Email.send({
    SecureToken : "3ec6197f-f0b5-4d09-9bbb-5aae300f11cd",
    To :'hasansakalli33@gmail.com',
    From :'hasansakalli33@gmail.com',
    Subject : "Nachhilfe Kontakt Formular",
    Body :`${name.value} <br> ${useremail.value} <br> ${msg.value}`
}).then(
  message => alert(message)
);


name.value="",
useremail.value=""
msg.value=""
}



myform.addEventListener("submit", sendEmail) 

//F35EF3AC113B1E4D91BEABA07027DE0923E3//

// 1050652937ED98EA749E64654109239572C4EE4E98D893C4BF292C76D7D1EFA189D9D1118014EE87ACE8A0A578DD1FEB