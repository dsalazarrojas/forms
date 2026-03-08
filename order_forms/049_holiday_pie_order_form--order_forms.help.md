# Holiday Pie Order Form - Help Guide
## Purpose
The Holiday Pie Order Form is designed to collect information from customers to place orders for holiday pies. This form helps us gather the necessary details to fulfill the customer's order accurately and efficiently.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the **Customer Name** field with the customer's name.
2. Enter the customer's **Email Address** in the **Customer Email** field.
3. Provide the customer's **Phone Number** in the **Customer Phone** field.
4. Select the type of pie the customer wants to order from the **Pie Type** dropdown list.
5. Specify the quantity of pie the customer wants to order.
6. If the customer has any special requests or instructions, type them in the **Special Instructions** field.

## Field-by-Field Explanation

* **Holiday Pie Order Form** (`holiday_pie_order_form`, text, required: false): This is the title of the form, which is displayed as-is on the form.
* **Customer Name** (`customer_name`, text, required: false): Enter the customer's name.
* **Customer Email** (`customer_email`, email, required: false): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, required: false): Enter the customer's phone number.
* **Pie Type** (`pie_type`, select_one, required: false): Select the type of pie the customer wants to order from the dropdown list (Apple, Cherry, or Blueberry).
* **Quantity** (`quantity`, number, required: false): Specify the quantity of pie the customer wants to order.
* **Special Instructions** (`special_instructions`, text, required: false): If the customer has any special requests or instructions, type them in here.
