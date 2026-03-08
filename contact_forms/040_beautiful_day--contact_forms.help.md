# Beautiful Day - Help Guide
## Purpose
The "Beautiful Day" form is a contact form designed for visitors to reach out to the company for various reasons. It is used to collect information for general inquiries, support requests, feedback, and potential partnership opportunities.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide your full name in the "Your Name" field.
2. Enter your email address in the "Email Address" field.
3. If you have a phone number, enter it in the "Phone Number" field. This is optional.
4. Specify the subject of your message or inquiry in the "Subject" field.
5. In the "Message" field, describe your message or request.
6. Select the type of inquiry that best describes your message or request from the "Type of Inquiry" dropdown menu.
7. Choose your preferred contact method from the "Preferred Contact Method" dropdown menu.
8. If you prefer phone contact, indicate the best time for us to reach you from the "Best Time to Contact" dropdown menu. This is only required if you selected "Phone" as your preferred contact method.
9. Decide if you would like to join our newsletter by selecting "True" or "False" from the "Would You Like to Join Our Newsletter" dropdown menu.
10. Finally, specify how you heard about us from the "How Did You Hear About Us" dropdown menu. This is optional.

## Field-by-Field Explanation
* **Your Name** (`visitor_name`, text, required): Enter your full name as it appears on your official documents or how you would like to be addressed.
* **Email Address** (`email_address`, email, required): Provide the email address we can use to contact you.
* **Phone Number** (`phone_number`, text, optional): If you have a phone number, enter it here.
* **Subject** (`subject`, text, required): Briefly describe the purpose or topic of your message.
* **Message** (`message`, text, required): Type your message or request in the space provided.
* **Type of Inquiry** (`inquiry_type`, select_one, required): Select the type of inquiry that best describes your message or request.
* **Preferred Contact Method** (`preferred_contact`, select_one, required): Choose how we should contact you - Email, Phone, or Either.
* **Best Time to Contact** (`best_time`, select_one, optional): If you selected "Phone" as your preferred contact method, indicate the best time for us to reach you.
* **Would You Like to Join Our Newsletter** (`newsletter_signup`, select_one, required): Decide if you would like to join our newsletter by selecting "True" or "False".
* **How Did You Hear About Us** (`how_did_you_hear`, select_one, optional): Specify how you heard about us, if you'd like.
