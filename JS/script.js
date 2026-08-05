//  Menu Button 
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menuList.classList.toggle('active')
})

// Book Seminar
const sendMessage = document.querySelector('.send-btn');

sendMessage.addEventListener('click', e => {
    e.preventDefault();

    const templateData = {
        from_name: document.getElementById("yname").value,
        college_name: document.getElementById("cname").value,
        department: document.getElementById("dept").value,
        user_email: document.getElementById("mail").value, // 'email_id' ku badhula 'user_email'
        phone_number: document.getElementById("number").value,
        message: document.getElementById("desc").value
    };

    // return add pannuna dhaan data illana process stop aagum
    if (!templateData.from_name || !templateData.email_id || !templateData.message) {
        alert("Please fill all required fields!");
        return; // Idhu mukkiyam!
    }

    // Loading state (Optional: Button-ai disable panna useful-ah irukum)
    sendMessage.innerText = "Sending...";
    sendMessage.disabled = true;

    emailjs.send('service_0cqb2jt', 'template_8aeo9mj', templateData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully! Madhan will contact you soon. ✅");

            // Form clear panna
            document.querySelectorAll(".form input").forEach(input => input.value = "");

            // Button restore
            sendMessage.innerText = "Send Message";
            sendMessage.disabled = false;
        }, function (error) {
            console.log('FAILED...', error);
            alert("Oops! Something went wrong. Please try again. ❌");

            sendMessage.innerText = "Send Message";
            sendMessage.disabled = false;
        });
});