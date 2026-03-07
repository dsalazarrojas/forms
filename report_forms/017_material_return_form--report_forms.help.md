<thinking>...</thinking>

# Material Return Form - Help Guide
## Purpose
The purpose of this form is to collect information about returned materials from customers, including item description, condition, status, and reason for return. This form is used by business users to track and process material returns in a systematic way.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the required information about the returned material.
2. Select the item condition from the dropdown menu (e.g., "new", "used", "damaged", "missing").
3. Choose the item status from the dropdown menu (e.g., "active", "pending", "cancelled", "inactive").
4. Provide the reason for return in a text field.
5. Enter the return date using the date picker.
6. Enter the customer's name, email, and phone number.
7. Enter the business name, email, and phone number (if applicable).
8. Provide any additional reason for receiving the material in a text field (if applicable).
9. Select the return method (e.g., "online", "in person", "via post").
10. Add any comments about the return.

## Field-by-Field Explanation
- **Material Return Form** (`material_return_form`, text, required): This is the title of the form.
- **Item Description** (`item_description`, text, not required): Describe the material being returned.
- **Item Condition** (`item_condition`, select_one, not required): Select the condition of the material (e.g., "new", "used", "damaged", "missing").
- **Item Status** (`item_status`, select_multiple, not required): Select all applicable item statuses (e.g., "active", "pending", "cancelled", "inactive").
- **Reason For Return** (`reason_for_return`, text, not required): Explain the reason for returning the material.
- **Return Date** (`return_date`, date, not required): Enter the date the material was returned.
- **Customer Name** (`customer_name`, text, not required): Enter the name of the customer who returned the material.
- **Customer Email** (`customer_email`, email, not required): Enter the email address of the customer who returned the material.
- **Customer Phone** (`customer_phone`, text, not required): Enter the phone number of the customer who returned the material.
- **Business Name** (`business_name`, text, not required): Enter the name of the business that returned the material.
- **Business Email** (`business_email`, email, not required): Enter the email address of the business that returned the material.
- **Business Phone** (`business_phone`, text, not required): Enter the phone number of the business that returned the material.
- **Reason For Receiving** (`reason_for_receiving`, text, not required): Explain why the material was received.
- **Return Method** (`return_method`, select_one, not required): Select the method used to return the material (e.g., "online", "in person", "via post").
- **Comments** (`comments`, text, not required): Add any additional comments about the return.
