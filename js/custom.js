//
$(document).ready(function () {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});
});

// wow
$(function () {
	new WOW().init();
	$(".rotate").textrotator();
})

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// needed data from emailJS
const publicKey = "QpyO4fv09mT-Z_q_I";
const serviceId = "service_bintangduinata";
const templateId = "template_ukftpsj";

// initialize emailJS with public key
emailjs.init(publicKey)

// Add submit event to the form
contactForm.addEventListener("submit", e => {
	e.preventDefault();
	submitBtn.innerText = "Just A Moment...";
	const inputFields = {
		name : nameInput.value,
		email : emailInput.value,
		message : messageInput.value
	}
	// Send the email
	// (Add service, template ID, and input field values)
	emailjs.send(serviceId, templateId, inputFields).then(() =>{
		submitBtn.innerText = "Message Sent Successfully";
		// clear out all input fields
		nameInput.value = "";
		emailInput.value = "";
		messageInput.value = "";
	}, (error) =>{
		console.log(error);
		submitBtn.innerText = "Something Went Wrong";
	});
});