# raffle_ticket_form - Help Guide
## Purpose
This form is used to collect information for a raffle, including entry details, winner details, and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the raffle entry fields (Raffle Entry, Raffle Details) to provide your information for the raffle.
2. If you are a winner, fill out the winner details fields (Winner Details, Winner Details 2) to provide your information.
3. Enter your payment method selection (Payment Method 1, Payment Method 2) to complete the payment process.

## Field-by-Field Explanation
* **Raffle Entry** (`Raffle Entry`, `text`, required/optional): Enter your name and other details to be eligible for the raffle.
* **Raffle Details** (`raffle_details`, `text`, required/optional): Enter any additional details for the raffle.
* **User Details** (`user_details`, `text`, required/optional): Enter your name and other details to complete the entry.
* **Payment Method 1** (`payment_method_1`, `select_one`, required/optional): Select a payment option (Stripe, PayPal, Bank Transfer) for the raffle ticket purchase.
* **Payment Method 2** (`payment_method_2`, `select_one`, required/optional): Select another payment option (Stripe, PayPal, Bank Transfer) for the raffle ticket purchase.
* **Winner Details** (`raffle_winner`, `text`, required/optional): Enter your name and other details to claim the raffle prize.
* **Winner Details 2** (`winner_details_2`, `text`, required/optional): Enter any additional details for the winner.
* **Ticket Price** (`ticket_price`, `number`, required/optional): Enter the price of the raffle ticket.
* **Quantity** (`quantity`, `number`, required/optional): Enter the number of raffle tickets you want to purchase.
* **Ticket Price Total** (`ticket_price_total`, `number`, required/optional): Enter the total price of the raffle tickets you are purchasing.
* **Payment Confirmation** (`payment_confirmation`, `text`, required/optional): Confirm your payment information.
* **Payment Method 1** (`payment_method_1`, `select_one`, required/optional): Select a payment option for the raffle ticket purchase.
* **Payment Method 2** (`payment_method_2`, `select_one`, required/optional): Select another payment option for the raffle ticket purchase.
