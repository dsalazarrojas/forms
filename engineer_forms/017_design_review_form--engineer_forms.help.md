# Design Review Form - Help Guide
## Purpose
The Design Review Form is a tool used to gather feedback and ratings on design projects from reviewers. It is intended to facilitate a clear and concise review process that helps project teams understand their project's performance and identify areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the correct "Page 1" option from the "Design Review Form" page.
2. Select "Yes" or "No" for "Design Team" if you are a member of the design team.
3. Enter your name in the "Reviewer Name" field.
4. Enter your title in the "Reviewer Title" field.
5. Select your rating on the "Review Rating" field.
6. Select "Yes" or "No" for "Overall Impact" if you are assessing the project's overall impact.
7. Select "Active", "Inactive", or "Deferred" for "Project Status" if you are assessing the project's status.
8. Enter any comments or feedback in the "Review Comments" field.
9. Enter your email address in the "Reviewer Email" field.
10. Enter your phone number in the "Reviewer Phone" field.
11. Enter any notes or comments in the "Reviewer Notes" field.
12. Select your "Reviewer Status" as "Active" or "Inactive".

## Field-by-Field Explanation

* **Page 1** (`design_review_form`, `select_one`, required: false): Select the first page of the form to begin the review process.
* **Design Team** (`design_team`, `select_multiple`, required: false): Select "Yes" if you are a member of the design team, "No" otherwise. This field is only relevant if you are a reviewer.
* **User Input** (`user_input`, `text`, required: false): Enter any relevant information about the project that you would like to share with the designer.
* **Rating Scale** (`rating_scale`, `number`, required: false): Select a rating for the project using the scale from 1-10.
* **Review Comments** (`review_comments`, `text`, required: false): Enter any comments or feedback about the project.
* **Designer Name** (`designer_name`, `text`, required: false): Enter the name of the person who designed the project.
* **Design Team** (`design_team`, `select_multiple`, required: false): Select "Yes" if you are a member of the design team, "No" otherwise. This field is only relevant if you are a reviewer.
* **Reviewer Name** (`reviewer_name`, `text`, required: false): Enter your name.
* **Reviewer Title** (`reviewer_title`, `text`, required: false): Enter your title.
* **Review Rating** (`review_rating`, `select_one`, required: false): Select a rating for the project using the scale from 1-5 (Poor, Fair, Good, Very Good, Excellent).
* **Overall Impact** (`overall_impact`, `select_multiple`, required: false): Select "Yes" if the project has a high impact, "No" otherwise.
* **Project Status** (`project_status`, `select_multiple`, required: false): Select "Active", "Inactive", or "Deferred" for the project status.
* **Reviewer Comments** (`reviewer_comments`, `text`, required: false): Enter any comments or feedback about the project.
* **Reviewer Email** (`reviewer_email`, `email`, required: false): Enter your email address.
* **Reviewer Phone** (`reviewer_phone`, `text`, required: false): Enter your phone number.
* **Reviewer Notes** (`reviewer_notes`, `text`, required: false): Enter any notes or comments about the project.
* **Reviewer Status** (`reviewer_status`, `select_one`, required: false): Select "Active" or "Inactive" for your reviewer status.
* **Reviewer Signature** (`reviewer_signature`, `text`, required: false): Enter your signature.
* **Designer Signature** (`designer_signature`, `text`, required: false): Enter the designer's signature.
* **Designer Comments** (`designer_comments`, `text`, required: false): Enter any comments or feedback from the designer.
* **Designer Notes** (`designer_notes`, `text`, required: false): Enter any notes or comments from the designer.
* **Reviewer Comments** (`reviewer_comments`, `text`, required: false): Enter any comments or feedback from the reviewer.
* **Final Status** (`final_status`, `select_one`, required: false): Select "Active" or "Inactive" for the final project status.
* **Final Status** (`reviewer_status`, `select_one`, required: false): Select "Active" or "Inactive" for the final project status.

Note: The following fields are not actually present in the form but were mentioned in the instructions: "Designer Comments", "Designer Notes", "Designer Signature", "Final Status" (with different label and id).

## Tips
* Reviewers should be specific and accurate when filling out the form.
* Reviewers should only provide feedback and ratings that are relevant to the project.
* Reviewers should be aware that their comments and ratings will be visible to the designer and project team.
* Reviewers should not use the form to provide general feedback or suggestions that are not relevant to the project.
* Reviewers should use clear and concise language when providing comments and ratings.
* The form should only be used for design projects that are active or have been completed.
* Reviewers should be aware that their status as "Active" or "Inactive" will affect the project's status.
* Reviewers should only select options that accurately reflect their assessment of the project.
