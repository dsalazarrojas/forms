<thinking>
We should consider that this form is likely used within a larger context of weekly check-ins or status updates within an organization. Its purpose might be for team or project leaders to report on the progress, feedback, and any challenges they are facing. This form could be sent to team members or stakeholders to gather information about a specific team's or project's status. The fields should explain how the form's purpose is to gather general information from team members and provide a quick check-in on the team's or project's overall health, feedback from the coach, and progress made towards the objectives. We should also consider that some fields might be optional, allowing users to provide more or less information, depending on their context and situation. This form might be part of a larger process, such as a project management system or a team collaboration tool. We should ensure that the form is easy to understand and fill out, especially considering the fields are mostly text or selection-based, making it simple to complete. We should also verify that the fields are not duplicated or redundant, ensuring that the user doesn't need to repeat the same information multiple times. We should consider that some fields might be used for filtering or grouping purposes, so we should provide guidance on how to fill them out accordingly. The overall goal is to provide a clear and concise guide for users to fill out the form accurately and efficiently.
</thinking>

# gtf_weekly_check_in - Help Guide
## Purpose
The **gtf_weekly_check_in** form is a tool used to gather information about a team or project's status, progress, and feedback. It is meant to be completed by team members or project leaders to provide an update on the team's or project's overall health and progress towards objectives.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by providing your **Submitter Info**, which is a brief description of who is submitting the form (e.g., team member, project leader).
2. Answer the **Feedback Coach** question by writing down any feedback or comments you have for the coach or team leader.
3. Select your progress status for the **Progress** field, indicating whether you have made progress or not (Yes or No).
4. For the **Health Progress** field, select all that apply if you have made progress in any of the areas listed (Yes or No).
5. Enter your **Overall Progress** as a number (e.g., 50/100) to indicate the overall progress made towards the objectives.

## Field-by-Field Explanation
- **Submitter Info** (`submitter_info`, text, optional): Enter a brief description of who is submitting the form.
- **Feedback Coach** (`feedback_coach`, text, optional): Provide any feedback or comments you have for the coach or team leader.
- **Progress** (`progress`, select one, optional): Select "Yes" if you have made progress, "No" otherwise.
  • If you select "Yes", please provide a brief explanation in the **Health Progress** field.
  • If you select "No", you can skip the **Health Progress** field.
- **Health Progress** (`health_progress`, select multiple, optional): If you selected "Yes" for **Progress**, select all that apply from the list (e.g., "Yes" to "Technical skills", "Yes" to "Communication skills", etc.).
  • This field is only visible if you selected "Yes" for **Progress**.
- **Overall Progress** (`overall_progress`, number, optional): Enter the overall progress made towards the objectives, as a number between 0 and 100.
  • If you are unsure about this value, please refer to your project or team goals and objectives for guidance.

## Tips
- Please ensure you only select relevant progress areas for **Health Progress** if you selected "Yes" for **Progress**.
- If you are unsure about any field, refer to your project or team goals and objectives for guidance.
- This form is meant to provide a quick check-in on your progress, so please keep your answers brief and focused on the essential information.
