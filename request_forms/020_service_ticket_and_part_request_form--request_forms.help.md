# Service Ticket And Part Request Form - Help Guide

## Purpose
This form is used for customers to submit service requests, such as repair or replacement needs, along with specific details about the part involved. It helps our team understand the customer's requirements accurately, ensuring efficient processing and resolution.

## How To Complete This Form

1. Fill in your name as the customer.
2. Enter your email address so we can contact you for further information or updates.
3. Provide your phone number for any additional communication needs.
4. Select the type of service you require from the "Ticket Type" dropdown menu:
	* Repair: For fixing or repairing an existing part.
	* Replacement: For replacing a part entirely.
	* Other: For other custom requests.
5. Choose one or more services you need from the "Service Type" multi-select menu:
	* Service 1
	* Service 2
	* Service 3
6. In the "Part Details" field, provide a clear and concise description of the part you need, including any specific details that may aid in the repair or replacement process.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, optional): Enter your name as the customer.
* **Customer Email** (`customer_email`, email, optional): Enter a valid email address for us to contact you with updates or additional questions.
* **Customer Phone** (`customer_phone`, text, optional): Provide your phone number for any additional communication needs.
* **Ticket Type** (`ticket_type`, select_one, optional): Select the type of service you require:
	+ Repair: For fixing or repairing an existing part.
	+ Replacement: For replacing a part entirely.
	+ Other: For other custom requests.
* **Service Type** (`service_type`, select_multiple, optional): Choose one or more services you need:
	+ Service 1
	+ Service 2
	+ Service 3
* **Part Details** (`part_details`, note, optional): Provide a clear and concise description of the part you need, including any specific details that may aid in the repair or replacement process.

## Tips

* Please be as detailed as possible when filling out the "Part Details" field to ensure our team can assist you efficiently.
* If you have any additional comments or questions, feel free to add them in the "Part Details" field as well.
* If you need to add or remove services from your selection, use the "+" and "-" buttons next to "Service Type" to make changes.
