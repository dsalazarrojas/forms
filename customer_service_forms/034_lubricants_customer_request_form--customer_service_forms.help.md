<thinking>

## Form Purpose
The `lubricants_customer_request_form` form is designed to collect information about the lubricant preferences and contact information of customers for lubricant-related purposes. It serves as a support ticket for customer inquiries and requests for lubricant services or products.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields (marked as *required*):
	* Full Name: Enter your name as it appears on official documents.
	* email: Enter your contact email address.
	* Message: Provide a detailed message about your lubricant-related inquiry or request.
	* Lubricants: Select the type(s) of lubricant you are interested in.
	* Lubricant: Select the type(s) of lubricant you are interested in.
2. Fill out the optional fields:
	* address: Enter your mailing address for communication purposes.
	* contact: Provide an optional contact number for follow-up.
	* Date: Enter the date of your lubricant-related inquiry or request.
	* Time: Enter the time of your lubricant-related inquiry or request.
	* Customer Service: Select the type of service you would like to inquire about.
	* Customer: Select the type(s) of customer(s) you represent (if applicable).
	* Product: Enter a specific product name (if applicable).

## Field-by-Field Explanation

* **Full Name** (`name`, text, *required*): Enter your full name as it appears on official documents.
* **Address** (`address`, text, *optional*): Enter your mailing address for communication purposes.
* **Email** (`email`, email, *required*): Enter your contact email address.
* **Contact** (`phone`, text, *optional*): Provide an optional contact number for follow-up.
* **Message** (`message`, note, *required*): Provide a detailed message about your lubricant-related inquiry or request.
* **Lubricants** (`lubricants`, select_one, *required*): Select the type(s) of lubricant you are interested in.
* **Date** (`date`, date, *optional*): Enter the date of your lubricant-related inquiry or request.
* **Time** (`time`, time, *optional*): Enter the time of your lubricant-related inquiry or request.
* **Lubricant** (`lubricant`, select_multiple, *required*): Select the type(s) of lubricant you are interested in.
* **Customer Service** (`customer_service`, select_one, *optional*): Select the type of service you would like to inquire about.
* **Customer** (`customer`, select_multiple, *optional*): Select the type(s) of customer(s) you represent (if applicable).
* **Product** (`product`, text, *optional*): Enter a specific product name (if applicable).
