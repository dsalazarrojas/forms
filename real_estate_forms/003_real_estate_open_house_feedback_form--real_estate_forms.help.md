<thinking>
The form is used to collect feedback from real estate agents, clients, or customers on an open house event. The feedback form should only be filled out by individuals who have attended an open house event. The form is not a duplicate if the user has already filled it out in the past 30 days. The real_estate_open_house_feedback_form is used to collect ratings, comments, and feedback on the event from the attendees. The form is required for the following fields: visitor_details, date, and agent.
</thinking>

# real_estate_open_house_feedback_form - Help Guide
## Purpose
The real_estate_open_house_feedback_form is used to collect feedback from attendees on open house events. The form is used to gather information about the event, including the agent who conducted the open house, the date and time of the event, and any comments or ratings the attendee wants to provide.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter the title of the event and any relevant information about the open house.
2. Select the options that apply to the visitor's details (e.g., attended as an individual, attended with family/friends).
3. Rate the event by selecting a score from 1-5.
4. Enter any comments or feedback about the event.
5. Select the agent who conducted the open house from the provided options.
6. Enter the date of the event.
7. Enter the time of the event.

## Field-by-Field Explanation
* **Open House Info** (`open_house_info`, text, required: false): Enter a brief title and description of the open house event.
* **Visitor Details** (`visitor_details`, select_multiple, required: true): Select all the options that apply to your visitor details (e.g., attended as an individual, attended with family/friends).
* **Feedback** (`feedback`, text, required: false): Enter any comments or feedback about the event.
* **Rating** (`rating`, number, required: false): Rate the event by selecting a score from 1-5.
* **Contact Info** (`contact_info`, email, required: false): Enter your contact information for follow-up or future reference.
* **Phone** (`phone`, text, required: false): Enter your phone number for follow-up or future reference.
* **Date** (`date`, date, required: true): Enter the date of the open house event.
* **Time** (`time`, time, required: false): Enter the time of the open house event.
* **Agent** (`agent`, select_one, required: true): Select the agent who conducted the open house from the provided options.
* **Comments** (`comments`, note, required: false): Enter any additional comments or feedback about the event.

## Tips
* Please make sure to enter all required fields to submit the form.
* The form is not for duplicate entries. If you have already filled out this form in the past 30 days, you will not be able to submit this form again.
* Please enter accurate and truthful information about the event and your visit.
