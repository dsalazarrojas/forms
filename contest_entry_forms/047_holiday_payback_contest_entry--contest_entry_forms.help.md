<thinking>

To create this form, we need to consider a few things:
- We're building a form for a contest where participants can enter a "Holiday Payback Contest" to win prizes. 
- The form will ask for basic information about the participant such as name, email, and phone number. 
- The form will require a participant story, a date and time entry, and will give the participant a choice of prize types to select from. 
- We don't want to require the participant to enter this form more than once, so we will make the form non-duplicable.
</thinking>

# Holiday Payback Contest Entry - Help Guide
## Purpose
The Holiday Payback Contest Entry form is for participants to submit their entry for the holiday contest. This form gathers information about the participant, their story, and their entry details.
## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the "Participant Story" field with a brief description about your holiday experience.
2. Enter your "Name" and "Email" to receive further instructions on how to proceed.
3. If you have a phone number, please enter it in the "Phone" field.
4. Select the type of prize you'd like to win in the "Prize Won" field. Options are: "None", "Gift Card", "Trip", "Experience".
5. Enter the name of the campaign or event that you're entering, in the "Campaign Name" field (this helps us track which campaign you're associated with).
6. Enter the name of the business associated with this entry, in the "Business Name" field (this helps us track which business is associated with this entry).
7. Finally, choose the date and time of your entry in the "Entry Date" and "Entry Time" fields.

## Field-by-Field Explanation
- **Participant Story** (`participant_story`, text, required): Enter a brief description about your holiday experience.
  - This field is where you can share your story about why you deserve a prize. Keep it short and sweet!
- **Name** (`name`, text, optional): Enter your name to help us contact you.
  - This field is optional, but we encourage you to fill it in so we can get in touch with you.
- **Email** (`email`, email, optional): Enter your email address to receive further instructions.
  - This field helps us contact you about your entry, so please fill it in so we can get in touch with you.
- **Phone** (`phone`, text, optional): Enter your phone number to receive further instructions.
  - This field is optional, but it's a great way for us to quickly contact you.
- **Entry Date** (`entry_date`, date, optional): Select the date of your entry.
  - Choose the date you entered this form on.
- **Entry Time** (`entry_time`, time, optional): Select the time of your entry.
  - This field helps us track when you submitted your entry.
- **Prize Won** (`prize_won`, select_one, optional): Select the type of prize you'd like to win.
  - Choose one of the options: None, Gift Card, Trip, Experience.
- **Campaign Name** (`campaign_name`, text, optional): Enter the name of the campaign or event associated with this entry.
  - This field helps us track which campaign this entry is associated with.
- **Business Name** (`business_name`, text, optional): Enter the name of the business associated with this entry.
  - This field helps us track which business is associated with this entry.

## Tips
- Make sure to fill in all the required fields to ensure your entry is complete.
- If you have any issues or concerns, don't hesitate to reach out to us for assistance.
