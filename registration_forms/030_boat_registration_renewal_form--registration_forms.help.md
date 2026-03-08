# Boat Registration Renewal Form - Help Guide
## Purpose
This form is for renewing a boat registration. It's essential to fill out this form accurately to ensure a smooth and hassle-free registration renewal process.

## How To Complete This Form
1. Ensure you have all the necessary documents and information ready before starting the form.
2. Fill out the form in a clear and legible handwriting.
3. Make sure to review the form carefully before submitting it to avoid errors.

## Field-by-Field Explanation

* **Owner First Name** (`owner_first_name`, text, required): Enter the first name of the boat owner.
* **Owner Last Name** (`owner_last_name`, text, required): Enter the last name of the boat owner.
* **Owner Email** (`owner_email`, email, required): Enter the contact email of the boat owner.
* **Owner Phone** (`owner_phone`, text, required): Enter the contact phone number of the boat owner.
* **Street Address** (`street_address`, text, required): Enter the boat's current street address.
* **City** (`city`, text, required): Enter the city where the boat is currently registered.
* **State** (`state`, text, required): Enter the state where the boat is currently registered.
* **ZIP Code** (`zip_code`, text, required): Enter the ZIP code of the boat's registered location.
* **Current Registration Number** (`current_registration_number`, text, required): Enter the current registration number of the boat.
* **Current Registration Expiry** (`current_registration_expiry`, date, required): Enter the date when the current registration expires.
* **Boat Hull ID (HIN)** (`boat_hull_id`, text, required): Enter the hull identification number of the boat.
* **Boat Make** (`boat_make`, text, required): Enter the manufacturer of the boat.
* **Boat Model** (`boat_model`, text, required): Enter the model name of the boat.
* **Boat Year** (`boat_year`, number, required): Enter the year the boat was manufactured.
* **Ownership Changes** (`ownership_changes`, select_one, required): Select if there have been any changes in ownership since the last registration. Options: No changes, Yes, address changed, Yes, owner changed, Yes, boat modified.
* **New Address** (`new_address`, text, optional): If ownership changes were reported, enter the new address of the boat.
* **Boat Modifications** (`boat_modifications`, text, optional): Enter any modifications made to the boat since the last registration.
* **Renewal Period** (`renewal_period`, select_one, required): Select the duration for which you're renewing the registration. Options: 1 Year, 2 Years, 3 Years.
* **Is This a Late Renewal?** (`late_renewal`, select_one, required): Select if this is a late renewal or if you're renewing on time. Options: No, renewing on time, Yes, past expiration.
* **Late Fee Applicable** (`late_fee_applicable`, select_one, optional): If this is a late renewal, select if the late fee applies. Options: Not Applicable, Yes, late fee applies.
* **Registration Fee** (`registration_fee`, number, required): Enter the base renewal fee.
* **Additional Fees** (`additional_fees`, number, optional): Enter any additional fees applicable.
* **Total Amount Due** (`total_amount`, number, required): Calculate the total amount due for the renewal.
* **Payment Method** (`payment_method`, select_one, required): Select the method of payment. Options: Credit Card, Debit Card, PayPal, Check, Money Order.
* **Card Number** (`card_number`, text, optional): If paying by card, enter the card number.
* **Cardholder Name** (`cardholder_name`, text, optional): If paying by card, enter the name on the card.
* **Delivery Method** (`delivery_method`, select_one, required): Select how you'd like to receive the registration. Options: Email - Digital Copy, Mail - Physical Copy, Both, Pick Up In Person.
* **Certification Statement** (`certification_statement`, select_one, required): Confirm that all information provided is correct. Options: Yes, I Certify, False.
* **Owner Signature** (`owner_signature`, text, required): Sign your name as the boat owner, including your full name.
* **Signature Date** (`signature_date`, date, required): Enter the date of the renewal.

Note: This guide is a general reference, and it's always best to consult with the relevant authorities for specific requirements and instructions.
