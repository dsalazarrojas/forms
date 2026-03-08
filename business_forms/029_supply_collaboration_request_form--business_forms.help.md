<thinking>...</thinking>

# Supply Collaboration Request Form - Help Guide
## Purpose
This form is used to submit a request for supply collaboration from suppliers. The form is intended to gather information necessary for the collaboration, such as supplier contact information, delivery times, and requested quantities. The form is a mandatory form and is used to facilitate the supply chain process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the supplier information by selecting "Yes" or "No" in the "Supplier" field.
2. Enter the contact number in the "Contact Number" field.
3. Enter your email address in the "Email" field.
4. Enter the date of the request in the "Request Date" field.
5. Set the desired delivery time in the "Delivery Time" field.
6. Enter the quantity of the item needed in the "Quantity" field.
7. Enter the unit price of the item in the "Unit Price" field.
8. Enter the total price of the item in the "Total Price" field.
9. Enter any additional comments in the "Comments" field (optional).
10. Enter any notes for the supplier in the "Supplier Notes" field (optional).
11. Select "Yes" or "No" in the "Submit" field to finalize the request.

## Field-by-Field Explanation
* **Supplier** (`Supplier`, select_one, required): Indicate whether you have contacted or will contact the supplier.
* **Contact Number** (`contact_number`, text, required): Enter the contact number of the supplier.
* **Email** (`email`, email, optional): Enter the email address of the supplier (if applicable).
* **Request Date** (`request_date`, date, required): Enter the date you are requesting the supply.
* **Delivery Time** (`delivery_time`, time, required): Set the desired delivery time for the supply.
* **Quantity** (`quantity`, number, required): Enter the quantity of the item needed.
* **Unit Price** (`unit_price`, number, required): Enter the unit price of the item.
* **Total Price** (`total_price`, number, required): Calculate the total price by multiplying the quantity and unit price.
* **Comments** (`comments`, note, optional): Enter any additional comments about the request.
* **Supplier Notes** (`supplier_notes`, note, optional): Enter any notes for the supplier.
* **Submit** (select_multiple, required): Confirm whether you have contacted or will contact the supplier and finalize the request.
