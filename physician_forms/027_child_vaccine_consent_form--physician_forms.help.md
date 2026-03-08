# Child Vaccine Consent Form - Help Guide

## Purpose
This form is designed to obtain informed consent from parents or guardians for their child to receive vaccines. It's essential to ensure that the parent or guardian understands the benefits, risks, and potential side effects of the vaccine, as well as any allergies, medical conditions, or previous reactions that may impact the child's health.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure you have reviewed and understood the vaccine information statement.
2. Provide accurate and complete information for your child.
3. Answer all questions truthfully and comprehensively.
4. Sign and date the form after completing it.

## Field-by-Field Explanation

* **Consent Date** (`consent_date`, date, required): The date on which you are giving consent for your child to receive the vaccine.
* **Parent or Guardian First Name** (`parent_guardian_first_name`, text, required): Your first name as the parent or guardian.
* **Parent or Guardian Last Name** (`parent_guardian_last_name`, text, required): Your last name as the parent or guardian.
* **Parent or Guardian Email** (`parent_guardian_email`, email, required): Your primary email address for contact.
* **Parent or Guardian Phone** (`parent_guardian_phone`, text, required): Your primary phone number for contact.
* **Parent or Guardian Address** (`parent_guardian_address`, text, required): Your full street address.
* **Child First Name** (`child_first_name`, text, required): Your child's first name.
* **Child Last Name** (`child_last_name`, text, required): Your child's last name.
* **Child Date of Birth** (`child_date_of_birth`, date, required): The date of your child's birth.
* **Child Weight** (`child_weight`, number, required): Your child's current weight in pounds or kilograms.
* **Child Gender** (`child_gender`, select_one, required): Select your child's gender (Male, Female, Non-binary, Prefer not to say, Other).
* **Vaccine Type** (`vaccine_type`, select_one, required): Select the type of vaccine being administered (DTaP (Diphtheria, Tetanus, Pertussis), MMR (Measles, Mumps, Rubella), Polio (IPV), Hepatitis A, Hepatitis B, Varicella (Chickenpox), Influenza (Flu), COVID-19, HPV, Meningococcal, Pneumococcal, Other).
* **Vaccine Dose Number** (`vaccine_dose_number`, select_one, required): Select which dose this is in the series (First dose, Second dose, Third dose, Fourth dose, Booster dose, Annual dose, Single dose vaccine).
* **Previous Vaccine Reaction** (`previous_vaccine_reaction`, select_one, required): Has the child had a reaction to any vaccine before (Yes, severe reaction, Yes, mild reaction, False, Unsure).
* **Previous Reaction Description** (`reaction_description`, text, false): Describe the previous reaction, if applicable.
* **Current Illness** (`current_illness`, select_one, required): Is the child currently ill (Yes, moderate or severe illness, Yes, mild illness, False, Unsure).
* **Allergies** (`allergies`, text, required): List all known allergies, including vaccine components.
* **Immune System Conditions** (`immune_system_conditions`, select_one, required): Does the child have any immune system conditions (True, False, Unsure).
* **Current Medications** (`current_medications`, text, false): List any current medications the child is taking.
* **Bleeding Disorders** (`bleeding_disorders`, select_one, required): Does the child have any bleeding disorders (True, False, Unsure).
* **Recent Blood Transfusion** (`recent_blood_transfusion`, select_one, required): Has the child received a blood transfusion in the past 3 months (True, False, Unsure).
* **Vaccine Information Reviewed** (`vaccine_information_reviewed`, select_one, required): Have you reviewed the vaccine information statement (Yes, thoroughly, Yes, briefly, No, please provide).
* **Vaccine Benefits Understood** (`vaccine_benefits_understood`, select_one, required): Do you understand the benefits of this vaccine (Yes, completely, Mostly, Somewhat, No, I need more information).
* **Vaccine Risks Understood** (`vaccine_risks_understood`, select_one, required): Do you understand the potential risks and side effects of this vaccine (Yes, completely, Mostly, Somewhat, No, I need more information).
* **Questions Addressed** (`questions_addressed`, select_one, required): Have all your questions been answered (Yes, all questions answered, Most questions answered, No, still have questions).
* **Consent Granted** (`consent_granted`, select_one, required): Do you consent to your child receiving this vaccine (Yes, I consent, No, I do not consent).
* **Parent or Guardian Signature** (`parent_guardian_signature`, text, required): Type your full name as your electronic signature.
* **Signature Date** (`signature_date`, date, required): Date of electronic signature.
* **Administering Provider** (`administering_provider`, text, required): Name of healthcare provider administering vaccine.
* **Provider Signature** (`provider_signature`, text, required): Healthcare provider electronic signature.

## Tips
- Ensure you have reviewed and understood the vaccine information statement before completing this form.
- Answer all questions truthfully and comprehensively.
- Sign and date the form after completing it.
- Make sure to keep a copy of this form for your records.
