# veterinary_anesthesia_consent_form - Help Guide
## Purpose
The purpose of this form is to gather essential information from the pet owner regarding the pet's health, anesthesia type, and medical history before veterinary procedures. This information is crucial for the veterinarian to provide safe and effective care.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your pet's owner information on page 1.
2. Enter your pet's details on page 2.
3. Fill in the procedure and anesthesia type on page 3.
4. Indicate the anesthesia dosage and any medical history relevant to the procedure on page 4.
5. Select any applicable medical conditions or allergies on page 5.
6. Sign and date the form to confirm your understanding and consent.

## Field-by-Field Explanation
### Page 1: Owner Info
* **owner_info** (`text`, required: false): Enter your name and contact information as the pet owner.

### Page 2: Pet Info
* **pet_info** (`text`, required: false): Enter your pet's name, age, and species.

### Page 3: Procedure Info
* **procedure_info** (`text`, required: false): Describe the planned veterinary procedure or surgery.
* **anesthesia_type** (`select_one`, required: false): Select the type of anesthesia to be administered (General Anesthesia, Sedation, Regional Anesthesia, or Other).

### Page 4: Anesthesia Details
* **anesthesia_dosage** (`number`, required: false): Enter the amount of anesthesia to be administered (if applicable).
* **medical_history** (`select_multiple`, required: false): Select any medical history relevant to the procedure (Allergies, Surgery History, Medical Conditions, or Other).

### Page 5: Signatures
* **owner_signature** (`note`, required: false): Sign and date the form to confirm your understanding and consent.
* **veterinarian_signature** (`note`, required: false): Sign and date the form to confirm the veterinarian's understanding and consent.

## Tips
* Double-check the information you provide for accuracy and completeness.
* Ensure that all required fields are completed if you are signing the form.
* If you have any questions or concerns, consult with the veterinarian before completing the form.
* Keep the form for your records and reference it during and after the procedure.
