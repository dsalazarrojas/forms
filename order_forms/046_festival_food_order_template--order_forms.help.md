# Festival Food Order Template - Help Guide
## Purpose
This form is intended to collect information for festival food orders.

## How To Complete This Form
1. Fill in the customer's name, address, phone number, and email on the customer_info_page.
2. Fill in the order date, time, and total amount on the order_details_page.
3. Select the order status from the order_status_page.
4. Add any additional order notes on the order_notes_page.
5. Update the form submitted field when the form is complete and ready to be submitted.

## Field-by-Field Explanation

* **customer_info_page (customer_info)** (`customer_info`, `text`, required): Fills in the customer's name, address, phone number, and email.
* **order_details_page (order_details)** (`order_details`, `text`, required): Fills in the order date, time, and total amount.
* **order_status_page (order_status)** (`order_status`, `select_one`, required): Selects the order status, which should be updated accordingly.
* **order_details_page (order_details)** (`order_details`, `text`, optional): Add any additional order notes.
* **form_submitted (form_submitted)** (`form_submitted`, `text`, required): Updates when the form is complete and ready to be submitted.

Note: As the form is currently designed, it might require further customization to fit the actual needs of your festival food order system. This guide is meant to be a starting point for understanding the form's current structure.
