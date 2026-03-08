# Financing And Discount Configuration - Help Guide

## Purpose
This form is used to configure financing and discount options for customers. It is not intended for general business transactions or accounting purposes. This form is only to be filled out when a specific customer's financing and discount options need to be adjusted. The purpose of this form is to ensure that all necessary information is collected before applying any changes to the customer's account, thereby avoiding any potential conflicts or miscommunication.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter the customer's name in the "Customer Name" field.
2. Choose the applicable discount type by selecting "Yes" or "No" from the "Discount Type" field.
3. If you selected "Yes" in the "Discount Type" field, enter the discount percentage in the "Discount Percentage" field.
4. If you selected "Yes" in the "Discount Type" field, enter the discount amount in the "Discount Amount" field.
5. Select the payment term applicable to the customer's account by choosing one or more options from the "Payment Term" field.
6. If other payment terms are necessary, enter them in the "Other Payment Term" field.
7. Enter the due date for payment by customer in the "Due Date" field.
8. Select the payment method applicable to the customer's account by choosing one or more options from the "Payment Method" field.
9. If other payment methods are necessary, enter them in the "Other Payment Method" field.
10. Choose the current payment status of the customer's account by selecting "Active" or "Inactive" from the "Payment Status" field.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required: false): Enter the customer's name.
* **Discount Type** (`discount_type`, `select_one`, required: false): Choose "Yes" or "No" to apply or not apply a discount.
* **Discount Percentage** (`discount_percentage`, `number`, required: false): Enter the discount percentage if you selected "Yes" in the "Discount Type" field.
* **Discount Amount** (`discount_amount`, `number`, required: false): Enter the discount amount if you selected "Yes" in the "Discount Type" field.
* **Payment Term** (`payment_term`, `select_multiple`, required: false): Select one or more payment terms applicable to the customer's account.
* **Other Payment Term** (`payment_term_other`, `text`, required: false): Enter any other payment terms necessary for the customer's account.
* **Due Date** (`due_date`, `date`, required: false): Enter the due date for payment by customer.
* **Payment Method** (`payment_method`, `select_multiple`, required: false): Select one or more payment methods applicable to the customer's account.
* **Other Payment Method** (`payment_method_other`, `text`, required: false): Enter any other payment methods necessary for the customer's account.
* **Payment Status** (`payment_status`, `select_one`, required: false): Choose the current payment status of the customer's account by selecting "Active" or "Inactive".
