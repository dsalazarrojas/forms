# Beer Order Form - Help Guide
## Purpose
The Beer Order Form is designed for customers to place their beer orders online. It collects essential details such as age verification, customer and delivery information, beer selection, and payment and delivery instructions. This form helps in streamlining the process of taking orders and ensuring that all necessary information is collected correctly.

## How To Complete This Form

To complete the form, follow these steps:

1. **Age Verification Section**: Begin by verifying your age. This section is crucial as it confirms you are of legal drinking age. Please select the correct date of birth that matches your age.
2. **Customer and Delivery Details**: In this section, provide your full name, email address, phone number, and delivery address. This information is used for delivery and contact purposes.
3. **Beer Selection**: Here, you can select the beers you would like to order. Choose from our available options, and don’t forget to specify the quantity for each beer.
4. **Payment and Checkout**: Select your preferred payment method and any special delivery instructions.
5. **Order Confirmation**: Once you've completed all fields, review your order and submit for confirmation.

## Field-by-Field Explanation

- **Age Verification**: 
  * Name: `birth_date_verification`
  * Type: `date`
  * Required: `true`
  This is the age verification field to confirm you are of legal drinking age. Ensure the date matches your actual age.

- **Full Name**: 
  * Name: `customer_full_name`
  * Type: `text`
  * Required: `true`
  * Hint: Enter your full name as it appears on your ID.

- **Email Address**: 
  * Name: `contact_email`
  * Type: `email`
  * Required: `true`
  * Hint: Enter your valid email address for communication.

- **Phone Number**: 
  * Name: `phone_number`
  * Type: `text`
  * Required: `true`
  * Hint: Enter your phone number for contact purposes.

- **Delivery Address**: 
  * Name: `delivery_address`
  * Type: `text`
  * Required: `true`
  * Hint: Enter your delivery address where you would like to receive your order.

- **Beer Selection**: 
  * Name: `pilsner_qty_6pack`, `ipa_qty_6pack`, `stout_qty_6pack`, `wheat_beer_qty_6pack`, `mixed_case_qty`
  * Type: `number`
  * Required: `false`
  * Hint: Choose your preferred beers in the quantity you desire.

- **Growler Fill Option**: 
  * Name: `growler_fill_option`
  * Type: `select_one`
  * Required: `true`
  * Hint: Select whether you'd like to add a 64oz Growler fill, and choose the style if yes.

- **Preferred Payment Method**: 
  * Name: `preferred_payment_gateway`
  * Type: `select_one`
  * Required: `true`
  * Hint: Select your preferred payment method for a smooth checkout process.

- **Special Delivery Instructions**: 
  * Name: `delivery_instructions_beer`
  * Type: `text`
  * Required: `false`
  * Hint: Enter any special delivery instructions, e.g., side door, leave with a neighbor.

- **Order Consent Statement**: 
  * Name: `order_consent_statement`
  * Type: `select_one`
  * Required: `true`
  * Hint: Confirm that you understand the requirement to present a valid ID upon delivery.

- **Order Date**: 
  * Name: `order_date`
  * Type: `date`
  * Required: `true`
  * Hint: Enter the date of your order for confirmation.

Note: This guide is based on the provided form layout and field descriptions. Please adjust according to actual form behavior or changes.
