<thinking>
This form is designed to gather information for patients visiting the Yoni Steam Therapy Center. It is intended for patients who are new to the center or are returning for follow-up visits. The form should only be completed by the patient or their authorized representative. 
</thinking>

# yonivaginal_steam_intake_form - Help Guide
## Purpose
The yonivaginal_steam_intake_form is a patient intake form used to collect information for new or follow-up visits to the Yoni Steam Therapy Center.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review each field carefully to ensure you provide accurate and complete information.
2. Enter your arrival time 15 minutes before your scheduled appointment.
3. Provide your name as it appears on your identification.
4. If applicable, enter any current medical history, medications, contact information, emergency contact person and phone number, reason for your visit, medical condition, and allergies.
5. Select the medical procedure and specialty you are visiting the center for.
6. Choose the locations where you would like to receive treatment.
7. Select the procedures you would like to receive during your visit.

## Field-by-Field Explanation

* **Arrive 15 minutes early** (`arrival_time`, `number`, `required: false`):
  Please enter your scheduled appointment time 15 minutes before the actual appointment.

* **Your Name** (`name`, `text`, `required: true`):
  Enter your full name as it appears on your identification.

* **Medical History** (`medical_history`, `text`, `required: false`):
  If you have any medical conditions or history that may be relevant to your visit, please enter it here.

* **Any Current Medications** (`medications`, `text`, `required: false`):
  List any medications you are currently taking.

* **Contact Information** (`contact`, `text`, `required: false`):
  If you have a contact person to reach out to, please enter their name and phone number.

* **Emergency Contact Person** (`emergency_contact`, `text`, `required: false`):
  Enter the name and phone number of your emergency contact person.

* **Emergency Contact Phone** (`emergency_phone`, `text`, `required: false`):
  Enter the phone number of your emergency contact person.

* **Reason for Your Visit** (`reason_for_visit`, `text`, `required: false`):
  Briefly describe the reason for your visit to the Yoni Steam Therapy Center.

* **Medical Condition** (`medical_condition`, `text`, `required: false`):
  If you have any medical conditions, please enter them here.

* **Any Allergies** (`allergies`, `text`, `required: false`):
  If you have any allergies, please list them here.

* **Medical Procedure** (`medical_procedure`, `select_one`, `required: false`):
  Select the medical procedure you are visiting the center for.

* **Medical Specialty** (`medical_specialty`, `select_one`, `required: false`):
  Select the specialty you are visiting the center for.

* **Yoni Location** (`yoni_location`, `select_multiple`, `required: false`):
  Choose the locations where you would like to receive treatment.

* **Yoni Procedure** (`yoni_procedure`, `select_multiple`, `required: false`):
  Select the procedures you would like to receive during your visit.
