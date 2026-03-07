<thinking>

This form appears to be designed for customers to provide payment details and feedback after receiving a car detailing service. It likely aims to ensure that the customer completes a payment and provides feedback on the service quality and any additional requests or comments. The form seems to be used for both online and offline payments, with options for various payment methods. The "promotional Code" field and "payment_date" field suggest that there may be promotions or discounts available, and the payment date might be used to keep track of payment deadlines.

</thinking>

# Car Detailing Payment Form - Help Guide
## Purpose
This form is designed to help customers complete their payment and provide feedback on the car detailing service received. It captures essential details such as customer information, service rendered, payment method, and feedback.

## How To Complete This Form
1. Fill in your Customer Full Name, Email Address, and Phone Number in the respective fields.
2. Select the service you received from the "Service Rendered" dropdown menu.
3. Enter the Vehicle Details in the "Vehicle (Make/Model/Year)" field.
4. Select the date of payment from the calendar.
5. Enter the Total Amount Due and choose your preferred payment method.
6. If a promotional code was provided, enter it in the "Promotional Code" field.
7. Select whether you want to receive follow-up contact from us and acknowledge that the payment is non-refundable.
8. Rate the quality of service rendered.
9. Sign digitally by typing your full name to confirm payment.
10. Provide any additional notes or requests in the "Any additional notes or requests?" field (optional).

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, `text`, required): Enter your first and last name.
* **Email Address** (`customer_email`, `email`, required): Enter your email address for receipt delivery.
* **Phone Number** (`customer_phone`, `text`, required): Enter your primary contact number.
* **Service Rendered** (`service_rendered`, `select_one`, required): Select the detailing package completed from the options provided.
* **Vehicle (Make/Model/Year)** (`vehicle_details_payment`, `text`, required): Briefly describe the vehicle serviced.
* **Date of Payment** (`payment_date`, `date`, required): Select the date of payment from the calendar.
* **Total Amount Due ($)** (`total_amount_due`, `number`, required): Enter the final amount after any discounts or extras.
* **Preferred Payment Method** (`payment_method_detailing`, `select_one`, required): Choose how you are paying today.
* **Transaction ID / Reference Number** (`transaction_id`, `text`, required): Provided after successful payment (if applicable).
* **Promotional Code** (`promotional_code_applied`, `text`, optional): Enter code if applicable.
* **Rate the Quality of Service** (`service_rating`, `number`, required): Select a scale from 1 to 5.
* **May we contact you for future promotions?** (`follow_up_permission`, `select_one`, required): Choose whether you want to be contacted for promotions.
* **I acknowledge that this payment is non-refundable** (`payment_acknowledgement`, `select_one`, required): Confirm that the payment is non-refundable.
* **Digital Signature** (`digital_signature_payment`, `text`, required): Type your full name to confirm payment.
* **Any additional notes or requests?** (`additional_payment_notes`, `text`, optional): Provide any additional notes or requests.
