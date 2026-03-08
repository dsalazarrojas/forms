## Field-by-Field Explanation

* **Full Name** (`full_name`, `text`, required): Enter your legal name exactly as it appears on your official ID to help the AI system identify you accurately.
* **Date of Birth** (`patient_dob`, `date`, required): Enter your date of birth in MM/DD/YYYY format to help the AI system understand your age and medical history.
* **Age** (`patient_age`, `integer`, required): Enter your age in whole years to help the AI system understand your medical status.
* **Phone Number** (`phone_number`, `phone`, optional): Enter your phone number, including the country code if you are outside the U.S. (optional) to enable communication and follow-up calls.
* **Email Address** (`email_address`, `email`, required): Enter your email address to receive visit summaries and follow-up communications from the AI system.
* **Date of Visit/Chat** (`visit_date`, `date`, required): Enter the date of the AI-assisted interaction to help the AI system understand the context of your visit.
* **Symptoms** (`symptoms`, `select_multiple`, required): Select all symptoms relevant to your current visit or interaction to help the AI system understand your health status.
* **Pain Level** (`pain_level`, `integer`, required): Rate your current pain level from 0 (no pain) to 10 (worst pain imaginable) to help the AI system understand your pain status.
* **Current Medications** (`current_medications`, `text`, optional): List any medications you are taking, including their name, dose, and frequency to help the AI system understand your medical history.
* **Allergies** (`allergies`, `text`, optional): List any known allergies, including drug, food, or environmental allergies to help the AI system understand your health risks.
* **Medical History** (`medical_history`, `text`, optional): Provide any relevant medical history, including chronic conditions, recent surgeries, or major diagnoses to help the AI system understand your medical background.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, optional): Enter the name of a person to contact in case of an emergency to ensure your safety and well-being.
* **Emergency Contact Phone** (`emergency_contact_phone`, `phone`, optional): Enter the phone number of the emergency contact, including the country code if applicable to enable quick contact.
* **Do You Consent** (`ai_consent`, `select_one`, required): Select "Yes, I consent" to allow the AI system to provide health guidance and advice.
* **I Understand** (`consent_understanding`, `note`, required): Read and agree to the note about the AI not being a substitute for professional medical diagnosis or emergency care to ensure you understand the AI's limitations.
* **Signature** (`signature_name`, `text`, required): Type your full name to digitally sign the consent form and indicate your agreement.
* **Consent Date** (`consent_date`, `date`, required): Enter the date you signed the form to ensure the AI system understands the timeline of your consent.
* **Consent Time** (`consent_time`, `time`, optional): Enter the local time of signing (optional) to help the AI system understand the context of your interaction.
* **Additional Comments** (`additional_comments`, `text`, optional): Provide any additional information or concerns you have to help the AI system understand your needs and requirements.

## Tips

1.  Fill out this form carefully and completely to ensure the AI system provides accurate and relevant guidance.
2.  Ensure your answers are honest and accurate to help the AI system understand your health status.
3.  Review the "I Understand" section carefully to agree or disagree with the AI's limitations.
4.  Sign the form digitally with your full name to consent to the AI-powered health guidance.
5.  Keep in mind that the AI system is not a substitute for professional medical diagnosis or emergency care. Always seek medical attention from licensed healthcare professionals if you require immediate help.
