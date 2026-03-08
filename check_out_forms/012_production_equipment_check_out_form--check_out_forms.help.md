# Production Equipment Check Out Form - Help Guide
## Purpose
This form is designed to temporarily transfer production equipment to a different location or person. It collects information about the equipment, the user checking out the equipment, and any additional notes or comments.

## How To Complete This Form

1. Fill out your personal contact information in the "User Information" section.
2. Select the type of equipment being checked out from the "Equipment Selection" dropdown.
3. Enter the date of checkout and the date for return or check-in from the "Check Out Date" and "Check In Date" fields, respectively. Note that "Check In Date" is intended to be the date the equipment will be returned to its original location.
4. Provide a brief description of the equipment's condition in the "Equipment Details" field.
5. If applicable, specify the duration of the rental or checkout in the "Rental Duration" field.
6. In the "Client Information" section, fill out the client's contact information: name, email, phone number, and address.
7. Rate the condition of the equipment with "Good", "Fair", or "Poor" in the "Equipment Condition" field.
8. Add any additional comments or notes about the equipment in the "Comments" field.
9. Sign and date the form with your employee signature in the "Employee Signature" field.

## Field-by-Field Explanation

* **User Information** (`user`, `text`, optional): Enter your name and contact information for communication purposes.
* **Equipment Selection** (`equipment`, `select_one`, optional): Choose the type of equipment being checked out.
* **Check Out Date** (`check_out_date`, `date`, optional): Enter the date the equipment was checked out.
* **Check In Date** (`check_in_date`, `date`, optional): Enter the date the equipment is expected to be returned.
* **Equipment Details** (`equipment_details`, `note`, optional): Provide a brief description of the equipment's condition.
* **Rental Duration** (`rental_duration`, `number`, optional): If applicable, enter the duration of the rental period.
* **Total Cost** (`total_cost`, `number`, optional): This field is not relevant for temporary transfers and can be skipped.
* **Client Information** (`client_name`, `text`, optional): Client's name and contact information.
    + **Client Name** (`client_name`, `text`, optional): Enter the client's name.
    + **Client Email** (`client_email`, `email`, optional): Enter the client's email address.
    + **Client Phone** (`client_phone`, `text`, optional): Enter the client's phone number.
    + **Client Address** (`client_address`, `text`, optional): Enter the client's address.
* **Client Signature** (`client_signature`, `text`, optional): This field is not necessary if you're the employee checking out the equipment.
* **Equipment Condition** (`equipment_condition`, `select_multiple`, optional): Rate the condition of the equipment as "Good", "Fair", or "Poor".
* **Comments** (`comments`, `note`, optional): Provide any additional comments or notes about the equipment.
* **Employee Signature** (`employee_signature`, `text`, optional): Sign and date the form with your employee's signature.

Note: Please review and adjust as needed to ensure the form's fields are necessary and logical.
