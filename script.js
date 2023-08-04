// Get elements that want to interact with
const ctaButton = document.querySelector(".cta-button");
const contactForm = document.getElementById("contactForm");

//  click event listener to the CTA button
ctaButton.addEventListener("click", function () {
  window.location.href = "https://example.com/get-started";
});

//submit event listener to the contact form
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Replace with your desired action
  const formData = new FormData(contactForm);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log(formDataObject); // Log form data for demonstration
});
