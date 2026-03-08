<thinking>
This form is intended for customers to place orders for noodles, a type of food product. The form allows customers to enter their name, email, phone number, address, and other relevant details. The form is used to process customer orders and ensure that the correct payment method is selected. The form is not intended for internal use, and the payment gateway options are likely for external payment processing. The form is a simple text-based form with a mix of text, email, number, and select_one fields. I will not duplicate any existing documentation, and this guide will focus on explaining each field in detail.</thinking>

# Noodle Order Form - Help Guide
## Purpose
This guide explains how to complete the Noodle Order Form, a form designed for customers to place orders for noodles.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name, email, phone number, address, and other required details in the relevant text fields.
2. Select the price of the noodle product using the number field.
3. If you want to use a payment gateway other than the listed options, enter the name of the payment gateway in the "Other Payment Gateway" field.
4. Choose your preferred payment gateway from the select_one field or enter the name of your preferred payment gateway.
5. Review your submission before submitting the form.

## Field-by-Field Explanation
### **Noodle Form** (`noodle_form`, text, required: false)
Enter your noodle order request in this text field.

### **Noodle Price** (`noodle_price`, number, required: false)
Enter the price of the noodle product you are ordering.

### **Noodle Image** (`noodle_image`, text, required: false)
Enter any relevant image or description of the noodle product.

### **Payment Gateway** (`payment_gateway`, select_one, required: false)
Select your preferred payment gateway from the options:

* Option 1
* Option 2
* Option 3

### **Other Payment Gateway** (`payment_gateway_other`, text, required: false)
If you prefer to use a different payment gateway not listed, enter the name here.

### **Customer Email** (`customer_email`, email, required: false)
Enter your email address to receive updates on your order status.

### **Customer Phone** (`customer_phone`, text, required: false)
Enter your phone number for any follow-up communication.

### **Customer Name** (`customer_name`, text, required: false)
Enter your name for our records.

### **Customer Address** (`customer_address`, text, required: false)
Enter your address for delivery or shipping purposes.
