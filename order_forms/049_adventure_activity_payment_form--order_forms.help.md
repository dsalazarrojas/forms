# Adventure Activity Payment Form - Help Guide
## Purpose
This form collects payment and customer information for an adventure activity, and is used for processing and tracking payments.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name and activity name in the respective fields.
2. Select a mode of payment (e.g., Credit Card, PayPal, Stripe, Apple Pay).
3. Enter your billing address.
4. Confirm that you agree to the refund policy.

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, `text`, required): Enter your full name as it appears on your government-issued ID.
* **Activity Name** (`activity_name`, `text`, required): Enter the name of the activity, such as Rock Climbing or Kayaking.
* **Activity Date** (`activity_date`, `date`, required): Enter the date of the activity.
* **Number of Participants** (`number_of_participants`, `number`, required): Enter the number of participants in the activity.
* **Unit Price per Participant** (`unit_price_per_participant`, `number`, required): Enter the price per participant.
* **Equipment Rental Fee** (`equipment_rental_fee`, `number`, required): Enter any equipment rental fees.
* **Insurance Surcharge** (`insurance_surcharge`, `number`, required): Enter any insurance surcharges.
* **Total Payment Amount** (`total_payment_amount`, `number`, required): This field will be automatically calculated based on the provided details.
* **Mode of Payment** (`mode_of_payment`, `select_one`, required): Select your preferred mode of payment (e.g., Credit Card, PayPal, Stripe, Apple Pay).
* **Billing Address** (`billing_address`, `text`, required): Enter your billing address in the format: Street, City, State, Zip.
* **Receipt Delivery Email** (`receipt_delivery_email`, `email`, required): Enter an email address to receive the payment receipt.
* **Agree to Refund Policy** (`agree_to_refund_policy`, `select_one`, required): Confirm that you agree to the refund policy, which states that no refunds will be given within 24 hours of the activity.

## Tips

* Ensure you have entered all required fields before submitting the form.
* Double-check your payment information for accuracy.
* Make sure you have a valid email address for receipt delivery.
