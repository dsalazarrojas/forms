# Sporting Event Ticket Delivery Form - Help Guide
## Purpose
The Sporting Event Ticket Delivery Form is used to collect information for ticket delivery. This form ensures that tickets are correctly attributed to customers, making it easier to manage and track ticket deliveries.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your First Name
2. Enter your Last Name
3. Enter your Email (if you provide an email, we can use it for communication)
4. Enter your Phone (if you provide a phone number, we can contact you with any updates)
5. Provide the name of the Event for which you are purchasing tickets
6. Choose a Ticket Price (if available options are not provided, leave blank)
7. Choose a Payment Method (Stripe, PayPal, or Bank Transfer)
8. Add any additional Order Notes if required
9. Enter the Ticket Quantity you want to purchase

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): Enter your first name.
* **Last Name** (`last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address for communication.
* **Phone** (`phone`, text, optional): Enter your phone number for updates.
* **Event Name** (`event_name`, text, optional): Enter the name of the sporting event you are purchasing tickets for.
* **Event Date** (`event_date`, date, optional): Enter the date of the event.
* **Ticket Price** (`ticket_price`, number, optional): Enter the price of the ticket you want to purchase.
* **Payment Method** (`payment_method`, select_one, required): Choose how you would like to pay for your ticket: Stripe, PayPal, or Bank Transfer.
* **Order Notes** (`order_notes`, note, optional): Add any additional comments or requests for your order.
* **Ticket Quantity** (`ticket_quantity`, number, optional): Enter the number of tickets you want to purchase.
