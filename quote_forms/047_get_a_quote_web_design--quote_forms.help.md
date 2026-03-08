# Get A Quote Web Design - Help Guide

## Purpose
The "Get A Quote Web Design" form is designed to provide a simple and efficient way to get a quote for web design services. This form collects essential information from clients, including company name, services offered, contact details, and quote details. The purpose of this form is to streamline the quote process, allowing clients to easily provide their requirements and designers to create a quote accordingly.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your company name in the "What is your company name" field.
2.  Select the services you are offering from the "What services are you offering?" dropdown.
3.  Enter your email address in the "What is your email address" field.
4.  Enter your phone number in the "What is your phone number" field.
5.  Enter your website URL in the "What is your website URL" field. Note that this field accepts a URL.
6.  Enter a message to the client in the "Message to client" field.
7.  Enter the client's name in the "Client name" field.
8.  Enter project details in the "Project details" field.
9.  Enter the quote price in the "Quote price" field. This field accepts numerical values only.
10.  Enter the payment terms in the "Payment terms" field.
11.  Select the payment method from the "Payment method" dropdown.
12.  Leave a note for the client's signature in the "Client signature" field.
13.  Leave a note for your signature as the designer in the "Designer signature" field.
14.  Enter the date in the "Date" field.
15.  Select the time in the "Time" field.
16.  Enter the quote number in the "Quote number" field.
17.  Enter the quote validity in the "Quote validity" field.

## Field-by-Field Explanation

*   **What is your company name** (`user_input`, text, required: false): Enter the name of your company.
*   **What services are you offering?** (`services_offered`, select\_multiple, required: false): Select the services you are offering (e.g., Web Design, Development, Hosting).
*   **What is your email address** (`email_address`, email, required: false): Enter your email address in the format `example@example.com`.
*   **What is your phone number** (`phone_number`, text, required: false): Enter your phone number without any punctuation or special characters.
*   **What is your website URL** (`website_url`, text, required: false): Enter the URL of your website, starting with `http://` or `https://`.
*   **Message to client** (`message_to_client`, text, required: false): A brief message to the client.
*   **Client name** (`client_name`, text, required: false): Enter the client's name.
*   **Project details** (`project_details`, text, required: false): Enter the details of the project.
*   **Quote price** (`quote_price`, number, required: false): Enter the quote price.
*   **Payment terms** (`payment_terms`, text, required: false): Enter any specific payment terms.
*   **Payment method** (`payment_method`, select\_one, required: false): Select the payment method (e.g., Bank Transfer, PayPal, Western Union).
*   **Client signature** (`client_signature`, note, required: false): A note for the client's signature.
*   **Designer signature** (`designer_signature`, note, required: false): A note for your signature as the designer.
*   **Date** (`date`, date, required: false): Enter the date in the format `YYYY-MM-DD`.
*   **Time** (`time`, time, required: false): Select the time of day.
*   **Quote number** (`quote_number`, text, required: false): A unique number for the quote.
*   **Quote validity** (`quote_validity`, text, required: false): Enter the quote validity period.
