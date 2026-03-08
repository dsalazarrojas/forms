# Weight Loss Intake Form - Help Guide
## Purpose
This form is designed to collect essential information from new patients who are interested in pursuing weight loss. The data collected will be used to create a personalized plan for the patient's weight loss journey.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form carefully to ensure you understand each section and its relevance.
2. Answer each question truthfully and to the best of your ability.
3. If a question does not apply to you, select "None of the above" or "Other" and describe your situation.
4. Submit the form once you have completed all required and optional sections.

## Field-by-Field Explanation
- **New Patient** (`new_patient`, note, required): This is the first page of the form. Please select "Yes" if you are a new patient, and "No" if you are already a patient in our healthcare system.
- **Medical History** (`medical_history`, select_one, required): Please select one or more of the medical conditions that apply to you. Examples include High Blood Pressure, Diabetes, Heart Disease, and Obesity.
- **Weight Loss Goals** (`weight_loss_goals`, number, required): Please enter the amount of weight you want to lose (in pounds).
- **Start Date of Weight Loss** (`weight_loss_start_date`, date, required): Enter the date you would like to start your weight loss journey.
- **End Date of Weight Loss** (`weight_loss_end_date`, date, required): Enter the date you would like to complete your weight loss journey.
- **Treatment Needs** (`treatment_needs`, select_multiple, required): Please select one or more of the following: Nutrition Counseling, Medication, Exercise, or Surgery.
- **Health Goals** (`health_goals`, select_one, required): Specify your top health priority. Examples include General Health, Weight Loss, or Both.
- **Medical Specialties** (`medical_specialties`, select_multiple, required): Please select one or more of the following: Cardiology, Gastroenterology, Nephrology, Pulmonology, Endocrinology, Gynecology, Urology, or Other.
- **Emergency Contact** (`emergency_contact`, text, required): Please enter your emergency contact's name and contact information.
- **Contact Phone** (`contact_phone`, text, required): Please enter your contact phone number.

Note: This guide assumes the fields have the same options as the original YAML. In real-world use cases, you may need to modify or add fields based on your healthcare system's requirements.
