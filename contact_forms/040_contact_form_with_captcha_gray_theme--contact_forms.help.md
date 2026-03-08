<thinking>
The form is used to collect contact information and inquiry details from users, and to validate their humanity through a CAPTCHA test. It will only be used for internal purposes and not to solicit responses from the same user multiple times.
</thinking>

# Contact Form With Captcha Gray Theme - Help Guide
## Purpose
This form is designed to gather contact information and inquiry details from users, to allow our team to respond to their questions and requests in a timely and efficient manner.

## How To Complete This Form
To complete this form, simply fill in the required fields with the requested information and follow these steps:

1. Enter your full name, ensuring it matches your official identification documents.
2. Provide your primary email address for contact purposes.
3. Enter your phone number (optional).
4. Enter a brief subject summarizing your inquiry.
5. Type a detailed message describing your inquiry.
6. Select "I am human" in the CAPTCHA verification field to confirm you are not a robot.
7. Enter the current date in the submission date field.

## Field-by-Field Explanation
* **Your Full Name** (`contact_name`, text, required): Enter your full name as it appears on your identification documents.
* **Your Email Address** (`contact_email`, email, required): Enter your primary email address for contact purposes.
* **Your Phone Number** (`contact_phone`, text, optional): Enter your mobile or home phone number.
* **Subject** (`inquiry_subject`, text, required): Enter a brief summary of your inquiry.
* **Your Message** (`detailed_message`, text, required): Type a detailed description of your inquiry.
* **CAPTCHA Verification** (`captcha_verification`, select_one, required): Select "I am human" to confirm you are not a robot.
* **Date of Submission** (`submission_date`, date, required): Enter the current date.
* **Phone Number** (`contact_phone`, text, optional): This field is optional and will be used only if you want to provide your phone number for contact purposes.
* **Security** (`section_security`, note, required): This section is intended to serve as a visual separator between the contact and inquiry details fields.
* **Inquiry Details** (`section_inquiry_details`, note, required): This section is intended to serve as a visual separator between the contact and inquiry details fields.
* **CAPTCHA Verification** (`captcha_verification`, select_one, required): This field is used to prevent automated scripts and robots from submitting the form. If you select "I am human", it will confirm that you are not a robot.
* **Submission Date** (`submission_date`, date, required): Enter the current date to track when your inquiry was submitted.
