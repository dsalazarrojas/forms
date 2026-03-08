<thinking>
We need to create a user-facing help guide for the "personal_trainer_contract" form, which is used to collect information for a personal trainer contract. The form appears to be used for collecting demographic information, medical information, and emergency contact details for a personal trainer. However, some fields are labeled with unclear names, and there is no clear indication of the purpose or context of the form. Let's assume it's for a fitness or wellness center, and the form is used to onboard a personal trainer. 

We will need to clarify the fields and create clear explanations for each section. We may need to remove redundant fields and focus on the required information. 

For example, "contract_signed" seems to be a redundant field as it's likely a checkbox or a dropdown with "yes/no" options. "emergency_phone" and "emergency_address" might be combined into a single field "emergency_contact_info". "emergency_contact_relationship" and "relationship" might be merged into a single field "emergency_contact_relationship". "health_insurance" and "emergency_medical_insurance" might be combined into "medical_insurance". 

This form seems to have some overlapping fields. We will need to review it carefully and create a clear and concise help guide. 

We will focus on creating a clear and concise guide for the end-users to understand the purpose and requirements of the form.

</thinking>

# personal_trainer_contract - Help Guide
## Purpose
The "personal_trainer_contract" form is used to onboard a personal trainer. This form collects demographic, medical, and emergency contact information for the trainer. Please fill in all required fields accurately and thoroughly.

## How To Complete This Form

1. Fill in your personal details such as first name, last name, and email.
2. Enter your date of birth.
3. Select your contract term (e.g. Option 1, Option 2, Option 3, Option 4).
4. If you have a preferred contract term that's not listed, enter it in the "contract_term_other" field.
5. Enter your training hours.
6. If you have any medical conditions, enter them in the "medical_condition" field.
7. Select your payment plan (e.g. Option 1, Option 2, Option 3).
8. Select your membership type (e.g. Option 1, Option 2, Option 3).
9. Enter your emergency contact information such as phone number, relationship, and address.
10. If you have any allergies or medical information, enter them in the corresponding fields.
11. If you have any medical insurance, enter the details in the "medical_insurance" field.
12. Review and confirm your medical release options (e.g. Option 1, Option 2, Option 3).

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, email, required): Enter your email address that we can use to contact you.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Contract Term** (`contract_term`, select_one, required): Select your contract term (e.g. Option 1, Option 2, Option 3, Option 4).
* **Contract Term Other** (`contract_term_other`, text, optional): If you have a preferred contract term that's not listed, enter it here.
* **Trainer Name** (`trainer_name`, text, optional): Enter your name as it will appear on your contract and communication with us.
* **Trainer Employed** (`trainer_employed`, text, optional): Check if you are employed with us. 
* **Training Hours** (`training_hours`, number, optional): Enter the number of hours you are committed to train per week.
* **Certification Issued** (`certification_issued`, text, optional): Enter your certification if you have any. 
* **Payment Plan** (`payment_plan`, select_multiple, optional): Select your payment plan (e.g. Option 1, Option 2, Option 3).
* **Membership Type** (`membership_type`, select_multiple, optional): Select your membership type (e.g. Option 1, Option 2, Option 3).
* **Emergency Contact Info** (`emergency_contact`, text, optional): Enter the phone number and address of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, optional): Enter the relationship of your emergency contact (e.g. spouse, child, parent).
* **Medical Condition** (`medical_condition`, text, optional): Enter any medical conditions you have that may affect your training.
* **Allergy** (`allergy`, text, optional): Enter any allergies you have that may affect your training.
* **Medication** (`medication`, text, optional): Enter any medication you are taking that may affect your training.
* **Medical Insurance** (`health_insurance`, text, optional): Enter your medical insurance details.
* **Emergency Medical Insurance** (`emergency_medical_insurance`, text, optional): Enter your emergency medical insurance details.
* **Medical Release** (`medical_release`, select_multiple, optional): Review and confirm your medical release options (e.g. Option 1, Option 2, Option 3). 

## Tips

* Please fill in all required fields accurately and thoroughly.
* Double-check your contact information and medical information for accuracy.
* Review your medical release options carefully before confirming.
