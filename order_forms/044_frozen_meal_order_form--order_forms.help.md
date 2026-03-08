<thinking>
This form is used to gather information for a frozen meal order. It is a crucial part of the ordering process for our customers. The form ensures that the customer provides all the necessary details for their order, including order information, contact details, and special instructions. Please ensure that this form is filled out correctly to avoid duplication of information and ensure a smooth ordering process.
</thinking>

# Frozen Meal Order Form - Help Guide
## Purpose
This form is used to gather information for a frozen meal order, including order information, customer details, and special instructions.

## How To Complete This Form
To complete this form, follow these steps:
- Enter your order information in the "Order Information" page.
- Provide your customer name, email, phone number, and address in the subsequent pages.
- Select your meal type from the "Meal Type" dropdown menu.
- Enter a brief description of your meal in the "Meal Description" field.
- Specify the quantity of meals you'd like to order.
- Enter a valid email address and phone number in the "Email" and "Phone" fields, respectively.
- Enter the date and time you'd like to pick up your order in the "Date" and "Time" fields.
- If you have any special instructions or requests, enter them in the "Special Instructions" field.
- Finally, add any additional notes to the "Order Notes" field.

## Field-by-Field Explanation

* **Order Information (Page 1)** (`order_information`, `text`, required):
    Enter a brief description of your order, including the type of meal and any specific instructions.
* **Customer Name** (`customer_name`, `text`, required):
    Enter the name of the customer placing the order.
* **Meal Type** (`meal_type`, `select_one`, required):
    Select the type of meal you'd like to order (Beef, Chicken, Vegetarian, or Vegan).
* **Meal Description** (`meal_description`, `text`, required):
    Enter a brief description of your meal, including any specific ingredients or requests.
* **Quantity** (`quantity`, `number`, required):
    Specify the number of meals you'd like to order.
* **Email** (`email`, `email`, required):
    Enter a valid email address for the customer.
* **Phone** (`phone`, `text`, required):
    Enter a valid phone number for the customer.
* **Address** (`address`, `text`, required):
    Enter the customer's address for delivery or pickup.
* **Date** (`date`, `date`, required):
    Enter the date you'd like to pick up your order.
* **Time** (`time`, `time`, required):
    Enter the time you'd like to pick up your order.
* **Special Instructions** (`special_instructions`, `text`, optional):
    If you have any special requests or instructions, enter them here.
* **Order Notes** (`order_notes`, `text`, optional):
    Add any additional comments or notes about your order.
