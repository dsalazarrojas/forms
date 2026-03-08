# Holiday Pie Order Form - Help Guide
## Purpose
The Holiday Pie Order Form is used to process orders for holiday pies from customers. This form captures customer and order information, allowing bakers to efficiently process orders and provide accurate delivery and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the "Order Information" page to begin.
2.  Fill in the "Customer Name," "Customer Email," and "Customer Phone" fields with your personal details.
3.  Select the "Order Total" field to enter the total cost of your order.
4.  Choose your payment type from the "Payment Type" dropdown menu.
5.  Select the "Order Status" option to indicate the current status of your order.
5.  Enter the "Delivery Date" and "Delivery Time" for your order.
6.  Add any additional notes or comments in the "Note" field.
7.  Select the "Baker Name" and enter the "Baker ID" field with the name of the baker who prepared your order.

## Field-by-Field Explanation

*   **Customer Name** (`customer_name`, text, required): Enter your full name.
*   **Customer Email** (`customer_email`, email, required): Enter your valid email address.
*   **Customer Phone** (`customer_phone`, text, required): Enter your contact phone number.
*   **Pie Order ID** (`pie_order_id`, text, required): Enter a unique ID for your order.
*   **Pie Description** (`pie_description`, text, required): Describe the type of pie ordered.
*   **Baker Name** (`baker_name`, text, required): Enter the name of the baker who prepared your order.
*   **Order Total** (`order_total`, number, required): Enter the total cost of your order.
*   **Payment Type** (`payment_type`, select_one, required): Choose from:
    *   **Cash**
    *   **Credit/Debit**
    *   **Bank Transfer**
*   **Order Status** (`order_status`, select_one, required): Choose from:
    *   **Pending**
    *   **In Progress**
    *   **Delivered**
*   **Delivery Date** (`delivery_date`, date, required): Enter the date you would like to receive your order.
*   **Delivery Time** (`delivery_time`, time, required): Enter the time you would like to receive your order.
*   **Note** (`note`, note, required): Add any additional comments or notes about your order.
*   **Baker ID** (`baker_id`, text, required): Enter the ID of the baker who prepared your order.
