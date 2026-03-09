# Afterpay Concert Tickets Order Form - Help Guide
## Purpose
This form is designed to collect information from customers who want to purchase concert tickets on an afterpay plan. The form is meant to ensure that all necessary details are provided for successful ticket delivery and payment processing.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the purchaser's name, email, and event details.
2. Select the general seating preference for the concert.
3. Indicate the quantity of tickets required.
4. Choose the preferred ticket delivery method.
5. Confirm whether to use Afterpay or not.
6. Add any VIP or accessibility requests, if applicable.

## Field-by-Field Explanation
* **Purchaser Name** (`purchaser_name`, `text`, required): Enter the full name of the person purchasing the tickets.
* **Email** (`email`, `email`, required): Enter the email address to which the tickets will be delivered.
* **Event Name** (`event_name`, `text`, required): Enter the name of the concert or performance.
* **Event Date** (`date`, `date`, required): Enter the date of the concert.
* **Seating Preference** (`seating_preference`, `select_one`, required): Choose the general seating area for the concert.
* **Ticket Quantity** (`quantity`, `number`, required): Enter the total number of tickets required.
* **Ticket Delivery Method** (`delivery_method`, `select_one`, required): Choose how the tickets should be delivered (Email, Mobile wallet, or Will call).
* **Pay with Afterpay** (`afterpay`, `select_one`, required): Confirm whether to use Afterpay or not.
* **VIP or Accessibility Requests** (`vip_requests`, `text`, optional): Describe any special needs or requests for the concert experience.
