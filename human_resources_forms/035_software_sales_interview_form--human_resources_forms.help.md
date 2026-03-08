# software_sales_interview_form - Help Guide
## Purpose
The software sales interview form is designed to collect information about a candidate's fit for a software sales role. It helps interviewers to evaluate candidates based on their sales skills, product knowledge, and overall fit for the role.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the candidate's information, including their name, email, and phone number.
2. Provide the candidate's contact information, including their company and job title.
3. Select the candidate's sales skills and indicate if they are proficient in those areas.
4. Choose the candidate's product knowledge, selecting only one option that best fits their experience.
5. Evaluate the candidate's overall fit for the role by selecting a review status (Hire, Reject, or Waitlist).
6. Add any additional comments or notes about the candidate.
7. Select the type of interview (Phone, Video, or In-Person).
8. Record the date and time of the interview.
9. Enter the name of the person who conducted the interview.

## Field-by-Field Explanation
- **Candidate Information** (`candidate_info`, `text`, required/optional): Enter the candidate's name, email, and phone number to ensure accurate contact information.
- **Contact Information** (`contact_info`, `text`, required/optional): Add the candidate's company and job title to help track their employment history.
- **Sales Skills** (`sales_skills`, `select_multiple`, required/optional): Select the candidate's sales skills to evaluate their overall sales ability.
- **Interview Notes** (`interview_notes`, `text`, required/optional): Record any notes about the interview, including any questions or concerns.
- **Sales Experience** (`sales_experience`, `number`, required/optional): Enter the number of years the candidate has sales experience.
- **Sales Product Knowledge** (`sales_product_knowledge`, `select_one`, required): Select the software product the candidate is most familiar with.
- **Candidate Score** (`candidate_score`, `number`, required/optional): Assign a score out of 10 to evaluate the candidate's overall fit for the role.
- **Score Comments** (`score_comments`, `text`, required/optional): Add any comments about the candidate's score.
- **Additional Comments** (`additional_comments`, `text`, required/optional): Enter any additional notes or comments about the candidate.
- **Next Steps** (`next_steps`, `text`, required/optional): Note any next steps or follow-up actions required for the candidate.
- **Review Status** (`review_status`, `select_one`, required/optional): Select the review status (Hire, Reject, or Waitlist).
- **Review Notes** (`review_notes`, `text`, required/optional): Add any notes about the review process.
- **Interview Type** (`interview_type`, `select_one`, required/optional): Select the type of interview (Phone, Video, or In-Person).
- **Interview Date** (`interview_date`, `date`, required/optional): Record the date of the interview.
- **Interview Time** (`interview_time`, `time`, required/optional): Record the time of the interview.
- **Interviewer** (`interviewer`, `text`, required/optional): Enter the name of the person who conducted the interview.
