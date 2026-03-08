<thinking>
This form is used to collect contact information and messages from users who want to get in touch with the fitness center. The form should only be used for legitimate contact purposes and not for spam or abuse. To ensure that the form is not used for spam or abuse, we have implemented the following checks: each field is optional, and the form does not allow for multiple submissions from the same user at once. The form is designed to be user-friendly, easy to fill out, and efficient for the staff at the fitness center to receive and respond to messages.
</thinking>

# Fitness Center Contact Form - Help Guide
## Purpose
The Fitness Center Contact Form is designed to allow users to get in touch with the fitness center staff and provide them with information and messages. This form can be used to schedule appointments, ask questions, or provide feedback.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill out the User Information section with your name, email, and phone number.
2. In the Message section, type your message or question.
3. If you have a specific date and time in mind for your appointment or visit, fill out the Date and Time fields respectively.
4. Select the Fitness Center that you are interested in visiting from the options provided.
5. Choose the type of service you are interested in from the Type of Fitness options.
6. Optionally, fill out the Staff Name, Staff Email, Staff Phone, and Staff Note fields for staff contact purposes.
7. Add any additional notes that you want to include in the Client Note field.
8. Select the option to Send Email to send a copy of your message to yourself.

## Field-by-Field Explanation
* **User Information** (`user_info`, text, required): This section is used to collect your basic contact information. Please fill out your name, email address, and phone number so that the staff at the fitness center can reach out to you.
* **Message** (`message`, text, required): This is where you can type your message or question. Be as clear and concise as possible.
* **Date** (`date`, date, optional): If you have a specific date in mind for your appointment or visit, please enter it here.
* **Time** (`time`, time, optional): If you have a specific time in mind for your appointment or visit, please enter it here.
* **Fitness Center** (`fitness_center`, select_one, optional): Choose the fitness center that you are interested in visiting from the options provided.
* **Type of Fitness** (`fitness_type`, select_multiple, optional): Choose the type of service you are interested in from the options provided.
* **Staff Name** (`staff_name`, text, optional): If you know the name of the staff member who you would like to contact, you can fill this field out.
* **Staff Email** (`staff_email`, text, optional): If you know the email address of the staff member who you would like to contact, you can fill this field out.
* **Staff Phone** (`staff_phone`, text, optional): If you know the phone number of the staff member who you would like to contact, you can fill this field out.
* **Staff Note** (`staff_note`, text, optional): Add any additional notes for the staff member who will be contacting you.
* **Client Note** (`client_note`, text, optional): Add any additional notes that you would like to include in your message.
* **Send Email** (`send_email`, select_one, optional): Select this option to send a copy of your message to yourself.

## Tips
* Please make sure to fill out all required fields to ensure that the staff at the fitness center can contact you efficiently.
* Be as clear and concise as possible in your message to get the best response from the staff.
* If you have any specific requests or requirements, please include them in the Client Note field.
