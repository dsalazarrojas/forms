# Season Tickets Pre Order Form - Help Guide
## Purpose
The Season Tickets Pre Order Form is designed to help customers pre-order season tickets for a sports event. Please fill out the form with the required information to place your order.

## How To Complete This Form
1. Fill in your name and email address.
2. Enter the quantity of season tickets you would like to order.
3. Enter the price per ticket.
4. Select your preferred payment method (Cash, Bank Transfer, Credit Card, or PayPal).
5. Confirm your payment method (Yes or No).
6. Select the season you would like to order (Summer, Fall, Winter, or Spring).
7. Enter the team name you are interested in.
8. Choose the type of ticket you want to purchase (-ผ-ป, or Other).
9. Confirm the payment status (Unpaid or Paid).
10. Add any notes or comments about your order.
11. Confirm your order by selecting Yes or No.
12. Select the method to confirm your order (Phone, Email, or In Person).
13. Enter any additional notes about your order.
14. Finally, confirm the date and time you plan to attend the event.

## Field-by-Field Explanation
* **Pre Order** (`season_tickets_pre_order`, `text`, required/optional): Please enter a brief description of your pre-order.
* **Name** (`name`, `text`, required/optional): Enter your name.
* **Email** (`email`, `email`, required/optional): Please enter your email address.
* **Phone** (`phone`, `text`, required/optional): Enter your phone number.
* **Quantity** (`quantity`, `number`, required/optional): Enter the quantity of season tickets you would like to order.
* **Season Tickets** (`season_tickets`, `number`, required/optional): Enter the season tickets quantity.
* **Price Per Ticket** (`price_per_ticket`, `number`, required/optional): Please enter price per ticket.
* **Total Price** (`total_price`, `text`, required/optional): The total price will be calculated based on the quantity and price per ticket.
* **Payment Terms** (`payment_terms`, `select_one`, required/optional): Select your preferred payment method (Cash, Bank Transfer, Credit Card, or PayPal).
* **Notes** (`notes`, `note`, required/optional): Add any notes or comments about your order.
* **Payment Date** (`payment_date`, `date`, required/optional): Enter the date you plan to make the payment.
* **Payment Time** (`payment_time`, `time`, required/optional): Enter the time you plan to make the payment.
* **Payment Method** (`payment_method`, `select_multiple`, required/optional): Select your preferred payment method (Cash, Bank Transfer, Credit Card, or PayPal).
* **Confirm** (`confirm`, `select_one`, required/optional): Confirm your payment method (Yes or No).
* **Confirm Date** (`confirm_date`, `date`, required/optional): Enter the date you confirm the payment.
* **Confirm Time** (`confirm_time`, `time`, required/optional): Enter the time you confirm the payment.
* **Confirm Method** (`confirm_method`, `select_multiple`, required/optional): Select your preferred method to confirm the payment (Phone, Email, or In Person).
* **Confirm Prophets Notes** (`notes_2`, `note`, required/optional): Add any additional notes about your order.
* **Season** (`season`, `select_one`, required/optional): Select the season you would like to order (Summer, Fall, Winter, or Spring).
* **Team Name** (`team_name`, `text`, required/optional): Enter the team name.
* **Event Date** (`event_date`, `date`, required/optional): Enter the date of the event.
* **Event Time** (`event_time`, `time`, required/optional): Enter the time of the event.
* **Ticket Type** (`ticket_type`, `select_multiple`, required/optional): Select the type of ticket you want to purchase (-ผ-ป, or Other).
* **Payment Status** (`payment_status`, `select_one`, required/optional): Confirm the payment status (Unpaid or Paid).
* **Notes 3** (`notes_3`, `note`, required/optional): Add any additional notes about your order.
