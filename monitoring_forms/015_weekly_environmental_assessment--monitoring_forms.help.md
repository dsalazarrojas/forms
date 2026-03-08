<thinking>
This guide is intended for users to complete a weekly environmental assessment form. It's used to collect feedback on site conditions, hazards, sustainability metrics, and other relevant information. The form is designed to be completed by site visitors or users and is an optional field for submitters. It is assumed that users understand the general purpose of the form and are familiar with the basic concepts of site conditions, hazards, and sustainability.
</thinking>

# Weekly Environmental Assessment - Help Guide
## Purpose
The Weekly Environmental Assessment form is used to collect information on site conditions, hazards, and sustainability metrics to support environmental monitoring and management at the site.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the current site conditions from the options provided (Good, Fair, Poor).
2. If applicable, list any hazards present at the site using the options provided (Hazard 1, Hazard 2, Hazard 3).
3. Enter your sustainability metrics (e.g., water usage, energy consumption) using the provided input field.
4. Enter your overall sustainability score, out of a possible 10.
5. If relevant, indicate the date of your site visit.
6. Add any comments about your experience at the site.
7. Provide your email address and phone number for contact purposes.
8. Select the name of the person who submitted this assessment.

## Field-by-Field Explanation
* **Site Conditions**: 
  • <label> Site Conditions</label> (`site_conditions`, `select_one`, required: false)
    Select the current site conditions (Good, Fair, Poor).
* **Hazards**: 
  • <label> Hazards</label> (`hazards`, `select_multiple`, required: false)
    List any hazards present at the site using the options provided (Hazard 1, Hazard 2, Hazard 3).
* **Sustainability Metrics**: 
  • <label> Sustainability Metrics</label> (`sustainability_metrics`, `number`, required: false)
    Enter your sustainability metrics (e.g., water usage, energy consumption).
* **Sustainability Score**: 
  • <label> Sustainability Score</label> (`sustainability_score`, `number`, required: false)
    Enter your overall sustainability score, out of a possible 10.
* **Site Visitation**: 
  • <label> Site Visitation</label> (`site_visitation`, `date`, required: false)
    If relevant, indicate the date of your site visit.
* **Comments**: 
  • <label> Comments</label> (`comments`, `note`, required: false)
    Add any comments about your experience at the site.
* **Email**: 
  • <label> Email</label> (`email`, `email`, required: false)
    Provide your email address for contact purposes.
* **Phone**: 
  • <label> Phone</label> (`phone`, `text`, required: false)
    Enter your phone number for contact purposes.
* **Submitter**: 
  • <label> Submitter</label> (`submitter`, `select_one`, required: false)
    Select the name of the person who submitted this assessment (John, Jane, Jim).
