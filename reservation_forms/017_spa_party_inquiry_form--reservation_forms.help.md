<thinking>...</thinking>

# spa_party_inquiry_form - Help Guide
## Purpose

This form is intended to collect information from customers to help us better serve them. It's meant to gather details such as name, phone number, email, and spa services preferences for a reservation inquiry.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the page "reservation_inquiry" (page 1) and type or enter your message in the "spa_inquiry_message" field.
2. Move to the next page where you'll be able to select your preferred spa services.
3. Ensure that all required fields on both pages are filled in correctly.
4. Submit the form to send your reservation inquiry to us.

## Field-by-Field Explanation

* **spa_party_inquiry_form**
    (`spa_party_inquiry_form`, object, required/optional): This is the main form title.
* **reservation_inquiry** (reservation_inquiry, text, optional)
    Enter a message or note to help us understand your inquiry.
* **spa_services** (spa_services, text, optional)
    Select the spa services you're interested in.
* **customer_name** (customer_name, text, required)
    Please enter your name for our records.
* **customer_phone** (customer_phone, text, required)
    Enter your phone number so we can contact you.
* **email** (email, email, required)
    Enter your email address for us to contact you.
* **spa_inquiry_date** (spa_inquiry_date, date, optional)
    Select a date for your inquiry, if applicable.
* **spa_inquiry_time** (spa_inquiry_time, time, optional)
    Select a time for your inquiry, if applicable.
* **spa_inquiry_message** (spa_inquiry_message, text, optional)
    Enter any additional comments or message for your inquiry.
