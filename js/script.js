document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function() {
        // Get form field values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const propertyType = document.getElementById("property-type").value;
        const bedrooms = document.getElementById("bedrooms").value;
        const bathrooms = document.getElementById("bathrooms").value;
        const priceRange = document.getElementById("price-range").value;
        const comments = document.getElementById("comments").value;

        // Validate first name
        if (firstName.trim() === "") {
            alert("Please enter your first name.");
            return;
        }

        // Validate last name
        if (lastName.trim() === "") {
            alert("Please enter your last name.");
            return;
        }

        // Validate phone
        if (phone.trim() === "") {
            alert("Please enter your phone number.");
            return;
        }

        // Validate email
        if (email.trim() === "") {
            alert("Please enter your email address.");
            return;
        }

        // Validate property type
        if (propertyType === "") {
            alert("Please select a property type.");
            return;
        }

        // Validate bedrooms and bathrooms
        if (bedrooms.trim() === "") {
            alert("Please enter the number of bedrooms.");
            return;
        }

        if (bathrooms.trim() === "") {
            alert("Please enter the number of bathrooms.");
            return;
        }

        // Validate price range
        if (priceRange.trim() === "") {
            alert("Please enter a price range.");
            return;
        }

        // If all validations pass, show the success message
        alert("Registered Successfully");

        // Clear form fields after successful submission (optional)
        form.reset();
    });
});
