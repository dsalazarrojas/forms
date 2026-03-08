# E-Commerce Team Meeting Feedback - Help Guide
## Purpose
The E-Commerce Team Meeting Feedback form is designed to gather feedback from the team after the meeting. This form helps to evaluate the effectiveness of the meeting in terms of meeting ratings, collaboration, communication, and other important aspects.

## How To Complete This Form
To complete this form, follow these steps:

1. Rate the meeting in terms of various aspects such as meeting ratings, collaboration, communication, and decisions.
2. Provide any feedback or suggestions in the "Suggestions" field.
3. Rate your overall satisfaction with the meeting in the "Satisfaction" field.
4. If you have any next steps or follow-ups, provide them in the "Next Steps" field.
5. Finally, review your answers and submit the form.

## Field-by-Field Explanation

* **Meeting Ratings** (`meeting_ratings`, `number`, required: false): Rate the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Agenda Effectiveness** (`agenda_effectiveness`, `number`, required: false): Rate the effectiveness of the meeting agenda on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Meeting Organization** (`meeting_organization`, `number`, required: false): Rate the organization of the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Collaboration** (`collaboration`, `select_multiple`, required: true): Rate the level of collaboration during the meeting, selecting from "Good", "Fair", or "Poor".
* **Suggestions** (`suggestions`, `text`, required: false): Provide any feedback or suggestions for improving the meeting.
* **Agenda** (`agenda`, `select_one`, required: true): Rate the timing of the meeting agenda, selecting from "On Time", "Late", or "Cancelled".
* **Communication** (`communication`, `select_multiple`, required: true): Rate the level of communication during the meeting, selecting from "Good", "Fair", or "Poor".
* **Decisions** (`decisions`, `select_one`, required: true): Rate the timing of decisions made during the meeting, selecting from "On Time", "Late", or "Cancelled".
* **Collaboration Tools** (`collaboration_tools`, `select_multiple`, required: false): Rate the effectiveness of collaboration tools used during the meeting, selecting from "Google Meet", "Zoom", or "Microsoft Teams".
* **Next Steps** (`next_steps`, `text`, required: false): Provide any next steps or follow-ups from the meeting.
* **Comments** (`comments`, `text`, required: false): Provide any additional comments about the meeting.
* **Rating Agenda** (`ratings_agenda`, `number`, required: false): Rate the agenda on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Decisions** (`ratings_decisions`, `number`, required: false): Rate the decisions made during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Presentation** (`ratings_presentation`, `number`, required: false): Rate the presentation of the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Collaboration** (`ratings_collaboration`, `number`, required: false): Rate the collaboration during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Organization** (`ratings_organization`, `number`, required: false): Rate the organization of the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Communication** (`ratings_communication`, `number`, required: false): Rate the communication during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Time** (`ratings_time`, `number`, required: false): Rate the time spent during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Suggestions** (`ratings_suggestions`, `number`, required: false): Rate the suggestions provided during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Collaboration Tools** (`ratings_collaboration_tools`, `number`, required: false): Rate the collaboration tools used during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Rating Comments** (`ratings_comments`, `number`, required: false): Rate the comments provided during the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Overall Rating** (`rating_overall`, `number`, required: true): Rate the overall satisfaction with the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Satisfaction** (`satisfaction`, `select_one`, required: true): Rate your overall satisfaction with the meeting, selecting from "High", "Low", "None".
* **Suggestions Implementation** (`suggestions_implementation`, `text`, required: false): Provide any feedback on implementing suggestions from the meeting.
* **Meeting Duration** (`meeting_duration`, `number`, required: false): Rate the duration of the meeting on a scale of 1-5, where 1 is poor and 5 is excellent.

Note: The required fields are marked with `required: true` in the YAML form schema.
