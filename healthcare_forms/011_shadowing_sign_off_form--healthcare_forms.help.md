# Shadowing Sign Off Form - Help Guide
## Purpose
The Shadowing Sign Off Form is used to document the completion of a shadowing experience. It is an essential step for tracking and verifying the educational experiences of trainees.
## How To Complete This Form
To complete the Shadowing Sign Off Form, follow these steps:

1. Enter the shadowing site where the experience took place in the `shadowing_site` field.
2. Provide the date of the shadowing experience in the `shadowing_date` field.
3. Select the duration of the shadowing experience using the `shadowing_time` field.
4. If the trainee had a supervisor, enter their name in the `shadowing_supervisor` field.
5. Indicate if the trainee was shadowing by answering "Yes" or "No" in the `shadowing_experience` field.
6. Review and acknowledge the terms of the experience by selecting the relevant option(s) in the `agreed_to_terms` field.
7. Optionally, add any comments about the experience in the `shadowing_comments` field.

## Field-by-Field Explanation
* **shadowing_site** (`shadowing_site`, `text`, required): Enter the location where the shadowing experience took place.
* **shadowing_supervisor** (`shadowing_supervisor`, `text`, optional): If the trainee had a supervisor, enter their name here.
* **shadowing_date** (`shadowing_date`, `date`, required): Enter the date of the shadowing experience.
* **shadowing_time** (`shadowing_time`, `time`, required): Select the duration of the shadowing experience.
* **shadowing_experience** (`shadowing_experience`, `select_one`, required): Indicate if you had a shadowing experience by answering "Yes" or "No".
* **shadowing_agreed_to_terms** (`shadowing_agreed_to_terms`, `select_multiple`, required): Review and select the terms of the experience that apply to you.
* **shadowing_comments** (`shadowing_comments`, `note`, optional): Add any comments about the experience here.
* **shadowing_supervisor_signature** (`shadowing_supervisor_signature`, `text`, optional): If your supervisor signs off on the experience, enter their signature here.
