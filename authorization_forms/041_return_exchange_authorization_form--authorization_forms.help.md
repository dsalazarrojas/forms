# Return Exchange Authorization Form - Help Guide
## Purpose
This form is used to authorize the return of an item that was previously sold or exchanged. It helps ensure that the return process is smooth and efficient.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the customer's name and order number.
2. Provide a valid reason for the return.
3. Select any relevant product details that need to be returned (if applicable).
4. Choose who authorized this return (if applicable).
5. Add any additional notes about the return.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer who is returning the item.
* **Order Number** (`order_number`, number, required): Enter the number of the order that the item belongs to.
* **Reason for Return** (`reason_for_return`, text, required): Provide a valid reason for the return. This will help the return process.
* **Product Details** (`product_details`, select_multiple, optional): If applicable, select any relevant product details that need to be returned.
* **Authorized By** (`authorized_by`, select_one, optional): If applicable, choose who authorized this return.
* **Notes** (`notes`, note, optional): Add any additional notes about the return.
