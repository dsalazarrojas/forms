<thinking>
To determine the purpose of this form, I'll examine the provided YAML fields. The form is for creating an "online-community-moderator-voting-form" which suggests it's a form for selecting moderators for an online community. The form has fields related to selecting moderators, setting voting duration, and gathering additional feedback, which further confirms its purpose.

However, I will need to ensure that each field's label is clear and concise before proceeding. Upon reviewing the fields, I've noted a few ambiguous labels:
* "Select Prophets or Moderators" - This label could be reworded to "Select Moderators or Prophets" to avoid implying an "or" between the two options, which might not be the intention.

Upon reviewing the other fields, most labels are straightforward and self-explanatory. For example, "Moderator Role" and "Voting Duration" are clear and concise. I will use this understanding to create the user-facing help guide.

</thinking>

# online-community-moderator-voting-form - Help Guide
## Purpose
This form is designed to help select moderators for an online community through a voting process. It allows community members to choose from different options for the moderator selection and specify the duration and unit of the voting. Additionally, it allows for additional feedback and contact information to be collected.

## How To Complete This Form
To complete this form, follow these steps:
1. Select a suitable role for the moderators from the options provided in "Moderator Role".
2. Choose the duration for the voting process from the "Voting Duration" options.
3. If necessary, specify the duration in weeks using the "Duration (weeks)" field.
4. Select the unit of time for the voting duration from the "Voting Duration Unit" options.
5. Provide any comments or feedback in the "Comments" field.
6. Enter your email address in the "Email" field.
7. Enter your phone number in the "Phone" field.
8. Provide any additional feedback in the "Additional Feedback" field.
9. Finally, select whether to involve "Moderators" or "Prophets" in the voting process using the "Select Moderators or Prophets" field.

## Field-by-Field Explanation
### Moderator Role
* **Moderator Role** (`moderator_role`, `select_one`): Select a suitable role for the moderator selection, such as Chairperson, Treasurer, Secretary, Event Coordinator, Social Media Manager, or Technical Lead.

### Voting Duration
* **Voting Duration** (`voting_duration`, `select_multiple`): Choose the duration for the voting process. Options are minimalist, short, medium, long, or extra-long.

### Duration (weeks)
* **Duration (weeks)** (`voting_duration_duration`, `number`): If you've selected a duration in the "Voting Duration" field, you can specify it in weeks here.

### Voting Duration Unit
* **Voting Duration Unit** (`voting_duration_unit`, `select_one`): Select the unit of time for the voting duration, such as week or month.

### Comments
* **Comments** (`comments`, `text`): Provide any comments or feedback about the voting process.

### Email
* **Email** (`email`, `email`): Enter your email address for contact purposes.

### Phone
* **Phone** (`phone`, `text`): Enter your phone number for contact purposes.

### Additional Feedback
* **Additional Feedback** (`additional_feedback`, `text`): Provide any additional feedback or comments about the form or the voting process.

### Select Moderators or Prophets
* **Select Moderators or Prophets** (`moderator_selection`, `select_one`): Choose whether to involve "Moderators" or "Prophets" in the voting process.
