# Choices's Pregnancy Center Patient Information - Help Guide
## Purpose
This form is designed to collect personal and medical information from patients who are seeking services at the Choices's Pregnancy Center. The information collected will be used to ensure you receive the appropriate care and services.

## How To Complete This Form
To complete this form, please follow the instructions below:

1. Start by providing your personal details, including your first name, last name, date of birth, and age.
2. Answer the questions related to your pregnancy, such as if you are currently pregnant, how many weeks pregnant, and if you have had previous pregnancies.
3. Provide information about your medical background, including any medications you are currently taking, medical conditions you have, and allergies.
4. Share your contact information, including your phone number and address.
5. Indicate how you would like to be contacted, and provide the name and phone number of an emergency contact.
6. Answer questions about your insurance and medical provider.
7. Finally, sign and date the consent section, indicating that the information provided is accurate and you consent to receive services.

## Field-by-Field Explanation

* **First Name** (`patient_first_name`, text, required): Enter your first name as it appears on your identification.
* **Last Name** (`patient_last_name`, text, required): Enter your last name as it appears on your identification.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Age** (`age`, number, required): Enter your current age.
* **Gender** (`gender`, select_one, required): Select your gender from the options provided.
* **Marital Status** (`marital_status`, select_one, optional): Select your marital status from the options provided. If you are not married, select "Single."
* **Contact Information** (`contact_information`, note, optional): Enter a brief note about how to contact you.
* **Phone Number** (`phone`, text, required): Enter your phone number.
* **Email Address** (`email`, email, optional): If you have an email address, enter it here. This will be used to contact you with important updates.
* **Address** (`address`, text, required): Enter your street address, city, state, and zip code.
* **Preferred Contact Method** (`preferred_contact`, select_one, required): Select how you would like to be contacted (phone call, text message, email, or mail).
* **Emergency Contact** (`emergency_contact`, note, optional): Enter a brief note about your emergency contact.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of your emergency contact.
* **Relationship** (`emergency_contact_relationship`, text, optional): Enter the relationship of your emergency contact (e.g. mother, father, partner).
* **Pregnancy Information** (`pregnancy_information`, note, optional): Enter any additional information about your pregnancy.
* **Are you currently pregnant** (`is_pregnant`, select_one, required): Select "True" if you are currently pregnant, or "False" if not.
* **Date of Last Menstrual Period** (`last_period_date`, date, optional): If you are currently pregnant, enter the date of your last menstrual period.
* **Estimated Due Date** (`estimated_due_date`, date, optional): If you are currently pregnant, enter your estimated due date.
* **How many weeks pregnant are you** (`weeks_pregnant`, number, optional): If you are currently pregnant, enter how many weeks pregnant you are.
* **Has your pregnancy been confirmed** (`pregnancy_confirmed`, select_one, required): Select "Yes, by doctor," "Yes, by home test," or "Yes, by clinic test." If you are not pregnant, select "No, not yet."
* **Number of Previous Pregnancies** (`previous_pregnancies`, number, optional): Enter the number of previous pregnancies you have had.
* **Number of Children** (`number_of_children`, number, optional): Enter the number of children you have.
* **Services Requested** (`services_requested`, note, optional): Enter the services you are interested in or need.
* **Reason for Visit** (`reason_for_visit`, select_multiple, required): Select all the services you are interested in or need.
* **Are you interested in counseling services** (`need_counseling`, select_one, required): Select "True" if you are interested in counseling services, or "False" if not.
* **Do you need material assistance** (`need_material_assistance`, select_one, optional): Select "True" if you need material assistance, or "False" if not.
* **Medical Information** (`medical_information`, note, optional): Enter any medical information that may be relevant to your care.
* **Do you have health insurance** (`have_insurance`, select_one, required): Select "True" if you have health insurance, or "False" if not.
* **Insurance Provider** (`insurance_provider`, text, optional): Enter your insurance provider.
* **Policy Number** (`policy_number`, text, optional): Enter your policy number.
* **Primary Care Physician** (`primary_care_physician`, text, optional): Enter your primary care physician's name and phone number.
* **Current Medications** (`current_medications`, text, optional): Enter all your current medications.
* **Medical Conditions** (`medical_conditions`, text, optional): Enter any medical conditions you have.
* **Allergies** (`allergies`, text, optional): Enter any allergies you have.
* **Lifestyle Information** (`lifestyle_information`, note, optional): Enter any lifestyle information that may be relevant to your care.
* **Do you use tobacco products** (`tobacco_use`, select_one, optional): Select "True" if you use tobacco products, or "False" if not.
* **Do you consume alcohol** (`alcohol_use`, select_one, optional): Select "True" if you consume alcohol, or "False" if not.
* **Do you have a support system** (`support_system`, select_one, optional): Select how much support you have, from "Yes, strong support" to "No support."
* **Is your partner aware of the pregnancy** (`partner_aware`, select_one, optional): Select "True" if your partner is aware of the pregnancy, or "False" if not.
* **How Did You Hear About Us** (`how_did_you_hear`, select_one, optional): Select how you heard about the center.
* **Do you have any special needs** (`special_needs`, text, optional): Enter any special needs you may have.
* **Additional Comments or Questions** (`additional_comments`, text, optional): Enter any additional comments or questions you have.
* **Consent and Agreement** (`consent_agreement`, note, optional): Sign and date this section to acknowledge that the information provided is accurate and you consent to receive services.
* **I certify that the information provided is accurate** (`information_accurate`, select_one, required): Select "Yes, I certify" to acknowledge that the information provided is accurate.
* **I consent to receive requested services** (`consent_services`, select_one, required): Select "Yes, I consent" to acknowledge that you consent to receive services.
* **Patient Signature** (`patient_signature`, text, required): Enter your signature.
* **Date** (`signature_date`, date, required): Enter the date of your signature.

Please note that all required fields must be filled out before submitting the form. If you are unsure about any information, please ask for help from our staff.
