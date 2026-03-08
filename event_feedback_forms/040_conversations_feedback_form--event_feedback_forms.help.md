# Conversations Feedback Form - Help Guide
## Purpose
The Conversations Feedback Form is designed to gather feedback from customers and users about their experiences with our team. This form will help us understand how we can improve our service to better meet your needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with as much detail as possible.
2. Select the type of conversation you had with our team from the "Type of Conversation" dropdown menu.
3. Choose how you communicated with us from the "Channel Used" dropdown menu.
4. Provide the date and time of the conversation.
5. Rate your satisfaction with the wait time, speed of responses, and overall experience.
6. Choose how well you think our representative handled the conversation.
7. Answer whether your issue was resolved and how satisfied you are with the resolution.
8. Select whether you would contact us again for future needs and recommend our service to others.
9. Add any additional feedback or comments about your experience.

## Field-by-Field Explanation

* **Your Name** (`respondent_name`, `text`, Optional): Your name and contact information will help us keep track of your feedback.
* **Email Address** (`email`, `email`, For follow-up): If you provide your email address, we can follow up with you on any issues or concerns.
* **Phone Number** (`phone`, `text`, Optional contact number): If you provide your phone number, we can contact you if we need more information or have questions.
* **Conversation Information** (`section_conversation_info`, `note`, null): Use this space to provide a brief description of your conversation.
* **Type of Conversation** (`conversation_type`, `select_one`, true): Choose the type of conversation you had with our team (e.g. Customer Support, Sales Inquiry, etc.).
* **Channel Used** (`conversation_channel`, `select_one`, true): Choose how you communicated with us (e.g. Phone Call, Email, Live Chat, etc.).
* **Date of Conversation** (`conversation_date`, `date`, true): Provide the date of the conversation.
* **Time of Conversation** (`conversation_time`, `time`, false): Provide the approximate time of the conversation (optional).
* **Representative Name** (`representative_name`, `text`, false): If you remember the representative's name, please provide it.
* **Responsiveness** (`section_responsiveness`, `note`, null): Use this section to provide feedback on how responsive our team was during the conversation.
* **How long did you wait** (`wait_time`, `select_one`, true): Rate how long you waited for a response (e.g. No Wait, Less than 1 minute, etc.).
* **Satisfaction with wait time** (`wait_time_satisfaction`, `select_one`, true): Rate your satisfaction with the wait time (e.g. Very Satisfied, Satisfied, etc.).
* **Speed of responses during conversation** (`response_speed`, `select_one`, true): Rate the speed of our responses during the conversation (e.g. Very Fast, Fast, etc.).
* **Professionalism** (`section_professionalism`, `note`, null): Use this section to provide feedback on the representative's professionalism.
* **Knowledge of the representative** (`representative_knowledge`, `select_one`, true): Rate how well our representative knew the topic.
* **Courtesy and politeness** (`representative_courtesy`, `select_one`, true): Rate the representative's courtesy and politeness.
* **Friendliness** (`representative_friendliness`, `select_one`, true): Rate the representative's friendliness.
* **Clarity of communication** (`communication_clarity`, `select_one`, true): Rate the clarity of communication.
* **Problem Resolution** (`section_problem_resolution`, `note`, null): Use this section to provide feedback on how well your issue was resolved.
* **Was your issue resolved** (`issue_resolved`, `select_one`, true): Rate whether your issue was resolved.
* **Satisfaction with resolution** (`resolution_satisfaction`, `select_one`, false): Rate your satisfaction with the resolution.
* **Was this resolved in first contact** (`first_contact_resolution`, `select_one`, false): Rate whether your issue was resolved in the first contact.
* **Overall** (`section_overall`, `note`, null): Use this section to provide an overall assessment of your experience.
* **Overall satisfaction** (`overall_satisfaction`, `select_one`, true): Rate your overall satisfaction with the conversation.
* **Expectations met** (`expectations_met`, `select_one`, true): Rate whether your expectations were met.
* **Would you contact again** (`would_contact_again`, `select_one`, true): Rate whether you would contact us again for future needs.
* **Would you recommend** (`would_recommend`, `select_one`, true): Rate whether you would recommend our service to others.
* **Additional Feedback** (`section_feedback`, `note`, null): Use this section to provide any additional feedback or comments about your experience.
* **What went well** (`what_went_well`, `text`, false): Provide any positive feedback or comments about your experience.
* **What could be improved** (`what_needs_improvement`, `text`, false): Provide any suggestions for improvement.
* **Additional Comments** (`additional_comments`, `text`, false): Provide any other feedback or comments you have.
* **May we follow up on your feedback** (`permission_to_follow_up`, `select_one`, false): Choose whether we can follow up with you on your feedback.
