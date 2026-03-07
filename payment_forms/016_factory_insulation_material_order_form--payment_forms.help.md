<thinking>
This guide will cover the creation of a user-facing help document for the "Factory Insulation Material Order Form". This form is likely used to capture information for a factory that needs to order insulation materials. The form will be used internally within the factory or for communication with external stakeholders or customers.
The form will have fields for material type, quantity ordered, insulation product, delivery date, delivery time, customer name, contact number, email, address, notes, assigned status, and assigned to personnel. The purpose of the form is to ensure accuracy and completeness of the order, and to facilitate smooth communication and processing within the factory or with external parties.
Please ensure that the form is not used for other purposes than intended, and that the fields are completed according to their intended use.
</thinking>

# Factory Insulation Material Order Form - Help Guide

## Purpose
The Factory Insulation Material Order Form is designed to collect information for ordering insulation materials at the factory. This form helps ensure that all necessary details are captured accurately and communicated effectively.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the material type for the order.
2. Enter the quantity of the insulation material ordered.
3. Choose the specific insulation product required.
4. Provide the delivery date for the order.
5. Specify the delivery time.
6. Enter the customer's name and contact information.
7. Add any additional notes about the order.

## Field-by-Field Explanation

* **Material Type** (`material_type`, select_one, not required):
	+ This field asks if the material being ordered is insulation or not. Please select 'Yes' if the material is insulation, and 'No' otherwise.
* **Quantity Ordered** (`quantity_ordered`, number, not required):
	+ This field is for entering the amount of the insulation material ordered.
* **Insulation Product** (`insulation_product`, select_one, not required):
	+ This field allows you to choose the specific type of insulation product being ordered.
* **Delivery Date** (`delivery_date`, date, not required):
	+ Enter the date when the order is expected to be delivered.
* **Delivery Time** (`delivery_time`, time, not required):
	+ Specify the time of delivery for the order.
* **Customer Name** (`customer_name`, text, not required):
	+ Enter the name of the customer or the person placing the order.
* **Contact Number** (`contact_number`, text, not required):
	+ Provide the phone number of the customer or contact person.
* **Email** (`email`, email, not required):
	+ Enter the email address of the customer or contact person.
* **Address** (`address`, text, not required):
	+ Enter the physical address of the customer or contact person.
* **Notes** (`notes`, note, not required):
	+ Add any additional information about the order in this field.
* **Assigned** (`assigned`, select_one, not required):
	+ If the order has been assigned to a specific personnel, select 'Yes'. Otherwise, select 'No'.
* **Assigned To** (`assigned_to`, select_one, not required):
	+ If the order has been assigned to a specific personnel, select their name or ID.

## Tips
* Please ensure that all fields are filled with accurate and complete information to facilitate smooth processing and delivery of the order.
* If you are unsure about any field, consult with your supervisor or the customer before completing the form.
* If you need to make any changes to the order, update the corresponding fields accordingly.
