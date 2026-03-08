# Contact Form For Ecommerce Sites - Help Guide
## Purpose
The purpose of this form is to allow customers to contact us with their feedback, complaints, or suggestions about our ecommerce site.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information, including your name and email address.
2. Enter the order number and date of the order you are inquiring about, if applicable.
3. Provide a brief summary of your inquiry in the 'Reason for Contact' field.
4. Write a clear and concise message explaining the issue or suggestion.
5. Select the urgency level and preferred contact method.
6. Finally, click 'Submit' to send your inquiry.

## Field-by-Field Explanation
* **Customer Full Name** (`customer_full_name`, `text`, required): Enter your name as it appears on your identification documents.
* **Email Address** (`customer_email_address`, `email`, required): Enter the email address we'll use to contact you.
* **Phone Number** (`customer_phone_number`, `text`, optional): Enter your mobile or landline number, if you'd like to be contacted over the phone.
* **Order Number** (`order_number`, `text`, optional): If you are inquiring about a specific order, enter the order number here.
* **Order Date** (`order_date`, `date`, optional): If you are inquiring about a specific order, enter the date it was placed.
* **Product Name** (`product_name`, `text`, optional): If you are inquiring about a specific product, enter its name here.
* **Reason for Contact** (`reason_for_contact`, `select_one`, required): Select the primary reason for your contact, from the list provided.
* **Message Subject** (`message_subject`, `text`, required): Briefly describe the issue or suggestion.
* **Your Message** (`detailed_message`, `text`, required): Clearly and concisely explain the issue or suggestion.
* **Urgency Level** (`urgency_level`, `select_one`, required): Choose the urgency level of your inquiry, from High (Urgent) to Low (Information Only).
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, required): Select how you'd like us to contact you, from Email to Phone Call.
* **Date of Submission** (`submission_date`, `date`, required): This field will be automatically populated with today's date.
