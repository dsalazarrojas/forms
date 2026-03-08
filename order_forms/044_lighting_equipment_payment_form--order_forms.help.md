# lighting_equipment_payment_form - Help Guide
## Purpose
This form is designed to capture payment information related to lighting equipment for orders, invoices, or other financial transactions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the Payment Method from the options provided. This could be Cash, Check, Online Payment Gateway, or Other.
2. Enter the Total Cost and Payment Amount as numbers in the respective fields.
3. If necessary, provide additional details about the Payment Method in the Payment Method Details field.
4. Record the Payment Confirmation date if available.
5. Select the Payment Status from the options provided.
6. Add any additional Comments about the payment if needed.
7. Enter the Business Name and Order Number as text if applicable.
8. Record the Order Date and Order Time as time values if needed.
9. Select the Equipment Type from the provided options (LED, Incandescent, Halogen, or Other).
10. Enter the Equipment Model as text if necessary.

## Field-by-Field Explanation

* **Payment Type** (`payment_type`, select_one, required: false): Select from the options provided to indicate the method of payment.
* **Payment Method** (`payment_method`, select_one, required: false): Choose the specific payment method used, such as Cash, Check, Online Payment Gateway, or Other.
* **Total Cost** (`total_cost`, number, required: false): Enter the total cost associated with the payment.
* **Payment Amount** (`payment_amount`, number, required: false): Enter the payment amount.
* **Payment Method Details** (`payment_method_details`, note, required: false): Provide any additional details about the payment method if necessary.
* **Payment Confirmation** (`payment_confirmation`, date, required: false): Record the date of payment confirmation if available.
* **Payment Status** (`payment_status`, select_one, required: false): Select the status of the payment from the options provided.
* **Comments** (`comments`, note, required: false): Add any additional comments about the payment if needed.
* **Business Name** (`business_name`, text, required: false): Enter the name of the business or organization making the payment.
* **Order Number** (`order_number`, text, required: false): Enter the order number associated with the payment.
* **Order Date** (`order_date`, time, required: false): Record the date of the order if necessary.
* **Order Time** (`order_time`, time, required: false): Record the time of the order if necessary.
* **Equipment Type** (`equipment_type`, select_one, required: false): Choose the type of equipment from the options provided.
* **Equipment Model** (`equipment_model`, text, required: false): Enter the model of the equipment if necessary.

## Tips
- Double-check that you have selected the correct Payment Method and Payment Status to ensure accurate tracking.
- Be precise when entering numerical values for Total Cost and Payment Amount.
- If entering text fields, keep them clear and concise for easier reading.
- Review each field carefully before submitting the form to ensure accurate completion.
