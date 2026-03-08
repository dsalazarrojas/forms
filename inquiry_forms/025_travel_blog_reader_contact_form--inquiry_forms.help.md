# Travel Blog Reader Contact Form - Help Guide

## Purpose
The Travel Blog Reader Contact Form is designed to allow users to reach out to the blog owner or author with their questions, feedback, or collaboration requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of inquiry you'd like to make from the options provided.
2. Enter your email address in the "Email" field, if you'd like to be contacted.
3. Enter your phone number in the "Phone" field, if you'd like to be contacted.
4. Write your message in the "Message" field.
5. Fill in your name in the "Name" field.
6. Enter any additional information you'd like to share in the "Question" field.
7. (Optional) If you have a preferred way to be contacted, select the type of phone from the options provided.

## Field-by-Field Explanation
* **User Input** (`user_input`, `text`, optional): Enter any additional information you'd like to provide about your inquiry.
* **Type of inquiry** (`question_type`, `select_one`, required): Select one of the following options to indicate the type of inquiry you'd like to make:
	+ Question
	+ Feedback
	+ Collaboration
* **Email** (`user_email`, `email`, optional): Enter a valid email address if you'd like to be contacted.
* **Phone** (`phone_number`, `text`, optional): Enter your phone number, if you'd like to be contacted.
* **Message** (`message`, `note`, required): Write a brief message describing your inquiry.
* **Name** (`user_name`, `text`, required): Enter your name.
* **Question** (`question`, `text`, required): Enter any additional information you'd like to share.
* **Type of phone** (`user_phone_type`, `select_one`, optional): Select your preferred type of phone number:
	+ Mobile
	+ Landline
