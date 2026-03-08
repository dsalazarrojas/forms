# Veterinary Anesthesia Consent Form - Help Guide
## Purpose
This form is used to obtain consent from pet owners for veterinary anesthesia procedures. It collects information about the patient, details about the anesthesia, and contact information of the owner and veterinarian. The form is designed to be completed by the veterinarian and the owner of the pet, ensuring that both parties have a clear understanding of the procedures and risks involved.

## How To Complete This Form
To complete this form, please follow these steps:

1. **Enter patient information**: Fill in the patient's name, contact information (address, email, phone number), and owner's contact information.
2. **Anesthesia details**: Select the type of anesthesia required and specify the dosage and route of administration.
3. **Consent**: Choose the conditions for which anesthesia will be administered.
4. **Additional information**: If other conditions are specified, provide additional details.
5. **Signatures**: Both the owner and veterinarian must sign the form, indicating their consent and agreement to the procedures.

## Field-by-Field Explanation
- **Patient Info** (`patient_info`, `text`, required/optional): Enter the patient's name and any other relevant information.
- **Anesthesia Details** (`anesthesia_details`, `text`, required/optional): Describe the details of the anesthesia procedure, including dosage and route of administration.
- **Consent** (`consent`, `select_multiple`, required/optional): Choose the conditions for which anesthesia will be administered. Select one or more of the following:
	+ Anesthesia will be administered for the following conditions
	+ Other (please specify)
- **Other Conditions** (`other_conditions`, `text`, required/optional): If "Other (please specify)" is selected, provide additional details about the conditions.
- **Owner's Name** (`owner_name`, `text`, required/optional): Enter the owner's name.
- **Owner's Contact Info** (`owner_name`, `text`, required/optional): Enter the owner's contact information (address, email, phone number).
- **Date** (`date`, `date`, required/optional): Enter the date of the procedure.
- **Time** (`time`, `time`, required/optional): Enter the time of the procedure.
- **Veterinarian's Name** (`vet_name`, `text`, required/optional): Enter the veterinarian's name.
- **Notes** (`notes`, `note`, required/optional): Provide any additional notes about the procedure.
- **Owner's Signature** (`owner_signature`, `text`, required/optional): The owner must sign the form, indicating their consent.
- **Veterinarian's Signature** (`vet_signature`, `text`, required/optional): The veterinarian must sign the form, indicating their agreement to the procedures.
- **Veterinarian's Note** (`vet_note`, `note`, required/optional): The veterinarian may provide additional notes about the procedure.
- **Owner's Note** (`owner_note`, `note`, required/optional): The owner may provide additional notes about the procedure.
- **Anesthesia Type** (`anesthesia_type`, `select_multiple`, required/optional): Choose the type of anesthesia required. Select one or more of the following:
	+ General
	+ General (Regional)
	+ Epidural
	+ Epidural (Regional)
	+ Other (please specify)
- **Anesthesia Dosage** (`anesthesia_dosage`, `text`, required/optional): Enter the dosage of the anesthesia.
- **Anesthesia Route** (`anesthesia_route`, `text`, required/optional): Enter the route of administration of the anesthesia.
- **Anesthesia Route Other** (`anesthesia_route`, `text`, required/optional): If "Other (please specify)" is selected, enter the route of administration.
- **Anesthesia Dosage Other** (`anesthesia_dosage`, `text`, required/optional): If "Other (please specify)" is selected, enter the dosage of the anesthesia.
