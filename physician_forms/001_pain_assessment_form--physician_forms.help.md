<thinking>...</thinking>

# Pain Assessment Form - Help Guide
## Purpose
The Pain Assessment Form is designed to collect information about a patient's pain experience, including the body parts affected, pain level, duration, frequency, and potential medication side effects. This data will help healthcare providers better understand the patient's condition and provide effective treatment.
## How To Complete This Form
To complete the Pain Assessment Form, follow these steps:

1. Enter the patient's name in the "Patient Name" field.
2. Select the body parts affected by the pain using the "Body Parts Affected" field.
3. Enter the patient's current pain level using the "Pain Level" field (a numerical value from 1 to 10, where 1 is mild and 10 is severe).
4. Specify the duration of the pain using the "Pain Duration" field (a numerical value in minutes or hours).
5. Indicate the frequency of the pain using the "Pain Frequency" field (a numerical value in times per day).
6. Check the boxes next to "Treatment Needed" to indicate if treatment is required (e.g., "False" for no treatment needed, "True" for treatment needed).
7. If applicable, list any medication side effects in the "Medication Side Effects" field.
8. If additional medication side effects are not listed, provide them in the "Other Medication Side Effects" field.
9. If other body parts are affected, list them in the "Other Body Parts Affected" field.

## Field-by-Field Explanation
- **Patient Name** (`patient_name`, text, required): Enter the patient's name as it appears on their identification.
- **Body Parts Affected** (`body_parts_affected`, select_one, required): Select all body parts affected by the pain, including Head, Back, Neck, Shoulders, Hips, Knees, Ankles, Toes, Abdomen, Chest, Upper Extremities, Lower Extremities, or Other.
- **Pain Level** (`pain_level`, number, required): Indicate the patient's current pain level on a scale from 1 to 10, where 1 is mild and 10 is severe.
- **Pain Duration** (`pain_duration`, number, required): Specify the duration of the pain in minutes or hours.
- **Pain Frequency** (`pain_frequency`, number, required): Indicate the frequency of the pain, with higher values indicating more frequent occurrences.
- **Treatment Needed** (`treatment_needed`, select_multiple, required): Check the boxes to indicate if treatment is required, with options "False" for no treatment needed and "True" for treatment needed.
- **Medication Side Effects** (`medication_side_effects`, select_multiple, required): List any side effects of medication taken by the patient, including None, Headache, Dizziness, Nausea, Fatigue, Insomnia, Anxiety, Confusion, or Other.
- **Other Medication Side Effects** (`other_medication_side_effects`, text, optional): If the patient is experiencing other medication side effects not listed, provide a description of those effects.
- **Other Body Parts Affected** (`other_body_parts_affected`, text, optional): If the patient is experiencing other body parts affected not listed, provide a description of those affected parts.
