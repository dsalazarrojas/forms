<thinking>
This form was created to support the process of product refunds for customers. The form is designed to collect information from customers about their product return, including their email address, the product description, reason for return, customer comments, product image, return date, return time, refund method, and status update. The form is not affiliated with any form platform and is an original adaptation created using public survey topic metadata. The form is released under a Creative Commons license, allowing for free use, modification, and distribution.

</thinking>

# Customized Product Refund Form - Help Guide
## Purpose
This form is used to collect information from customers about their product return process, including details about the product, reason for return, and refund method.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your email address in the "User Email" field. This is the email address we will use to contact you about your return.
2. Provide a description of the product you are returning in the "Product Description" field.
3. Select the reason for return from the "Reason for Return" field. You can choose from the following options:
	* [List the options provided in the YAML, e.g., "Defective product", "Incorrect product", etc.]
4. Enter any additional comments or feedback in the "Customer Comments" field.
5. If applicable, upload a product image in the "Product Image" field.
6. Enter the date you would like to return the product in the "Return Date" field. Use the date picker to select the date.
7. Enter the time you would like to return the product in the "Return Time" field. Use the time picker to select the time.
8. Select the method you would like to receive your refund from the "Refund Method" field. You can choose from the following options:
	* [List the options provided in the YAML, e.g., "Bank Transfer", "Check", etc.]
9. Select the status of your return from the "Status Update" field. You can choose from the following options:
	* [List the options provided in the YAML, e.g., "Not Started", "In Progress", etc.]

## Field-by-Field Explanation

* **User Email (`user_email`, email, required: false):** Enter your email address to allow us to contact you about your return.
* **Product Description (`product_description`, text, required: false):** Describe the product you are returning, including any relevant details such as the product name, serial number, or order number.
* **Reason for Return (`reason_for_return`, text, required: false):** Select one of the following options:
	+ [List the options provided in the YAML, e.g., "Defective product", "Incorrect product", etc.]
* **Customer Comments (`customer_comments`, text, required: false):** Enter any additional comments or feedback about your return.
* **Product Image (`product_image`, text, required: false):** Upload a product image to help us identify the product you are returning.
* **Return Date (`return_date`, date, required: false):** Select the date you would like to return the product using the date picker.
* **Return Time (`return_time`, time, required: false):** Select the time you would like to return the product using the time picker.
* **Refund Method (`refund_method`, select_multiple, required: false):** Select the method you would like to receive your refund from:
	+ [List the options provided in the YAML, e.g., "Bank Transfer", "Check", etc.]
* **Status Update (`status_update`, select_one, required: false):** Select the status of your return:
	+ [List the options provided in the YAML, e.g., "Not Started", "In Progress", etc.]
