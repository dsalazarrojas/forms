<thinking>
Internal reasoning: This form is designed to capture and resolve conflicts within the company. It's intended to be filled out by employees who have experienced a conflict or issue with a colleague, manager, or team member. The form is meant to help gather information and provide a clear channel for addressing the conflict in a constructive and respectful manner. By filling out this form, the employee is providing context and facts about the conflict, allowing for a more informed discussion and resolution. To avoid duplication, please ensure that you're not submitting multiple forms for the same conflict.</thinking>

# Conflict Resolution Form - Help Guide
## Purpose
The Conflict Resolution Form is a tool for employees to report and resolve conflicts that have arisen within the company. It's a way to document incidents, gather information, and facilitate constructive discussions to find mutually beneficial solutions.

## How To Complete This Form
To fill out this form, follow these steps:

1. Start by filling out your name and department to help us understand your context.
2. Provide the date of the conflict or incident, as accurately as possible.
3. In the "Incident Details" section, describe the conflict or issue that arose.
4. In the "Names of Other Parties Involved" section, list all parties directly or indirectly affected by the conflict.
5. Describe where the conflict occurred.
6. Provide a detailed description of the issue and its impact on your work.
7. If you've already tried to resolve the conflict, describe the outcome of that attempt.
8. Finally, suggest some possible solutions and indicate if you'd like a formal mediation session.

## Field-by-Field Explanation

* **Reporter Name** (`reporter_name`, text, required): Enter your name as it appears on your employee ID badge or your common name used in the company.
* **Department** (`department`, select_one, required): Select your department from the list to help us understand your team's context.
* **Date of Conflict/Incident** (`date_of_incident`, date, required): Enter the date of the conflict or incident as accurately as possible.
* **-- Incident Details --** (`section_conflict_details`, note, required): Describe the conflict or issue that arose, including any relevant context or background information.
* **Names of Other Parties Involved** (`parties_involved`, text, required): List all parties directly or indirectly affected by the conflict, separated by commas.
* **Where did the conflict occur?** (`conflict_location`, text, optional): Provide the location where the conflict took place.
* **Detailed Description of the Issue** (`description_of_issue`, text, required): Describe the conflict or issue in detail, including what triggered it and how it's impacting your work.
* **-- Impact and Previous Attempts --** (`section_impact_assessment`, note, optional): If applicable, describe how the conflict has impacted your work and if you've already tried to resolve it before.
* **How has this conflict impacted your work?** (`impact_on_work`, select_one, required): Select the level of impact the conflict has had on your productivity and work effectiveness.
* **Have you already attempted to resolve this conflict?** (`previous_attempts_to_resolve`, select_one, required): Select yes or no to indicate if you've tried to resolve the conflict before.
* **If yes, what was the outcome of your attempt?** (`previous_attempts_description`, text, optional): Provide the outcome of your previous attempt, if applicable.
* **-- Moving Forward --** (`section_proposed_solutions`, note, optional): Suggest possible solutions for the conflict resolution.
* **What is your desired outcome for this resolution?** (`desired_outcome`, text, required): Describe the outcome you're hoping for in the conflict resolution.
* **What solutions would you suggest?** (`suggested_solutions`, text, optional): Provide any suggested solutions you have for the conflict resolution.
* **Would you like a formal mediation session?** (`mediation_request`, select_one, required): Select yes, no, or maybe to indicate your preference for a mediation session.
* **I certify that the information provided is accurate to the best of my knowledge** (`acknowledgment`, select_one, required): Select I so certify to confirm that you're providing accurate information.
