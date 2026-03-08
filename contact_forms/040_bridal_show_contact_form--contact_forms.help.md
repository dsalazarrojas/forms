<thinking>
This form is designed to capture information from bridal show attendees to help vendors tailor their services to the attendees' needs. The form should not be duplicated in multiple submissions from the same attendee.
</thinking>

# Bridal Show Contact Form - Help Guide
## Purpose
The Bridal Show Contact Form is designed to gather information from bridal show attendees to better understand their needs and preferences. By completing this form, you will help vendors at the show tailor their services to cater to your requirements.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your information, including your name, email address, and contact phone number.
2. Choose your role in the wedding (e.g. Bride-to-be, Groom-to-be, etc.).
3. Enter the name of the bridal show you attended.
4. Select the date of your wedding.
5. Choose how long until your wedding.
6. If desired, enter your estimated number of guests, wedding location, and wedding budget range.
7. Select the types of services that interest you from our vendors.
8. List any vendors you interacted with at the show.
9. Share any interests or preferences that caught your attention.
10. Indicate your current wedding planning stage.
11. Enter any information about your wedding party.
12. If you're interested in wedding planning services, let us know.
13. Choose how you'd like to be followed up (e.g. email, phone call, etc.).
14. Provide any additional information or questions you have.

## Field-by-Field Explanation
- **Your Name** (`attendee_name`, `text`, required): Please enter your full name.
- **Email Address** (`email_address`, `email`, required): Enter your email address where you can be reached.
- **Phone Number** (`phone_number`, `text`, required): Enter your phone number where you can be reached.
- **Attendee Role** (`attendee_role`, `select_one`, required): Choose your role relative to the wedding (e.g. Bride-to-be, Groom-to-be, etc.).
- **Bridal Show Name** (`show_name`, `text`, required): Enter the name of the bridal show you attended.
- **Show Date** (`show_date`, `date`, required): Enter the date of the bridal show you attended.
- **Wedding Date** (`wedding_date`, `date`, required): Enter the date of your wedding.
- **Wedding Length** (`engagement_length`, `select_one`, required): Choose how long until your wedding.
- **Wedding Location** (`wedding_location`, `text`, false): If desired, enter your wedding location.
- **Expected Number of Guests** (`guest_count`, `select_one`, false): If desired, estimate the number of guests for your wedding.
- **Wedding Style** (`wedding_style`, `select_one`, false): If desired, choose the style of your wedding.
- **Wedding Budget** (`wedding_budget`, `select_one`, false): If desired, enter your approximate budget for the wedding.
- **Vendors Interested** (`vendors_interested`, `select_multiple`, false): Select the types of services that interest you from our vendors.
- **Vendors Visited** (`booth_visited`, `text`, false): List any vendors you interacted with at the bridal show.
- **Main Interests or Preferences** (`interests_noted`, `text`, false): Share any interests or preferences that caught your attention.
- **Planning Stage** (`planning_stage`, `select_one`, false): Indicate how far along you are in the wedding planning process.
- **Wedding Party Information** (`wedding_party_info`, `number`, false): Enter any information about your wedding party.
- **Planning Help Needed** (`planning_help_needed`, `select_one`, false): If you're interested in wedding planning services, let us know.
- **Follow Up Preference** (`follow_up_preference`, `select_multiple`, true): Choose how you'd like to be followed up (e.g. email, phone call, etc.).
- **Additional Information or Questions** (`additional_info`, `text`, false): Provide any additional information or questions you have.
