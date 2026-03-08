# Clinical Study Volunteer Information Form - Help Guide
## Purpose
This form is designed to collect essential information about potential clinical study volunteers. Please take a moment to review the form carefully to ensure you provide accurate and up-to-date information about yourself.

## How To Complete This Form
- Start by filling out your full name in the "Volunteer Full Name" field.
- Choose your preferred method of contact in the "Preferred Method of Contact" section.
- If you have a mailing address, please provide it in the "Mailing Address" field.
- Skip the "Demographic Information" section if you are unsure or uncomfortable sharing this information.
- In the "Preliminary Medical Profile" section, please list any known allergies or medical conditions that may affect your participation in the study.
- If you have any history of major chronic illnesses, please provide details in the "Major Illness History" field.
- Indicate your smoking status in the "Current Smoking Status" field.
- If you consume alcohol, select your average weekly consumption in the "Average weekly alcohol consumption" field.
- Skip the "Participation Preferences" section if you are unsure or uncomfortable sharing this information.
- If you are willing to travel for study visits, select your preferred times in the "What times are you typically available for study visits" field.
- Indicate your willingness to travel to the clinical site in the "Are you willing to travel to our clinical site for visits" field.
- Finally, provide your primary reason for volunteering in the "Primary reason for volunteering for clinical research" field, and acknowledge that the provided information will be kept strictly confidential in the "I acknowledge that this information will be kept strictly confidential" field.

## Field-by-Field Explanation
- **Volunteer Full Name** (`volunteer_name`, text, required): Please fill out your full name as you would like to be referred to in correspondence.
  - This field is required to ensure that we can contact you correctly.
- **Preferred Method of Contact** (`contact_method_pref`, select_one, required): Choose how you would like to be contacted (Email or Phone).
  - This field is required to ensure that we can reach you effectively.
- **Mailing Address** (`mailing_address`, text, optional): If you have a mailing address, please provide it to us.
  - This field is optional, but it helps us to send you study-related materials.
- **-- Demographic Information --** (`section_demographics`, note, required): Please skip this section if you are unsure or uncomfortable sharing this information.
  - This section is optional and intended for demographic data.
- **Gender Identity** (`gender_identity`, select_one, optional): Select your gender identity (Male, Female, Non-binary, or Prefer not to say).
  - This field is optional and helps us understand your identity.
- **Ethnicity** (`ethnicity`, text, optional): Please list your ethnicity.
  - This field is optional and helps us understand your background.
- **Primary Language Spoken at Home** (`primary_language`, text, optional): Please list the language you primarily speak at home.
  - This field is optional and helps us understand your language proficiency.
- **-- Preliminary Medical Profile --** (`section_medical_profile`, note, optional): Please list any known allergies or medical conditions.
  - This section is optional and intended for medical data.
- **Please list any known allergies** (`allergies_list`, text, optional): Please list any known allergies.
  - This field is optional and helps us understand your medical history.
- **Do you have any history of major chronic illness?** (`major_illness_history`, text, optional): Please provide details about any history of major chronic illnesses.
  - This field is optional and helps us understand your health history.
- **Current Smoking Status** (`smoking_status`, select_one, optional): Indicate your current smoking status (Never, Former, Current).
  - This field is optional and helps us understand your smoking habits.
- **Average weekly alcohol consumption** (`alcohol_use`, select_one, optional): Select your average weekly alcohol consumption (None, 1-5 drinks, 6-10 drinks, More than 10 drinks).
  - This field is optional and helps us understand your drinking habits.
- **-- Participation Preferences --** (`section_participation`, note, optional): Please skip this section if you are unsure or uncomfortable sharing this information.
  - This section is optional and intended for participation preferences.
- **What times are you typically available for study visits?** (`availability_windows`, select_multiple, optional): Select your preferred times for study visits (Morning, Afternoon, Evening, Weekend).
  - This field is optional and helps us understand your availability.
- **Are you willing to travel to our clinical site for visits?** (`travel_willingness`, select_one, optional): Indicate your willingness to travel to the clinical site (True, False).
  - This field is optional and helps us understand your travel willingness.
- **Primary reason for volunteering for clinical research** (`volunteer_motivation`, text, optional): Please provide your primary reason for volunteering.
  - This field is optional and helps us understand your motivation for participation.
- **I acknowledge that this information will be kept strictly confidential** (`confidentiality_ack`, select_one, required): Confirm that you understand that the provided information will be kept strictly confidential.
  - This field is required for data confidentiality.
