# Open House Check Out Form - Help Guide

## Purpose

This form is used to collect information about open houses, including visitor details, contact information, and other relevant data.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the "Home Details" section with the relevant information about the property.
2. Provide the visitor's contact information in the "Visitors Details" section.
3. Add any comments or notes about the visit in the "Comments" section.
4. Indicate the lead generation status for the visit in the "Lead Generation" section.
5. Specify the follow-up status in the "Follow Up" section.
6. Enter the date and time of the visit in the "Date Of Visit" and "Time Of Visit" sections.
7. If applicable, indicate the lead generation status for additional follow-ups in the "Lead Generation 2", "Lead Generation 3", "Lead Generation 4", and "Lead Generation 5" sections.

## Field-by-Field Explanation

* **Home Details** (`home_details`, text, required: false): Enter a brief description of the property, including address and any notable features.
* **Visitors Details** (`visitors_details`, text, required: false): Provide the names and contact information of the visitors.
* **Visitors Contact Information** (`visitors_contact_info`, text, required: false): Enter the visitors' contact information, including phone numbers and email addresses.
* **Comments** (`comments`, text, required: false): Add any comments or notes about the visit.
* **Lead Generation** (`lead_generation`, select_one, required: false): Select 'Yes' if the visit generated a lead, and 'No' otherwise.
* **Follow Up** (`follow_up`, select_multiple, required: false): Choose all applicable follow-up statuses, such as 'Yes' for follow-up and 'No' for no follow-up.
* **Date Of Visit** (`date_of_visit`, date, required: false): Enter the date of the visit in the required format (e.g. YYYY-MM-DD).
* **Time Of Visit** (`time_of_visit`, time, required: false): Enter the time of the visit in the required format (e.g. 14:30).
* **Lead Generation 2** (`lead_generation_2`, select_one, required: false): Select 'Yes' if the visit generated a lead for the second follow-up, and 'No' otherwise.
* **Lead Generation 3** (`lead_generation_3`, select_multiple, required: false): Choose all applicable lead generation statuses for the third follow-up.
* **Lead Generation 4** (`lead_generation_4`, select_multiple, required: false): Select all applicable lead generation statuses for the fourth follow-up.
* **Lead Generation 5** (`lead_generation_5`, select_multiple, required: false): Select all applicable lead generation statuses for the fifth follow-up.
