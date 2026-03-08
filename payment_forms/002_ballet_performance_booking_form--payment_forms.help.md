# Ballet Performance Booking Form - Help Guide

## Purpose
This form is used to book a performance with the following options:
- Saturday matinee
- Saturday evening
- Sunday matinee
- Special gala night

## How To Complete This Form
1. Enter your **Customer full name** in the "Customer full name" field. This is required to confirm the booking.
2. Enter your **Contact email** in the "Contact email" field. This email will be used to send tickets and receipts.
3. Optionally, enter your **Contact phone number** in the "Contact phone number" field. This is for urgent day of event updates.
4. Select your preferred **Performance date** from the drop-down menu.
5. Choose your desired **Seat section preference** from the drop-down menu.
6. Enter the **Number of tickets** you wish to reserve.
7. If you have any **Accessibility requirements**, please enter them in this field.
8. If you have a **Promo code**, enter it in this field to receive a discount.
9. Choose your preferred **Payment method** from the drop-down menu.
10. Enter any **Special requests or notes** you may have for the booking.
11. Finally, confirm that you **accept the terms and refund policy** by selecting "I accept the terms and refund policy" from the drop-down menu.

## Field-by-Field Explanation

* **Customer full name** (`customer_name`, `text`, required): Enter the name to appear on the booking confirmation.
* **Contact email** (`contact_email`, `email`, required): This email will be used to send tickets and receipts.
* **Contact phone number** (`contact_phone`, `text`, optional): Optional phone number for urgent updates.
* **Performance date** (`performance_date`, `select_one`, required): Select from Saturday matinee, Saturday evening, Sunday matinee, or Special gala night.
* **Seat section preference** (`seat_section`, `select_one`, required): Choose from Orchestra, Mezzanine, or Balcony.
* **Number of tickets** (`ticket_quantity`, `number`, required): Enter the number of tickets to reserve.
* **Accessibility requirements** (`accessibility_requirements`, `text`, optional): If you need special seating or assistance, enter details here.
* **Promo code** (`promo_code`, `text`, optional): Enter a promo code to receive a discount.
* **Payment method** (`payment_method`, `select_one`, required): Choose from Credit card, Bank transfer, or PayPal.
* **Special requests or notes** (`special_requests`, `text`, optional): Enter any additional requests or notes for the booking.
* **Booking terms agreement** (`agree_terms`, `select_one`, required): Confirm you accept the terms and refund policy by selecting "I accept the terms and refund policy".
