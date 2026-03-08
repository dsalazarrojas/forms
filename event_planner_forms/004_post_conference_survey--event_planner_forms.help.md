<thinking>
We'll create a help guide for the "post_conference_survey" form that explains its purpose, how to complete it, and each field's explanation. The form is designed for gathering feedback and information from conference attendees. We will base the guide on the provided YAML fields and use concrete, concise, and practical explanations. If a field label is unclear, we will provide a best-effort explanation without inventing unsupported business logic.

# post_conference_survey - Help Guide
## Purpose
This form is designed to collect feedback and information from conference attendees after the event. It helps us understand the attendee's experience, gather suggestions, and track any issues or concerns they may have had during the conference.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill out the form completely and accurately.
2.  Make sure to provide your contact email address so we can reach out to you with any further questions or to thank you for your feedback.

## Field-by-Field Explanation
* **Conference Attendee** (`conference_attendee`, `text`, **required: false**): Please describe your role or position at the conference (e.g., speaker, attendee, sponsor).
* **Contact Email** (`contact_email`, `email`, **required: false**): Enter your email address so we can get in touch with you if needed.
* **Attendee Name** (`attendee_name`, `text`, **required: false**): Please provide your full name as it appears on your conference badge or badge name.
* **Feedback** (`feedback`, `note`, **required: false**): Share your thoughts about the conference. Describe what you liked or disliked, what you found useful or confusing, or any other comments you may have.
