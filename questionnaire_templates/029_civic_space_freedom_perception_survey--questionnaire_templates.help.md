# Civic Space Freedom Perception Survey - Help Guide
## Purpose
This guide will walk you through the process of completing the Civic Space Freedom Perception Survey form. The form is designed to gather information on the perception of civic space freedom, which is essential for understanding the current state of civic rights and freedoms in a particular location.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by selecting the correct affiliation from the options provided (NGO, Researcher, Activist, Citizen, or Other). This will help us understand who you are and why you are filling out this form.
2. Enter the location that was surveyed (city, district, or neighborhood).
3. Rate your perception of freedom to assemble and speak on a scale from 1 to 5, with 1 being very restricted and 5 being very free. This will give us an idea of how you feel about the freedom of expression in the area.
4. If you have reported any incidents restricting civic space, provide a brief description of what happened.
5. Describe any safety concerns you have for civic actors in the area.
6. If you believe that the area needs support to improve civic space, select all the options that apply (Legal support, Capacity building, Funding, or Advocacy).
7. Indicate whether you are willing to report violations of civic space (yes or no).
8. Provide any recommendations to expand civic space in the area (practical steps or policy suggestions).
9. If you consent to follow-up contact, provide your email address (if yes).
10. Finally, enter the current date in the submission date field.

## Field-by-Field Explanation

* **Respondent Affiliation** (`respondent_affiliation`, `select_one`, required: false): Choose the category that best describes your affiliation with the area or the issue of civic space. This could be an NGO, Researcher, Activist, Citizen, or Other.
* **Location** (`location`, `text`, required: true): Enter the name of the city, district, or neighborhood that was surveyed.
* **Perception of Freedom** (`perception_of_freedom`, `number`, required: true): Rate your perception of freedom to assemble and speak on a scale from 1 to 5.
* **Incidents Reported** (`incidents_reported`, `text`, required: false): If you have reported any incidents restricting civic space, provide a brief description of what happened.
* **Safety Concerns** (`safety_concerns`, `text`, required: false): Describe any safety concerns you have for civic actors in the area.
* **Support Needed** (`support_needed`, `select_multiple`, required: false): If you believe the area needs support to improve civic space, select all the options that apply (Legal support, Capacity building, Funding, or Advocacy).
* **Willingness to Report** (`willingness_to_report`, `select_one`, required: false): Indicate whether you are willing to report violations of civic space (yes or no).
* **Recommendations** (`recommendations`, `text`, required: false): Provide any recommendations to expand civic space in the area (practical steps or policy suggestions).
* **Consent for Follow-up** (`consent_for_follow_up`, `select_one`, required: false): If you consent to follow-up contact, provide your email address (if yes).
* **Submission Date** (`submission_date`, `date`, required: true): Enter the current date.
