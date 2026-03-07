<thinking>
This form is used for customers to inquire about their product warranty, providing details such as product serial number, customer information (name, phone number, email), and claim information (warranty type, claim status, claim date, claim type). The form helps the support team to efficiently gather the necessary information to process and manage customer claims.
</thinking>

# warranty_enquiry_form - Help Guide
## Purpose
This form is used for customers to report and inquire about their product warranty issues, allowing the support team to efficiently gather the necessary information to process and manage customer claims.

## How to Complete This Form
To complete this form, simply follow the instructions below:

1. Enter the **product serial number** of the product you are enquiring about.
2. Enter your **name** as a customer.
3. Enter your **phone number** so we can contact you for further clarification if needed.
4. Enter your **email address** where we can send you updates on your claim.
5. Describe the **description of the issue** you are experiencing with your product (if applicable).
6. Choose the **warranty type** that applies to your product (Standard or Extended).
7. Indicate the **claim status** of your issue (Not Started, In Progress, or Completed).
8. Enter the **claim date** when you submitted the claim.
9. Select the **claim type** that best describes your issue (Mechanical, Electrical, or Other).
10. If you have a **contact name** who you would like to be informed about the claim, you can enter their name here.
11. (Optional) Enter the **warranty start date** and **warranty end date** if you have them.

## Field-by-Field Explanation
* **What is the product serial number?** (`product_serial_number`, `text`, required): Enter the product serial number of the product you are enquiring about.
* **What is your name?** (`customer_name`, `text`, required): Enter your name as a customer.
* **What is your phone number?** (`customer_phone`, `text`, required): Enter your phone number so we can contact you for further clarification if needed.
* **What is your email address?** (`customer_email`, `text`, required): Enter your email address where we can send you updates on your claim.
* **What is the description of the issue?** (`product_description`, `text`, false): If you are experiencing an issue with your product, provide a brief description of the problem.
* **What is the warranty type?** (`warranty_type`, `select_one`, required): Choose the type of warranty that applies to your product (Standard or Extended).
* **What is the claim status?** (`claim_status`, `select_one`, required): Indicate the status of your claim (Not Started, In Progress, or Completed).
* **What is the claim date?** (`claim_date`, `date`, required): Enter the date when you submitted the claim.
* **What is the claim type?** (`claim_type`, `select_one`, required): Select the type of claim that best describes your issue (Mechanical, Electrical, or Other).
* **What is the contact name?** (`contact_name`, `text`, false): If you have a contact person who you would like to be informed about the claim, enter their name here.
* **What is the warranty start date?** (`warranty_start_date`, `date`, false): If you have the warranty start date, enter it here.
* **What is the warranty end date?** (`warranty_end_date`, `date`, false): If you have the warranty end date, enter it here.

## Tips
* Please ensure that the product serial number is accurate to ensure that your claim is processed correctly.
* Make sure to provide a clear description of the issue you are experiencing.
* If you have any further questions or concerns, feel free to contact us.

Note: This guide is generated based on the input schema and may need to be adjusted if the actual form implementation changes in the future.
