# Safety Inspection Photography Consent Form - Help Guide
## Purpose
The Safety Inspection Photography Consent Form is used to obtain consent from individuals before taking photos during a safety inspection. This form ensures that individuals are aware of and agree to the photography, which may be used for documentation, training, or other purposes.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Select the **Category** of the safety inspection from the drop-down list.
2. Enter a brief **Description** of the inspection or event.
3. Indicate the **Business** involvement by selecting 'Yes' if the business is directly involved.
4. If the business is involved, enter a brief **Business Description**.
5. Indicate the **Individual** involvement by selecting 'Yes' if the individual is directly involved.
6. Enter a brief **Reason For Consent**, describing why you agree to the photography.
7. Select the **Consent** option, either 'I agree' or 'Other' (if you have a specific reason for your non-consent).

## Field-by-Field Explanation

* **Category** (`category` , select_one, required: false): Select the category of the safety inspection from the list provided. This will help us understand the context of the photography.
* **Description** (`description` , text, required: false): Enter a brief description of the safety inspection or event. This will help us understand the details of the inspection.
* **Business** (`business`, select_multiple, required: false): Indicate whether the business is directly involved in the safety inspection. If you select 'Yes', you will be asked to enter a brief description of the business involvement.
* **Business Description** (`business_description` , text, required: false): If you selected 'Yes' for Business, enter a brief description of the business involvement.
* **Individual** (`individual`, select_multiple, required: false): Indicate whether the individual is directly involved in the safety inspection. If you select 'Yes', you will be asked to enter a reason for consent.
* **Purpose Of Photography** (`purpose_of_photography` , text, required: false): Enter a brief description of the purpose of the photography.
* **Consent** (`consent`, select_one, required: false): Select 'I agree' to indicate your consent to the photography. If you select 'Other', you will be asked to enter a reason for non-consent.
* **Reason For Consent** (`consent_reason` , text, required: false): If you selected 'Other' for Consent, enter a brief description of your reason for non-consent.
