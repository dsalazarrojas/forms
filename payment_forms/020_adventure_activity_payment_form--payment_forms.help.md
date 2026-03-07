<thinking>
This form is designed to collect information and payment details for adventure activities, such as booking a specific type of adventure activity, providing customer and payment information, and authorizing the payment. The form is divided into sections for customer information, activity details, and payment details.
</thinking>

# Adventure Activity Payment Form - Help Guide
## Purpose
This form is used to collect information and payment details for booking adventure activities such as rock climbing, whitewater rafting, zip lining, mountain biking, kayaking, paragliding, and bungee jumping, among others. It gathers customer information, activity specifics, and payment method details to ensure a smooth booking process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name in the "Full Name" field.
2. Enter your valid email address in the "Email Address" field for booking confirmation.
3. Provide your contact phone number in the "Phone Number" field.
4. Enter the name of your emergency contact in the "Emergency Contact Name" field.
5. Enter the phone number of your emergency contact in the "Emergency Contact Phone" field.
6. Select the type of adventure activity you wish to book from the "Activity Type" dropdown list.
7. Choose the date of the adventure activity in the "Activity Date" field.
8. Choose the time of the adventure activity in the "Activity Time" field.
9. Enter the total number of participants in the "Number of Participants" field.
10. Enter the total cost for the activity in the "Activity Price" field.
11. Select the payment method from the "Payment Method" dropdown list.
12. If you selected a credit or debit card, enter the card holder's name in the "Card Holder Name" field.
13. Enter the credit or debit card number in the "Card Number" field.
14. Enter the expiration date of the card in the "Expiry Date" field.
15. Enter the CVV (Security code) on the back of the card in the "CVV" field.
16. If using a card, enter the billing address associated with the card in the "Billing Address" field.
17. Confirm that you authorize the payment for the selected adventure activity by selecting "Yes" in the "Payment Authorization" field.

## Field-by-Field Explanation
* **Full Name** (`customer_full_name`, text, required): Enter your legal full name.
* **Email Address** (`email_address`, email, required): Enter a valid email address for booking confirmation.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Activity Type** (`activity_type`, select_one, required): Choose the type of adventure activity you wish to book from the dropdown list.
* **Activity Date** (`activity_date`, date, required): Choose the date of the adventure activity.
* **Activity Time** (`activity_time`, time, required): Choose the time of the adventure activity.
* **Number of Participants** (`number_of_participants`, number, required): Enter the total number of participants.
* **Activity Price** (`activity_price`, number, required): Enter the total cost for the activity.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method from the dropdown list.
* **Card Holder Name** (`card_holder_name`, text, optional): Enter the name on the credit or debit card.
* **Card Number** (`card_number`, text, optional): Enter the credit or debit card number.
* **Expiry Date** (`expiry_date`, text, optional): Enter the expiration date of the card.
* **CVV** (`cvv`, text, optional): Enter the security code on the back of the card.
* **Billing Address** (`billing_address`, text, optional): Enter the billing address associated with the card (if using a card).
* **Payment Authorization** (`payment_authorization`, select_one, required): Confirm that you authorize the payment for the selected activity by selecting "Yes".

Note: Some fields, such as "Card Holder Name", "Card Number", "Expiry Date", "CVV", and "Billing Address" are not required but may be necessary depending on the payment method selected.
