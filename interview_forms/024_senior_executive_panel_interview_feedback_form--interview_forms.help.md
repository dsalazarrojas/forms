# Senior Executive Panel Interview Feedback Form - Help Guide
## Purpose
The Senior Executive Panel Interview Feedback Form is used to gather feedback from reviewers on the outcome of an interview with a senior executive candidate. This form helps to document the evaluation process and ensures that the feedback is objective and consistent.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the candidate details section with any relevant information about the candidate.
2. Answer the review questions for Reviewer 1, Reviewer 2, and Reviewer 3 by selecting either "Yes" or "No" from the dropdown menus.
3. Enter the date and time of the interview if applicable.
4. Provide notes about the interview questions asked and discussed.
5. Evaluate the candidate's performance using the evaluation section.
6. Enter any additional comments about the candidate.
7. Assign a score out of a certain scale (the exact number of points is not specified, but presumably, it's a number).
8. Make a final decision about the candidate's suitability for the position.

## Field-by-Field Explanation
* **candidate_details** (`candidate_details`, text, optional): Enter any relevant information about the candidate, such as their name, job title, or qualifications.
* **Reviewer 1** (`reviewer_1`, select_one, required): Select "Yes" if Reviewer 1 found the candidate suitable for the position, or "No" if they did not.
* **Reviewer 2** (`reviewer_2`, select_one, required): Select "Yes" if Reviewer 2 found the candidate suitable for the position, or "No" if they did not.
* **Reviewer 3** (`reviewer_3`, select_one, required): Select "Yes" if Reviewer 3 found the candidate suitable for the position, or "No" if they did not.
* **Date of Interview** (`date_of_interview`, date, optional): If you know the date and time of the interview, enter it here. Otherwise, leave this field blank.
* **Time of Interview** (`time_of_interview`, time, optional): If you know the time of the interview, enter it here. Otherwise, leave this field blank.
* **Interview Questions** (`interview_questions`, note, optional): Enter any notes about the interview questions asked and discussed.
* **Evaluation** (`evaluation`, select_multiple, required): Select all the evaluation criteria that apply to the candidate, such as "Yes" for each criterion that they met.
* **Comments** (`comments`, text, optional): Enter any additional comments about the candidate.
* **Score** (`score`, number, required): Enter a numerical score out of a certain scale (the exact number of points is not specified, but presumably, it's a number).
* **Final Decision** (`final_decision`, select_one, required): Select "Yes" if you think the candidate is suitable for the position, or "No" if they are not.
