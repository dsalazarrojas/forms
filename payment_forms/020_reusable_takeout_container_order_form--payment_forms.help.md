<thinking>

This form is used for ordering reusable takeout containers. Its purpose is to capture customer information, order details, and payment methods for the containers being ordered. This guide is intended to help users understand the form's purpose and how to complete it accurately. It will cover the form's layout, field explanations, and tips for completion.

</thinking>

# Reusable Takeout Container Order Form - Help Guide
## Purpose
The Reusable Takeout Container Order Form is used to process orders for reusable takeout containers. This form captures essential customer information, order details, and payment methods to facilitate accurate and efficient order processing.

## How To Complete This Form
1. Start by entering the customer's information in the "Customer Info" page.
2. Select the order type from the "Order Type" dropdown menu.
3. Enter the date and time of the order.
4. Enter the total cost of the order.
5. Choose the payment method from the "Payment Method" dropdown menu.
6. Add any order notes or customer notes as required.

## Field-by-Field Explanation

* **Customer Info (Page 1)** (`customer_info`, text, required: false)
    Enter the customer's name, contact information, or any other relevant details to identify the customer.
* **Order Type (Page 1)** (`order_type`, select_one, required: false)
    Select "Yes" if the customer is ordering for a business or "No" if it's for personal use.
* **Order Date (Page 1)** (`order_date`, date, required: false)
    Enter the date of the order in the format MM/DD/YYYY.
* **Order Time (Page 1)** (`order_time`, time, required: false)
    Enter the time of the order in the format 12:00 AM or 12:00 PM.
* **Order Total (Page 1)** (`order_total`, number, required: false)
    Enter the total cost of the order.
* **Payment Method (Page 1)** (`payment_method`, select_one, required: false)
    Choose the payment method as "Credit Card" or "Cash".
* **Order Note (Page 1)** (`order_note`, note, required: false)
    Add any additional notes or comments about the order.
* **Customer Note (Page 1)** (`customer_note`, note, required: false)
    Enter any notes or messages to be communicated to the customer.

## Tips
* Double-check that the order type and payment method are selected correctly.
* Ensure that the order date and time are entered correctly to avoid any confusion.
* Use the customer note to add any special instructions or requests for the customer.
