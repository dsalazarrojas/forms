<thinking>
This form is designed to collect information from customers who place orders with merchants. The form has multiple pages with various fields to gather details about the customer, their order, shipping address, payment method, and other relevant information. 

The form is intended to be used by merchants to collect information from their customers. It's not a form for customers to use themselves, but rather a tool for merchants to gather necessary details from their customers. The form fields are designed to be as concise and clear as possible, while ensuring all required information is collected. 

The form does not have any validation or submission actions, so the user is free to fill it out as many times as needed without any consequences. However, the merchant should be aware that incomplete or incorrect information might lead to issues with order fulfillment or other consequences. 

Each field is clearly labeled and optional, giving users the flexibility to provide as much information as they feel is necessary. 
</thinking>

# retail_customer_order_form - Help Guide
## Purpose
This form is used by merchants to collect information from their customers for order fulfillment and other purposes.

## How To Complete This Form
To complete this form, simply fill out each field as prompted. The form has multiple pages, each with its own group of fields to fill out. Start at the beginning and fill out each field as you see fit.

## Field-by-Field Explanation

* **Customer Details** (`customer_details`, text, optional): Enter the customer's details, such as their name and any other relevant information.
* **Order Details** (`order_details`, text, optional): Provide details about the order, including any relevant notes or information.
* **Shipping Address** (`shipping_address`, number, optional): Enter the customer's shipping address, including the house number and any other relevant details.
* **Payment Method** (`payment_method`, select_one, optional): Choose how the customer would like to pay for their order. Options include Pay by Card, Pay by Invoice, and Pay by Cash.
* **Customer Notes** (`customer_notes`, note, optional): Add any additional notes or comments about the customer.
* **Email** (`email`, email, optional): Enter the customer's email address.
* **Phone** (`phone`, text, optional): Enter the customer's phone number.
* **Date** (`date`, date, optional): Enter the date the customer placed their order.
* **Time** (`time`, time, optional): Enter the time the customer placed their order.
* **Merchant Info** (`merchant_info`, select_multiple, optional): Select the relevant merchant information for the order.

Note: Each field's label and description are based on the provided YAML fields. The form fields are designed to be clear and concise, but if a field label is unclear, I've provided a best-effort explanation to ensure understanding.
