# Resolution Time Feedback Survey - Help Guide
## Purpose
The Resolution Time Feedback Survey is designed to gather feedback on the response time of the support team. It will help the support team to understand how long customers had to wait for their issues to be resolved and what they can do to improve.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Answer all questions in detail.
2. For multiple-choice questions, select the most accurate answer.
3. If you had multiple interactions with the support team, please provide the total time spent on all interactions.
4. Please provide feedback in the space provided for additional comments.

## Field-by-Field Explanation
- **How long did you wait for the support team to respond?** (`user_response_time`, `number`, required: false)
	* This question asks for the time you waited for the support team to respond to your initial request.
- **How long did the support team take to resolve your issue?** (`resolution_time`, `number`, required: false)
	* This question asks for the time it took for the support team to resolve your issue.
- **How satisfied are you with the support team's response time?** (`user_satisfaction`, `number`, required: false)
	* This question asks for your level of satisfaction with the response time of the support team.
- **Size of support team** (`support_team_size`, `number`, required: false)
	* This question asks for the size of the support team that handled your request.
- **Which method of resolution was used?** (`resolution_method`, `select_one`, required: true)
	* This question asks for the method used by the support team to resolve your issue. Please select the most accurate answer from the options provided.
- **Resolution Date** (`resolution_date`, `date`, required: false)
	* This question asks for the date when your issue was resolved.
- **Resolution Time** (`resolution_time`, `number`, required: false)
	* This question asks for the time it took for the support team to resolve your issue.
- **Response Time** (`response_time`, `number`, required: false)
	* This question asks for the time you waited for the support team to respond.
- **Which support team member was handling your request?** (`support_team_member`, `number`, required: false)
	* This question asks for the support team member who handled your request.
- **Do you have any additional feedback?** (`feedback`, `note`, required: false)
	* This question asks for any additional comments or suggestions you may have about the response time of the support team.
- **User Email** (`user_email`, `email`, required: false)
	* This question asks for your email address.
- **User Phone** (`user_phone`, `text`, required: false)
	* This question asks for your phone number.
- **Support Email** (`support_email`, `email`, required: false)
	* This question asks for the email address of the support team member who handled your request.
