# Personal Trainer Client Intake Form - Help Guide
## Purpose
The Personal Trainer Client Intake Form is designed to collect vital information from clients seeking personal training services. This form helps trainers to understand the client's goals, medical history, and emergency contact details, ensuring a safe and effective training experience.

## How To Complete This Form
To complete the form, follow these steps:

1. Review the form carefully and ensure you have answered all required fields.
2. Fill in the Client Information section with your basic details.
3. Select your preferred personal trainers.
4. Specify your fitness objectives and any medical history or conditions that may impact your training.
5. Provide emergency contact information and relationships.
6. Review and update any medical notes or medications.

## Field-by-Field Explanation
### Client Information
* **Client Information** (`client_information`, `text`, required/optional): This section asks for your basic details such as your name, address, and contact information.

### Personal Trainers
* **PersonalTrainer** (`personal_trainer`, `select_multiple`, required/optional): Select one or more personal trainers you would like to work with.

### Client Goals
* **client_goals** (`client_goals`, `text`, required/optional): Describe your fitness goals, such as weight loss, muscle gain, or improved overall health.

### Fitness Objectives
* **FitnessObjectives** (`fitness_objectives`, `number`, required/optional): Indicate your level of experience and fitness objectives on a scale of 1-10.

### Contact Information
* **ContactInformation** (`contact_information`, `text`, required/optional): Enter your contact information, including phone number and email address.

### Emergency Contact
* **EmergencyContact** (`emergency_contact`, `select_multiple`, required/optional): List your emergency contacts, such as a spouse or partner.
* **EmergencyContactRelationship** (`emergency_contact_relationship`, `select_multiple`, required/optional): Specify your relationship with each emergency contact.

### Medical History
* **MedicalHistory** (`medical_history`, `select_one`, required/optional): Select any medical conditions that may impact your training, such as high blood pressure or diabetes.
* **MedicalConditions** (`medical_conditions`, `select_multiple`, required/optional): List any other medical conditions that may affect your training.
* **MedicalTests** (`medical_tests`, `select_multiple`, required/optional): Specify any medical tests or exams you have undergone.
* **Meditations** (`medications`, `select_multiple`, required/optional): List any medications you are currently taking.
* **MedicalNotes** (`medical_notes`, `note`, required/optional): Enter any relevant medical notes or information.

### Physical Activity
* **PhysicalActivity** (`physical_activity`, `select_one`, required/optional): Select your current physical activity level, such as sedentary or high-intensity exercise.

### Height and Weight
* **Height** (`height`, `number`, required/optional): Enter your height in inches.
* **Weight** (`weight`, `number`, required/optional): Enter your weight in pounds.
* **Age** (`age`, `number`, required/optional): Enter your age.

### Emergency Services
* **EmergencyServices** (`emergency_services`, `select_multiple`, required/optional): Select any emergency services you may need, such as CPR or first aid.
* **EmergencyServicesOther** (`emergency_services_other`, `text`, required/optional): Specify any other emergency services you require.

### Additional Information
* **MedicalHistoryOther** (`medical_history_other`, `text`, required/optional): Enter any other medical history or conditions not listed above.
* **MedicalTestsOther** (`medical_tests_other`, `text`, required/optional): Enter any other medical tests or exams not listed above.
* **MeditationsOther** (`medications_other`, `text`, required/optional): Enter any other medications not listed above.
* **EmergencyContactOther** (`emergency_contact_other`, `text`, required/optional): Enter any other emergency contacts not listed above.
* **EmergencyContactRelationshipOther** (`emergency_contact_relationship_other`, `text`, required/optional): Specify your relationship with any other emergency contacts not listed above.

## Tips
* Please ensure you have reviewed and understood all the fields before proceeding.
* Be honest and accurate when filling out the form.
* If you have any questions or concerns, please ask your trainer or contact us for assistance.
