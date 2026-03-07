<thinking>
The form is used for requesting raw materials for pharmaceutical purposes. This form helps the customer to provide the required information about the materials they need, which is then used by the organization to process the order. This form is designed to be simple and user-friendly, with each field clearly labeled and explained. 

The form consists of multiple fields that are divided into different sections. The sections are: Customer Information, Material Details, and Status Updates. The customer is required to fill in their name, address, phone number, email, and department. They also need to specify the material they are requesting, the quantity needed, and the date they need it by. Additionally, they can provide any remarks or comments regarding their request. 

The form also allows the customer to select the status of the material and the route it should be sent to. The shipper and any additional remarks can also be specified in separate fields. 

The purpose of this form is to gather accurate and relevant information from the customer to ensure that the ordered materials are delivered correctly and efficiently. 

The form is designed to be filled out by the customer and submitted to the organization for processing. Once submitted, the form will be reviewed and processed accordingly.
</thinking>

# Pharmaceutical Raw Material Requisition Form - Help Guide

## Purpose
This form is used for requesting raw materials for pharmaceutical purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name and address in the Customer Name and Customer Address fields.
2. Enter your phone number in the Customer Phone field.
3. Enter your email in the Customer Email field.
4. Specify the department you belong to in the Customer Department field.
5. In the Requested Material field, enter the name of the material you are requesting.
6. Enter the quantity of material you need in the Quantity field.
7. Enter the date you need the material by in the Date Needed field.
8. Select the status of the material you are requesting (Active or Inactive).
9. Select whether the material is to be sent to 'Yes' or 'No' in the Route To field.
10. Optionally, provide any additional remarks or comments in the Remarks 1, Remarks 2, and Remarks 3 fields.
11. If the material has been received, enter the Date Received field.
12. If the material has been sent, enter the Date Ship field.
13. Optionally, specify the shipper in the Shipper field.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required): Enter your name as the customer.
* **Customer Address** (`customer_address`, `text`, required): Enter your address as the customer.
* **Customer Phone** (`customer_phone`, `text`, required): Enter your phone number as the customer.
* **Customer Email** (`customer_email`, `email`, required): Enter your email as the customer.
* **Customer Department** (`customer_department`, `text`, required): Specify the department you belong to as the customer.
* **Requested Material** (`requested_material`, `text`, required): Enter the name of the material you are requesting.
* **Quantity** (`quantity`, `number`, required): Enter the quantity of material you need.
* **Date Needed** (`date_needed`, `date`, required): Enter the date you need the material by.
* **Routing Status** (`routing_status`, `select_one`, required): Select the status of the material you are requesting (Active or Inactive).
* **Remarks** (`remarks`, `note`, optional): Provide any additional remarks or comments regarding your request.
* **Route To** (`route_to`, `select_one`, required): Select whether the material is to be sent to 'Yes' or 'No'.
* **Material Status** (`material_status`, `select_multiple`, optional): Select the status of the material (Active or Inactive).
* **Date Received** (`date_received`, `date`, optional): If the material has been received, enter the date it was received.
* **Material Id** (`material_id`, `text`, optional): Enter the ID of the material you are requesting.
* **Quantity Received** (`quantity_received`, `number`, optional): If the material has been received, enter the quantity received.
* **Requisitioned Quantity** (`quantity_requisitioned`, `number`, optional): Enter the quantity of material you are requesting.
* **Remarks 1** (`remarks_1`, `note`, optional): Provide any additional remarks or comments regarding your request.
* **Requisitioned** (`material_requisitioned`, `select_one`, optional): Select whether the material is requisitioned ('Yes' or 'No').
* **Date Ship** (`date_ship`, `date`, optional): If the material has been sent, enter the date it was sent.
* **Shipper** (`shipper`, `text`, optional): Specify the shipper of the material.
* **Remarks 2** (`remarks_2`, `note`, optional): Provide any additional remarks or comments regarding your request.
* **Remarks 3** (`remarks_3`, `note`, optional): Provide any additional remarks or comments regarding your request.
* **Remarks 4** (`remarks_4`, `note`, optional): Provide any additional remarks or comments regarding your request.
