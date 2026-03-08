<thinking>As a form designer and technical writer, my approach is to create a user-facing help guide that clearly communicates the purpose and usage of the Psa Form. The form is designed to collect information for enrollment purposes, likely for a school or organization. It's essential to ensure that users understand how to complete it and what each field means, as each field serves a specific purpose in the enrollment process. I'll follow the provided YAML structure to craft a concise and practical help guide.</thinking>

# Psa Form - Help Guide
## Purpose
The Psa Form is used to collect information for enrollment purposes, such as collecting details about students or members enrolling in a school or organization. This form ensures that all necessary information is gathered to streamline the enrollment process.

## How To Complete This Form
1. Select the correct category for the enrollment purpose.
2. Provide a brief description of the individual enrolling.
3. Enter the parent name and contact information (if applicable).
4. Enter the student's name and contact information.
5. Enter the student's date of birth.
6. Select the assessment level of the individual enrolling.
7. List any medical conditions the individual may have.
8. Provide a media declaration for the individual.
9. Agree or disagree to terms and conditions.
10. Select the submit option to complete the form.

## Field-by-Field Explanation
* **Category** (`Category`, `select_one`, required/optional): Choose the correct category for the enrollment purpose.
* **Description** (`description`, `text`, required/optional): Enter a brief description of the individual enrolling.
* **Parent Name** (`parent_name`, `text`, required/optional): Enter the parent's name and contact information (if applicable).
* **Child Name** (`child_name`, `text`, required/optional): Enter the child's name and contact information.
* **Date of Birth** (`date_of_birth`, `date`, required/optional): Enter the child's date of birth.
* **Assessment Level** (`assessment_level`, `select_one`, required/optional): Select the assessment level of the individual enrolling.
* **Medical Conditions** (`medical_conditions`, `text`, required/optional): List any medical conditions the individual may have.
* **Media Declaration** (`media_declaration`, `text`, required/optional): Provide a media declaration for the individual.
* **Terms and Conditions** (`terms_conditions`, `select_one`, required/optional): Agree or disagree to terms and conditions.
* **Agree** (`agree`, `select_one`, required/optional): Agree or disagree to terms and conditions.
* **Submit** (`submit`, `select_one`, required/optional): Select the submit option to complete the form.
* **Kids** (`kids`, `select_multiple`, required/optional): Select if you have any children enrolling.
* **Kid Id** (`kid_id`, `number`, required/optional): Enter the child's ID (if applicable).
* **Kid Date Of Birth** (`kid_date_of_birth`, `date`, required/optional): Enter the child's date of birth (if applicable).
* **Kid Assessment Level** (`kid_assessment_level`, `select_one`, required/optional): Select the assessment level of the child enrolling.
* **Kid Medical Conditions** (`kid_medical_conditions`, `text`, required/optional): List any medical conditions the child may have.
* **Kid Media Declaration** (`kid_media_declaration`, `text`, required/optional): Provide a media declaration for the child.
* **Kid Terms Conditions** (`kid_terms_conditions`, `select_one`, required/optional): Agree or disagree to terms and conditions.
* **Kid Agree** (`kid_agree`, `select_one`, required/optional): Agree or disagree to terms and conditions.
* **Kid Submit** (`kid_submit`, `select_one`, required/optional): Select the submit option to complete the form.
* **Kid Terms** (`kid_terms`, `text`, required/optional): Enter any additional terms and conditions specific to the child.
* **Kid Terms Conditions 2** (`kid_terms_conditions_2`, `select_one`, required/optional): Agree or disagree to additional terms and conditions specific to the child.
