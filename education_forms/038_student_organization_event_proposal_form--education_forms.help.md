<thinking>
The provided YAML input schema defines a form for proposing student organization events. The form's purpose is to gather essential information about an event, such as its name, date, location, description, type, budget, and additional details. This form likely serves as an internal process within an educational institution or organization to collect and evaluate proposals for student events. 

The form has a few fields that check for relevance and non-duplication: 
- "Event Type" and "Event Type (Other)" are two distinct fields, with "Event Type" being a select_one type field and "Event Type (Other)" being a text type field. This suggests that if the event is not one of the pre-defined types (e.g., "Yes", "No"), users should fill in "Event Type (Other)" with their specific event type.
- "Sponsor" and "Sponsor (Other)" are also two fields with similar logic.
- "Student Group" and "Student Group (Other)" are two fields for students who are or are not part of a group, with "Student Group (Other)" being a text type field for users to fill in their specific group name.
- "Assigned Tool" and "Assigned Tool (Other)" are two fields that check if a specific tool is assigned to the event, with "Assigned Tool (Other)" being a text type field for users to fill in their assigned tool name.

</thinking>

# Student Organization Event Proposal Form - Help Guide
## Purpose
The Student Organization Event Proposal Form is designed to collect and evaluate proposals for student events within an educational institution or organization. This form helps in gathering essential information about events, such as their name, date, location, description, type, budget, and additional details.

## How To Complete This Form

To fill out the form, follow these steps:
1. **Provide Event Details**: Fill in the form with the required information about the event, including its name, date, location, description, type, budget, and other relevant details.
2. **Choose Relevant Fields**: Select "Yes" or "No" for "Event Type" and "Sponsor" as applicable, or fill in "Event Type (Other)" and "Sponsor (Other)" if the event does not fit into one of the pre-defined categories.
3. **Fill in Specific Details**: If the event is not one of the pre-defined types, fill in "Event Type (Other)" with the specific type. If the event has a sponsor that is not in the options, fill in "Sponsor (Other)" with their name.
4. **Checkboxes for Relevance**: Check "Yes" or "No" for "Student Group" as applicable, or fill in "Student Group (Other)" if the event has a specific student group.
5. **Submit**: Finally, select "Yes" or "No" for "Submit" as applicable, or fill in "Submit (Other)" with a reason why the form cannot be submitted.

## Field-by-Field Explanation
* **Event Name**: A text field for the event name.
* **Event Date**: A date field for the event's date.
* **Event Time**: A time field for the event's time.
* **Event Location**: A text field for the event's location.
* **Event Description**: A text field for a brief description of the event.
* **Event Type**: A select_one field with options "Yes" and "No" to indicate if the event is of a pre-defined type.
* **Event Type (Other)**: A text field for users to fill in if the event is not one of the pre-defined types.
* **Sponsor**: A select_one field with options "Yes" and "No" to indicate if the event has a sponsor.
* **Sponsor (Other)**: A text field for users to fill in if the event has a sponsor that is not in the options.
* **Student Group**: A select_multiple field with options "Yes" and "No" to indicate if the event is or is not part of a student group.
* **Student Group (Other)**: A text field for users to fill in if the event is part of a student group that is not in the options.
* **Event Budget**: A number field for the event's budget.
* **Event Justification**: A text field for the event's justification or purpose.
* **Event Safety Plan**: A text field for the event's safety plan or precautions.
* **Event Contact**: A text field for the event's contact person's name and email.
* **Event Email**: A text field for the event's email.
* **Event Phone**: A text field for the event's phone number.
* **Event Website**: A text field for the event's website.
* **Event Additional Info**: A text field for any additional event information.
* **Event Additional Info (Other)**: A text field for users to fill in any additional event information that does not fit into the other "Event Additional Info" field.
* **Assigned Tool**: A select_one field with options "Yes" and "No" to indicate if a specific tool is assigned to the event.
* **Assigned Tool (Other)**: A text field for users to fill in if a specific tool is assigned to the event that is not in the options.
* **Submit**: A select_one field with options "Yes" and "No" to indicate if the form is ready to be submitted, or a text field for users to fill in if the form cannot be submitted.
* **Output File**: A text field for users to provide any output file that may be needed for the event.
