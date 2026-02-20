// ===============================
// Smooth Scroll for Navigation
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// Sticky Navbar Shadow on Scroll
// ===============================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// ===============================
// Mobile Menu Toggle (Optional)
// ===============================
// If later you add a hamburger icon, this will work automatically

const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('show');
}


// ===============================
// Button Click Scroll (Get a Quote)
// ===============================
const quoteBtn = document.querySelector('.btn');

if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}


// ===============================
// Console Message (Optional)
// ===============================
console.log("SK Autosphere website loaded successfully 🚜🏍️");



/* ========= 5. Floating WhatsApp Button ========= */
const whatsapp = document.createElement("a");
whatsapp.href = "https://wa.me/919927426906";
whatsapp.target = "_blank";
whatsapp.innerHTML = "💬";
whatsapp.title = "Chat on WhatsApp";

Object.assign(whatsapp.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "55px",
    height: "55px",
    background: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    zIndex: "999"
});

document.body.appendChild(whatsapp);


/* ========= 6. Click to Open Google Maps ========= */
const addressLine = document.querySelector(".contact-section p");

if (addressLine) {
    addressLine.style.cursor = "pointer";
    addressLine.addEventListener("click", () => {
        window.open(
            "https://www.google.com/maps/search/?api=1&query=Dwarikesh+Sugar+Mill+Bundki",
            "_blank"
        );
    });
}


/* ========= 7. Call Button on Mobile ========= */
const phoneLine = document.querySelectorAll(".contact-section p")[1];

if (phoneLine) {
    phoneLine.style.cursor = "pointer";
    phoneLine.addEventListener("click", () => {
        window.location.href = "tel:+919927426906";
    });
}

/* ========= Owner Card Animation ========= */
const ownerCard = document.querySelector(".owner-card");

if (ownerCard) {
    ownerCard.style.opacity = "0";
    ownerCard.style.transform = "translateY(40px)";
    ownerCard.style.transition = "0.7s ease";

    window.addEventListener("scroll", () => {
        const top = ownerCard.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            ownerCard.style.opacity = "1";
            ownerCard.style.transform = "translateY(0)";
        }
    });
}



/* ========= 8. Page Load Fade In ========= */
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.8s ease";


// /* ========= 9. Prevent Accidental Refresh ========= */
// window.addEventListener("beforeunload", e => {
//     e.preventDefault();
//     e.returnValue = "";
// });


/* ========= 10. Console Branding ========= */
console.log(
`🚜 SK AUTOSPHERE 🚜
Bike & Tractor Spare Parts
Website Loaded Successfully`
);


// ===============================
// Contact Form EmailJS Integration
// ===============================

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_rcl3l9o", "template_f3ydlfg", {
        from_name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value
    })
    .then(function(response) {
        alert("Message Sent Successfully ✅");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send message ❌");
        console.log(error);
    });
});
