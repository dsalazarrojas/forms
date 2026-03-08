# dropshipping_workshop_enrollment_form - Help Guide
## Purpose
The dropshipping_workshop_enrollment_form is a form used to gather information from customers or users who want to enroll in a workshop.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have not already enrolled in this workshop.
2. Fill in your shipping address and shipping email.
3. Provide your phone number.
4. Select the type(s) of workshop you want to enroll in.
5. Choose the date and time you want to enroll in the workshop.

## Field-by-Field Explanation
* **Workshop Enrollment Form**: This form contains the necessary fields for workshop enrollment.
* **Shipping Address** (`shipping_address`, text, required: false): Please enter your shipping address so we can contact you for delivery information.
* **Shipping Email** (`shipping_email`, email, required: false): Please enter your shipping email so we can contact you for further information.
* **Phone Number** (`phone_number`, text, required: false): Please enter your phone number so we can contact you for any last-minute information.
* **Workshop Type** (`workshop_type`, select_multiple, required: true): Please select the type(s) of workshop you want to enroll in from the options below:
	+ Option 1
	+ Option 2
	+ Option 3
* **Enrollment Date** (`enrollment_date`, date, required: false): Please select the date you want to enroll in the workshop.
* **Time In** (`time_in`, time, required: false): Please select the time you want to enroll in the workshop.
* **Note** (`note`, note, required: false): Please add any additional notes or information you would like to share with us.
* **Workshop Enrollment Date** (`workshop_enrollment_date`, date, required: false): Please select the date you want to enroll in the workshop.
* **Workshop Enrollment Time** (`workshop_enrollment_time`, time, required: false): Please select the time you want to enroll in the workshop.

Note: The "Workshop Type" field is a required field and should be filled in to proceed with the enrollment process.
