<thinking>As a payment form, this form is designed to collect essential information from customers to facilitate smooth delivery and payment for pond fish orders. This form should only be completed by authorized personnel to prevent duplication and ensure accurate data capture.</thinking>

# Pond Fish Order Form - Help Guide
## Purpose
The Pond Fish Order Form is a tool used to gather information from customers for pond fish orders. It is essential to have a clear and accurate record of customer details and delivery preferences to ensure timely and efficient order fulfillment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the form title and description to help identify the order for reference purposes.
2. Provide your customer information, including their contact email and phone number.
3. Specify the date and time for delivery.
4. Choose a valid address for delivery.
5. Select any additional features or services required (add-ons).
6. Provide your email address so we can contact you for order updates.
7. Select the payment method (if you have more than one option).
8. Enter the total cost of the order (this will help us calculate taxes and other costs).
9. Enter any additional comments or instructions about the order.
10. Click on "Submit" to complete the form and initiate the order process.

## Field-by-Field Explanation

* **Form Data** (`form_data`, `text`, required: false): Enter a brief title and description of the order to help identify it for reference purposes.
* **customer_info** (`customer_info`, `text`, required: false): Enter your name and any other relevant information about yourself or your company.
* **delivery_date** (`delivery_date`, `date`, required: false): Specify the date you would like to receive your order. Please use the standard date format (MM/DD/YY).
* **delivery_time** (`delivery_time`, `text`, required: false): Provide the time you would like to receive your order.
* **delivery_address** (`delivery_address`, `select_one`, required: false): Select a valid delivery address from the list provided.
* **add_ons** (`add_ons`, `select_multiple`, required: false): Select any additional features or services required (e.g. Add-on 1, Add-on 2, Add-on 3).
* **customer_email** (`customer_email`, `email`, required: false): Enter your email address so we can contact you for order updates.
* **customer_phone** (`customer_phone`, `text`, required: false): Enter your phone number so we can contact you for order updates or to confirm delivery details.
* **payment_method** (`payment_method`, `select_one`, required: false): Select the payment method you would like to use (e.g. Payment 1, Payment 2, Payment 3).
* **total_cost** (`total_cost`, `number`, required: false): Enter the total cost of the order, including any additional features or services.
* **notes** (`notes`, `note`, required: false): Enter any additional comments or instructions about the order.
* **Submit** (`Submit`, `text`, required: false): Click on this button to complete the form and initiate the order process.
* **Cancel** (`Cancel`, `text`, required: false): Click on this button to cancel the form and start over.
* **Form Title** (`Form Title`, `text`, required: false): Enter a title for the form to help identify it for reference purposes.
* **Form Description** (`Form Description`, `text`, required: false): Enter a description of the form to provide more information about the order.
* **Form Category** (`Form Category`, `text`, required: false): Select a category for the form to help with organization and reference.
* **Form ID** (`Form ID`, `text`, required: false): Enter a unique ID for the form to help with tracking and reference.
* **Form Assigned** (`Form Assigned`, `text`, required: false): Enter the name of the person or department responsible for the order.
* **Form Output File** (`Form Output File`, `text`, required: false): Select a file to output the form data into.
* **Form Uploads** (`Form Uploads`, `select_one`, required: false): Select a file to upload with the form data.
* **Form Output Path** (`Form Output Path`, `text`, required: false): Enter the path where the form output file should be saved.
* **Form Output Type** (`Form Output Type`, `select_one`, required: false): Select the type of output format (e.g. PDF, CSV, Excel).
* **Form Output Location** (`Form Output Location`, `select_one`, required: false): Select the location where the form output file should be saved.
* **Form Output Filename** (`Form Output Filename`, `text`, required: false): Enter a filename for the form output file.
