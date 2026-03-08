# Retail Loyal Program Enrollment - Help Guide

## Purpose
This form is used to enroll a customer into the retail loyalty program.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter the customer's first name in the "Customer First Name" field.
2. Enter the customer's last name in the "Customer Last Name" field.
3. Enter the customer's email address in the "Email" field.
4. Enter the customer's contact number in the "Contact Number" field.
5. Select the customer's preferred contact method from the "Contact Method" dropdown menu.
6. If other contact method is selected, enter the other contact method in the "Other" field.
7. Enter the customer's store ID in the "Store ID" field.
8. Select the customer's loyalty program from the "Loyalty Program" dropdown menu.
9. If other loyalty program is selected, enter the other loyalty program in the "Other" field.
10. Enter the date and time of enrollment in the "Enrollment Date" and "Enrollment Time" fields.
11. Add any additional notes about the customer in the "Notes" field.
12. Add any additional customer notes in the "Customer Notes" field.

## Field-by-Field Explanation

* **Customer First Name** (`customer_first_name`, text, required): Enter the first name of the customer.
* **Customer Last Name** (`customer_last_name`, text, required): Enter the last name of the customer.
* **Email** (`email`, email, required): Enter the customer's email address.
* **Contact Number** (`contact_number`, text, required): Enter the customer's contact number.
* **Contact Method** (`preferred_contact_method`, select_one, required): Select how the customer would like to be contacted (Phone, Email, Mail).
* **Other Contact Method** (`preferred_contact_method_other`, text, optional): Enter the other contact method if it is not listed in the dropdown menu.
* **Store ID** (`store_id`, number, required): Enter the customer's store ID.
* **Loyalty Program** (`loyalty_program`, select_one, required): Select the customer's loyalty program (Loyalty, Rewards).
* **Other Loyalty Program** (`loyalty_program_other`, text, optional): Enter the other loyalty program if it is not listed in the dropdown menu.
* **Enrollment Date** (`enrollment_date`, date, required): Enter the date of enrollment.
* **Enrollment Time** (`enrollment_time`, time, required): Enter the time of enrollment.
* **Notes** (`notes`, note, optional): Add any additional notes about the customer.
* **Customer Notes** (`customer_notes`, note, optional): Add any additional customer notes.
