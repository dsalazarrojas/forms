# Health Screening Form - Help Guide
## Purpose
The Health Screening Form is designed to gather information about your health status for screening purposes.

## How To Complete This Form

To complete this form, please follow these steps:

1.  Enter your name in the "What is your name?" field.
2.  Answer the questions about your medical conditions, symptoms, and history in the relevant fields.
3.  Provide details about your travel history, including where you have traveled recently and how long your trip was.
4.  Indicate if you have any medical precautions or devices that require special care.
5.  Check if you have had any medical procedures recently.
6.  List any known allergies you have.
7.  Finally, provide your medical insurance status.

## Field-by-Field Explanation

- **What is your name?** (`personal_info`, `text`, required): This field is used to collect your name for identification purposes.
  * Please enter your full name as it appears on your identification documents.
  * Example: John Doe

- **Do you have any medical conditions?** (`medical_conditions`, `select_multiple`, required): This field asks if you have any medical conditions that may impact your health.
  * Select 'Yes' if you have any known medical conditions.
  * Select 'No' if you do not have any medical conditions.

- **Please describe any medical symptoms you are experiencing.** (`medical_symptoms`, `text`, required): This field is used to describe any symptoms you are currently experiencing.
  * Please provide a detailed description of your symptoms.
  * Example: Headache, fatigue, etc.

- **Do you have any medical history?** (`medical_history`, `select_multiple`, required): This field asks if you have any medical history that may impact your health.
  * Select 'Yes' if you have any medical history.
  * Select 'No' if you do not have any medical history.

- **Have you traveled recently?** (`travel_history`, `select_multiple`, required): This field asks if you have traveled recently.
  * Select 'Yes' if you have traveled recently.
  * Select 'No' if you have not traveled recently.

- **Where have you traveled recently?** (`travel_places`, `text`, required): This field asks where you have traveled recently.
  * Please enter the name of the destination(s) you have visited.
  * Example: New York, Paris, etc.

- **How long was your recent trip?** (`travel_duration`, `number`, required): This field asks for the duration of your recent trip.
  * Enter the number of days or months you traveled.
  * Example: 5 days, 2 weeks, etc.

- **Do you have any medical precautions?** (`medical_precautions`, `select_multiple`, required): This field asks if you have any medical precautions that require special care.
  * Select 'Yes' if you have any medical precautions.
  * Select 'No' if you do not have any medical precautions.

- **Do you have a medical device that requires special care?** (`medical_device`, `select_multiple`, required): This field asks if you have a medical device that requires special care.
  * Select 'Yes' if you have a medical device that requires special care.
  * Select 'No' if you do not have a medical device that requires special care.

- **Have you had any medical procedures recently?** (`medical_procedures`, `select_multiple`, required): This field asks if you have had any medical procedures recently.
  * Select 'Yes' if you have had any medical procedures.
  * Select 'No' if you have not had any medical procedures.

- **Do you have any known allergies?** (`medical_allergies`, `select_multiple`, required): This field asks if you have any known allergies.
  * Select 'Yes' if you have any known allergies.
  * Select 'No' if you do not have any known allergies.

- **What is your medical insurance status?** (`medical_insurance`, `text`, required): This field asks for your current medical insurance status.
  * Please enter your current insurance status.
  * Example: Active, pending, etc.

## Tips

* Please answer all fields honestly and accurately.
* If you are unsure about any field, please ask for assistance.
* If you have any concerns or questions, please contact the relevant authorities.
* This form is designed to ensure accurate and efficient processing of your health status. Please help us by providing clear and complete information.
