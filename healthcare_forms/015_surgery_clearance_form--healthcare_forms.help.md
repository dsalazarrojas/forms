<thinking>
This form appears to be designed for collecting information for a patient undergoing surgery. The form includes fields for patient information, contact details, allergies, medical conditions, medications, medical history, surgery details, patient signature, doctor signature, and completion date and time. To determine the form's purpose, it seems to be used for pre-surgical clearance or consultation. The fields suggest a comprehensive review of the patient's health status before proceeding with surgery. The form does not appear to be designed for a specific type of surgery, but rather as a general template for any surgical procedure. Therefore, the form's purpose is likely to ensure that the patient and doctor are on the same page before the surgery, and that all necessary information is collected for a smooth and safe surgical process.
</thinking>

# Surgery Clearance Form - Help Guide
## Purpose
This form is designed to be filled out by a patient before undergoing surgery. It collects essential information about the patient, including their contact details, allergies, medical conditions, medical history, and other important health-related information. This form is a crucial part of the pre-surgical clearance process, ensuring that the patient's health status is thoroughly reviewed and assessed before the operation.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your personal contact information in the "Contact Information" field.
2. Indicate whether you have any allergies or medical conditions that the doctor should be aware of.
3. Select whether you take any medications that may be relevant to your surgery.
4. Provide your medical history in the "Medical History" field.
5. Enter as much detail as possible about your upcoming surgery in the "Surgery Details" field.
6. Sign the form with your signature and date in the "Patient Signature" field.
7. The doctor will sign the form with their signature and date in the "Doctor Signature" field.
8. The date and time of completion will be entered in the "Date Completed" field.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, optional): Enter your personal contact information, including your name, address, phone number, and any other relevant details.
* **Contact Information** (`contact_info`, text, optional): Enter your contact details, including your phone number and address, in case we need to reach you after the surgery.
* **Allergies** (`allergies`, select_multiple, optional): Check the boxes indicating whether you have any allergies, such as latex, penicillin, or other allergies that the doctor should be aware of.
* **Medical Conditions** (`medical_conditions`, select_multiple, optional): Indicate any medical conditions you have, such as hypertension, diabetes, or other conditions that may impact your surgery.
* **Medications** (`medications`, select_one, optional): Check the box indicating whether you take any medications that may be relevant to your surgery.
* **Medical History** (`medical_history`, text, optional): Provide a brief description of your medical history, including any past surgeries, illnesses, or injuries.
* **Surgery Details** (`surgery_details`, text, optional): Enter as much detail as possible about your upcoming surgery, including the type of surgery, the date and time, and any other relevant information.
* **Patient Signature** (`patient_signature`, date, optional): Sign the form with your date and signature, confirming that you have filled out the form accurately and truthfully.
* **Doctor Signature** (`doctor_signature`, date, optional): The doctor will sign the form with their date and signature, confirming that they have reviewed and assessed your health status.
* **Date Completed** (`date_completed`, date, required): Enter the date on which this form was completed.
* **Time Completed** (`time_completed`, time, optional): Enter the time on which this form was completed (if applicable).
* **Completed By** (`completed_by`, text, optional): Enter the name of the person who completed this form.

Note: The required and optional fields are determined by the form's YAML fields.
