# financing and discount configuration - Help Guide

## Purpose
This form is used to set up financing and discount configurations for a customer or company. It gathers detailed information about their payment terms, discounts, and other relevant data.

## How To Complete This Form
1. Fill in the `form id` field with a unique identifier for the form.
2. Choose whether the customer or company has a `discount type` from the select options.
3. Enter the percentage and amount of the `percentage discount`.
4. Set the `start date` and `end date` for the discount period.
5. Choose if the payment terms are on a `payment term`.
6. Input the customer's `customer id`, `email`, `phone`, `address`, `company name`, `company address`, `contact number`, and `contact email`.
7. Enter the customer's `customer name`, `customer address`, `customer phone`, and `customer email`.
8. Provide a `notes` field with any additional information about the customer or company.
9. Set the `discount status` to either `Active` or `Inactive`.

## Field-by-Field Explanation

* **Form id** (`form_id`, number, required): This field is used to uniquely identify the form.
* **Discount type** (`discount_type`, select_one, required): Select the type of discount this customer or company is eligible for.
* **Percentage discount** (`percentage_discount`, number, required): Enter the percentage of the discount.
* **Amount discount** (`amount_discount`, number, required): Enter the total amount of the discount.
* **Start date** (`start_date`, date, required): Set the start date of the discount period.
* **End date** (`end_date`, date, required): Set the end date of the discount period.
* **Payment term** (`payment_term`, select_multiple, required): Choose if the payment terms are on a `Yes` or `No` payment term.
* **Customer id** (`customer_id`, number, required): Enter the customer's or company's unique identifier.
* **Discount status** (`discount_status`, select_one, required): Set the status of the discount to either `Active` or `Inactive`.
* **Notes** (`notes`, text, required): Add any additional notes about the customer or company.
* **Email** (`email`, email, required): Enter the customer's or company's email address.
* **Phone** (`phone`, text, required): Enter the customer's or company's phone number.
* **Address** (`address`, text, required): Enter the customer's or company's address.
* **Company name** (`company_name`, text, required): Enter the customer's or company's name.
* **Company address** (`company_address`, text, required): Enter the customer's or company's address.
* **Contact number** (`contact_number`, text, required): Enter the contact person's phone number.
* **Contact email** (`contact_email`, text, required): Enter the contact person's email address.
* **Customer name** (`customer_name`, text, required): Enter the customer's name.
* **Customer address** (`customer_address`, text, required): Enter the customer's address.
* **Customer phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **Customer email** (`customer_email`, text, required): Enter the customer's email address.
