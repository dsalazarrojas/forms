<thinking>
  This form is used for requesting parts from a customer or internal team member. It is designed to collect relevant information about the customer, contact details, part specifications, and special requests. This form reduces duplication of effort and ensures that all necessary information is collected in a single, easy-to-use interface.
  Before filling out this form, please make sure that the parts request is not already in process. Check the internal database or previous requests from the customer to avoid submitting duplicate requests.
</thinking>

# parts_request_form - Help Guide
## Purpose
The parts_request_form is used to request parts from a customer or internal team member.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the Customer Information section with the customer's details.
2. Enter the contact details of the person submitting the request.
3. Provide the part details, including part number.
4. Enter the quantity and unit price of the part.
5. Add any special requests or notes.
6. Enter the customer's email address.

## Field-by-Field Explanation

* **Customer Information (Customer Information)** (`customer_info`, text, required: false): Enter the customer's name, company name, and any other relevant information.
* **Contact Details (Contact Details)** (`contact_details`, text, required: false): Enter the name, phone number, and email address of the person submitting the request.
* **Part Details (Part Details)** (`part_details`, text, required: false): Enter a brief description of the part requested.
* **Part Number (Part Number)** (`part_number`, text, required: false): Enter the part number (e.g., 12345).
* **Quantity (Quantity)** (`quantity`, number, required: false): Enter the number of parts requested.
* **Unit Price (Unit Price)** (`unit_price`, number, required: false): Enter the unit price of the part.
* **Special Requests (Special Requests)** (`special_requests`, text, required: false): Enter any special requests or notes for the part.
* **Part Notes (Part Notes)** (`part_notes`, text, required: false): Enter any additional notes or comments about the part.
* **Email (Email)** (`email`, email, required: false): Enter the customer's email address.
