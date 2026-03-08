# lash_extension_consent_form - Help Guide
## Purpose
The "Lash Extension Consent Form" is a form used to gather information and obtain consent from customers before performing a lash extension procedure. It is designed to ensure that customers are aware of the potential risks and benefits associated with the procedure and provide their consent before the treatment begins.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the form accurately and completely.
2. Ensure you answer all required fields.
3. Select the relevant options for the "medical_conditions" and "medical_procedure_conducted" fields.
4. Check the "informed_consent" note field to ensure you understand the information provided.
5. Date and sign the form to confirm your consent.

## Field-by-Field Explanation

* **customer_information** (`customer_info`, text, optional): This field is for entering the customer's basic information.
* **consent** (`consent`, select_one, optional): Please select the relevant option to indicate your consent for the lash extension procedure.
* **medical_conditions** (`medical_conditions`, text, required): List any medical conditions that may affect the service.
* **allergies** (`allergies`, text, optional): List any allergies or medical conditions that may affect the service.
* **medical_procedure_conducted** (`medical_procedure_conducted`, select_one, optional): Please select the relevant option to indicate the type of medical procedure that will be conducted.
* **informed_consent** (`informed_consent`, note, optional): Check this note to ensure you understand the information provided.
* **consent_date** (`consent_date`, date, optional): Date and sign the form to confirm your consent.
* **signature** (`signature`, select_multiple, optional): Please select the relevant signature option.
* **date_signature** (`date_signature`, date, optional): Date and sign the form to confirm your consent.
* **medical_procedure_conducted_by** (`medical_procedure_conducted_by`, select_multiple, optional): Please select the relevant option for who will conduct the medical procedure.
