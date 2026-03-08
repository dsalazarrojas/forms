# Infrastructure Security Risk Assessment - Help Guide
## Purpose
This form is used to identify and document the security risks associated with an infrastructure site. It captures relevant site information, risk factors, and remediation plans to ensure that the site's security status is accurately evaluated.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Site Name, Site Description, Site Address, Contact Name, Contact Email, and Contact Phone fields with the relevant information about the site being assessed.
2. Select the correct Site Status and Site Type from the provided options.
3. Choose the risk factors that apply to the site by selecting the "Yes" option for each relevant factor.
4. Enter a brief description for each selected risk factor in the Risk Factor Descriptions field.
5. Enter an Overall Risk Score between 1 and 10.
6. Select the Risk Level (Low, Moderate, or High) based on the Overall Risk Score.
7. Enter the Next Review Date and Time for the site.
8. Enter the Auditor's Name, Auditor Location, and Auditor Contact Information.
9. Enter any additional Recommendations and Remediation Plans for the site.
10. Finally, review and submit the form for review.

## Field-by-Field Explanation

* **Site Id** (`site_id`, `number`, required): This field captures the unique identifier of the site being assessed.
* **Site Evaluations** (`site_evaluations`, `text`, required): This field captures any previous site evaluations or comments that may be relevant to the risk assessment.
* **Risk Factors** (`risk_factors`, `select_multiple`, required): Select the risk factors that apply to the site by choosing "Yes" for each applicable factor.
* **Risk Factor Scores** (`risk_factor_scores`, `number`, required): Enter a score between 1 and 10 for each selected risk factor.
* **Risk Factor Descriptions** (`risk_factor_descriptions`, `text`, required): Enter a brief description for each selected risk factor.
* **Overall Risk Score** (`overall_risk_score`, `number`, required): Enter the Overall Risk Score, which is the sum of all risk factor scores divided by the number of risk factors selected.
* **Risk Level** (`risk_level`, `select_one`, required): Select the Risk Level (Low, Moderate, or High) based on the Overall Risk Score.
* **Risk Level Descriptions** (`risk_level_descriptions`, `text`, required): Enter a brief description of the selected Risk Level.
* **Recommendations** (`recommendations`, `text`, optional): Enter any additional recommendations or suggestions for improving the site's security.
* **Remediation Plans** (`remediation_plans`, `text`, optional): Enter any remediation plans or actions that need to be taken to address the identified risks.
* **Next Review Date** (`next_review_date`, `date`, required): Enter the date for the next review of the site.
* **Next Review Time** (`next_review_time`, `time`, optional): Enter the time for the next review of the site.
* **Auditor Name** (`auditor_name`, `text`, required): Enter the name of the auditor who performed the risk assessment.
* **Auditor Location** (`auditor_location`, `text`, optional): Enter the location of the auditor who performed the risk assessment.
* **Auditor Contact Info** (`auditor_contact_info`, `text`, optional): Enter the contact information of the auditor who performed the risk assessment.
* **Site Name** (`site_name`, `text`, required): Enter the name of the site being assessed.
* **Site Description** (`site_description`, `text`, required): Enter a brief description of the site being assessed.
* **Site Address** (`site_address`, `text`, required): Enter the address of the site being assessed.
* **Contact Name** (`contact_name`, `text`, required): Enter the name of the contact person for the site.
* **Contact Email** (`contact_email`, `email`, required): Enter the email address of the contact person for the site.
* **Contact Phone** (`contact_phone`, `text`, required): Enter the phone number of the contact person for the site.
* **Site Status** (`site_status`, `select_one`, required): Select the site's status (Active or Inactive).
* **Site Type** (`site_type`, `select_multiple`, required): Select the site type (yes) by choosing "Yes" for each applicable type.
* **Site Subtype** (`site_subtype`, `select_multiple`, required): Select the site subtype (yes) by choosing "Yes" for each applicable subtype.
* **Site Status Notes** (`site_status_notes`, `text`, optional): Enter any additional notes about the site's status.

Tips

* Review the form carefully before submitting it.
* Ensure that all required fields are completed before submitting.
* If you are unsure about any field, you can ask your supervisor or auditor for guidance.
* This form is intended to be filled out by personnel with security clearance, so please only fill it out if you have the necessary clearance.
