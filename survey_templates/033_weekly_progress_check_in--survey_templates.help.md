# Weekly Progress Check In - Help Guide
## Purpose

The Weekly Progress Check In form is designed to facilitate regular tracking and monitoring of team or individual progress, ensuring timely and accurate submission of tasks and activities within a defined timeframe.

## How To Complete This Form

1. Fill in the `Weekly Topic` field with a brief description of the topic or activity being worked on.
2. Provide `Progress Notes` about the work done so far, including any challenges faced or successes achieved.
3. Specify the `Goals` that are expected to be met for the current week.
4. Choose the `Participation Status` as either `Active` or `Inactive`, indicating the level of involvement in the activity.
5. Select the `Submission Date` and `Submission Time` to mark the exact time of submission.
6. Indicate the `Submission Status` as either `On Time` or `Late`, describing the submission timing.
7. Add any `Additional Comments` if any further details or explanations are required.
8. Choose the `Submitted To` option where the submission is being sent (e.g., Team Lead, Manager, etc.).
9. Select the `Submitted From` option indicating who or which team is submitting the progress (e.g., Team A, Team B, etc.).
10. Choose the `Submitted Role` option specifying the role of the person submitting the progress (e.g., Team Lead, Member, etc.).
11. Confirm whether `Confirmation Received` from the designated recipient.

## Field-by-Field Explanation

* **Weekly Topic** (`weekly_topic`, text, required): Briefly describe the topic or activity being worked on.
* **Progress Notes** (`progress_notes`, text, required): Write down any significant progress made during the week, including achievements or challenges encountered.
* **Goals** (`goals`, text, required): List the key objectives to be met for the current week.
* **Participation Status** (`participation_status`, select_one, required): Select `Active` if you've actively participated in the activity or `Inactive` if not.
* **Submission Date** (`submission_date`, date, required): Enter the exact date of submission.
* **Submission Time** (`submission_time`, time, required): Enter the time of submission.
* **Submission Status** (`submission_status`, select_one, required): Choose `On Time` or `Late` for submission timing.
* **Additional Comments** (`additional_comments`, text, optional): Enter any extra details or explanations.
* **Submitted To** (`submitted_to`, select_one, required): Select the person or team receiving the submission.
* **Submitted From** (`submitted_from`, select_multiple, required): Choose who or which team submitted the progress.
* **Submitted Role** (`submitted_role`, select_multiple, required): Specify the role of the person submitting the progress.
* **Confirmation Received** (`confirmation_received`, select_one, required): Confirm if you have received confirmation from the recipient.
