# Market Stall Sales Order Form - Help Guide
## Purpose
This form is used to collect sales order information from customers who make purchases at market stalls.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the contact information section with your name, email, and phone number.
2. Provide details about the delivery method you prefer (Yes/No).
3. Choose your preferred payment methods (Yes/No).
4. List any items you would like to purchase (Yes/No).
5. Enter the order subtotal, tax total, and total payment amount.
6. Review your submission to ensure all required fields are filled out accurately.

## Field-by-Field Explanation

* **Payment Information** (`payment_total`, `type: number`, `required: true`): Enter the total amount you paid for your purchase.
* **Order Subtotal** (`order_subtotal`, `type: number`, `required: true`): Enter the subtotal of the items ordered before tax.
* **Tax Total** (`tax_total`, `type: number`, `required: true`): Enter the total tax amount for your order.
* **Payment Methods** (`payment_method_form`, `type: select_one`, `required: false`): Choose one of the available payment methods (Yes/No).
* **Item List** (`item_form`, `type: select_multiple`, `required: false`): Select the items you would like to purchase (Yes/No).
* **Order Information** (`order_form`, `type: text`, `required: false`): Enter any additional information about your order.
* **Customer Information** (`customer_form`, `type: text`, `required: false`): Enter any additional information about yourself as a customer.
* **Payment Form** (`payment_form`, `type: text`, `required: false`): Enter any payment-related information or comments.
* **Delivery Information** (`delivery_form`, `type: text`, `required: false`): Enter any delivery instructions or preferences.
* **Payment Form** ( duplicate of `payment_form`, `type: text`, `required: false`): Enter any payment-related information or comments.
* **Payment Form** ( duplicate of `payment_form`, `type: text`, `required: false`): Enter any payment-related information or comments.

Note: Fields with duplicate names are actually different form sections that can be merged into one. The purpose of these sections is to gather additional payment information and allow customers to enter any relevant details.
