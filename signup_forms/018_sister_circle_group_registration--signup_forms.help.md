<thinking>...</thinking>

# sister_circle_group_registration - Help Guide
## Purpose
This form is designed for registering new members to a sister circle group. It collects essential information about the individual, including their contact details, preferences, and group-related data. By filling out this form, you will be able to create a new member profile and join the group.

## How To Complete This Form
To register for the sister circle group, follow these steps:

1. Fill in the User Information Form with your details.
2. Provide your group preferences in the Group Preferences Form.
3. Select your event preferences in the Event Preferences Form.
4. Choose your member preferences in the Member Preferences Form.
5. Enter your contact details in the Email, Phone, and Zip Code fields.
6. Select your Date and Time preferences.
7. Provide your address.
8. Choose your member status.

## Field-by-Field Explanation
- **User Information Form** (`user_information_form`, `text`, required): Enter your name and other relevant information in this form.
  * **Member Name** (`member_name`, `text`, required): Enter your name as it appears on your membership card.
  * **Group Name** (`group_name`, `text`, required): Enter the name of the group you are registering with.
  * **Member Number** (`member_number`, `text`, required): Enter your member ID number.
- **Group Preferences Form** (`group_preferences_form`, `text`, required): Describe any specific preferences you have for the group.
- **Event Preferences Form** (`event_preferences_form`, `text`, required): Describe any preferences you have for events.
- **Email** (`email`, `email`, required): Enter your valid email address.
  * **Email address should be in the format example@example.com**
- **Phone** (`phone`, `text`, required): Enter your phone number.
- **Zip Code** (`zip_code`, `text`, required): Enter your postal zip code.
- **City** (`city`, `text`, required): Enter the name of the city you reside in.
- **State** (`state`, `text`, required): Enter the name of the state you reside in.
- **Country** (`country`, `text`, required): Enter the name of your country.
- **Date Preferences** (`date_preferences`, `date`, required): Select a date that suits you.
- **Time Preferences** (`time_preferences`, `time`, required): Select a time that suits you.
- **Address** (`address`, `note`, required): Enter your physical address.
  * **Note: Address should be formatted as 123 Main St, Anytown, USA**
- **Date of Joining** (`join_date`, `date`, required): Enter the date you joined the group.
- **Member Status** (`member_status`, `select_one`, required): Choose your member status.
  * **Select Active or Inactive to indicate your current status.**
- **Leave Date** (`leave_date`, `date`, optional): Enter the date you left the group (if applicable).
- **Submit** (`submit_button`, `text`, required): Click the submit button to finalize your registration.
