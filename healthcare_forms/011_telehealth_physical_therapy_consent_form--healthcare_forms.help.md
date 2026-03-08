# Telehealth Physical Therapy Consent Form - Help Guide
## Purpose
This form is used to obtain patient consent for telehealth physical therapy services, ensuring that patients understand and agree to the terms and conditions of their treatment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. Enter your phone number in the "Phone" field, using the 10-digit format.
5. Select the date of your appointment in the "Date of Appointment" field.
6. Select the time of your appointment in the "Time of Appointment" field.
7. Choose the telehealth provider you will be working with from the "Telehealth Provider" dropdown list.
8. Read and agree to the terms and conditions outlined in the "Consent" field (this field is optional but recommended).
9. Select your preferred payment method from the "Payment Method" dropdown list.
10. Enter the amount you will be paying for the service in the "Amount" field.
11. Select the payment date in the "Payment Date" field.
12. Sign your name in the "Signature" field, indicating your agreement to the terms and conditions.

## Field-by-Field Explanation

* **First Name** (`patient_name`, `text`, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`patient_last_name`, `text`, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, `email`, required): Enter your email address where you can be reached for communication purposes.
* **Phone** (`phone`, `text`, required): Enter your 10-digit phone number where you can be reached for communication purposes.
* **Date of Appointment** (`date`, `date`, required): Select the date of your scheduled appointment.
* **Time of Appointment** (`time`, `time`, required): Select the time of your scheduled appointment.
* **Telehealth Provider** (`telehealth_provider`, `select_one`, required): Choose the telehealth provider you will be working with.
*   *Physical Therapist*: Select if you will be working with a Physical Therapist.
*   *Doctor*: Select if you will be working with a Doctor.
* **Consent** (`consent`, `note`, optional): This field contains the terms and conditions for your telehealth physical therapy service. Please read and agree to the terms and conditions by entering your signature in the "Signature" field.
* **Payment Method** (`payment_method`, `select_one`, required): Select your preferred payment method:
	+ *Card*: Payment made via credit or debit card.
	+ *PayPal*: Payment made via PayPal.
	+ *Bank Transfer*: Payment made via bank transfer.
* **Amount** (`amount`, `number`, required): Enter the amount you will be paying for the service.
* **Payment Date** (`payment_date`, `date`, required): Select the date you will be making the payment.
* **Signature** (`signature`, `text`, required): Sign your name indicating your agreement to the terms and conditions.

## Tips
* Make sure to enter accurate and up-to-date information to avoid any issues with communication or appointment scheduling.
* If you have any questions or concerns about the form, please contact your telehealth provider for assistance.
