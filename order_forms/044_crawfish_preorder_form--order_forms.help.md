<thinking>
The goal of this form is to allow customers to preorder their Crawfish. The form will collect information about the customer, their order details, and the status of the crawfish availability. It will also collect feedback from both the customer and the vendor.
To prevent duplication, we should ensure that the form is only accessible when the crawfish is available. This could be achieved by checking the crawfish availability status on the server-side before rendering the form.
The customer will be able to select the type of crawfish they want to order, and they will be able to provide a date and time for their preorder. The vendor will be able to see the customer's message and provide a response.
To prevent customers from ordering out of stock crawfish, we should ensure that the form will only be accessible when the crawfish is available.
</thinking>

# Crawfish Preorder Form - Help Guide
## Purpose
The Crawfish Preorder Form is a form that allows customers to preorder their crawfish. The form collects information about the customer, their order details, and the status of the crawfish availability.

## How To Complete This Form

To complete this form, follow these steps:

1. Click on the "Complete Form" button to access the form.
2. Select the type of crawfish you want to preorder from the options provided.
3. Enter your name, email, and phone number in the corresponding fields.
4. Select the date and time you would like to preorder the crawfish.
5. If you have any additional comments or questions, provide them in the text fields.
6. Click the "Submit" button to complete the form.

## Field-by-Field Explanation

* **customer**: This field is the customer's name.
  * Type: text
  * Required: no
  * Hint: Please enter your name
* **customer_email**: This field is the customer's email address.
  * Type: email
  * Required: no
  * Hint: Please enter your email address
* **customer_phone**: This field is the customer's phone number.
  * Type: text
  * Required: no
  * Hint: Please enter your phone number
* **crawfish_order**: This field is the order quantity of crawfish.
  * Type: number
  * Required: no
  * Hint: Please enter the number of crawfish you want to order
* **crawfish_type**: This field is the type of crawfish you want to order.
  * Type: select_one
  * Required: no
  * Hint: Please select the type of crawfish you want to order
* **date_preorder**: This field is the date you want to preorder the crawfish.
  * Type: date
  * Required: no
  * Hint: Please select the date you want to preorder the crawfish
* **time_preorder**: This field is the time you want to preorder the crawfish.
  * Type: time
  * Required: no
  * Hint: Please select the time you want to preorder the crawfish
* **customer_message**: This field is for any additional comments or questions you have.
  * Type: text
  * Required: no
  * Hint: Please provide any additional comments or questions
* **customer_accept**: This field is to indicate if you accept the preorder terms.
  * Type: select_multiple
  * Required: no
  * Hint: Please select "True" if you accept the terms
* **vendor_message**: This field is for the vendor to provide a response.
  * Type: text
  * Required: no
  * Hint: This field is for the vendor to respond to your request
* **vendor_accept**: This field is to indicate if the vendor accepts the preorder.
  * Type: select_multiple
  * Required: no
  * Hint: Please select "True" if the vendor accepts the preorder
* **order_notes**: This field is for any additional notes about the order.
  * Type: note
  * Required: no
  * Hint: Please provide any additional notes about the order
* **form_submission**: This field is for any internal notes about the form submission.
  * Type: note
  * Required: no
  * Hint: This field is for internal use
* **submission_success**: This field is to indicate if the submission was successful.
  * Type: note
  * Required: no
  * Hint: This field is for internal use
* **submission_failure**: This field is to indicate if the submission failed.
  * Type: note
  * Required: no
  * Hint: This field is for internal use
* **crawfish_availability**: This field is for any additional notes about the crawfish availability.
  * Type: note
  * Required: no
  * Hint: Please provide any additional notes about the crawfish availability
* **crawfish_availability_status**: This field is to indicate the status of the crawfish availability.
  * Type: select_one
  * Required: no
  * Hint: Please select the status of the crawfish availability
* **crawfish_availability_date**: This field is the date of the crawfish availability.
  * Type: date
  * Required: no
  * Hint: Please select the date of the crawfish availability
* **crawfish_availability_time**: This field is the time of the crawfish availability.
  * Type: time
  * Required: no
  * Hint: Please select the time of the crawfish availability
* **crawfish_status**: This field is to indicate the status of the crawfish.
  * Type: select_one
  * Required: no
  * Hint: Please select the status of the crawfish
* **crawfish_notes**: This field is for any additional notes about the crawfish.
  * Type: note
  * Required: no
  * Hint: Please provide any additional notes about the crawfish
* **crawfish_availability_message**: This field is for any additional notes about the crawfish availability.
  * Type: note
  * Required: no
  * Hint: Please provide any additional notes about the crawfish availability
* **crawfish_availability_message_status**: This field is to indicate the status of the crawfish availability message.
  * Type: select_multiple
  * Required: no
  * Hint: Please select "Available" if you have a message for the crawfish availability
* **submission_status**: This field is to indicate the status of the submission.
  * Type: select_one
  * Required: no
  * Hint: Please select the status of the submission

## Tips

* Make sure to provide accurate information when filling out the form.
* The form will only be accessible when the crawfish is available.
* The customer must select the type of crawfish they want to preorder.
* The customer must provide their name, email, and phone number.
* The customer must select a date and time for their preorder.
* The form will not be submitted if the customer has selected an unavailable crawfish.
* If the form submission fails, the customer will be notified.
* Please provide any additional comments or questions in the customer_message field.
* Please select "True" in customer_accept if you accept the preorder terms.
* The vendor will respond to the customer in the vendor_message field.
* Please select "True" in vendor_accept if the vendor accepts the preorder.
* Please provide any additional notes about the order in the order_notes field.
* Please provide any internal notes about the form submission in the form_submission field.
* Please provide any internal notes about the submission in the submission_success or submission_failure field.
* Please provide any additional notes about the crawfish availability in the crawfish_availability field.
* Please select the status of the crawfish availability in the crawfish_availability_status field.
* Please select the date and time of the crawfish availability in the crawfish_availability_date and crawfish_availability_time fields.
* Please select the status of the crawfish in the crawfish_status field.
* Please provide any additional notes about the crawfish in the crawfish_notes field.
* Please provide any internal notes about the crawfish availability in the crawfish_availability_message field.
* Please select the status of the crawfish availability message in the crawfish_availability_message_status field.
* Please select the status of the submission in the submission_status field.
