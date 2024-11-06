document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Use EmailJS to send the email
    emailjs.send("service_cb4kx58", "template_zydzika", {
      subject: subject,
      message: message,
    }, "LJbbsU7o7ia9xKAhN")
    .then(response => {
      alert("Email sent successfully!");
    })
    .catch(error => {
      alert("There was an error sending your email.");
    });
  });
  