<thinking>
The purpose of this form is to obtain consent from a parent or guardian for a child to receive vaccinations. The form is used to gather necessary information about the child, including their name, date of birth, and medical history, as well as to obtain consent for specific vaccines. This form is essential for the child's healthcare provider to ensure they can administer vaccines safely and effectively.

Before filling out this form, please ensure that you have already obtained and read the Vaccine Information Statement (VIS) and that the child's medical history has been reviewed and understood.

This form will be reviewed and verified by a healthcare provider before any vaccines are administered.</thinking>

# Child Vaccine Consent Form - Help Guide
## Purpose
The Child Vaccine Consent Form is a document that requires parents or guardians to provide consent for their child to receive vaccines. This form ensures that the healthcare provider has the necessary information to administer vaccines safely and effectively.
## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the child's full name, date of birth, and select their gender.
2. Select the vaccines that will be administered to the child.
3. Answer questions about the child's medical history, including whether they have had a reaction to a vaccine before or have any known allergies.
4. Confirm that you have received and read the Vaccine Information Statement (VIS).
5. Provide your consent for the vaccines selected above.
6. Sign and date the form to confirm your agreement.

## Field-by-Field Explanation

* **Child Full Name** (`child_name`, text, required): Enter the child's full name, as it appears on their identification.
* **Date of Birth** (`child_dob`, date, required): Enter the child's date of birth.
* **Gender** (`child_gender`, select_one, optional): Select the child's gender (Male, Female, or Other).
* **Vaccines to be Administered** (`vaccines_administered`, select_multiple, required): Select all the vaccines that will be given to the child (MMR - Measles, Mumps, Rubella, DTaP - Diphtheria, Tetanus, Pertussis, Inactivated Polio Vaccine, Hepatitis B, Seasonal Influenza, Varicella - Chickenpox).
* **Does the child have a fever today?** (`current_fever_status`, select_one, required): Confirm whether the child has a fever today.
* **Has the child had a reaction to a vaccine before?** (`previous_reaction_status`, select_one, required): Answer whether the child has had a reaction to a vaccine before.
* **Describe any known allergies** (`known_allergies_text`, text, optional): List any known allergies the child has, especially if they are related to eggs, yeast, or latex.
* **I have received and read the Vaccine Information Statement** (`vis_received_status`, select_one, required): Confirm that you have read and understood the VIS.
* **I give consent for the vaccines selected above** (`vaccine_final_consent`, select_one, required): Select to give consent for the vaccines selected.
* **Parent or Guardian Name for Signature** (`guardian_signature_name`, text, required): Enter your name as the parent or guardian.
* **Contact Phone Number** (`contact_phone`, text, required): Enter your contact phone number for follow-up if needed.
* **Today's Date** (`today_date`, date, required): Enter the date the vaccines will be administered.
