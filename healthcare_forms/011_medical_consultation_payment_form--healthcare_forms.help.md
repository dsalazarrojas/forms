# Medical Consultation Payment Form - Help Guide
## Purpose
The Medical Consultation Payment Form is designed to collect payment information from patients after receiving medical consultations. This form helps healthcare professionals record and process payments accurately and efficiently.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select the "Payment Method" field and choose the way you want to pay, whether it's cash, credit card, or bank transfer.
2. Enter your name and date of service (the date you received the consultation) in the corresponding fields.
3. If your payment method is credit card or bank transfer, enter the payment amount and date you made the payment.
4. Finally, select the "Payment Status" field and choose from three options: "Pending", "Paid", or "Refunded".

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required/optional): Enter your name as the patient.
* **Payment Method** (`payment_method`, select_one, required): Choose how you want to pay for the medical consultation.
	+ Cash: Pay in cash at the reception desk.
	+ Credit Card: Pay using your credit card number and expiration date.
	+ Bank Transfer: Transfer funds from your bank account.
* **Date of Service** (`date_of_service`, date, optional): Enter the date you received the medical consultation.
* **Time of Service** (`time_of_service`, time, optional): Enter the time you received the medical consultation.
* **Payment Amount** (`payment_amount`, number, optional): Enter the amount you paid for the medical consultation.
* **Payment Date** (`payment_date`, date, optional): Enter the date you made the payment.
* **Payment Time** (`payment_time`, time, optional): Enter the time you made the payment.
* **Payment Status** (`payment_status`, select_one, required): Choose the status of your payment:
	+ Pending: The payment is being processed.
	+ Paid: The payment has been successfully made.
	+ Refunded: The payment has been refunded.

## Tips
- Ensure you enter accurate payment information to prevent errors.
- If you are paying by credit card, ensure you enter the correct expiration date and time.
- If you are paying by bank transfer, ensure you provide the correct transfer details.
- Review the "Payment Status" field to track the progress of your payment.
