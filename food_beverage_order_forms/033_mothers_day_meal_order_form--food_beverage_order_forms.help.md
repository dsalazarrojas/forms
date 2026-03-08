# Mothers Day Meal Order Form - Help Guide
## Purpose
The purpose of this form is to place orders for special occasions like Mother's Day. It gathers essential details about the order, including the date and time of the order, type of order, meal name, quantity, and more, to ensure accurate and efficient processing.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the **Order Date** in the format MM/DD/YYYY.
2. Choose the **Order Time** when you want the order to be placed.
3. Select the **Order Type**: Take-out or Eat-in.
4. Enter the **Meal Name**, a brief description of the ordered food or beverage.
5. Choose the **Meal Quantity** (1-5) to indicate the number of items ordered.
6. If necessary, add **Special Instructions** to provide additional information about the order.
7. Enter any **Meal Notes** to provide further details.
8. For **Delivery Details**:
   a. Enter the **Delivery Address** where the order will be delivered.
   b. Enter the **Delivery Name** and **Delivery Phone** of the person receiving the order.
   c. Add **Delivery Notes** if there are any special instructions for delivery.
9. Choose the **Delivery Time** for when the order will be delivered.
10. Select the **Delivery Status** (Arrived, On time, Late) based on the delivery's status.
11. For **Payment Details**:
   a. Choose the **Payment Method** (Cash, Credit Card, Debit Card).
   b. Select the **Payment Status** (Paid, Unpaid, Pending).
   c. Enter the **Payment Date** when the payment was made (if applicable).

## Field-by-Field Explanation

* **Order Date** (`order_date`, date, required: false): Enter the date when you want to place the order in the format MM/DD/YYYY.
* **Order Time** (`order_time`, time, required: false): Choose the time when you want the order to be placed.
* **Order Type** (`order_type`, select_one, required: true): Select Take-out or Eat-in to indicate the type of order.
* **Meal Name** (`meal_name`, text, required: false): A brief description of the ordered food or beverage.
* **Meal Quantity** (`meal_quantity`, select_one, required: true): Choose the number of items (1-5) ordered.
* **Special Instructions** (`special_instructions`, text, required: false): Add any special instructions for the order.
* **Meal Notes** (`meal_notes`, text, required: false): Provide further details about the order.
* **Delivery Address** (`delivery_address`, text, required: false): Enter the address where the order will be delivered.
* **Delivery Name** (`delivery_name`, text, required: false): Enter the name of the person receiving the order.
* **Delivery Phone** (`delivery_phone`, text, required: false): Enter the phone number of the person receiving the order.
* **Delivery Notes** (`delivery_notes`, text, required: false): Add any special instructions for delivery.
* **Delivery Time** (`delivery_time`, time, required: false): Choose the time when the order will be delivered.
* **Delivery Status** (`delivery_status`, select_multiple, required: false): Select the status of the delivery (Arrived, On time, Late).
* **Payment Method** (`payment_method`, select_multiple, required: false): Choose the payment method (Cash, Credit Card, Debit Card).
* **Payment Status** (`payment_status`, select_multiple, required: false): Select the payment status (Paid, Unpaid, Pending).
* **Payment Date** (`payment_date`, date, required: false): Enter the date when the payment was made (if applicable).

## Tips
- Always fill out all required fields to ensure accurate processing of the order.
- Use the **Special Instructions** field for any specific requests or requirements for the order.
- Double-check **Delivery Time** and **Delivery Status** to confirm the order's status.
- For **Payment Method** and **Payment Status**, select the correct options based on the payment details.
- If any field is left blank, ensure you have a valid reason for not providing that information, as it may delay the processing of your order.
