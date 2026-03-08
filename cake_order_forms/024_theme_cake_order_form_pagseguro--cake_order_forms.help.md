# Theme Cake Order Form PagSeguro - Help Guide
## Purpose
The theme cake order form is designed to collect customer information and preferences for custom cake orders. This form is used to gather essential details to create a unique cake that meets the customer's expectations.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields, which are marked as required, and leave any non-required fields empty.
2. For select fields like "Confirm Email" and "Cake Type", select one of the provided options.
3. Ensure that the email address and phone number are correctly formatted.
4. Double-check the confirmation of email to ensure accuracy.

## Field-by-Field Explanation
* **Order Info** (`order_info`, text, required: false): This field is used to collect any additional information about the order.
* **Customer Info** (`customer_info`, text, required: false): Please fill in your customer information, including name and any other relevant details.
* **Order Summary** (`order_summary`, text, required: false): Briefly describe the order you want, including any special requests.
* **Cake Type** (`cake_type`, select_multiple, required: false):
	+ Select one or more cake types from the provided options: Vanilla, Chocolate, Red Velvet.
* **Image** (`upload_image`, text, required: false): Upload a picture or reference to a URL of the image you want to use for the cake.
* **Style** (`upload_style`, text, required: false): Describe the style you want for the cake.
* **Notes** (`order_notes`, note, required: false): Add any additional notes or comments about the order.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Confirm Email** (`confirm_email`, select_one, required: false):
	+ Select 'Yes' to confirm that the email address is correct.
* **Cake Type** (`cake_type`, select_multiple, required: false):
	+ Select one or more cake types from the provided options: Vanilla, Chocolate, Red Velvet.
