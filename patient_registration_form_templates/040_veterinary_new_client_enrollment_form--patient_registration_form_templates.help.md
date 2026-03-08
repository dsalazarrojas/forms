<thinking>
This form is used to enroll new pets and their owners into a veterinary clinic or hospital. It collects relevant information about the pet, its owner, and their payment details. The form is intended for use by clients visiting the clinic for the first time. The required fields are marked as "required" in the form.

The form is designed to be completed by the client, and the data collected will be used to create a record for the pet and its owner in the clinic's system.
</thinking>

# veterinary_new_client_enrollment_form - Help Guide
## Purpose
This form is used to enroll new pets and their owners into the veterinary clinic, ensuring accurate and up-to-date information is collected.

## How To Complete This Form
1. Begin by providing pet details in the **Pet Details** field.
2. Enter the **Owner Details** information.
3. Fill out the **Address** field with the pet's address.
4. Enter the contact phone number in the **Contact Phone** field.
5. If applicable, provide any relevant **Medical History** in the text field.
6. Enter any existing **Medical Notes** in the text field.
7. Indicate if the pet has any **Medical Conditions** (yes/no).
8. Indicate if the pet has any **Medical Treatments** (yes/no).
9. Provide **Payment Information** if relevant.
10. Select the preferred **Payment Method** from the options provided.
11. Enter the billing **Address**.

## Field-by-Field Explanation

* **Pet Details** (`pet_details`, text, required): Enter the pet's name, age, breed, and any other relevant information.
* **Owner Details** (`owner_details`, text, required): Enter the pet's owner's name, address, and contact information.
* **Address** (`address`, text, required): Enter the pet's address to ensure accurate billing and medical information is associated.
* **Contact Phone** (`contact_phone`, text, required): Enter a phone number for communication with the owner.
* **Medical History** (`medical_history`, text, required): Describe any relevant medical conditions or allergies the pet may have.
* **Medical Notes** (`medical_notes`, text, required): Enter any additional medical notes for the pet's records.
* **Medical Conditions** (`medical_conditions`, select_multiple, required): Check all applicable medical conditions (yes/no).
* **Medical Treatments** (`medical_treatments`, select_multiple, required): Check all applicable medical treatments (yes/no).
* **Payment Information** (`payment_info`, text, required): Enter any relevant payment information (e.g., insurance details).
* **Payment Method** (`payment_method`, select_one, required): Select the preferred payment method from the options provided.
* **Billing Address** (`billing_address`, text, required): Enter the billing address for the payment method selected.
