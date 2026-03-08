# Medicine Delivery Form - Help Guide
## Purpose
The Medicine Delivery Form is used to collect information necessary for the delivery of medicine to patients. This form helps ensure accurate and efficient medicine delivery processes.

## How To Complete This Form
1. Fill out the form completely and accurately with all the required information.
2. Enter your contact information, including address, city, state, and zip code.
3. Provide details about the medicine, including name and pharmacy name.
4. Choose the payment method and delivery status.
5. Sign the form with your signature.
6. Attach any additional delivery or payment notes if necessary.

## Field-by-Field Explanation
* **User Information** (`user_info`, `text`, required: false): This field is used to collect information about the user who is delivering the medicine. Please fill in your name, address, and contact information.
* **Contact Information** (`contact_info`, `text`, required: false): Enter your contact information, including phone number and email address, so that the patient or pharmacy can reach you for any follow-up or additional information.
* **Medication Information** (`medication_info`, `text`, required: false): Provide details about the medicine being delivered, such as the name of the medicine.
* **Delivery Information** (`delivery_info`, `text`, required: false): Enter any additional delivery information, such as delivery date and time.
* **Payment Information** (`payment_info`, `text`, required: false): Enter details about the payment method, including the payment amount and payment method (e.g., cash, credit card).
* **Date of Service** (`date_of_service`, `date`, required: false): Enter the date on which the medicine is to be delivered.
* **Time of Service** (`time_of_service`, `time`, required: false): Enter the time at which the medicine is to be delivered.
* **Payment Method** (`payment_method`, `select_one`, required: false): Choose the payment method from the options provided (e.g., 'Yes', 'No').
* **Delivery Status** (`delivery_status`, `select_multiple`, required: false): Choose the delivery status from the options provided (e.g., 'Active', 'Inactive').
* **Patient Signature** (`patient_signature`, `note`, required: false): Attach a note from the patient, if required.
* **Provider Signature** (`provider_signature`, `note`, required: false): Attach a note from the provider, if required.
* **Medicine Name** (`medicine_name`, `text`, required: false): Enter the name of the medicine being delivered.
* **Patient Name** (`patient_name`, `text`, required: false): Enter the name of the patient receiving the medicine.
* **Date** (`date`, `text`, required: false): Enter the date on which the medicine is to be delivered.
* **Phone** (`phone`, `text`, required: false): Enter your contact phone number.
* **Email** (`email`, `email`, required: false): Enter your email address.
* **Address** (`address`, `text`, required: false): Enter your address where the medicine will be delivered.
* **City** (`city`, `text`, required: false): Enter the city where the medicine will be delivered.
* **State** (`state`, `text`, required: false): Enter the state where the medicine will be delivered.
* **Zip** (`zip`, `text`, required: false): Enter the zip code where the medicine will be delivered.
* **Pharmacy Name** (`pharmacy_name`, `text`, required: false): Enter the name of the pharmacy delivering the medicine.
* **Provider Name** (`provider_name`, `text`, required: false): Enter the name of the healthcare provider delivering the medicine.
* **Delivery Note** (`delivery_note`, `text`, required: false): Enter any additional delivery notes or instructions.
* **Payment Note** (`payment_note`, `text`, required: false): Enter any additional payment notes or instructions.
* **Signature Note** (`signature_note`, `text`, required: false): Enter any additional signature notes or instructions.
