# scoring_sheet_form - Help Guide
## Purpose
The scoring sheet form is used to collect information from users about scoring sheets, primarily for evaluating student performances or nominations. It's crucial to provide accurate and relevant data.

## How To Complete This Form

To complete this form, follow these steps:

*   Fill in the **Student Name** field (ID: 1) with the name of the student you are evaluating.
*   Provide the **Student ID** (ID: 2) of the student if available.
*   Select the correct **Category** (ID: 3) for the student's performance or nomination.
*   Enter the **Score** (ID: 4) for the student's performance or achievement.
*   If applicable, fill in the **Nominee Student Name** (ID: 5) and **Nominee Student ID** (ID: 6) for nominating another student.
*   Select the correct **Nominee Category** (ID: 7) for the nominated student.
*   Enter the **Nominee Score** (ID: 8) for the nominated student's performance or achievement.
*   Add any additional **Comments** (ID: 9) about the student's performance or nomination.
*   Finally, confirm that you have reviewed and submitted the form by selecting **Submit** (ID: 10).

## Field-by-Field Explanation

*   **Student Name** (ID: 1, text, optional): Enter the name of the student you are evaluating.
*   **Student ID** (ID: 2, number, optional): Provide the Student ID number if available.
*   **Category** (ID: 3, select_one, true): Select the category that best fits the student's performance or nomination (e.g., '1' for one category, '2' for another).
*   **Score** (ID: 4, number, false): Enter the score for the student's performance or achievement.
*   **Nominee Student Name** (ID: 5, text, false): Enter the name of the student you are nominating, if applicable.
*   **Nominee Student ID** (ID: 6, number, false): Provide the Student ID number of the student you are nominating, if applicable.
*   **Nominee Category** (ID: 7, select_one, false): Select the category that best fits the student's performance or achievement (e.g., '1' for one category, '2' for another).
*   **Nominee Score** (ID: 8, number, false): Enter the score for the student's performance or achievement, if you are nominating another student.
*   **Comments** (ID: 9, text, false): Add any additional comments about the student's performance or nomination.
*   **Submit** (ID: 10, select_multiple, true): Confirm that you have reviewed and submitted the form by selecting 'Yes'.
