# High-Frequency Skin Treatment Consent Form - Help Guide
## Purpose
The High-Frequency Skin Treatment Consent Form is designed to obtain informed consent from clients before they receive high-frequency skin treatments. This form helps ensure that clients understand the treatment process, potential risks and benefits, and their responsibilities as a client. It also helps the treatment provider to document the client's consent and medical history.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form carefully and answer all questions truthfully.
2. Select the correct skin type that best describes your skin.
3. Provide detailed information about your health and medical history.
4. Indicate how often you would like to receive skin treatments.
5. Read and sign the consent statement, selecting the option that best indicates your level of consent.
6. Enter your contact information, including email and phone number.

## Field-by-Field Explanation
* **Client Details (id: 1, name: `client_details`, label: Client Details, hint: null, type: text, required: true)**: Provide your name, address, and any other relevant details about yourself as a client.
* **Skin Type (id: 2, name: `skin_type`, label: Skin Type, hint: null, type: select_one, required: true)**: Select one of the following skin types:
	+ Normal Skin
	+ Sensitive Skin
	+ Rosacea Skin
* **Health Details (id: 3, name: `health_details`, label: Health Details, hint: null, type: note, required: true)**: Describe any medical conditions, allergies, or sensitivities you have that may affect your skin treatments.
* **Treatment Frequency (id: 4, name: `treatment_frequency`, label: Treatment Frequency, hint: How often would you like to have skin treatments?, type: select_multiple, required: true)**: Select how often you would like to receive skin treatments:
	+ Once a month
	+ Twice a month
	+ Weekly
	+ Daily
* **Consent (id: 5, name: `treatment_consent`, label: Consent, hint: null, type: note, required: true)**: This is a critical section that requires your signature and agreement to the treatment terms and conditions.
* **Email (id: 6, name: `email`, label: Email, hint: null, type: email, required: true)**: Enter your email address so we can contact you for follow-up and scheduling purposes.
* **Phone (id: 7, name: `phone`, label: Phone, hint: null, type: text, required: true)**: Enter your phone number so we can contact you for urgent matters.
* **Medical History (id: 8, name: `medical_history`, label: Medical History, hint: null, type: text, required: true)**: Describe any medical history, including medications, that may affect your skin treatments.
* **Medication (id: 9, name: `medication`, label: Medication, hint: null, type: text, required: true)**: List any medications you are currently taking that may interact with the skin treatments.
* **Allergies (id: 10, name: `allergies`, label: Allergies, hint: null, type: text, required: true)**: List any allergies or sensitivities you have that may affect your skin treatments.
* **Date (id: 11, name: `consent_date`, label: Date, hint: null, type: date, required: false)**: If you would like to specify a particular date for the consent, enter it here.
* **Time (id: 12, name: `consent_time`, label: Time, hint: null, type: time, required: false)**: If you would like to specify a particular time for the consent, enter it here.
* **Signature (id: 13, name: `consent_signature`, label: Signature, hint: null, type: select_one, required: true)**: Sign and date this form to indicate your consent to the skin treatments.
* **Notes (id: 14, name: `consent_note`, label: Notes, hint: null, type: note, required: false)**: Add any additional notes or comments about your skin treatments.

# Tips
Please review the form carefully and answer all questions truthfully. If you have any doubts or concerns, do not hesitate to ask your treatment provider.
