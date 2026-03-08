# Lunch Menu Pre Order Form - Help Guide
## Purpose
This form is designed for customers to pre-order lunch menu options and provide additional information to ensure a smooth ordering experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred food items from the options provided.
2. Enter your order details, including date and time of order.
3. If you have any special requests, provide them in the "Special Requests" field.
4. Choose a contact person to associate with your order.
5. Provide your email address and phone number for communication purposes.
6. Confirm your order details.

## Field-by-Field Explanation

* **Food Items** (`food_items`, select_multiple, required: false): 
  This field allows you to select one or more food items from the options provided. Please select the items that you would like to order.
* **Order Details** (`order_details`, text, required: false): 
  In this field, please provide any additional information about your order, such as any allergies or dietary restrictions.
* **Date Of Order** (`date_of_order`, date, required: false): 
  Enter the date you would like to place your order on.
* **Time Of Order** (`time_of_order`, time, required: false): 
  Enter the time you would like to place your order on.
* **Special Requests** (`special_requests`, text, required: false): 
  If you have any special requests or instructions for your order, such as "no nuts" or "no MSG", please provide them in this field.
* **Contact Person** (`contact_person`, select_one, required: false): 
  Please select a contact person to associate with your order. This will help our staff reach out to you for any further instructions.
* **Email** (`email`, email, required: false): 
  Enter your email address so we can contact you for any further instructions or notifications.
* **Phone** (`phone`, text, required: false): 
  Enter your phone number so our staff can reach out to you if needed.
* **Confirm** (`confirm`, text, required: false): 
  Double-check your order details before submitting this form. If everything looks correct, click the "Confirm" button to submit your order.
* **Form Submitted** (`form_submitted`, text, required: false): 
  This field will display a confirmation message once you have successfully submitted your form.
* **Note** (`note`, note, required: false): 
  This field is a free-text area for any additional comments or messages you'd like to attach to your order.
* **John Doe/Jane Doe** (`contact_person`, select_one, required: false): 
  Please select a contact person to associate with your order.
* **Item1/Item2** (`food_items`, select_multiple, required: false): 
  Please select one or more food items from the options provided.
* **Note/Phone/Email** (`note/phone/email`, text, required: false): 
  Please enter your note, phone number, or email address.
