<thinking>Is this form for case management intake purposes, likely used by social workers to gather information about clients' personal and financial situations, goals, and needs? I will review the fields to provide a clear and concise help guide for end-users. Let me ensure that the form does not duplicate any information already known to the social worker or the agency.</thinking>

# Case Management Intake Form Template - Help Guide
## Purpose
The Case Management Intake Form Template is designed to gather essential information about a client's personal and financial situation, goals, and needs. This form is used by social workers to gather data for case management services, such as housing assistance, employment services, healthcare access, and other forms of support.

## How To Complete This Form
1.  Review the form instructions and fields carefully before starting.
2.  Provide accurate and honest information about your personal and financial situation.
3.  Fill in the form completely, including all fields.
4.  If you have any questions or concerns, ask your social worker for clarification.

## Field-by-Field Explanation

*   **Case Management Intake Form (Page 1)** (`intake_header`, `note`, `required`): A brief summary of the form's purpose.
*   **Intake Date** (`intake_date`, `date`, `required`): The date you are filling out this form.
*   **Intake Worker Name** (`intake_worker`, `text`, `required`): The name of the social worker assisting you.
*   **Client Information** (`client_info`, `note`, `required`): A brief description of your personal details.
*   **Full Name** (`client_name`, `text`, `required`): Your legal name as it appears on your identification documents.
*   **Preferred Name** (`preferred_name`, `text`, optional): A nickname or name you prefer to be known by (if different from your full name).
*   **Date of Birth** (`date_of_birth`, `date`, `required`): Your date of birth in the format MM/DD/YYYY.
*   **Age** (`age`, `number`, `required`): Your age in years.
*   **Gender** (`gender`, `select_one`, `required`): Select one of the following options: Male, Female, Non-binary, Transgender, Other, or Prefer not to say.
*   **Race or Ethnicity** (`race_ethnicity`, `select_one`, optional): Select one of the following options: American Indian or Alaska Native, Asian, Black or African American, Hispanic or Latino, Native Hawaiian or Pacific Islander, White, Multiracial, Other, or Prefer not to say.
*   **Marital Status** (`marital_status`, `select_one`, `required`): Select one of the following options: Single, Married, Divorced, Separated, Widowed, Domestic partnership.
*   **Contact Information** (`contact_info`, `note`, optional): A note about how to contact you.
*   **Street Address** (`address`, `text`, `required`): Your current street address.
*   **City** (`city`, `text`, `required`): The city where you reside.
*   **State** (`state`, `text`, `required`): Your state or province of residence.
*   **ZIP Code** (`zip_code`, `text`, `required`): Your postal code.
*   **Primary Phone Number** (`phone_primary`, `text`, `required`): Your best contact number.
*   **Alternate Phone Number** (`phone_alternate`, `text`, optional): A secondary contact number (if available).
*   **Email Address** (`email`, `email`, optional): Your email address (if available).
*   **Current Housing Status** (`housing_status`, `select_one`, `required`): Select one of the following options: Own home, Rent apartment or house, Living with family, Living with friends, Shelter, Transitional housing, Homeless.
*   **Household Composition** (`household_composition`, `text`, `required`): A description of who lives with you.
*   **Number of Dependents** (`dependents`, `number`, optional): The number of people you are responsible for (if applicable).
*   **Emergency Contact Information** (`emergency_contact`, `note`, optional): A note about an alternative contact.
*   **Emergency Contact Name** (`emergency_name`, `text`, `required`): The full name of the emergency contact.
*   **Relationship to Client** (`emergency_relationship`, `text`, `required`): A description of your relationship to the emergency contact.
*   **Emergency Contact Phone** (`emergency_phone`, `text`, `required`): The phone number of the emergency contact.
*   **Presenting Problem or Reason for Referral** (`presenting_problem`, `text`, `required`): A description of why you are seeking case management services.
*   **Service History** (`service_history`, `note`, optional): A note about previous services received.
*   **Have You Received Case Management Before** (`previous_case_management`, `select_one`, `required`): Select one of the following options: Yes - currently, Yes - in the past, No - first time.
*   **Are You Working with Other Agencies** (`other_agencies`, `select_one`, `required`): Select one of the following options: Yes - multiple agencies, Yes - one other.
*   **List Other Agencies** (`other_agencies_list`, `text`, optional): A list of any other agencies you are working with (if applicable).
*   **Needs Assessment** (`needs_assessment`, `note`, optional): A note about areas where you need support.
*   **Services Needed** (`service_needs`, `select_multiple`, `required`): Select all services that apply from the following: Housing assistance, Employment services, Healthcare access, Mental health services, Substance abuse treatment, Financial assistance, Food assistance, Transportation, Childcare, Legal services, Education services, Disability services, Senior services, Domestic violence services, Other.
*   **Most Immediate Needs** (`immediate_needs`, `text`, `required`): A description of your top priority concerns.
*   **Income and Employment** (`income_employment`, `note`, optional): A note about your financial situation.
*   **Current Employment Status** (`employment_status`, `select_one`, `required`): Select one of the following options: Employed full-time, Employed part-time, Self-employed, Unemployed - seeking work, Unemployed - not seeking, Student, Retired, Disabled, Homemaker.
*   **Total Monthly Household Income** (`monthly_income`, `select_one`, `required`): Select one of the following options: No income, Under 500, 500 to 1000, 1000 to 2000, 2000 to 3000, 3000 to 5000, Over 5000.
*   **Sources of Income** (`income_sources`, `select_multiple`, `required`): Select all sources of income that apply from the following: Employment, Self-employment, SSI or SSDI, TANF, Child support, Alimony, Retirement benefits, Veterans benefits, Unemployment, Other public assistance, Family or friends, Other.
*   **Health Insurance Status** (`insurance_status`, `select_one`, `required`): Select one of the following options: Private insurance, Medicaid, Medicare, VA benefits, State funded, Uninsured.
*   **Barriers to Self-Sufficiency** (`barriers`, `select_multiple`, `required`): Select all barriers you are currently facing from the following: None, Lack of education, Lack of job skills, Criminal record, Health problems, Mental health issues, Substance abuse, Domestic violence, Lack of childcare, Lack of transportation, Housing instability, Language barrier, Disability, Other.
*   **Client Strengths and Resources** (`strengths`, `text`, `required`): A description of your positive factors.
*   **Client Goals** (`goals`, `text`, `required`): A description of what you want to achieve.
*   **Consent and Authorization** (`consent`, `select_one`, `required`): Select one of the following options: Yes - I consent, No - I do not consent.
*   **I Consent to Receive Case Management Services** (`consent_services`, `select_one`, `required`): Select one of the following options: Yes - I consent, No - I do not consent.
*   **I Authorize Information Release as Needed** (`consent_release`, `select_one`, `required`): Select one of the following options: Yes - I authorize, No - I do not authorize.
*   **Client Signature Date** (`client_signature_date`, `date`, `required`): The date you sign this form.
*   **Caseworker Signature Date** (`worker_signature_date`, `date`, `required`): The date the caseworker signs this form.
