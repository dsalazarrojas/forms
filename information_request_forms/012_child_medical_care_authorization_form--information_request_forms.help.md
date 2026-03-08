# Child Medical Care Authorization Form - Help Guide

## Purpose
This form is intended to gather information from parents or guardians about their child's medical care authorization. It is used to establish a record of who is authorized to make medical decisions for the child, as well as any relevant medical history and treatment instructions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the "Authorization Date" field and enter the date on which this authorization becomes effective.
2. Fill in the "Parent or Guardian First Name", "Parent or Guardian Last Name", "Parent or Guardian Email", "Parent or Guardian Phone", and "Parent or Guardian Address" fields with accurate information.
3. Enter the "Child First Name", "Child Last Name", and "Child Date of Birth" fields with the child's relevant information.
4. Select the "Child Gender" from the provided options.
5. Enter the "Authorized Caregiver Name" and "Authorized Caregiver Relationship" with the relevant information.
6. Enter the "Authorized Caregiver Phone" with the caregiver's phone number.
7. Set the "Authorization Start Date" and "Authorization End Date" fields according to the authorization period.
8. Enter the "Primary Physician Name" and "Primary Physician Phone" with the relevant information.
9. Choose the "Preferred Medical Facility" from the available options.
10. Enter the "Medical Insurance Provider", "Insurance Policy Number", and "Insurance Group Number" with the relevant information.
11. List the "Known Allergies" and "Current Medications" in the respective fields.
12. Mention any "Chronic Medical Conditions" if applicable.
13. Select the "Blood Type" from the provided options.
14. Choose the "Treatment Authorization" option according to your preference.
15. If necessary, specify "Treatment Limitations" in the provided field.
16. Choose whether you "Authorize Emergency Surgery" according to your preference.
17. Sign the "Parent or Guardian Signature" field with your full name as an electronic signature.
18. Enter the "Signature Date" field with the date of the electronic signature.

## Field-by-Field Explanation

* **Authorization Date** (`authorization_date`, date, required): The date on which this authorization becomes effective.
* **Parent or Guardian First Name** (`parent_guardian_first_name`, text, required): Legal first name of the parent or guardian.
* **Parent or Guardian Last Name** (`parent_guardian_last_name`, text, required): Legal last name of the parent or guardian.
* **Parent or Guardian Email** (`parent_guardian_email`, email, required): Primary email address for contact.
* **Parent or Guardian Phone** (`parent_guardian_phone`, text, required): Primary phone number for contact.
* **Parent or Guardian Address** (`parent_guardian_address`, text, required): Full street address.
* **Child First Name** (`child_first_name`, text, required): Legal first name of the child.
* **Child Last Name** (`child_last_name`, text, required): Legal last name of the child.
* **Child Date of Birth** (`child_date_of_birth`, date, required): Please provide the child's birth date.
* **Child Gender** (`child_gender`, select_one, required): Select the child's gender from the provided options.
* **Authorized Caregiver Name** (`authorized_caregiver_name`, text, required): Full name of the person authorized to make medical decisions.
* **Authorized Caregiver Relationship** (`authorized_caregiver_relationship`, select_one, required): Relationship of authorized caregiver to the child.
* **Authorized Caregiver Phone** (`authorized_caregiver_phone`, text, required): Phone number for authorized caregiver.
* **Authorization Start Date** (`authorization_start_date`, date, required): When does this authorization begin?
* **Authorization End Date** (`authorization_end_date`, date, required): When does this authorization expire?
* **Primary Physician Name** (`primary_physician_name`, text, required): Name of the child's primary care physician.
* **Primary Physician Phone** (`primary_physician_phone`, text, required): Phone number for primary physician.
* **Preferred Medical Facility** (`medical_facility_preference`, text, required): Name of preferred hospital or medical facility.
* **Medical Insurance Provider** (`medical_insurance_provider`, text, required): Name of insurance company.
* **Insurance Policy Number** (`insurance_policy_number`, text, required): Policy or member number.
* **Insurance Group Number** (`insurance_group_number`, text, optional): Group number if applicable.
* **Known Allergies** (`known_allergies`, text, required): List all known allergies.
* **Current Medications** (`current_medications`, text, required): List all current medications with dosages.
* **Chronic Medical Conditions** (`chronic_conditions`, text, optional): List any chronic medical conditions.
* **Blood Type** (`blood_type`, select_one, required): Child's blood type if known.
* **Treatment Authorization** (`treatment_authorization`, select_one, required): Do you authorize the caregiver to consent to medical treatment?
* **Treatment Limitations** (`treatment_limitations`, text, optional): Specify any limitations on medical treatment authorization.
* **Emergency Surgery Authorization** (`emergency_surgery_authorization`, select_one, required): Do you authorize emergency surgery if medically necessary?
* **Parent or Guardian Signature** (`parent_guardian_signature`, text, required): Type your full name as your electronic signature.
* **Signature Date** (`signature_date`, date, required): Date of electronic signature.

## Tips
Please make sure to review each field carefully and enter accurate information to avoid any issues with medical care. If you are unsure about any of the fields, do not hesitate to ask for clarification from the medical staff.
