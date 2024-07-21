function sendMail(event) {
    event.preventDefault();  

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        note: document.getElementById("note").value
    };

    const serviceID = "service_rsz0cze";
    const templateID = "template_vklfias";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("note").value = "";
            console.log(res);
            alert("Your message has been sent successfully");
        })
        .catch((err) => console.log(err));
}
