<thinking>
This form appears to be a daily security perimeter check form, which is likely used by security personnel to document their daily inspections and checks. Before proceeding, I'll review the form fields to ensure that the instructions are accurate and helpful. 

Based on the form YAML, it seems that the form is divided into multiple pages, with some fields being required and others optional. The required fields include "security_level", "contact_person", "contact_phone", and "contact_email", which are all likely used to record important information about the security team member performing the check and their contact information.

The form includes fields for morning, afternoon, and evening checks, which may be used to record specific details about these checks. The "select_multiple" field on page 2 suggests that the user may be able to choose multiple options for this check, while the "select_one" field on page 5 implies that the user may only choose one option. The "date" field on page 4 seems to be used to record the date of the check.

The form also includes free text fields for notes and additional information, which suggests that users may need to provide some free text responses. It appears that these fields are not required, but may be optional for users to provide additional context.

Overall, this form is likely used by security personnel to record their daily activities, checks, and findings, and to document their contact information. To ensure accurate and complete responses, users should review each field carefully and provide the required information.

</thinking>

# Daily Security Perimeter Check - Help Guide
## Purpose
This form is used by security personnel to document their daily security perimeter checks. It includes fields for recording morning, afternoon, and evening checks, as well as contact information for the security team member performing the check.

## How To Complete This Form
1. Begin by selecting the relevant options for the morning check on page 2.
2. Record the time of the afternoon check on page 3.
3. If necessary, record the date of the afternoon check on page 4.
4. Select the option for the evening check on page 5.
5. Provide any additional notes or information on page 6.
6. Enter your security level and contact information on pages 7-10.

## Field-by-Field Explanation

* **Morning Check (page 1)** (`morning_check`, `text`, required): Record the details of the morning check.
* **Morning Check 1 (page 2)** (`morning_check_1`, `select_multiple`, required): Select all relevant options for the morning check.
* **Afternoon Check (page 3)** (`afternoon_check`, `time`, required): Record the time of the afternoon check.
* **Afternoon Check 1 (page 4)** (`afternoon_check_1`, `date`, required): Record the date of the afternoon check, if necessary.
* **Evening Check (page 5)** (`evening_check`, `select_one`, required): Select the option for the evening check.
* **Notes (page 6)** (`notes`, `note`, optional): Provide any additional notes or information.
* **Security Level (page 7)** (`security_level`, `text`, required): Enter your current security level.
* **Contact Person (page 8)** (`contact_person`, `text`, required): Enter the name of the contact person.
* **Contact Phone (page 9)** (`contact_phone`, `text`, required): Enter the contact phone number.
* **Contact Email (page 10)** (`contact_email`, `text`, required): Enter the contact email address.

## Tips
* Be sure to review each field carefully and provide the required information.
* Use the select_multiple field on page 2 to select all relevant options for the morning check.
* Use the date field on page 4 only if necessary.
* Use the select_one field on page 5 to select one option for the evening check.
* Use the free text fields to provide any additional notes or information.
