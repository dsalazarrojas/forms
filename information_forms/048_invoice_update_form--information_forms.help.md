<thinking>
The form purpose seems to be related to updating an invoice, allowing users to choose options for various invoice fields, select whether to create a new invoice, and input relevant customer information.

Upon examining the form, I notice the following:

- There are multiple pages, but they all appear to be on the same page. I will consider this a single-page form.
- The form has a "Create New Invoice" option, implying that this is not for updating an existing invoice but for generating a new one.
- The form has several input fields for customer information, including name, email, phone, address, and description.
- There are options for selecting multiple "Yes" or "No" for the invoice fields, which might indicate these fields are for optional or additional features.
- The form includes fields for date and time, which could be used to specify the invoice date and time.
- The form also includes fields for total amount and customer currency.

Before proceeding, I will check if all fields are being used and if there is any redundant or unnecessary information. Upon reviewing the fields, I see that all fields are being used and there doesn't seem to be any redundancy. I will proceed with creating the help guide.
</thinking>

# Invoice Update Form - Help Guide
## Purpose
The Invoice Update Form is used to generate a new invoice. This form allows you to select options for various invoice fields and input relevant customer information.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose to create a new invoice by selecting "Yes" in the "Create New Invoice" field.
2. Select the desired options for your invoice fields by choosing "Yes" or "No" in the "Invoice Fields" field.
3. Enter the date of the invoice in the "Invoice Date" field.
4. Enter the time of the invoice in the "Time" field.
5. Enter the total amount of the invoice in the "Total" field.
6. Choose the customer's currency in the "Currency" field.
7. Enter the customer's name in the "Customer Name" field.
8. Enter the customer's email address in the "Customer Email" field.
9. Enter the customer's phone number in the "Customer Phone" field.
10. Enter the customer's address in the "Customer Address" field.
11. Enter a brief description of the invoice in the "Description" field.

## Field-by-Field Explanation

* **Create New Invoice**: (`create_new_invoice`, select_one, required: false) - Choose to create a new invoice.
* **Invoice Fields**: (`invoice_form_fields`, select_multiple, required: false) - Select the desired options for your invoice fields.
* **Invoice Date**: (`invoice_date`, date, required: false) - Enter the date of the invoice.
* **Time**: (`invoice_time`, time, required: false) - Enter the time of the invoice.
* **Total**: (`invoice_total`, number, required: false) - Enter the total amount of the invoice.
* **Currency**: (`invoice_currency`, select_multiple, required: false) - Choose the customer's currency.
* **Customer Name**: (`customer_name`, text, required: false) - Enter the customer's name.
* **Customer Email**: (`customer_email`, email, required: false) - Enter the customer's email address.
* **Customer Phone**: (`customer_phone`, text, required: false) - Enter the customer's phone number.
* **Customer Address**: (`customer_address`, text, required: false) - Enter the customer's address.
* **Description**: (`invoice_description`, text, required: false) - Enter a brief description of the invoice.
