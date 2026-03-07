<thinking>
We will create a user-facing help guide for the "Website Design Quote And Order Form". This form is designed to collect information from users about their website design needs, including their name, contact details, services required, and any additional quote or message. The form is used to provide quotes and orders for website design services. It is intended to be simple and easy to use, with clear instructions and field explanations to help users complete it successfully. We will follow the provided YAML structure and fields to create a concrete, concise, and practical help guide.

</thinking>

# Website Design Quote And Order Form - Help Guide
## Purpose
The Website Design Quote And Order Form is designed to collect information about your website design needs. Please fill out this form to get a quote or order for our website design services.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your First Name, Last Name, and Email address in the corresponding fields.
2. Provide your phone number in the Phone field.
3. Enter the URL of your existing website, if applicable.
4. Select the services you require from the Services dropdown menu (at least one service must be selected).
5. Enter any additional quote or message in the Quote field.
6. Enter any additional message or information in the Message field.
7. Click Submit to send your form.

## Field-by-Field Explanation
### First Name (`first_name`, text, required: false)
* Your first name as you would like us to address you.

### Last Name (`last_name`, text, required: false)
* Your last name as you would like us to address you.

### Email (`email`, email, required: false)
* Your email address where we can contact you.

### Phone (`phone`, text, required: false)
* Your phone number where we can contact you.

### Website (`website`, text, required: false)
* The URL of your existing website, if you have one.

### Services (`services`, select_multiple, required: true)
* Select at least one service from the list to get a quote:
	+ Website Design
	+ Web Development
	+ E-commerce Development
	+ Social Media Marketing

### Quote (`quote`, text, required: false)
* Any additional quote or message you would like to provide.

### Message (`customer_message`, text, required: false)
* Any additional message or information you would like to provide us.

## Tips
* Please make sure to fill out all required fields (at least one service must be selected).
* Double-check your email and phone number for accuracy.
* If you have any additional files or attachments, you can upload them separately and reference them in your message.
