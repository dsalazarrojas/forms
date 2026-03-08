</thinking>

# surgical_specialist_referral_form - Help Guide
## Purpose
This form is intended for healthcare professionals to refer a patient to a specialized medical specialist. It captures key information about the patient, the specialist, and the referral details to facilitate smooth communication and coordination between healthcare providers.

## How To Complete This Form
1. Fill in the patient's basic information on Page 1, such as their name, condition, and medical history.
2. On Page 2, enter the specialist's details, including their name, department, and specialty.
3. In the referral section (Pages 3-5), provide the reason for the referral, the referral date and time, and any additional medical notes or follow-up information as needed.
4. Complete the contact details for the specialist, including their name, email, and phone number.
5. Finally, sign and date the form to confirm the referral.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required): Enter the patient's full name, date of birth, and any other identifying information.
* **Patient Condition** (`patient_condition`, text, required): Describe the patient's current medical condition or the reason for the referral.
* **Medical History** (`medical_history`, text, required): Provide any relevant medical history or background information about the patient.
* **Specialist Information** (`specialist_info`, text, required): Enter the specialist's name, department, and any other relevant details.
* **Specialist Name** (`specialist_name`, text, required): Enter the specialist's name.
* **Specialist Department** (`specialist_department`, text, required): Enter the specialist's department or specialty area.
* **Specialty** (`specialty`, select_multiple, required): Select the specialist's area of expertise or specialty.
* **Contact Information** (`contact_info`, text, required): Enter the specialist's name, email, and phone number.
* **Contact Name** (`contact_name`, text, required): Enter the name of the person to contact for further information.
* **Contact Email** (`contact_email`, email, required): Enter the specialist's email address.
* **Contact Phone** (`contact_phone`, text, required): Enter the specialist's phone number.
* **Referral Reason** (`referral_reason`, text, required): Explain the reason for the referral.
* **Referral Date** (`referral_date`, date, required): Enter the date of the referral.
* **Referral Time** (`referral_time`, time, required): Enter the time of the referral.
* **Medical Notes** (`medical_notes`, note, required): Enter any additional medical notes or comments.
* **Follow-up Date** (`followup_date`, date, required): Enter the follow-up date.
* **Follow-up Time** (`followup_time`, time, required): Enter the follow-up time.
* **Next Steps** (`next_steps`, text, required): Outline any next steps or follow-up actions.
* **Patient Signature** (`patient_signature`, text, required): The patient must sign and date this form to confirm the referral.

Note: The fields marked as "required" are mandatory and must be filled in for the form to be considered complete.
