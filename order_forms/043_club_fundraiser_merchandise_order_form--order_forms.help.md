# Club Fundraiser Merchandise Order Form - Help Guide

## Purpose
This form is used for customers to place orders for merchandise related to a club fundraiser. It collects customer information, selects merchandise items, calculates order totals, and facilitates payment and delivery.

## How To Complete This Form

To place an order, follow these steps:

1. Provide your customer information, including your Full Name and Email Address. This information will be used to send order confirmations and any other relevant updates.
2. Select the type of merchandise you are purchasing by choosing from the provided options (e.g., T-shirt, Sweatshirt, etc.).
3. Enter a brief description of the item, such as color, size, or specific design, if applicable.
4. Specify the quantity of items you wish to order.
5. Enter the unit price of the item.
6. Calculate the line total by multiplying the quantity by the unit price.
7. If you are ordering additional items, select "Yes" and enter the description, quantity, and unit price of each additional item.
8. Calculate the subtotal, which is the sum of all items.
9. If applicable, enter a discount or promo code.
10. The subtotal with the discount applied will be displayed as the final Total Due.
11. Finally, choose your preferred delivery method from the options provided.

## Field-by-Field Explanation

- **Full Name**: Your full name as it appears on official documents.
  (`customer_name`, `text`, required)
  Please enter your full name for proper identification and order confirmation.

- **Email Address**: The email address where order confirmations will be sent.
  (`email_address`, `email`, required)
  Enter your email address to receive updates on your order status and any other relevant information.

- **Phone Number**: Your phone number (optional)
  (`phone_number`, `text`, not required)
  If you wish to be contacted regarding your order, please enter your phone number.

- **Student ID Number**: If applicable, your student ID number for member pricing.
  (`student_id`, `text`, not required)
  Enter your student ID number if you are eligible for member pricing.

- **Item Type**: The type of merchandise you are purchasing (e.g., T-shirt, Sweatshirt).
  (`item_type`, `select_one`, required)
  Select the type of merchandise you wish to purchase from the options provided.

- **Item Description**: A brief description of the item, such as color, size, or specific design.
  (`item_description`, `text`, required)
  Enter a brief description of the item for accurate processing.

- **Size**: The size of the item.
  (`size`, `select_one`, not required)
  Select the size of the item if applicable.

- **Color Choice**: The color choice of the item (if applicable).
  (`color`, `text`, not required)
  Enter the color choice of the item if applicable.

- **Quantity**: The number of items to order.
  (`quantity`, `number`, required)
  Specify the quantity of items you wish to order.

- **Unit Price - USD**: The price per item in USD.
  (`unit_price`, `number`, required)
  Enter the unit price of the item in USD.

- **Line Total - USD**: The sum of the item prices multiplied by quantity.
  (`line_total`, `number`, not required)
  The system will calculate this automatically based on quantity and unit price.

- **Ordering Additional Items**: If you are ordering multiple items.
  (`additional_items`, `select_one`, not required)
  If you are purchasing multiple items, select "Yes" to proceed.

- **Second Item Description**: A brief description of the second item.
  (`item2_description`, `text`, not required)
  Enter a brief description of the second item if applicable.

- **Second Item Quantity**: The quantity of the second item.
  (`item2_quantity`, `number`, not required)
  Enter the quantity of the second item.

- **Second Item Unit Price - USD**: The price per second item in USD.
  (`item2_price`, `number`, not required)
  Enter the unit price of the second item in USD.

- **Subtotal - USD**: The sum of all items.
  (`subtotal`, `number`, not required)
  The system will calculate this automatically based on item quantities and unit prices.

- **Discount or Promo Code**: If applicable, enter a discount or promo code.
  (`discount`, `text`, not required)
  If you have a discount code, enter it here for applicable discounts.

- **Discount Amount - USD**: The amount of discount applied.
  (`discount_amount`, `number`, not required)
  The system will calculate this based on the discount code entered.

- **Total Due - USD**: The final amount to pay.
  (`total`, `number`, required)
  The system will display the total due after applying all applicable discounts.

- **Delivery Method**: How you wish to receive your items.
  (`delivery_method`, `select_one`, required)
  Choose your preferred delivery method from the options provided.

## Tips
- Double-check your order details before submission to ensure accuracy.
- If you have any issues or concerns, please contact us.
- We will send you order confirmations and updates via the email address you provided.
- Ensure your email address is accurate to receive these updates.
- If you have any questions or need assistance, please don't hesitate to reach out to us.
- We're here to help!
