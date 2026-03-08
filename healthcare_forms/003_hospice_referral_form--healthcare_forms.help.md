# Hospice Referral Form - Help Guide

## Purpose
This form is designed to collect information about patient referrals to hospice care services. The form gathers essential details from patients or their representatives to facilitate efficient and effective referrals.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's information in the **Patient Information** section.
2. Provide the patient's medical information in the **Medical Information** section.
3. If necessary, include contact information in the **Contact Information** section.
4. Enter details about the hospice care services the patient is referring to in the **Hospice Information** section.
5. If you have any additional notes, please add them in the **Additional Notes** section.
6. Choose whether or not to refer the patient in the **Referral Information** section.
7. If applicable, provide information about the hospice staff member or organization handling the referral in the **Hospice Staff Information** section.
7. Finally, sign and date the **Signature Information** section to confirm the referral.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, `text`, required): Enter the patient's name, date of birth, and other identifying information.
* **Medical Information** (`medical_info`, `text`, required): Describe the patient's medical condition, including diagnosis, treatment, and any relevant medical history.
* **Contact Information** (`contact_info`, `text`, optional): Provide the patient's contact information, such as name, phone number, and address.
* **Hospice Information** (`hospice_info`, `text`, required): Specify the type and level of hospice care the patient needs, e.g., palliative, respite, or hospice care.
* **Additional Notes** (`notes`, `text`, optional): Add any extra comments or details about the patient's situation.
* **Referral Information** (`referral_info`, `select_one`, required): Choose "Referral" to initiate a referral or "No Referral" if no action is needed.
* **Hospice Staff Information** (`hospice_staff`, `text`, optional): Identify the hospice staff member or organization handling the referral.
* **Signature Information** (`signature_info`, `text`, required): Sign and date the form to confirm the referral.
