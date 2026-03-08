<thinking>
This guide is intended to help users understand the purpose and functionality of the "Contact Form With Page Break Message" in our application. This form is designed to collect contact information and details from users, providing a way for them to reach out to us with inquiries or feedback.

Upon reviewing the form's YAML schema, it's clear that the form is divided into four steps: Personal Information, Message Details, Final Submission, and a confirmation of agreement to our Privacy Policy. This division is intended to guide the user through the form submission process, making it easier to understand and fill out.

Before proceeding, let's clarify that this guide is for users who are filling out the form as end-users, not for internal system administrators configuring the form.

</thinking>

# Contact Form With Page Break Message - Help Guide
## Purpose
This contact form is designed to allow users to send us information about their inquiries, feedback, or suggestions. You can use this form to get in touch with us for general inquiries, support requests, sales inquiries, or share feedback.

## How To Complete This Form
To fill out the form, follow the steps below:

1. Fill out your Personal Information (Step 1).
2. Enter your Message Details (Step 2).
3. Confirm your Preferred Contact Method (Step 3).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, *Required*): Enter your first name.
* **Last Name** (`last_name`, `text`, *Required*): Enter your last name.
* **Email Address** (`email_address`, `email`, *Required*): Enter your primary email address for contact.
* **Phone Number** (`phone_number`, `text`, *Optional*): Enter your mobile or home phone number.
* **Subject** (`message_subject`, `select_one`, *Required*): Choose what your inquiry is about: General Inquiry, Support Request, Sales Inquiry, Feedback/Suggestion, or Other.
* **Your Detailed Message** (`detailed_message`, `text`, *Required*): Provide more information about your inquiry or feedback.
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, *Required*): Choose how you'd like us to contact you: Email, Phone Call, or SMS/Text.
* **I Agree to the Privacy Policy** (`agreement_to_privacy_policy`, `select_one`, *Required*): Confirm your agreement to our privacy policy.
* **Date of Submission** (`submission_date`, `date`, *Required*): Select the current date.
* **Thank you for your message!** (`final_note`, `note`, *Optional*): A friendly note after submitting your form.

## Tips
- Make sure to fill out all required fields (marked with an *).
- Choose the correct option for your preferred contact method.
- Select the right date when submitting your form.
- Review and confirm your agreement to our privacy policy.
