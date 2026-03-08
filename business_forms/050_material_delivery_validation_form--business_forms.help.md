<thinking>
We need to ensure the form is filled out correctly for the right purpose and not duplicated for the same purpose. This form is for validating material deliveries, and it's essential to provide accurate information for tracking and inventory management. Please ensure that you're filling out the form for the correct material and delivery date. If you're unsure, refer to the material delivery process documentation for guidance.</thinking>

# material_delivery_validation_form - Help Guide
## Purpose
This form is for validating material deliveries. Please fill it out with the correct information to ensure accurate tracking and inventory management.

## How To Complete This Form
To fill out this form, follow these steps:
1. Enter the delivery date of the material in the **delivery date** field.
2. Enter the **material id** of the material received.
3. Enter the quantity of material received.
4. Describe the condition of the material in the **material condition** field.
5. Enter the name of the person who received the material in the **received by** field.
6. Enter the name of the person who delivered the material in the **delivered by** field.
7. Enter the name of the person who verified the material in the **verified by** field.
8. Add any additional notes or comments in the **notes** field.
9. Enter the email address of the person filling out the form if required.

## Field-by-Field Explanation
* **delivery_date** (`delivery_date`, date, required: false): Enter the date the material was delivered.
* **material_id** (`material_id`, number, required: false): Enter the id of the material received.
* **received_quantity** (`received_quantity`, number, required: false): Enter the quantity of material received.
* **material_condition** (`material_condition`, text, required: false): Describe the condition of the material.
* **received_by** (`received_by`, text, required: false): Enter the name of the person who received the material.
* **delivered_by** (`delivered_by`, text, required: false): Enter the name of the person who delivered the material.
* **verified_by** (`verified_by`, text, required: false): Enter the name of the person who verified the material.
* **notes** (`notes`, note, required: false): Add any additional notes or comments.
* **email** (`email`, email, required: false): Enter the email address of the person filling out the form if required.
