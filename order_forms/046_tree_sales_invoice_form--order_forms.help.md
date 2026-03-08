# Tree Sales Invoice Form - Help Guide
## Purpose
The Tree Sales Invoice Form is used to document and record sales and invoice information for tree sales transactions. It captures essential details about the customer, the tree sale, and payment and delivery status.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the customer's information, including their name, address, and phone number.
2. Specify whether this is a sale or lease.
3. Enter the number of trees sold.
4. Enter the date of delivery.
5. Select the payment method and payment status.
6. Select the delivery status.
7. Enter the total cost of the trees sold.
8. Add any special notes or instructions.
9. (Optional) Enter the customer's email address and phone number.

## Field-by-Field Explanation

* **Customer Information (Customer Name, Address, and Phone Number)** (`customer_info`, `text`, `required`)
	+ Enter the customer's name, address, and phone number accurately and clearly.
* **Tree Type (Is this a sale or lease?)** (`tree_type`, `select_one`, `required`)
	+ Select 'Yes' if the sale is for a tree sale, and 'No' if it's a lease.
* **Tree Quantity** (`tree_quantity`, `number`, `required`)
	+ Enter the number of trees sold.
* **Delivery Date** (`delivery_date`, `date`, `required`)
	+ Enter the date of delivery.
* **Payment Method** (`payment_method`, `select_one`, `required`)
	+ Select 'Yes' for paid, and 'No' for not paid.
* **Payment Status** (`payment_status`, `select_one`, `required`)
	+ Select 'Active' if payment is active, and 'Inactive' if it's inactive.
* **Delivery Status** (`delivery_status`, `select_one`, `required`)
	+ Select 'Active' if delivery is active, and 'Inactive' if it's inactive.
* **Total Cost** (`total_cost`, `number`, `required`)
	+ Enter the total cost of the trees sold.
* **Note** (`note`, `note`, `optional`)
	+ Add any special notes or instructions.
* **Customer Email** (`customer_email`, `email`, `optional`)
	+ Enter the customer's email address (if available).
* **Customer Phone** (`customer_phone`, `text`, `required`)
	+ Enter the customer's phone number.
* **Customer Address** (`customer_address`, `text`, `required`)
	+ Enter the customer's address.

## Tips
- Double-check all required fields before submitting the form.
- Ensure all information is accurate and up-to-date.
- Review and verify the form carefully before submitting.
