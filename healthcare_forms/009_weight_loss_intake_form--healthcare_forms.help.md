<thinking>... internal reasoning block ...

This form is for collecting information from new patients who are interested in pursuing weight loss. It is meant to gather essential details about the patient's medical history, weight loss goals, and treatment needs. This form should only be filled out by patients who are new to the healthcare system, hence the "New Patient" page. 

The form does not require a medical professional's review before submission. The data collected will be used to create a personalized plan for the patient's weight loss journey. 

The patient can choose one or more of the medical conditions they are currently experiencing. If they are not experiencing any medical conditions, they can select "None of the above". 

The "Weight Loss Goals" field is for the patient to indicate how much weight they want to lose. Please provide a numerical value in pounds. 

The "Start Date of Weight Loss" and "End Date of Weight Loss" fields are for recording the patient's target timeline for weight loss. 

Please note that the medical conditions listed are examples and not exhaustive. If none of the provided options match the patient's condition, they can select "Other" and provide their own condition.

The "Treatment Needs" field is where the patient can select one or more of the following: Nutrition Counseling, Medication, Exercise, or Surgery.

The "Health Goals" field is for the patient to specify their top health priorities.

The "Medical Specialties" field is where the patient can select one or more of the following: Cardiology, Gastroenterology, Nephrology, Pulmonology, Endocrinology, Gynecology, Urology, or Other.

The "Emergency Contact" field is for recording the patient's emergency contact information.

The "Contact Phone" field is for recording the patient's contact phone number.

</thinking>

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
