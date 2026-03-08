<thinking>... This form appears to be a merchant order form for soaps, used to collect information from customers. It is likely used for internal purposes by the merchant to process and fulfill orders. The form is structured into multiple pages with different fields to gather relevant information from the customer. This form does not have any redundant or unnecessary fields that would lead to confusion or duplication of information. The fields are well-structured and easy to understand. </thinking>

# Soap Order Form - Help Guide

## Purpose
This form is used by the merchant to process and fulfill orders from customers. It is designed to collect essential information from customers, including merchant and customer details.

## How To Complete This Form
To complete this form, follow these steps:
- Click on the "Merchant Information" page and enter the following:
  - Fill in your store name and address.
  - Enter your email and phone number.
- Click on the "Soap Type" page and select the type of soap you'd like to order from the available options.
- Fill in the quantity and unit price of the soap in the respective fields.
- Click on the "Additional Information" page and enter the following:
  - Customer name.
  - Customer email address.
  - Customer phone number.
  - Order date.

## Field-by-Field Explanation

* **Merchant Information (Page 1)** (`merchant_info`, `text`, required)
  Enter your store's name and address to allow us to contact you with order details and fulfill the order accurately.
* **Soap Type (Page 2)** (`soap_type`, `select_one`, optional)
  Select the type of soap you'd like to order from the available options:
  - **Bar Soap**
  - **Liquid Soap**
  - **Body Wash**
* **Quantity (Page 2)** (`quantity`, `number`, optional)
  Enter the quantity of soap you'd like to order.
* **Unit Price (Page 2)** (`unit_price`, `number`, optional)
  Enter the price per unit of soap.
* **Total Price (Page 2)** (`total_price`, `number`, optional)
  The total price will be automatically calculated based on the unit price and quantity.
* **Customer Name (Page 3)** (`customer_name`, `text`, optional)
  Enter the customer's name.
* **Customer Email (Page 3)** (`email`, `email`, optional)
  Enter the customer's email address.
* **Customer Phone (Page 3)** (`phone`, `text`, optional)
  Enter the customer's phone number.
* **Order Date (Page 3)** (`order_date`, `date`, optional)
  Enter the date when the order should be fulfilled.
