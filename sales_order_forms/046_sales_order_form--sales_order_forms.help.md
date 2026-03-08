# sales_order_form - Help Guide
## Purpose
This form is used for processing sales orders, allowing sales teams to collect customer and order information in a structured and organized way.

## How To Complete This Form
1. Select the "date" field and enter the date of the sale.
2. Enter the "time" field if the sale was made at a specific time.
3. In the "product" field, type the name of the product being sold.
4. Enter the quantity of the product in the "quantity" field.
5. Enter the total cost of the order in the "order_total" field.
6. If known, enter the customer's email address in the "customer_email" field.
7. If known, enter the customer's phone number in the "customer_phone" field.
8. In the "order_status" field, select the status of the sale from the list provided.

## Field-by-Field Explanation
- **customer** (text, Optional): Enter any information about the customer that is relevant to the sale.
- **date** (date, Required): Enter the date of the sale, in the standard date format (MM/DD/YYYY).
- **time** (time, Optional): If the sale was made at a specific time, enter it in the format HH:MM:SS.
- **product** (text, Optional): Type the name of the product being sold.
- **quantity** (number, Required): Enter the number of units of the product being sold.
- **order_total** (number, Required): Enter the total cost of the order.
- **customer_email** (email, Optional): If known, enter the customer's email address.
- **customer_phone** (text, Optional): If known, enter the customer's phone number.
- **order_status** (select one, Required): Select the status of the sale from the list:
  - order status 1
  - order status 2
  - order status 3
