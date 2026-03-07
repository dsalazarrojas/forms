<thinking>
We need to ensure that the form's purpose is clear and the onboarding process is straightforward for the end-users. The form is designed to collect information from makeup artists who want to join the platform. We need to verify that the user has provided accurate and relevant information. The form will be used to onboard artists who can work on the platform, and we need to ensure that we don't duplicate efforts or onboard artists who are not qualified or available for work. We also need to keep the form as simple and user-friendly as possible.
</thinking>

# Makeup Artist Onboarding Form - Help Guide
## Purpose
This form is used to onboard makeup artists who want to join the platform. It collects essential information about the artist's details, contact, availability, and work experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with your artist information, contact details, and availability.
2. Select your relevant work experience and experience levels in Photoshop, with makeup artist tools, and photography.
3. Choose your preferred work location and payment rate.
4. Select your available work schedule.
5. Finally, provide your end date of availability.

## Field-by-Field Explanation
- **Artist Information**: (`artist_info`, `text`, required) Enter your artist name.
- **Contact Information**: (`contact_info`, `text`, required) Enter your contact details.
- **Availability**: (`availability`, `date`, required) Select your availability date.
- **Work Experience**: (`work_experience`, `select_one`, required) Select your level of work experience (High School, College, Some College, Bachelor's Degree, Master's Degree).
- **Experience in Photoshop**: (`experience_photoshop`, `select_one`, required) Select your experience level in Photoshop (Basic, Intermediate, Advanced, Expert).
- **Experience with Makeup Artist Tools**: (`experience_tools`, `select_one`, required) Select your experience level with makeup artist tools (None, Brushes, Waxes, Makeup machines).
- **Experience with Photography**: (`experience_photography`, `select_one`, required) Select your experience level with photography (None, Basic, Intermediate, Advanced).
- **Work Location**: (`work_location`, `select_one`, required) Select your preferred work location (Online, In-store, Studio).
- **Payment Rate**: (`payment_rate`, `select_one`, required) Select your payment rate ($20/hour, $30/hour, $40/hour).
- **Work Schedule**: (`work_schedule`, `select_multiple`, required) Select your available work schedule (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday).
- **End Date**: (`end_date`, `date`, required) Select your end date of availability.
