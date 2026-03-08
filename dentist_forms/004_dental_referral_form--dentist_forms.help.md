<thinking>
To determine whether this form should be included in the help guide, I will first evaluate its purpose and check for potential duplication with other forms. This form appears to be a "dental_referral_form" which suggests that it's a tool for referring a patient to another dentist. Based on the provided YAML, this form likely aims to collect information from the referring dentist and the patient. It's reasonable to assume that this form should be included in the help guide to ensure end-users understand its purpose and usage.

After evaluating the form's purpose, I will proceed to create the help guide.

# dental_referral_form - Help Guide

## Purpose

The "dental_referral_form" is a form used to refer a patient from one dentist to another. This form is designed to collect information from the referring dentist and the patient, allowing for seamless communication and record-keeping between dental professionals.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the patient's information, including their name and date of birth.
2. Select the name of the referring dentist.
3. Select the name of the dentist the patient will be referred to.
4. Enter the reason for referral.
5. Enter the contact information of the referring and referred dentist(s).

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, `text`, required: false): This field is used to enter the patient's details.
* **Referring Dentist** (`referring_dentist`, `select_multiple`, required: false): Select the name of the dentist who is referring the patient.
* **Referred Dentist** (`referred_dentist`, `select_one`, required: false): Select the name of the dentist the patient will be referred to.
* **Reason for Referral** (`reason_for_referral`, `text`, required: false): Enter the reason for referring the patient.
* **Patient Name** (`patient_name`, `text`, required: false): Enter the patient's name.
* **Patient Date of Birth** (`patient_date_of_birth`, `date`, required: false): Enter the patient's date of birth.
* **Referring Dentist Phone** (`referring_dentist_phone`, `text`, required: false): Enter the contact information of the referring dentist.
* **Referred Dentist Phone** (`referred_dentist_phone`, `text`, required: false): Enter the contact information of the referred dentist.

## Tips

- Make sure to fill in the form accurately and completely to ensure smooth communication between dentists.
- If you are unsure about any field, refer to the patient's chart or contact the referring or referred dentist for clarification.
- Always review the form before submission to ensure all required and optional fields are filled in correctly.
