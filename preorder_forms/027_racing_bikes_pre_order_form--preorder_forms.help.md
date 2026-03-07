<thinking>
This form is designed to allow customers to pre-order racing bikes. The purpose of the form is to collect information from customers about their desired bike type, color scheme, size, delivery date, delivery address, email, and phone number. 
The form has 9 fields in total. However, please note that the "required" field in the yaml is more of a flag indicating that the field cannot be completed in the next version of the form, it is not a field validation rule here. 
The fields are divided into two pages: form_page_1 and form_page_2. form_page_1 is a text input field and form_page_2 contains the other fields. 
The form is intended to be completed by end-users, who are customers who want to pre-order a racing bike. 
</thinking>

# Racing Bikes Pre Order Form - Help Guide
## Purpose
This form is designed to allow customers to pre-order racing bikes. The purpose of the form is to collect information from customers about their desired bike type, color scheme, size, delivery date, delivery address, email, and phone number.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your desired bike type in the "Bike Type" field. You can choose from "road", "mountain", or "hybrid".
2. Select the color scheme you prefer for your bike. You can choose from "black", "red", or "blue".
3. Enter your desired bike size.
4. Choose a delivery date for your bike.
5. Enter your delivery address.
6. Enter your email address.
7. Enter your phone number.

## Field-by-Field Explanation
* **Racing Bikes Pre Order Form** (`form_page_1`, text, required: false): This is a text input field where you can enter any information about your pre-order.
* **Bike Type** (`bike_type`, select_one, required: false): This is the type of bike you are interested in. Choose from "road", "mountain", or "hybrid".
* **Custom Requests** (`custom_requests`, note, required: false): This field is for any custom requests you may have regarding your pre-order.
* **Color Scheme** (`color_scheme`, select_multiple, required: false): Select one or multiple colors for your bike's color scheme. You can choose from "black", "red", or "blue".
* **Size** (`size`, number, required: false): Enter your desired bike size.
* **Delivery Date** (`delivery_date`, date, required: false): Choose a date for your bike delivery.
* **Delivery Address** (`delivery_address`, text, required: false): Enter your delivery address.
* **Email** (`email`, email, required: false): Enter a valid email address where you would like to receive updates about your pre-order.
* **Phone** (`phone`, text, required: false): Enter your phone number so we can get in touch with you.

## Tips
* Make sure to enter accurate information in each field to ensure smooth processing of your pre-order.
* If you have any custom requests, please specify them in the "Custom Requests" field.
* Our team will be in touch with you to confirm your pre-order and delivery details.
