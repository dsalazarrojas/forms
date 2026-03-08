# Tree Sales Invoice Form - Help Guide
## Purpose
This form is used to create or view sales invoices for tree sales, allowing users to capture important information about the customer, sales data, and payment terms.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the contact information for the customer, including first and last name, email, and phone number.
2. Choose the delivery method for the sale (pickup or delivery).
3. Select the payment terms for the sale (Net 30, Net 45, or Net 60).
4. Choose the type of tree being sold (Bare Root, Balled and Burlapped, or Balled and Banded).
5. Enter the quantity of trees being sold and the price per tree.
6. Enter the total cost of the sale.
7. Add any additional notes or comments about the sale.

## Field-by-Field Explanation
* **First Name** (`contact_first_name`, text, required/optional): Enter the customer's first name.
* **Last Name** (`contact_last_name`, text, required/optional): Enter the customer's last name.
* **Email** (`contact_email`, email, required/optional): Enter the customer's email address.
* **Phone** (`contact_phone`, text, required/optional): Enter the customer's phone number.
* **Sales Information** (`sales_information`, select multiple, required/optional): Choose the type of tree sale (Root and Stump, Root and Tree and Stump, or Stump only).
* **Delivery Date** (`delivery_date`, date, required/optional): Enter the date for delivery or pickup.
* **Delivery Method** (`delivery_method`, select one, required): Choose the delivery method for the sale (Pickup or Delivery).
* **Payment Terms** (`payment_terms`, select multiple, required): Choose the payment terms for the sale (Net 30, Net 45, or Net 60).
* **Delivery Details** (`delivery_details`, note, required/optional): Add any notes or comments about the delivery.
* **Tree Type** (`tree_type`, select multiple, required): Choose the type of tree being sold (Bare Root, Balled and Burlapped, or Balled and Banded).
* **Tree Quantity** (`tree_quantity`, number, required/optional): Enter the quantity of trees being sold.
* **Price per Tree** (`price_per_tree`, number, required/optional): Enter the price per tree.
* **Total Cost** (`total_cost`, number, required/optional): Enter the total cost of the sale.
* **Notes** (`notes`, note, required/optional): Add any additional notes or comments about the sale.
* **Payment Terms 2** (`tree_sales_invoice_form_16`, select multiple, required): This field is similar to "Payment Terms" and should be used for the same purpose.
* **Payment Details 2** (`tree_sales_invoice_form_17`, note, required/optional): This field is similar to "Delivery Details" and should be used for the same purpose.
