<thinking>
This form is designed to gather basic contact information from users, allowing them to reach out to the company for support, general inquiries, or other purposes. The form is intended to be a simple and user-friendly way to initiate contact.
</thinking>

# Clean Contact Form V2 - Help Guide
## Purpose
The "Clean Contact Form V2" is a contact form used for users to get in touch with the company for various reasons such as general inquiries, support requests, or other purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Click on the "Contact Us" heading to begin.
2. Fill in your full name and email address in the required fields.
3. Select your preferred contact method (email or phone) and choose a subject for your inquiry (e.g., General Inquiry, Support Request, etc.).
4. Type your message in the "Message" field.
5. Decide whether you'd like to subscribe to our newsletter by selecting "True" or "False" in the "Subscribe to our newsletter?" field (this is optional).
6. If you'd like, you can also provide a phone number for further contact.

## Field-by-Field Explanation
* **-- Contact Us --** (`contact_info_header`, `note`, not required): This is the heading for the contact form section.
* **Full Name** (`full_name`, `text`, required): Please fill in your full name to allow us to contact you.
* **Email Address** (`email_address`, `email`, required): Enter your email address so we can reach out to you.
* **Phone Number** (`phone_number`, `text`, not required): This is your phone number, and providing it allows us to contact you by phone.
* **Subject** (`subject`, `select_one`, required): Choose a reason for your contact (e.g., General Inquiry, Support Request, etc.).
* **Message** (`message_body`, `text`, required): Type your message here, and we'll get back to you as soon as possible.
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, required): Select whether you'd like to be contacted by email or phone.
* **Subscribe to our newsletter?** (`Newsletter_opt_in`, `select_one`, not required): Decide whether you'd like to subscribe to our newsletter (True or False).
* **Date** (`submission_date`, `date`, not required): This field is not currently in use, but if it were, it would be the date of submission.
