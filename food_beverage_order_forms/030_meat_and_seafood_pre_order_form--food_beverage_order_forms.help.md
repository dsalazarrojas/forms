# Meat And Seafood Pre Order Form - Help Guide
## Purpose

This form is used to pre-order meat and seafood items for a customer. It helps ensure accurate recording of customer orders in a food establishment or restaurant setting.

## How To Complete This Form

1. Fill in the required fields, marked with an asterisk (*) or indicated as "Required".
2. Select all applicable options for "Customer" and "Meat Items" and "Seafood Items".
3. Enter the order date and time, or leave blank if not applicable.
4. Add any additional notes about the order if needed.
5. Enter the customer's email and phone number.

## Field-by-Field Explanation

* **Customer** (`customer`, select_one, **Required**): Select the customer who is placing this order.
* **Order Date** (`order_date`, date, **Required**): Enter the date of the order. Use the format `YYYY-MM-DD`.
* **Order Time** (`order_time`, time, Optional): Enter the time of the order, if applicable.
* **Order Note** (`order_note`, note, Optional): Add any additional notes about the order.
* **Customer Email** (`customer_email`, email, **Required**): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, **Required**): Enter the customer's phone number.
* **Meat Items** (`meat_items`, select_multiple, **Required**): Select all applicable meat items to be ordered (e.g. Beef, Pork, Lamb).
* **Seafood Items** (`seafood_items`, select_multiple, **Required**): Select all applicable seafood items to be ordered (e.g. Shrimp, Salmon, Crab).
* **Meat Quantities** (`meat_quantities`, number, **Required**): Enter the quantity of each selected meat item.
* **Seafood Quantities** (`seafood_quantities`, number, **Required**): Enter the quantity of each selected seafood item.
* **Notes** (`notes`, text, Optional): Add any additional notes about the order.

## Tips

- Make sure to fill out all required fields.
- Double-check the customer information before submitting the form.
- Use the date format `YYYY-MM-DD` for the order date. 

Note: This guide is based on the provided YAML fields, and explanations are provided for each field as per the available information.
