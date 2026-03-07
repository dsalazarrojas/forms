<thinking>
This form is a critical component of the rental equipment management system, designed to handle the check-out process for rental equipment. It's essential to understand the purpose and functionality of each field to ensure accurate and efficient processing of the check-out requests. Please review the form schema to determine if any fields are redundant or can be merged without affecting its overall integrity. Ensure that this form is not a duplicate of any existing form, and its purpose and functionality align with the existing business processes.
</thinking>

# rental_equipment_check_out_form - Help Guide

## Purpose
The rental equipment check-out form is used to document the details of a customer's rental equipment check-out request, including customer information, rental equipment details, and payment information.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the customer's name in the `customer_name` field.
2. Select the date of return for the rental equipment from the `date_of_return` field.
3. Indicate whether or not the rental equipment is available (`rental_item` field).
4. Enter the customer's contact number and email for follow-up purposes (`contact_number` and `contact_email` fields).
5. Select the location where the rental equipment is currently being used (`rental_location` field).
6. Choose the payment method(s) used for the rental (`payment_method` field).
7. Enter the total charges for the rental (`total_charges` field).
8. Select the payment status of the rental (`payment_status` field).
9. Provide any additional notes or comments for the payment method (`payment_method_note` field).

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required/optional): Enter the name of the customer making the rental request.
* **Date of Return** (`date_of_return`, date, required/optional): Select the date when the rental equipment is due to be returned.
* **Rental Item** (`rental_item`, select_one, required/optional): Indicate whether or not the rental equipment is available.
* **Contact Number** (`contact_number`, text, required/optional): Enter the customer's contact number for follow-up purposes.
* **Contact Email** (`contact_email`, email, required/optional): Enter the customer's email address for follow-up purposes.
* **Rental Location** (`rental_location`, select_one, required/optional): Select the location where the rental equipment is currently being used.
* **Payment Method** (`payment_method`, select_multiple, required/optional): Choose the payment method used for the rental.
* **Total Charges** (`total_charges`, number, required/optional): Enter the total charges for the rental.
* **Payment Status** (`payment_status`, select_one, required/optional): Select the payment status of the rental.
* **Payment Method Note** (`payment_method_note`, note, required/optional): Provide any additional notes or comments for the payment method.
* **Assigned Form ID** (`assigned_form_id`, number, required/optional): Enter the assigned form ID for tracking purposes.
* **Assigned Tool** (`assigned_tool`, text, required/optional): Enter the assigned tool for tracking purposes.
* **Form Category** (`form_category`, text, required/optional): Enter the category of the form for organizational purposes.
* **Form Description** (`form_description`, text, required/optional): Enter a description of the form for reference purposes.
