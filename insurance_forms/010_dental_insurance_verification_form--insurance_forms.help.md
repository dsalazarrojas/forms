# dental_insurance_verification_form - Help Guide
## Purpose

This form is used to verify dental insurance information for patients, ensuring accuracy and completeness of billing and claim information.

## How To Complete This Form

To complete this form, follow the steps below:

1. Enter the patient's personal information, including their name, date of birth, phone number, and email.
2. Provide the insurance information, including the insurance provider, policy number, effective and end dates, and patient status.
3. Enter any additional billing and payment information as required.

## Field-by-Field Explanation

### Patient Information

* **Patient Information** (`patient_info`, `text`, required/optional): This field is for entering the patient's personal details.
* **Patient Information**: Enter the patient's full name, date of birth, phone number, and email.

### Insurance Information

* **Insurance Information** (`insurance_info`, `text`, required/optional): This field is for entering the insurance provider's details.
* **Insurance Information**: Enter the insurance provider's name, policy number, and effective and end dates.

### Additional Information

* **Name on Card** (`name_on_card`, `text`, required/optional): This field is for entering the name on the patient's insurance card.
* **Id Number** (`id_number`, `number`, required/optional): Enter the patient's ID number for verification purposes.
* **Name of Provider** (`name_of_provider`, `text`, required/optional): Enter the name of the insurance provider.
* **Address** (`address`, `text`, required/optional): Enter the patient's address for billing and claim purposes.

### Policy Information

* **Insurance Provider** (`insurance_provider`, `select_one`, required/optional): Select the insurance provider from the list.
* **Policy Number** (`policy_number`, `text`, required/optional): Enter the policy number for verification purposes.
* **Effective Date** (`effective_date`, `date`, required/optional): Enter the effective date of the policy.
* **End Date** (`end_date`, `date`, required/optional): Enter the end date of the policy.

### Billing and Payment Information

* **Billing Information** (`billing_info`, `text`, required/optional): Enter any billing information required.
* **Payment Information** (`payment_info`, `text`, required/optional): Enter any payment information required.

### Status and Remarks

* **Patient Status** (`patient_status`, `select_one`, required/optional): Select the patient's status from the list.
* **Claim Status** (`claim_status`, `select_multiple`, required/optional): Select the claim status from the list.
* **Remarks** (`remarks`, `text`, required/optional): Enter any additional remarks or comments about the patient's insurance information.

### Duplicate Information

* **Id Number 2** (`id_number_2`, `number`, required/optional): Enter the duplicate patient's ID number.
* **Name on Card 2** (`name_on_card_2`, `text`, required/optional): Enter the name on the duplicate patient's insurance card.
* **Address 2** (`address_2`, `text`, required/optional): Enter the duplicate patient's address.
* **Phone Number** (`phone_number`, `text`, required/optional): Enter the duplicate patient's phone number.
* **Id Number 3** (`id_number_3`, `number`, required/optional): Enter the third duplicate patient's ID number.
* **Name of Provider 2** (`name_of_provider_2`, `text`, required/optional): Enter the name of the second duplicate patient's insurance provider.
