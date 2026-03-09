# Sports Event Ticket Purchase Form - Help Guide
## Purpose
The Sports Event Ticket Purchase Form is designed to allow users to purchase tickets for sports events. This form collects information about the buyer and the event, as well as payment and ticket details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the event you wish to purchase tickets for.
2. Enter your buyer details, including your name and contact information.
3. Choose your payment method.
4. Enter the ticket quantity and price.
5. Fill out any additional fields as needed.

## Field-by-Field Explanation
* **Buyer Details** (`Name`, `type`: `select_one`, `required`: `false`): Select one of the options: Name, Email, or Phone.
* **Event Details** (`type`: `select_multiple`, `options`: `Event 1`, `Event 2`, `Event 3`, `required`: `false`): Select one or more events you wish to purchase tickets for.
* **Payment Details** (`type`: `select_one`, `options`: `Credit Card`, `PayPal`, `Bank Transfer`, `required`: `false`): Choose your payment method.
* **Ticket Quantity** (`type`: `number`, `options`: `[]`, `required`: `false`): Enter the number of tickets you wish to purchase.
* **Ticket Price** (`type`: `number`, `options`: `[]`, `required`: `false`): Enter the price of the ticket(s) you wish to purchase.
* **Buyer Name** (`type`: `text`, `options`: `[]`, `required`: `false`): Enter your name.
* **Ticket Quantity** (`type`: `number`, `options`: `[]`, `required`: `false`): This field is not used in the form, but it was included to match the original YAML structure. Please disregard this field.
* **Ticket Price** (`type`: `number`, `options`: `[]`, `required`: `false`): This field was included to match the original YAML structure. Please enter the price of the ticket(s) you wish to purchase.

## Tips
* Make sure to select the correct event(s) you wish to purchase tickets for.
* Double-check your buyer details and payment method before submitting the form.
* Be accurate when entering the ticket quantity and price.
