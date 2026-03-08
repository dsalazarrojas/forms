<thinking>
This help guide is intended for users who need to complete a form for checking out a craft fair vendor. 

This form is used to record information about a craft fair vendor's sales and payment status. It is essential to fill out this form accurately to ensure that the vendor's payment and sales data is up-to-date and correct.

To prevent data duplication, make sure to check the form before submitting it to ensure all fields are filled out correctly. 

The form will ask for various pieces of information including the vendor's first name, last name, vendor ID, sales tax rate, total sales amount, paid amount, payment method, payment status, refund, and comments. 

Please note that some fields are required, so make sure to fill out all required fields before submitting the form.

</thinking>

# craft_fair_vendor_check_out_form - Help Guide
## Purpose
The craft fair vendor check out form is used to record sales and payment information for craft fair vendors.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out all required fields, indicated by an asterisk (\*) next to the field label.
2. Enter the vendor's first name in the "First Name" field.
3. Enter the vendor's last name in the "Last Name" field.
4. Enter the vendor's ID in the "Vendor Id" field.
5. Enter the sales tax rate in the "Sales Tax Rate" field.
6. Enter the total sales amount in the "Total Sales" field.
7. Enter the paid amount in the "Paid Amount" field.
8. Select the payment method from the "Payment Method" field. Note that this field is required.
9. If payment method is "Yes", enter the other payment method in the "Other" field.
10. If applicable, enter the sales tax amount in the "Sales Tax" field.
11. If applicable, enter the refund amount in the "Refund" field.
12. Select the payment status from the "Payment Status" field.
13. Enter any comments in the "Comments" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, not required): Enter the vendor's first name.
* **Last Name** (`last_name`, text, not required): Enter the vendor's last name.
* **Vendor Id** (`vendor_id`, text, not required): Enter the vendor's ID.
* **Sales Tax Rate** (`sales_tax_rate`, text, not required): Enter the sales tax rate.
* **Total Sales** (`total_sales`, number, not required): Enter the total sales amount.
* **Paid Amount** (`paid_amount`, number, not required): Enter the paid amount.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method. Options include "Yes", "No", "Active", and "Inactive". 
* **Other** (`payment_method_other`, text, not required): If "Yes" is selected in the payment method field, enter the other payment method.
* **Sales Tax** (`sales_tax`, number, not required): If applicable, enter the sales tax amount.
* **Refund** (`refund`, number, not required): If applicable, enter the refund amount.
* **Payment Status** (`payment_status`, select_one, not required): Select the payment status. Options include "Active", "Inactive".
* **Comments** (`comments`, text, not required): Enter any comments about the transaction.
