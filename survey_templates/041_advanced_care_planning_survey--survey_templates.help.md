<thinking>
To determine whether to include this form in the help guide, I'll analyze the provided YAML fields and assess whether they're relevant and non-duplicative. Upon reviewing the YAML, I notice that the form includes a variety of fields related to patient demographics, care planning, and follow-up support. The fields are well-structured and consistent in their naming conventions, which makes it easy to understand their purpose.

The form appears to be a comprehensive tool for assessing patient preferences and needs for end-of-life care. It covers essential aspects such as demographics, awareness, familiarity with advance directives, and care preferences. 

The fields are not highly duplicated, and each page and field has a distinct purpose. However, some fields seem to be related to similar topics, like the fields under "Patient Demographics" and "Planning Awareness" that are both about the patient's background information. 

After reviewing the form, I've decided to include it in the help guide as it seems to be a valuable tool for end-users to understand their patient's needs and preferences.
</thinking>

# Advanced Care Planning Survey - Help Guide
## Purpose
The Advanced Care Planning Survey is a form designed to gather information about patients' demographics, awareness, and preferences for end-of-life care. This guide will walk you through how to complete the form and explain each field to help you understand its purpose and requirements.

## How To Complete This Form
1. **Start by filling out the patient demographics section**: This section includes questions about the patient's full name and date of birth. Please fill out this information accurately and completely.
2. **Answer questions about planning awareness**: This section is designed to help you understand the patient's familiarity with advance directives, such as living wills and proxies.
3. **Select the patient's care preferences**: This section will ask you about the patient's values and preferences at the end of life, such as being free of pain or being at home.
4. **Choose the patient's life support preferences**: In this section, you'll be asked about the patient's preferences for life support, such as continuing all care or selective care.
5. **Identify barriers to planning**: If there are any barriers to completing the patient's advance plans, such as lack of information or difficulty discussing with family, select them.
6. **Add any additional concerns or questions**: If you have any additional concerns or questions about planning, type them out in this field.
7. **Request educational materials or a social worker consultation**: If the patient needs more information or support, check these boxes.

## Field-by-Field Explanation

* **Patient Full Name (`patient_full_name`, `text`, **required**): This field asks for the patient's full name as it appears on their identification.
* **Date of Birth (`date_of_birth`, `date`, **required**): This field asks for the patient's date of birth.
* **Familiarity with Advance Directives (`familiarity_with_advance_directives`, `select_one`, **required**): Please select how familiar the patient is with advance directives, such as living wills and proxies.
* **Current Existence of Living Will (`current_existence_of_living_will`, `select_one`, **required**): Select whether the patient has a current living will or not.
* **Healthcare Power of Attorney Designated (`healthcare_power_of_attorney_designated`, `select_one`, **required**): Select whether the patient has designated a healthcare power of attorney.
* **Priority Values at End of Life (`priority_values_at_end_of_life`, `select_multiple`, **optional**): This field allows you to select multiple values that matter most to the patient at the end of life.
* **Preference for Life Support if Comatose (`preference_for_life_support_if_comatose`, `select_one`, **required**): Select the patient's preference for life support, assuming no hope of recovery.
* **Barriers to Completing Advance Plans (`barriers_to_completing_advance_plans`, `select_multiple`, **optional**): This field allows you to select barriers that may prevent the patient from completing their advance plans.
* **Additional Concerns or Questions (`additional_concerns_or_questions`, `text`, **optional**): If you have any additional concerns or questions, type them out in this field.
* **Request Educational Materials (`request_educational_materials`, `select_one`, **required**): Check this box if the patient needs more information about advance care planning.
* **Request Consultation with Social Worker (`request_consultation_with_social_worker`, `select_one`, **required**): Check this box if the patient needs support completing their advance plans.
