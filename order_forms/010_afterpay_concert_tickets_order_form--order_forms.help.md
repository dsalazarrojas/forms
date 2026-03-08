# Afterpay Concert Tickets Order Form - Help Guide

## Purpose
The Afterpay Concert Tickets Order Form is designed to allow customers to order concert tickets in a secure and efficient manner. The form captures essential details such as concert date and city, ticket type, delivery method, and payment information.

## How To Complete This Form

To complete this form, follow these steps:

1.  Ensure you have all the necessary information ready before proceeding.
2.  Select the concert date and city that suits your needs.
3.  Choose your preferred ticket type (e.g., General Admission, Reserved Seating, etc.).
4.  Select your preferred delivery method (e.g., Digital, Email, or Physical Mail).
5.  Fill out your payment information (e.g., Afterpay, Visa, Mastercard, etc.).
6.  Review and submit the form.

## Field-by-Field Explanation

*  **Concert Date and City (Concert Date and City)** (`concert_date_city`, `select_one`, required): Select the concert date and city that you want to attend.
*  **Ticket Type - VIP, General Admission, etc. (ticket_type)` (`ticket_type`, `select_one`, required): Choose your preferred ticket type.
*  **Number of Tickets (ticket_quantity)` (`ticket_quantity`, `number`, required): Enter the number of tickets you want to purchase.
*  **Email for Digital Delivery (delivery_email)` (`delivery_email`, `email`, required): Enter your email address where you want your tickets sent.
*  **Payment Method - Afterpay Available (payment_method)` (`payment_method`, `select_one`, required): Choose your payment method (e.g., Afterpay, Visa, Mastercard, etc.).
*  **Total Transaction Amount (total_amount)` (`total_amount`, `number`, required): Enter the total transaction amount, which includes service fees and taxes.
*  **Any Special Accessibility Requirements (accessibility_needs)` (`accessibility_needs`, `text`, optional): If you have any special accessibility needs, please specify them here.
*  **Physical Mailing Address (mailing_address)` (`mailing_address`, `text`, optional): If you selected a physical delivery method, enter your mailing address here.
