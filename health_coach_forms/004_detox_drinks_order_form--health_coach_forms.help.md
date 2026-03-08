# Detox Drinks Order Form - Help Guide
## Purpose
The Detox Drinks Order Form is designed to collect information from customers to process their order for detox drinks. This form helps us understand their drink preferences, quantity, shipping details, and other relevant information to efficiently manage and fulfill their orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and contact information (customer name, email, and phone number) in the "Customer" field.
2. Select your preferred drink type (e.g., "Yes" for yes, "No" for no).
3. Choose the drink size you require (e.g., "Yes" for yes, "No" for no).
4. Specify the quantity of drink you need.
5. Choose whether you require shipping (e.g., "Yes" for yes, "No" for no).
6. Enter your address for shipping purposes.
7. Add any additional order notes if required.
8. You may enter any customer notes if needed.
9. Specify the assigned user (e.g., "Yes" for yes, "No" for no) to handle your order.
10. Confirm the form details are correct before submission.

## Field-by-Field Explanation
* **Customer** (`customer`, text, required: false): Enter your name and contact information.
* **Select Drink Type** (`drink_type`, select_one, required: false): Select your preferred drink type.
* **Drink Size** (`drink_size`, select_multiple, required: false): Choose the drink size you require.
* **Quantity** (`quantity`, number, required: false): Specify the quantity of drink you need.
* **Shipping** (`shipping`, select_one, required: false): Choose whether you require shipping.
* **Address** (`address`, text, required: false): Enter your address for shipping purposes.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Order Notes** (`order_notes`, note, required: false): Add any additional order notes if required.
* **Customer Notes** (`customer_notes`, note, required: false): Enter any customer notes if needed.
* **Assigned User** (`assigned_user`, select_one, required: false): Specify the assigned user to handle your order.
* **Created At** (`created_at`, date, required: false): This field is automatically generated upon form submission.
* **Updated At** (`updated_at`, date, required: false): This field is automatically generated upon form update.
* **Submitted At** (`submitted_at`, date, required: false): This field is automatically generated upon form submission.
* **Form Version** (`form_version`, text, required: false): Enter the form version.
* **Form ID** (`form_id`, text, required: false): Enter the form ID.
* **Form Category** (`form_category`, text, required: false): Enter the form category.
* **Form Description** (`form_description`, text, required: false): Enter the form description.
* **Form Title** (`form_title`, text, required: false): Enter the form title.
* **Form Status** (`form_status`, text, required: false): Enter the form status.
* **Assigned Tool** (`assigned_tool`, text, required: false): Enter the assigned tool.
* **Created By** (`created_by`, text, required: false): Enter the created by.
* **Form Output File** (`form_output_file`, text, required: false): Enter the form output file.
* **Output File Name** (`output_file_name`, text, required: false): Enter the output file name.

## Tips
Please ensure you fill in all relevant fields correctly to ensure accurate processing of your order. If you have any doubts or questions, please do not hesitate to contact us.
