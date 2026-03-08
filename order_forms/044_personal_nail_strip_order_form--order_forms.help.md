# Personal Nail Strip Order Form - Help Guide
## Purpose
This form is used to collect information from customers for their personal nail strip orders.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill out each page sequentially.
2. Provide accurate and clear information for each field.
3. Review your responses before submitting the form.

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, text, required: false): 
Please provide your full name and any relevant information about yourself. This field is not required to be filled out.

* **Shipping** (`shipping_info`, text, required: false): 
Enter your shipping details here, if applicable. This field is not required to be filled out.

* **Order Details** (`order_details`, text, required: false): 
Explain your order requirements and any special details that you think are important for us to know. This field is not required to be filled out.

* **Order Products** (`order_products`, text, required: false): 
Describe the products you are ordering or what you would like to order. This field is not required to be filled out.

* **Shipping Address** (`shipping_address`, text, required: false): 
Provide your shipping address if you would like to ship to a different address. This field is not required to be filled out.

* **Phone Number** (`phone_number`, text, required: false): 
Enter your phone number so we can contact you in case of any issues or if we need to reach out to you.

* **Email** (`email`, email, required: false): 
Enter your email address so we can contact you via email if needed. This field is not required to be filled out.

* **Payment Method** (`payment_method`, select_one, required: false): 
Choose the payment method you would like to use. Options include 'Yes' and 'No'. If you choose 'Yes', we will contact you to arrange for payment. This field is not required to be filled out.

* **Payment Amount** (`payment_amount`, number, required: false): 
Enter the payment amount if you've chosen to pay. This field is not required to be filled out if you've chosen to not pay.

* **Date of Order** (`date_of_order`, date, required: false): 
If you know the date and time you'd like to place your order, please provide it. This field is not required to be filled out.

* **Time of Order** (`time_of_order`, time, required: false): 
Enter the time you'd like to place your order. This field is not required to be filled out.

* **Special Requests** (`special_requests`, note, required: false): 
Add any special requests or instructions here. This field is not required to be filled out.

* **Order Comments** (`order_comments`, text, required: false): 
Provide any additional information you think we should know about your order. This field is not required to be filled out.

* **Assigned Tool** (`assigned_tool`, select_one, required: false): 
Choose the tool or person assigned to your order. Options include 'chatjimmy' and 'Other'. This field is not required to be filled out.
