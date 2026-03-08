# front_desk_inquiry_form - Help Guide

## Purpose
This form is used by the front desk team to gather information from guests regarding their length of stay, services requested, type of inquiry, and any additional details or contact information. It's essential to fill out this form accurately to ensure proper communication and response.

## How To Complete This Form
1. Start by selecting the correct stay length from the options provided in the "Stay length" field.
2. Choose the services you would like to inquire about from the options in the "Which services can we help you with?" field.
3. Select the type of inquiry this is, such as "General Inquiry", "Reservation", "Complaint", or "Suggestion".
4. Fill in the "Inquiry details" field with as much information as possible about your question or concern.
5. (Optional) If you have a phone number, you can enter it in the "Phone" field for further communication.
6. Enter your email address in the "Email" field to receive notifications or responses regarding your inquiry.

## Field-by-Field Explanation
* **Stay length** (`stay_length`, number, required): Enter the length of your stay to help us understand your needs better.
* **Which services can we help you with?** (`services`, select_one, required): Select up to one service that you would like help with.
* **What type of inquiry is this?** (`inquiry_type`, select_one, required): Choose the type of inquiry to help us categorize your request.
* **Inquiry details** (`inquiry_details`, text, required): Please provide as much information as possible about your inquiry.
* **Phone** (`phone`, text, optional): Enter your phone number for further communication.
* **Email** (`email`, email, required): Enter your email address to receive notifications or responses regarding your inquiry.
