# spa_client_intake_form - Help Guide
## Purpose
The spa_client_intake_form is a client intake form used by spa therapists to collect information about clients before providing treatment.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name.
2. Provide your contact information, including a phone number.
3. Enter your date of birth.
4. Select any medical conditions that apply to you.
5. List any medications you are currently taking.
6. Specify your therapy goals.
7. Describe any medical history that may be relevant to your treatment.
8. List any allergy information.
9. Provide the contact information for an emergency contact.
10. Select any medical supervision requirements.
11. Enter the date of your next spa treatment.
12. Enter the name of your assigned therapist.
13. Enter the email of your assigned therapist.
14. Enter the phone number of your assigned therapist.
15. Add any additional notes about your treatment.

## Field-by-Field Explanation
- **client_name** (`text`, required): Enter your full name as it appears on your government-issued ID.
- **contact_number** (`text`, required): Enter a phone number where you can be reached.
- **date_of_birth** (`date`, required): Enter your date of birth in the format YYYY-MM-DD.
- **medical_conditions** (`select_one`, required): Select any medical conditions that apply to you, such as diabetes or a recent injury.
- **medication_list** (`select_multiple`, required): List any medications you are currently taking, such as pain medication or blood thinners.
- **therapy_goals** (`text`, required): Describe your goals for therapy, such as stress relief or pain management.
- **medical_history** (`text`, required): Describe any relevant medical history, such as past surgeries or medical procedures.
- **allergy_info** (`text`, required): List any allergies or sensitivities.
- **emergency_contact** (`select_one`, required): Select the contact information for an emergency contact.
- **medical_supervise** (`select_multiple`, required): Select any medical supervision requirements.
- **spa_treatment** (`date`, required): Enter the date of your next spa treatment.
- **therapist_name** (`text`, required): Enter the name of your assigned therapist.
- **therapist_email** (`email`, required): Enter the email of your assigned therapist.
- **therapist_number** (`text`, required): Enter the phone number of your assigned therapist.
- **notes** (`text`, required): Add any additional notes about your treatment.

Note: This form must be completed in its entirety before proceeding with treatment.
