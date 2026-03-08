<thinking>...thinking>

This form is a crucial tool for team evaluation and performance assessment. The purpose of this form is to gather feedback from evaluators on team members' performance, providing a structured and objective evaluation process. The form is designed to collect information from both the evaluator and the team member being evaluated, ensuring that both parties have a chance to express their opinions and comments. This form is typically used in a team setting where team members need to be evaluated on their performance, contributions, and overall fit within the team. By using this form, team leaders and managers can make informed decisions about promotions, training, and development opportunities.

</thinking>

# Team Member Evaluation Form - Help Guide
## Purpose
The Team Member Evaluation Form is a tool used to gather feedback from evaluators on team members' performance, providing a structured and objective evaluation process. This form helps team leaders and managers make informed decisions about team members' growth and development.

## How To Complete This Form
To complete this form, follow these steps:

1.  **Enter the Team Member ID**: This is a unique identifier assigned to the team member being evaluated. Please enter the correct ID to ensure accurate evaluation.
2.  **Enter your Name and Email**: As the evaluator, please enter your name and email address to ensure that your feedback is attributed to you.
3.  **Enter the Team Member's Name**: This is the name of the team member being evaluated. Please ensure that this is the correct name.
4.  **Select the Team Member's Role**: Choose the role that best describes the team member's position within the team. This can be Team Leader, Team Member, or Other.
5.  **Rate the Team Member's Performance**: Use the rating scale from 1 to 5 to evaluate the team member's performance.
6.  **Enter your Comment**: Please provide a brief comment on your impression of the team member's performance.
7.  **Optional: Enter the Team Member's Comment**: If you have any additional comments or feedback for the team member, please enter them here. (Note: This field is optional.)
8.  **Submit the Form**: Once all fields are completed, click the submit button to finalize your evaluation.

## Field-by-Field Explanation
- **Team Member ID**: A unique identifier for the team member being evaluated.
  • **Team Member ID** (`team_member_id`, `number`, `true`): This field is required and is used to identify the team member being evaluated.
- **Evaluator Name**: This is the name of the person evaluating the team member.
  • **Evaluator Name** (`evaluator_name`, `text`, `true`): This field is required and should be filled with the evaluator's name.
- **Evaluator Email**: This is the email address of the evaluator.
  • **Evaluator Email** (`evaluator_email`, `email`, `false`): This field is not required but recommended for contact purposes.
- **Team Member Name**: This is the name of the team member being evaluated.
  • **Team Member Name** (`team_member_name`, `text`, `true`): This field is required and should be filled with the team member’s name.
- **Team Member Role**: Choose the role that best describes the team member's position within the team.
  • **Team Member Role** (`team_member_role`, `select_one`, `true`): This field is required and should be selected from the available options.
- **Team Member Rating**: Use the rating scale from 1 to 5 to evaluate the team member's performance.
  • **Team Member Rating** (`team_member_rating`, `number`, `true`): This field is required and should be filled with a number between 1 and 5.
- **Evaluator Comment**: Please provide a brief comment on your impression of the team member's performance.
  • **Evaluator Comment** (`evaluator_comment`, `note`, `true`): This field is required and should be filled with a comment.
- **Team Member Comment**: This is an optional field for the team member to provide additional feedback or comments.
  • **Team Member Comment** (`team_member_comment`, `note`, `false`): This field is not required but recommended for the team member to provide their perspective.
- **Team Member Comment**: This field is intended for the team member to enter their comment.
  • **Team Member Comment** (`team_member_comment`, `note`, `true`): This field is required and should be filled with a comment.
