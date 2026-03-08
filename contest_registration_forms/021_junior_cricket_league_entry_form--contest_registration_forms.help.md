<thinking>
To create an effective user-facing help guide, I'll need to understand the context and purpose of the form. Based on the provided YAML, it appears that this form is designed for registration purposes, likely for a junior cricket league. The form likely collects contact information, team details, league information, and match information from users who want to participate in or join the league. Since the "required" field is specified for "Team Information", "League Information", and "Confirm" fields, I assume these fields are essential for the form's purpose.

Before generating the help guide, I need to ensure that the form is not a duplication or derivative of any existing form, and that it aligns with the provided metadata and the form's internal logic. I'll review the form's fields, their types, and requirements to create a comprehensive and practical help guide.

</thinking>

# junior_cricket_league_entry_form - Help Guide
## Purpose
This form is designed for registration purposes, specifically for users who want to participate in or join a junior cricket league. It collects essential information from users to facilitate their registration process.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your contact information in the "Contact Information" field.
2. Enter your team details in the "Team Information" field.
3. Fill in the "League Information" field with the relevant details.
4. You can optionally provide match information in the "Match Information" field.
5. Review the "Comments" field to share any additional comments or notes.
6. Finally, confirm your registration by selecting "Confirm" in the "Confirm" field.

## Field-by-Field Explanation

* **Contact Information**: (`contact_info`, text, optional): This field collects your contact details, which will be used for communication purposes.
* **Team Information** (team_info, text, required): Enter your team's details, including name, players, and any other relevant information.
* **League Information** (league_info, text, required): Provide details about the league you want to join or participate in, including league name, location, and any other relevant information.
* **Match Information** (match_info, text, optional): Enter any match details, such as date, time, and location.
* **Comments** (comments, text, optional): Share any additional comments or notes about your registration or team.
* **Confirm** (confirm, select_one, required): Select "Confirm" to finalize your registration.
