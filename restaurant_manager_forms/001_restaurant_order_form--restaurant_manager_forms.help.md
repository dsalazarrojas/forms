# Restaurant Order Form - Help Guide
## Purpose
The Restaurant Order Form is a tool for restaurant managers to collect and record customer order information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's contact information, including their name, email, and phone number.
2. Select the type of order (Pickup or Delivery).
3. Choose the payment method (Credit Card or Cash).
4. Enter the order date and time.
5. Enter any additional order notes.
6. Select the order status (Pending, Approved, or Cancelled).

## Field-by-Field Explanation
- **Customer Information** (`Customer Information`, `text`, optional): Enter the customer's name, email, and phone number.
- **Order Type** (`Order Type`, `select_one`, optional): Choose between Pickup and Delivery to indicate the order type.
- **Order Date** (`Order Date`, `date`, optional): Enter the date the order will be ready for pickup or delivery.
- **Order Time** (`Order Time`, `time`, optional): Enter the time the order will be ready for pickup or delivery.
- **Payment Method** (`Payment Method`, `select_one`, optional): Select between Credit Card and Cash to indicate the payment method.
- **Delivery Address** (`Delivery Address`, `text`, optional): Enter the address where the order will be delivered.
- **Pickup Time** (`Pickup Time`, `time`, optional): Enter the time the order will be ready for pickup.
- **Order Notes** (`Order Notes`, `note`, optional): Enter any additional information about the order.
- **Email** (`Email`, `email`, optional): Enter the customer's email address.
- **Phone** (`Phone`, `text`, optional): Enter the customer's phone number.
- **Order Status** (`Order Status`, `select_one`, optional): Select between Pending, Approved, and Cancelled to indicate the order status.

## Tips
- Make sure to fill out all required fields, even if not all fields are marked as required.
- Enter accurate and up-to-date information to ensure smooth communication with the customer.
- Use the "Order Status" field to track the order's progress and communicate with the customer accordingly.
