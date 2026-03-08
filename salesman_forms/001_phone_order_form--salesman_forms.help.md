# phone_order_form - Help Guide

## Purpose
The phone_order_form is used to collect information for phone orders. This form is designed to gather details such as company and customer information, order type, and order status. It's an essential tool for sales teams to accurately record and track phone orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Company Name field with the company's name.
2. Enter the Customer Name.
3. Add the customer's Address.
4. Enter the Phone Number.
5. Enter the Email of the customer and salesperson involved.
6. Add any Order Comments.
7. Choose the Type of Order (Phone, Accessories, or Other).
8. Select any Accessories required (Battery, Headset, Case, or Other).
9. Specify the Accessories Type (Wireless or Wired).
10. Enter the Order Total.
11. Update the Order Status (Pending, Processing, or Complete).
12. Add a Customer Note or Salesperson Note for reference.
13. Record the Date and Time of the order.
14. Add any additional Order Comments or Customer Order Comments.
15. Select the Other Order Type if applicable.
16. Add any Accessories Note or Customer Accessories Note.

## Field-by-Field Explanation
* **Company Name** (`company_name`, text, optional): Enter the company's name related to the order.
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name involved in the order.
* **Address** (`address`, text, optional): Enter the customer's address.
* **Phone Number** (`phone_number`, text, optional): Enter the customer's phone number.
* **Email** (`email`, email, optional): Enter the email of the customer and salesperson involved.
* **Order Comments** (`order_comments`, note, optional): Add any comments related to the order.
* **Customer Phone Number** (`customer_phone_number`, text, optional): Enter the customer's phone number.
* **Customer Email** (`customer_email`, email, optional): Enter the customer's email.
* **Company** (`company`, select_one, optional): Choose the company related to the order (Apple, Samsung, LG, Google).
* **Type** (`order_type`, select_multiple, optional): Select the type of order (Phone, Accessories, Other).
* **Accessories** (`accessories`, select_one, optional): Choose the type of accessories (Battery, Headset, Case, Other).
* **Accessories Type** (`accessories_type`, select_multiple, optional): Select the type of accessories (Wireless, Wired, Other).
* **Order Total** (`order_total`, number, optional): Enter the order total.
* **Order Status** (`order_status`, select_one, optional): Update the order status (Pending, Processing, Complete).
* **Customer Note** (`customer_note`, note, optional): Add a note for the customer.
* **Date Ordered** (`date_ordered`, date, optional): Record the date of the order.
* **Time Ordered** (`time_ordered`, time, optional): Record the time of the order.
* **Order Comments** (`order_comment`, note, optional): Add any comments related to the order.
* **Customer Order Comments** (`customer_order_comments`, note, optional): Add any comments from the customer.
* **Other Order Type** (`order_type_other`, text, optional): Enter any other type of order if applicable.
* **Accessories Note** (`accessories_note`, note, optional): Add a note for the accessories.
* **Customer Accessories Note** (`customer_accessories_note`, note, optional): Add a note for the customer's accessories.
* **Order ID** (`order_id`, number, optional): Enter the order ID.
* **Date** (`order_date`, date, optional): Record the date of the order.
* **Time** (`order_time`, time, optional): Record the time of the order.
