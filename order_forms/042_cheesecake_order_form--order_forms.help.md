<thinking>...the goal is to create a user-facing help guide that is clear, concise, and practical for end-users of the "Cheesecake Order Form". To do this, we will follow the provided YAML specification and break down the form into sections and fields to explain how to complete it in a step-by-step fashion...

# Cheesecake Order Form - Help Guide
## Purpose
The Cheesecake Order Form is used to place an order for a delicious cheesecake. It collects customer information, order details, and preferences to ensure accurate and timely fulfillment of the order.

## How To Complete This Form
To complete the form, follow these steps:

1. **Section 1: Customer Information** - Fill out your full name, email address, and phone number.
2. **Section 2: Fulfillment Details** - Choose whether you want to pick up your cheesecake in-store or have it delivered. If you choose delivery, also provide the delivery address.
3. **Section 3: Cheesecake Specifications** - Choose the base flavor and size of cheesecake you'd like.
4. **Section 4: Additional Options** - Select any extra toppings you'd like on your cheesecake.
5. **Section 5: Order Details** - Fill in the date you'd like to collect your order (at least 48 hours' notice).
6. **Section 6: Order Confirmation** - Confirm your order details and quantity.

## Field-by-Field Explanation
- **Full Name**: Enter your full name to help us address your order correctly.
  - *Required*
  - Type: text
  - Location: Section 1: Customer Information
- **Email Address**: Enter your email address so we can contact you about your order.
  - *Required*
  - Type: email
  - Location: Section 1: Customer Information
- **Phone Number**: Enter your phone number so we can contact you about your order.
  - *Required*
  - Type: text
  - Location: Section 1: Customer Information
- **Pickup or Delivery**: Choose whether you'd like to pick up your cheesecake in-store or have it delivered.
  - *Required*
  - Type: select_one
  - Location: Section 2: Fulfillment Details
- **Delivery Address**: If you chose delivery, enter the address where you'd like to receive your cheesecake.
  - Type: text
  - Location: Section 2: Fulfillment Details
- **Cheesecake Base Flavor**: Choose the base flavor of your cheesecake.
  - *Required*
  - Type: select_one
  - Location: Section 3: Cheesecake Specifications
- **Cake Size**: Choose the size of your cheesecake.
  - *Required*
  - Type: select_one
  - Location: Section 3: Cheesecake Specifications
- **Extra Toppings**: Select any extra toppings you'd like on your cheesecake.
  - Type: select_multiple
  - Location: Section 3: Cheesecake Specifications
- **Message on Cake**: Add a message to the cake, if desired.
  - Type: text
  - Location: Section 3: Cheesecake Specifications
- **Date Needed**: Enter the date you'd like to collect your order (at least 48 hours' notice).
  - *Required*
  - Type: date
  - Location: Section 5: Order Details
- **Quantity**: Enter the number of cheesecakes you'd like to order.
  - *Required*
  - Type: number
  - Location: Section 6: Order Details
- **Special Dietary Requests**: If you have any special dietary requests (e.g. gluten-free crust, sugar-free), enter them here.
  - Type: text
  - Location: Section 6: Order Details
- **Estimated Total ($)**: This is an automatically calculated field and will be confirmed on contact.
  - Type: number
  - Location: Section 6: Order Details
- **Confirm Order Details**: Confirm that your order details are correct.
  - *Required*
  - Type: select_one
  - Location: Section 6: Order Details
- **Date of Order**: This field is automatically populated when you confirm your order.
  - Type: date
  - Location: Section 6: Order Details
