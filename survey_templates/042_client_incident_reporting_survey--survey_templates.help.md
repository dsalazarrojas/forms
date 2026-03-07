### <thinking>...thinking>

We are considering implementing this form for client incident reporting. To ensure we make the right design decisions, we want to gather feedback from the team on this proposed form. Before we proceed, let's discuss the form's purpose, how it will be used, and whether it's a good fit for our organization.

The form is intended to be a standardized way to collect information about incidents that occur within the organization. It will help us understand the nature of incidents, identify trends, and make data-driven decisions to prevent similar incidents from happening in the future.

The form will be used by employees, clients, and possibly contractors or visitors who encounter an incident while on our premises. We need to ensure that the form is clear, easy to understand, and requires all relevant information to make it actionable for our team.

Let's discuss the form design and functionality before finalizing the implementation. Your feedback is valuable in making sure this form effectively achieves its purpose without causing undue complexity or duplication.

### # Client Incident Reporting Survey - Help Guide

## Purpose

The Client Incident Reporting Survey is a form designed to collect detailed information about incidents that occur within the organization. This survey aims to help our team understand what happened, what could have been done differently, and how to prevent similar incidents from happening in the future.

## How To Complete This Form

1. Fill out the form completely and accurately, providing as much detail as possible.
2. Make sure to answer all required fields, indicated by an asterisk (*).
3. If you are unsure about any question or field, please provide a brief explanation or comment in the corresponding field.
4. If you have additional information or attachments that support your report, you can attach them to the form.

## Field-by-Field Explanation

### 1. **First Name**: 
    * `reporter_first_name`: Enter your legal first name.
    * Type: `text`
    * Required: `true`

### 2. **Last Name**: 
    * `reporter_last_name`: Enter your legal last name.
    * Type: `text`
    * Required: `true`

### 3. **Email Address**: 
    * `reporter_email`: Enter your primary contact email.
    * Type: `email`
    * Required: `true`

### 4. **Phone Number**: 
    * `reporter_phone`: Enter your best contact number.
    * Type: `text`
    * Required: `true`

### 5. **Your Role**: 
    * `reporter_role`: Select your role or relationship with the organization (Client, Employee, Contractor, Visitor, Vendor, Other).
    * Type: `select_one`
    * Required: `true`

### 6. **Date of Incident**: 
    * `incident_date`: Enter the date the incident occurred (YYYY-MM-DD format).
    * Type: `date`
    * Required: `true`

### 7. **Time of Incident**: 
    * `incident_time`: Enter the time the incident occurred (HH:MM AM/PM format).
    * Type: `time`
    * Required: `true`

### 8. **Location of Incident**: 
    * `incident_location`: Enter the location where the incident occurred.
    * Type: `text`
    * Required: `true`

### 9. **Type of Incident**: 
    * `incident_type`: Select the category of incident (Accident or Injury, Property Damage, Security Incident, Harassment or Discrimination, Theft or Vandalism, Medical Emergency, Safety Hazard, Service Disruption, Data Breach, Other).
    * Type: `select_one`
    * Required: `true`

### 10. **Detailed Description of Incident**: 
    * `incident_description`: Provide a detailed description of what happened.
    * Type: `text`
    * Required: `true`

### 11. **Persons Involved**: 
    * `persons_involved`: Enter the names and roles of people involved in the incident.
    * Type: `text`
    * Required: `true`

### 12. **Witnesses Present**: 
    * `witnesses_present`: Select whether there were witnesses present (True, False).
    * Type: `select_one`
    * Required: `true`

### 13. **Witness Names and Contact Information**: 
    * `witness_names`: If there were witnesses, enter their names and contact information (optional).
    * Type: `text`
    * Required: `false`

### 14. **Injuries Sustained**: 
    * `injuries_sustained`: Select the injury status (No Injuries, Minor Injuries, Moderate Injuries, Severe Injuries, Fatal).
    * Type: `select_one`
    * Required: `true`

### 15. **Description of Injuries**: 
    * `injury_description`: If injuries occurred, provide a description (optional).
    * Type: `text`
    * Required: `false`

### 16. **Was Medical Treatment Required?**: 
    * `medical_treatment`: Select whether medical treatment was required (No Treatment Needed, First Aid Only, Medical Attention, Hospitalization, Emergency Services Called).
    * Type: `select_one`
    * Required: `true`

### 17. **Was There Property Damage?**: 
    * `property_damage`: Select whether there was property damage (No Damage, Minor Damage, Moderate Damage, Severe Damage, Total Loss).
    * Type: `select_one`
    * Required: `true`

### 18. **Description of Damage**: 
    * `damage_description`: If damage occurred, provide a description (optional).
    * Type: `text`
    * Required: `false`

### 19. **Estimated Cost of Damage**: 
    * `damage_estimate`: If known, estimate the cost of damage (optional).
    * Type: `number`
    * Required: `false`

### 20. **Immediate Actions Taken**: 
    * `immediate_actions`: Enter what actions were taken immediately following the incident.
    * Type: `text`
    * Required: `true`

### 21. **Who Was Notified?**: 
    * `notifications_made`: Enter who was notified about the incident (Management, Police, etc.).
    * Type: `text`
    * Required: `true`

### 22. **Contributing Factors**: 
    * `contributing_factors`: Enter the contributing factors that led to the incident (optional).
    * Type: `text`
    * Required: `false`

### 23. **Suggested Preventive Measures**: 
    * `preventive_measures`: Enter suggested preventive measures to avoid similar incidents (optional).
    * Type: `text`
    * Required: `false`

### 24. **Photo Evidence**: 
    * `photos_available`: Select whether you have photo evidence (True, False).
    * Type: `select_one`
    * Required: `false`

### 25. **Other Documentation**: 
    * `documentation_attached`: Select whether other documentation is available (True, False).
    * Type: `select_one`
    * Required: `false`

### 26. **Have There Been Similar Incidents Before?**: 
    * `prior_similar_incidents`: Select whether there have been similar incidents before (True, False, Not Sure).
    * Type: `select_one`
    * Required: `true`

### 27. **Is Follow-Up Required?**: 
    * `follow_up_required`: Select whether follow-up is required (True, False, Not Sure).
    * Type: `select_one`
    * Required: `true`

### 28. **Suggested Follow-Up Actions**: 
    * `follow_up_suggestions`: Enter suggested follow-up actions (optional).
    * Type: `text`
    * Required: `false`

### 29. **Should This Report Be Kept Confidential?**: 
    * `report_confidentiality`: Select whether the report should be kept confidential (Yes, Confidential, No, May Be Shared).
    * Type: `select_one`
    * Required: `true`

### 30. **Confirm Information Accuracy**: 
    * `information_accuracy`: Confirm that all information is accurate (I Confirm, I Do Not Confirm).
    * Type: `select_one`
    * Required: `true`

### 31. **Report Date**: 
    * `report_date`: Enter the date the report was completed (YYYY-MM-DD format).
    * Type: `date`
    * Required: `true`

Please provide feedback on this form and guide. Is there anything you'd like to add or change?
