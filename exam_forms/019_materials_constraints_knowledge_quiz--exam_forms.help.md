<thinking>
The form purpose is to gather information from end-users about materials constraints. This form is part of the "exam_forms" category, which implies it's related to exams or assessments. However, it does not specify what type of exam or what materials it's about. Assuming it's a general knowledge quiz, the form appears to be asking about materials-related knowledge, likely in a safety or risk assessment context. The "material_constraints_1_hazard" and "material_constraints_2_hazard" fields, for example, suggest that the form is asking about the risk level associated with certain materials. The "exam_form_id" field seems to be an identifier for the exam or assessment. The "category" field, which is a select_multiple field with options "Exam Forms" and "Other", implies that the form might be part of a larger assessment or exam suite, but it's not entirely clear what this means in the context of the form. Given the structure and content of the form, it appears to be a knowledge quiz or assessment tool for materials-related knowledge, possibly in a safety or risk management context.
</thinking>

# Materials Constraints Knowledge Quiz - Help Guide
## Purpose
This form is designed to test your knowledge about materials constraints. It consists of multiple sections, each asking about different aspects of materials-related knowledge.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the category that best describes this form.
2. Fill out the description field with a brief summary of the materials you are about to assess.
3. Enter a 6-digit exam form ID, if applicable.
4. Provide names and descriptions for up to 3 material properties sections.
5. For each material constraints section, select the level of hazard (Low, Medium, High) and provide a description.

## Field-by-Field Explanation
* **Category** (`Category`, `select_multiple`, optional): Select the category that best describes this form. Options are "Exam Forms" and "Other". This field helps to classify the form in a broader assessment or exam suite.
* **Description** (`Description`, `note`, optional): A brief summary of the materials you are about to assess. This field is optional but provides context for the assessment.
* **Exam Form ID** (`Exam Form ID`, `number`, optional): A 6-digit number that identifies the exam or assessment form. If you do not have an ID, you can leave this field blank.
* **Material Properties 1 Name**, **Material Properties 2 Name**, **Material Properties 3 Name** (`Material Properties 1 Name`, `note`, optional), (`Material Properties 2 Name`, `note`, optional), (`Material Properties 3 Name`, `note`, optional): Enter names for up to 3 material properties sections. These fields are optional and provide additional context for the assessment.
* **Material Properties 1 Description**, **Material Properties 2 Description**, **Material Properties 3 Description** (`Material Properties 1 Description`, `note`, optional), (`Material Properties 2 Description`, `note`, optional), (`Material Properties 3 Description`, `note`, optional): Enter descriptions for up to 3 material properties sections. These fields are optional and provide additional context for the assessment.
* **Material Constraints 1 Name**, **Material Constraints 2 Name, **Material Constraints 3 Name** (`Material Constraints 1 Name`, `note`, optional), (`Material Constraints 2 Name`, `note`, optional), (`Material Constraints 3 Name`, `note`, optional): Enter names for up to 3 material constraints sections. These fields are optional and provide additional context for the assessment.
* **Material Constraints 1 Description, **Material Constraints 2 Description, **Material Constraints 3 Description** (`Material Constraints 1 Description`, `note`, optional), (`Material Constraints 2 Description`, `note`, optional), (`Material Constraints 3 Description`, `note`, optional): Enter descriptions for up to 3 material constraints sections. These fields are optional and provide additional context for the assessment.
* **Material Constraints 1 Hazard, **Material Constraints 2 Hazard, **Material Constraints 3 Hazard** (`Material Constraints 1 Hazard`, `select_one`, optional), (`Material Constraints 2 Hazard`, `select_one`, optional), (`Material Constraints 3 Hazard`, `select_one`, optional): Select the level of hazard (Low, Medium, High) for up to 3 material constraints sections. These fields are optional and provide information about the risk level associated with the materials.

## Tips
* Be thorough when filling out the description field to provide context for the assessment.
* If you have an exam form ID, enter it to help identify the assessment or quiz.
* Use the material properties and constraints fields to provide more information about the materials being assessed.
* Select the correct hazard level for each material constraint section to indicate the associated risk level.
