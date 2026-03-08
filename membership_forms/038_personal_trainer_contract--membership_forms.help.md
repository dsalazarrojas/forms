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
