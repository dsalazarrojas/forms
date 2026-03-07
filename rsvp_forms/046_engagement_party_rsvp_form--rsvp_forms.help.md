<thinking>
We are creating a help guide for the "engagement_party_rsvp_form" form, which is used to collect RSVP information from guests attending an engagement party. This form is likely to be used by the party organizers or hosts to gather essential details from guests about their attendance, contact information, and any special messages they may want to share.
We will ensure that the form fields are clearly explained, making it easy for end-users to understand and complete the form accurately. This will prevent any misunderstandings or misinterpretation of the form's purpose and fields.
</thinking>

# engagement_party_rsvp_form - Help Guide
## Purpose
The "engagement_party_rsvp_form" is a simple form designed to collect information from guests attending an engagement party. It includes fields for RSVP status, guest details, and contact information.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your guest name in the "Guest Name" field.
2.  Enter the date you would like to RSVP for in the "RSVP Date" field.
3.  Enter the date of the event you are RSVPing for in the "Event Date" field.
4.  Provide the number of guests you will be bringing with you in the "Guest Count" field.
5.  If you have any additional contact information, enter it in the "Contact Info" field.
6.  If you have any special message for the hosts, type it in the "Message" field.
7.  Select your RSVP status by choosing between "RSVP'ing" or "Not RSVP'ing" in the "RSVP Status" field.
8.  If you have a valid email address, enter it in the "Email" field. This will help the hosts stay in touch with you.

## Field-by-Field Explanation
- **Guest Name** (`guest_name`, text, required/optional): Enter your name so that we can keep track of who's attending.
- **RSVP Date** (`rsvp_date`, date, required/optional): Choose a date you'd like to RSVP for.
- **Event Date** (`event_date`, date, required/optional): Enter the date of the event you're RSVPing for.
- **Guest Count** (`guest_count`, number, required/optional): Tell us how many guests are coming with you.
- **Contact Info** (`contact_info`, text, required/optional): Enter any contact information you'd like to share with the hosts.
- **Message** (`message`, note, required/optional): Write a message to the hosts if you have something to share.
- **RSVP Status** (`rsvp_status`, select_one, required): Choose your RSVP status: `RSVP'ing` or `Not RSVP'ing`.
- **Email** (`email`, email, required/optional): Enter a valid email address to help the hosts stay in touch with you.
