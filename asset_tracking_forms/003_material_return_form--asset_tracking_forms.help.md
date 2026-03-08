<thinking>... internal reasoning: this form is used for tracking materials that are returned by customers. It's crucial to fill it out accurately to ensure proper asset tracking and reporting. Ensure that you are filling this form for a material return and not for other purposes. Duplicate or unnecessary submissions can lead to confusion and errors in the asset tracking system...</thinking>

# material_return_form - Help Guide
## Purpose
The material return form is used for tracking materials that are returned by customers. This form helps to accurately document the reasons for return, item details, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's name and email address in the respective fields.
2. Describe the item being returned, including any relevant details such as its description, quantity, and value.
3. Select the reason for return from the provided options (Damaged, Defective, or Not Needed).
4. Enter the current item condition, choosing from the same options as in 3.
5. Enter the value of the item being returned.
6. Add any additional customer notes or comments, if necessary.
7. Select the date the item was received by the customer.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Please enter the customer's name.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Item Description** (`item_description`, text, required): Provide a detailed description of the item being returned.
* **Item Quantity** (`item_quantity`, number, required): Enter the quantity of the item being returned.
* **Reason For Return** (`reason_for_return`, select_one, required): Select the reason for return from the provided options.
* **Item Condition** (`item_condition`, select_one, required): Select the current condition of the item being returned.
* **Item Value** (`item_value`, number, required): Enter the value of the item being returned.
* **Customer Note** (`customer_note`, note, optional): Add any additional customer notes or comments.
* **Date Received** (`date_received`, date, required): Select the date the item was received by the customer.

## Tips
- Ensure that you are filling this form for a valid material return.
- Double-check the accuracy of your entries before submitting.
- If you are unsure about any field, do not hesitate to contact the asset tracking team for assistance.
