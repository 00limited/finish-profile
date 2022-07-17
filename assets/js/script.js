function sendMail()
{
    let body =document.getElementById("area").value;
    let subjectLine = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let phone= document.getElementById("phone").value;

    let myEmail = "BNN@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${myEmail}?subject=${subjectLine}&body=Hello, my name ${name}, ${body}, call me in this number ${phone}`
    a.click()

}