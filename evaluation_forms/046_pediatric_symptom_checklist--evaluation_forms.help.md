# pediatric_symptom_checklist - Help Guide
## Purpose
The Pediatric Symptom Checklist is a form used to gather information from parents or guardians about the symptoms experienced by a child in a clinical or medical context.

## How To Complete This Form
To complete this form, follow these steps:

*   Fill out the following sections:
    *   **Parent Information**: Select all applicable options for the parent(s) or guardian(s) of the child.
        *   *Parent name*: Select one or multiple options for the parent's name(s) (e.g., "Parent name", "Parent occupation", "Parent contact number", "Parent contact email")
    *   *Child Information*: Select the child's gender (e.g., Male, Female)
*   Fill out the following fields:
    *   *Birth Date*: Enter the child's birth date
    *   *Age in Years*: Enter the child's age in years
    *   *Symptoms*: Describe all the symptoms the child is experiencing at the moment
    *   *Medical History*: Describe any medical history or previous conditions the child has experienced
    *   *Allergies*: Select all applicable allergy options for the child
*   If the child has experienced other medical histories or allergies not listed, provide further information in the *Medical History Other* and *Allergy Other* fields.

## Field-by-Field Explanation
*   **Parent Information**:
    *   *Parent name* (`parent_information`, select_multiple, required): Select one or multiple options for the parent(s) or guardian(s) of the child.
    *   *Parent Information* (`parent_information`, select_multiple, required): Select one or multiple options for the parent(s) or guardian(s) of the child.
    *   *Child Information* (`child_information`, select_one, required): Select one option for the child's gender (e.g. Male, Female).
    *   *Birth Date* (`birth_date`, date, required): Enter the child's birth date.
    *   *Age in Years* (`age_in_years`, number, required): Enter the child's age in years.
    *   *Symptoms* (`symptoms`, text, required): Describe all the symptoms the child is experiencing at the moment.
    *   *Medical History* (`medical_history`, text, required): Describe any medical history or previous conditions the child has experienced.
    *   *Medical History Other* (`medical_history_other`, text, required): Describe any medical history or previous conditions the child has experienced.
    *   *Medical History Other Treatment What* (`medical_history_other_treatment_what`, text, required): Describe the type of treatment or condition the child received.
    *   *Medical History Other Treatment When* (`medical_history_other_treatment_when`, date, required): Enter the date the treatment was received.
    *   *Medical History Other Treatment by Who* (`medical_history_other_treatment_by_who`, text, required): Describe the person or institution that provided the treatment.
    *   *Medical History Other Treatment Where* (`medical_history_other_treatment_where`, text, required): Describe the location where the treatment was received.
    *   *Medical History Other Treatment Description* (`medical_history_other_treatment_description`, text, required): Describe the type of treatment or condition the child received.
    *   *Allergy Information* (`allergy_information`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 1* (`allergy_1`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 2* (`allergy_2`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 3* (`allergy_3`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 4* (`allergy_4`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 5* (`allergy_5`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 6* (`allergy_6`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 7* (`allergy_7`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Allergy 8* (`allergy_8`, select_multiple, required): Select all applicable allergy options for the child.
    *   *Other Allergies* (`other_allergies`, text, required): Describe any other allergies the child may have.

## Tips
*   Ensure accurate and detailed information is provided for each field.
*   Select all applicable options for each field as necessary.
*   Be as specific and clear as possible when describing symptoms, medical histories, and allergies.
