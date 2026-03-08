<thinking>As an expert form designer and technical writer, I will help you create a user-facing help guide for the "Safety Gear Order Form" that explains its purpose, how to complete it, and what each field means in a clear and concise manner.</thinking>

# Safety Gear Order Form - Help Guide
## Purpose
The Safety Gear Order Form is used to collect information from customers for ordering safety gear. This form is designed to gather details such as customer contact information, order specifics, and other relevant details for processing orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and email address to contact you.
2. If applicable, enter your company name and address.
3. Provide your phone number for communication purposes.
4. Select the type of safety gear you want to order.
5. Specify the quantity of the safety gear you need.
6. Enter the price of the order (if applicable).
7. Provide any special instructions for the order (if applicable).
8. Enter the order date and time (if applicable).
9. Specify whether the order is assigned to a person or not.
10. Enter any additional notes for the order (if applicable).
11. Specify the status of the order (Active or Inactive).

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required: false): Enter your name as the customer placing the order.
* **Customer Email** (`contact_email`, email, required: false): Enter your email address for contact purposes.
* **Company Name** (`company_name`, text, required: false): If you are ordering on behalf of a company, enter the name of the company.
* **Address** (`address`, text, required: false): Enter your address for shipping or delivery purposes.
* **Phone** (`phone`, text, required: false): Enter your phone number for communication purposes.
* **Product Type** (`product_type`, select_one, required: false): Select whether the order is for 'Yes' or 'No' to indicate whether safety inspection is required or not.
* **Quantity** (`quantity`, number, required: false): Enter the quantity of safety gear you need to order.
* **Price** (`price`, number, required: false): Enter the price of the order (if applicable).
* **Special Instructions** (`special_instructions`, text, required: false): Provide any special instructions for the order (if applicable).
* **Order Date** (`order_date`, date, required: false): Enter the date of the order.
* **Order Time** (`order_time`, time, required: false): Enter the time of the order.
* **Assigned To** (`assigned_to`, select_one, required: false): Select whether the order is assigned to a person or not.
* **Notes** (`notes`, text, required: false): Enter any additional notes for the order (if applicable).
* **Order Notes** (`order_notes`, text, required: false): Enter any other notes about the order.
* **Customer Notes** (`customer_notes`, text, required: false): Enter any notes from the customer about the order.
* **Order Status** (`order_status`, select_multiple, required: false): Select the status of the order as Active or Inactive.

Note: Some fields are not required, but it's recommended to fill them in for accurate and complete order processing.
