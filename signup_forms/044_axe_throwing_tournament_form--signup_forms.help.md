<thinking>As a form designer and technical writer, I understand the importance of creating a user-friendly guide that effectively communicates the purpose and usage of the form to end-users. Before generating the help guide, I'll review the provided YAML fields to ensure I cover all the essential points. The form is for an axe throwing tournament, and it appears to be collecting information from teams for registration. The form has several sections, including team information, roster, tournament details, payment and safety, and a signature section. Each section is designed to gather specific data from team captains and members. I will ensure that the guide provides clear explanations for each field, making it easy for end-users to fill out the form accurately and efficiently.</thinking>

# Axe Throwing Tournament Form - Help Guide
## Purpose
The Axe Throwing Tournament Form is designed to collect information from teams for registration and preparation of an axe throwing tournament. Please fill out this form accurately to ensure your team's participation in the event.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the correct team information, including team name, captain's name, email, and phone number.
2. Add team members' names, including at least two members.
3. Choose the correct tournament category and date.
4. Confirm the entry fee status and preferred payment method.
5. Indicate the team's previous tournament experience.
6. Agree to the safety rules and confirm that all team members have signed the liability waiver.
7. Sign the form digitally with your full name as the team captain.

## Field-by-Field Explanation

* **Team Name** (`team_name_axe`, text, required): Choose a unique and catchy name for your team.
* **Team Captain Full Name** (`captain_name`, text, required): Enter the full name of your team's captain, who will be the primary point of contact.
* **Captain Email Address** (`captain_email`, email, required): Enter the email address of your team's captain.
* **Captain Phone Number** (`captain_phone`, text, required): Enter the phone number of your team's captain.
* **Team Member 1 Name** (`member_1_name`, text, required): Add the name of the first team member.
* **Team Member 2 Name** (`member_2_name`, text, required): Add the name of the second team member.
* **Team Member 3 Name** (`member_3_name`, text, optional): If applicable, add the name of the third team member.
* **Team Member 4 Name** (`member_4_name`, text, optional): If applicable, add the name of the fourth team member.
* **Tournament Category** (`tournament_category`, select_one, required): Select the appropriate skill level for your team (Amateur, Professional, Corporate, or Mixed).
* **Date of Tournament** (`tournament_date_axe`, date, required): Choose the date of the tournament.
* **Venue Location** (`venue_location_axe`, text, required): Enter the location of the tournament venue, e.g., Central Axe Hall.
* **Entry Fee Status** (`entry_fee_status`, select_one, required): Confirm that you have paid the entry fee (Yes, Paid in Full; No, Need to Pay; Pending Approval).
* **Preferred Payment Method** (`payment_method_axe`, select_one, required): Choose your preferred payment method (Credit/Debit Card, Cash at Venue, Team Account Transfer).
* **Previous Tournament Experience** (`experience_axe`, select_one, required): Indicate how many tournaments your team has entered (None, 1-3, 4+).
* **I agree to all Tournament Safety Rules** (`safety_agreement_axe`, select_one, required): Confirm that you and your team agree to the safety rules (Yes, I agree; No, I do not agree).
* **All team members have signed the liability waiver** (`waiver_confirmation_axe`, select_one, required): Confirm that all team members have signed the liability waiver (Yes, Confirmed; Other).
* **Captain Digital Signature** (`captain_signature_axe`, text, required): Type your full name to digitally sign the form.

## Tips
* Please ensure that all team members are aware of the tournament rules and safety guidelines before participating.
* Review the form carefully to ensure you have completed all required fields.
* If you encounter any issues or have questions, contact the tournament staff for assistance.
