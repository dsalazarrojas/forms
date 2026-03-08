# Digital Download Purchase Order Form - Help Guide

## Purpose
This form is designed to collect information about a digital download purchase, including customer details, product details, and payment information.

## How To Complete This Form
1. Please start by providing your **Customer Information**, including your name, company (if applicable), phone number, and email.
2. Next, select the **Product Details**, including the type of product you are interested in, and its price.
3. Then, fill in the **Payment Information**, including the payment method, order status, and download link (if applicable).
4. Finally, double-check your entries by selecting **Confirm Order** to review your selections.
5. You can also add **Notes** if you have any additional comments or instructions for the sale.
6. After filling out the form, submit your **Download Link**, which will be generated and sent to you after successful payment.
7. If required, fill in your **Customer Name**, **Customer Company**, **Product Type**, **Quantity**, **Total Cost**, **Tax Rate**, and **Tax Amount** fields, which are used for internal purposes.

## Field-by-Field Explanation
* **Customer Information** (id: 1, **Customer Information**, text, required): 
  * This field is used to collect the name and contact information of the customer.
* **Customer Name** (id: 15, **Customer Name**, text, optional): 
  * Please enter your name as it appears on your official records.
* **Customer Company** (id: 16, **Customer Company**, text, optional): 
  * Enter your company name if you represent a business or organization.
* **Product Details** (id: 2, **Product Details**, text, required): 
  * Choose the product you would like to purchase.
* **Product Type** (id: 17, **Product Type**, select multiple, required): 
  * Select all applicable product types that you are interested in.
* **Product Price** (id: 18, **Product Price**, number, required): 
  * Please enter the price of the product you are purchasing.
* **Quantity** (id: 19, **Quantity**, number, required): 
  * Enter the quantity of the product you would like to purchase.
* **Total Cost** (id: 20, **Total Cost**, number, required): 
  * This field will automatically calculate based on the price and quantity.
* **Tax Rate** (id: 21, **Tax Rate**, number, required): 
  * Please enter the tax rate for the sale.
* **Tax Amount** (id: 22, **Tax Amount**, number, required): 
  * This field will automatically calculate based on the tax rate and total cost.
* **Discount Rate** (id: 23, **Discount Rate**, number, optional): 
  * If applicable, please enter any discount rate.
* **Discount Amount** (id: 24, **Discount Amount**, number, optional): 
  * This field will automatically calculate based on the discount rate and total cost.
* **Final Cost** (id: 25, **Final Cost**, number, required): 
  * This field will automatically calculate based on the total cost and tax amount.
* **Order Date** (id: 10, **Order Date**, date, optional): 
  * Please enter the date of the order.
* **Order Time** (id: 11, **Order Time**, time, optional): 
  * Enter the time of the order.
* **Order Status** (id: 12, **Order Status**, select one, required): 
  * Select the current status of the order (pending, complete, or canceled).
* **Payment Information** (id: 3, **Payment Information**, text, required): 
  * Choose the payment method (cash, check, or paypal).
* **Payment Method** (id: 13, **Payment Method**, select one, required): 
  * Select the payment method used for the sale.
* **Download Link** (id: 4, **Download Link**, text, required): 
  * Enter the link to the digital download.
* **Confirm Order** (id: 5, **Confirm Order**, text, required): 
  * Double-check your entries to confirm the order.
* **Customer Email** (id: 7, **Customer Email**, email, optional): 
  * Enter the customer's email address.
* **Customer Phone** (id: 8, **Customer Phone**, text, optional): 
  * Enter the customer's phone number.
* **Customer Address** (id: 9, **Customer Address**, text, optional): 
  * Enter the customer's address.
* **Notes** (id: 6, **Notes**, text, optional): 
  * Add any additional comments or instructions for the sale.
* **Yes/No** (id: 14, **Yes/No**, select multiple, optional): 
  * Select all applicable yes or no options.
* **Tax Amount** (id: 22, **Tax Amount**, number, required): 
  * This field will automatically calculate based on the tax rate and total cost.
