<thinking>
We need to ensure that the form is used for its intended purpose and that users understand the feedback they provide is valuable. The purpose of this form is to collect feedback from clients after a fascial therapy session. The form should only be completed by clients who have had a session with a therapist. If the form is completed by someone who did not have a session, their feedback may not be relevant or accurate. Therefore, we need to check that the session date matches a known therapy session date. If the form is completed multiple times, it's also a sign that the form is not being used for its intended purpose. We should ensure that the user understands the form is not for general feedback, but rather specific to their session. 

The form is designed to collect numerical feedback on client and therapist feelings after a session, as well as overall satisfaction. The numerical feedback is not meant to be a rating, but rather a score out of a certain range. For example, for the client_feelings field, the user might score 3 out of 5, indicating that they felt moderately happy during the session. Similarly, the overall_satisfaction field is also scored, and the feedback field is an open-ended text area for any additional comments. 

The form should also collect the session length and date of the session.

</thinking>

# Fascial Therapy Feedback - Help Guide
## Purpose
The Fascial Therapy Feedback form is designed to collect feedback from clients after a fascial therapy session. This feedback is used to help therapists improve their practice and provide better service to clients.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure that you are completing the form after a fascial therapy session. This form is not for general feedback, but rather specific to your session.
2. Enter the session length in the `session_length` field, indicating how many minutes the session lasted.
3. Enter the session date in the `session_date` field. This should match the date of your therapy session.
4. Score your feelings during the session in the `client_feelings` field. This is an out-of-5 scale, where 1 is low and 5 is high.
5. Score the feelings of your therapist in the `therapist_feelings` field.
6. Score your overall satisfaction with the session in the `overall_satisfaction` field.
7. Enter any additional comments in the `feedback` field.

## Field-by-Field Explanation
* **session_length (number, required: false):** Enter the length of the session in minutes.
* **session_date (date, required: false):** Enter the date of your therapy session.
* **client_feelings (number, required: false):** Score your feelings during the session on a scale of 1 to 5, where 1 is low and 5 is high.
* **therapist_feelings (number, required: false):** Score the feelings of your therapist during the session on a scale of 1 to 5, where 1 is low and 5 is high.
* **overall_satisfaction (number, required: false):** Score your overall satisfaction with the session on a scale of 1 to 5.
* **feedback (note, required: false):** Enter any additional comments you have about your session.

## Tips
* Be honest and accurate when scoring your feelings and satisfaction.
* Remember that this form is specific to your therapy session, so be sure to enter the correct session date.
* If you have any feedback that doesn't fit in the numerical fields, use the `feedback` field to provide more detail.
