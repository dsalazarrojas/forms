<thinking>

This form is designed to collect sales order information from customers, allowing them to input details such as customer information, order dates, product list, and order status. The purpose of this form is to streamline the sales process by providing a centralized platform for customers to submit their orders. It also allows the sales team to easily review and update order status.

This form is used to collect sales orders, and it is essential that the customer understands the purpose and the fields required to be filled in correctly to avoid duplication and miscommunication.

</thinking>

# sales_order_form - Help Guide
## Purpose
The sales order form is designed to collect sales order information from customers, allowing the sales team to easily review and update order status.

## How To Complete This Form
To complete this form, follow these steps:

1. Please fill in the customer details section with your name, email, and any other relevant contact information.
2. Select the date of the order from the calendar picker.
3. Choose the type of order (if applicable).
4. List the products purchased.
5. Add any customer notes (if necessary).
6. Input the order total (if applicable).
7. Select the sales person handling the order.
8. Choose the company order (if applicable).
9. Enter shipping information.
10. Select the order status (if applicable).
11. Add any additional order comments.
12. Sign the customer signature field.
13. Sign the sales signature field.
14. Add any order notes (if necessary).
15. Add any order comments 2 (if necessary).

## Field-by-Field Explanation
* **Customer Details** (`customer_details`, text, required): This section asks for your name and contact information.
* **order_date** (`order_date`, date, required): Please select the date of the order from the calendar picker.
* **Order Type** (`order_type`, select_multiple, optional): If applicable, choose the type of order.
* **Product List** (`product_list`, text, optional): List the products purchased.
* **Customer Notes** (`customer_notes`, note, optional): Add any customer notes if necessary.
* **Order Total** (`order_total`, number, optional): If applicable, input the order total.
* **Sales Person** (`sales_person`, select_one, optional): Select the sales person handling the order.
* **Company Order** (`company_order`, select_one, optional): If applicable, choose the company order.
* **Shipping Info** (`shipping_info`, text, optional): Enter shipping information.
* **Order Status** (`order_status`, select_multiple, optional): If applicable, select the order status.
* **Order Comments** (`order_comments`, text, optional): Add any additional order comments.
* **Customer Signature** (`customer_signature`, note, optional): Sign the customer signature field.
* **Sales Signature** (`sales_signature`, note, optional): Sign the sales signature field.
* **Order Notes** (`order_notes`, text, optional): Add any order notes if necessary.
* **Order Comments2** (`order_comments2`, note, optional): Add any order comments 2 if necessary.
