# print_an_order - Help Guide
## Purpose
The "print_an_order" form is used for various purposes, including creating new orders, editing existing orders, and managing order details. It is essential to have a clear understanding of the form's purpose to ensure accurate and relevant information is captured.

## How To Complete This Form
To complete the "print_an_order" form, follow these steps:
1. Enter the **order_form** field, which is a text-based field for capturing the order form data.
2. Provide information in the **order_details** field, which is another text-based field for additional order details.
3. Enter the **customer_name**, **customer_email**, and **customer_phone** fields, which are text-based fields for capturing customer information.
4. Select the **order_date** field, which is a date-based field for capturing the order date.
5. Select the **order_time** field, which is a time-based field for capturing the order time.
6. Enter the **order_total** field, which is a number-based field for capturing the order total.
7. Enter the **order_notes** field, which is a note-based field for capturing any additional notes or comments.
8. Select the **assigned_to** field, which is a select-one field for assigning the order to a specific person or team.
9. Select multiple options in the **status** field, which is a select-multiple field for tracking the order's status.
10. Select the **order_type** field, which is a select-one field for determining the order type.
11. Enter the **created_by** and **updated_by** fields, which are text-based fields for capturing user information.
12. Select the **updated_at** field, which is a time-based field for capturing the last update time.
13. (Optional) Select the **customer_name**, **customer_email**, and **customer_phone** fields are not required fields. However, filling them out will provide more detailed customer information.
14. (Optional) Enter the **order_total** field only if necessary, as it is not required.
15. (Optional) Enter the **order_notes** field only if necessary, as it is not required.

## Field-by-Field Explanation
* **order_form** (`order_form`, text, required/optional): Enter the order form data.
* **order_details** (`order_details`, text, required/optional): Enter additional order details.
* **customer_name** (`customer_name`, text, required/optional): Enter the customer's name.
* **customer_email** (`customer_email`, email, required/optional): Enter the customer's email.
* **customer_phone** (`customer_phone`, text, required/optional): Enter the customer's phone number.
* **order_date** (`order_date`, date, required/optional): Select the order date.
* **order_time** (`order_time`, time, required/optional): Select the order time.
* **order_total** (`order_total`, number, required/optional): Enter the order total.
* **order_notes** (`order_notes`, note, required/optional): Enter any additional notes or comments.
* **assigned_to** (`assigned_to`, select one, required/optional): Select the person or team assigned to the order.
* **status** (`status`, select multiple, required/optional): Select multiple options to track the order's status.
* **order_type** (`order_type`, select one, required/optional): Select the order type.
* **created_by** (`created_by`, text, required/optional): Enter the user who created the order.
* **updated_by** (`updated_by`, text, required/optional): Enter the user who last updated the order.
* **updated_at** (`updated_at`, time, required/optional): Select the last update time.

Note: The fields marked as "required/optional" can be filled out as needed, but it is recommended to fill them out for more accurate and complete information.
