# Blueprint Evaluation Checklist - Help Guide
## Purpose
The Blueprint Evaluation Checklist is designed to gather feedback from reviewers on the compliance of a blueprint with local building codes and standards. This form helps identify potential issues and propose corrective actions to improve the blueprint's quality.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the reviewer's name and review date in the respective fields.
2. Indicate the compliance status with local building codes by selecting "True", "False", or "Partial".
3. Provide any structural, mechanical, and safety comments or concerns related to the blueprint.
4. Suggest recommended actions to address identified issues.
5. Enter the follow-up date if re-reviewing is required.

## Field-by-Field Explanation

* **-- Evaluation Checklist --** (`evaluation_header`, `note`, required: false): This is a header section that summarizes the purpose of the form.
* **Reviewer name** (`reviewer_name`, `text`, required: true): Enter the name of the person performing the review.
* **Review date** (`review_date`, `date`, required: true): Enter the date of the review.
* **Compliance with codes** (`compliance_with_codes`, `select_one`, required: true): Select "True" if the blueprint complies with local building codes, "False" if it does not, or "Partial" if it partially complies.
* **Structural comments** (`structural_comments`, `text`, required: false): Add any comments or observations regarding structural considerations.
* **Mechanical comments** (`mechanical_comments`, `text`, required: false): Add any comments or observations related to HVAC and plumbing systems.
* **Safety concerns** (`safety_concerns`, `text`, required: false): Report any safety-related observations or concerns.
* **Recommended actions** (`recommended_actions`, `text`, required: true): Suggest any actions necessary to address identified issues.
* **Follow up date** (`follow_up_date`, `date`, required: false): Enter the date for re-reviewing if necessary.
