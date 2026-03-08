# respirator_medical_evaluation_questionnaire - Help Guide
## Purpose
The respirator medical evaluation questionnaire is designed to gather essential information about a patient's medical condition, medication history, and other factors that may affect their respirator care. The form is completed by a healthcare professional after a thorough medical examination and consultation.

## How To Complete This Form
1. Review the patient's medical history and current medical condition.
2. Fill out the form accurately and thoroughly, ensuring you answer all required questions.
3. Provide detailed information about the patient's medical history, including any past medical conditions, allergies, and medications.
4. Answer all questions truthfully and accurately, using the options provided.

## Field-by-Field Explanation
* **First Name** (`name`, `text`, **required**): Please enter the patient's first name.
* **Last Name** (`name`, `text`, **required**): Please enter the patient's last name.
* **Email** (`name`, `email`, **false**): Please enter the patient's email address if available. Note: This field is not required.
* **Date of Birth** (`name`, `date`, **false**): Please enter the patient's date of birth.
* **Medical History** (`name`, `note`, **false**): Please enter a detailed description of the patient's medical history, including any past medical conditions, allergies, and medications.
* **Medication Allergies** (`name`, `select_multiple`, **required**): Please select all medications the patient is allergic to.
* **Respiratory System** (`name`, `select_one`, **required**): Please select whether the patient has a respiratory system condition (Yes/No).
* **Oxygen Dependence** (`name`, `number`, **required**): Please enter the patient's oxygen dependence level (e.g., 2 hours, 4 hours, etc.).
* **Physical Exam** (`name`, `text`, **required**): Please enter a detailed description of the patient's physical examination, including any findings or notes.
* **Medical Condition** (`name`, `note`, **false**): Please enter a detailed description of the patient's current medical condition.
* **Medication Use** (`name`, `select_multiple`, **required**): Please select all medications the patient is currently using.
* **Surgical History** (`name`, `select_one`, **required**): Please select whether the patient has any surgical history (Yes/No).
* **Medical History Additional** (`name`, `note`, **false**): Please enter any additional medical history information not covered in the previous sections.

## Tips
* Ensure all required fields are completed accurately and thoroughly.
* Review the patient's medical history and current medical condition before filling out the form.
* Use the options provided for each field to select the most accurate answer.
* If unsure about any field, please consult with the patient or a healthcare professional before proceeding.
