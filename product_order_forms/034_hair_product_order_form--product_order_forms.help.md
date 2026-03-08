# Hair Product Order Form - Help Guide
## Purpose
This form is for placing a hair product order. It is essential to fill out all required fields accurately to avoid delays in processing your order.

## How To Complete This Form
To complete this form, please follow these steps:
1. Start by providing **Order Details** (page 1) with your relevant information.
2. Proceed to **Product List** (page 2) to select or confirm the products you want to order.
3. Continue with **Customer Details** (page 3), but only if this field is required.
4. Finally, provide **Payment Information** (page 4) and confirm **Order Total** (page 5).

## Field-by-Field Explanation
- **Order Details** (page 1): Enter your order information.
  * **Title** (`order_details`, `text`, required): The title of your order. Please be specific.
  * **Product List** (`product_list`, `select_multiple`, required): Select or confirm the products you want to order.
  * **Order Total** (`order_total`, `number`, required): Calculate the total cost of your order. Please ensure it matches the products selected.
- **Product List** (page 2): Select or confirm the products you want to order.
  * **Product List** (`product_list`, `select_multiple`, required): Select or confirm the products you want to order.
- **Customer Details** (page 3): Provide your information, if required.
  * **Customer Name** (`customer_name`, `text`, required): Enter your full name.
  * **Customer Email** (`customer_email`, `email`, required): Enter a valid email address.
  * **Customer Phone** (`customer_phone`, `text`, optional): Enter your phone number (if applicable).
- **Payment Info** (page 4): Enter your payment information.
  * **Payment Info** (`payment_info`, `text`, required): Enter your payment method details.
- **Customer Details** (page 5): Confirm your order details.
  * **Customer Name** (`customer_name`, `text`, required): Confirm the name you provided earlier.
  * **Customer Email** (`customer_email`, `email`, required): Confirm the email address you provided earlier.
  * **Order Date** (`order_date`, `date`, required): Confirm the date of your order. Please ensure it matches the products selected.
  * **Order Total** (`order_total`, `number`, required): Confirm the total cost of your order.
  * **Product Name** (`product_name`, `text`, required): Confirm the product name you ordered.
  * **Product Description** (`product_description`, `text`, required): Confirm the product description.
  * **Product Price** (`product_price`, `number`, optional): Confirm the price of the product (if applicable).
  * **Product List** (`product_list`, `select_multiple`, required): Confirm the products you selected.

## Tips
- Please double-check all fields for accuracy before submitting the form.
- Ensure all required fields are filled out completely.
- If you have any questions or concerns, contact our support team.
