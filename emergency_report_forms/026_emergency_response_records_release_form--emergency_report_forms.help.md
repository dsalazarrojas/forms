# emergency_response_records_release_form - Help Guide
## Purpose
The emergency response records release form is used to collect information from patients or their authorized representatives to determine the reason for sharing their medical information in emergency response scenarios.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Select the reason for sharing your medical information:
    *   Choose one of the options provided:
        - Emergency
        - Medical
        - Other (if none of the above apply)
2.  If you selected "Other", please provide more details in the text field below.
3.  Specify how you would like your information to be shared:
    *   Choose one of the options provided:
        - Emergency responders
        - Emergency Department
        - Other (if none of the above apply)
4.  If you selected "Other", please specify the name of the recipient in the text field below.
5.  Read and understand the consent statement and select "True" to indicate your consent to share your medical information.

## Field-by-Field Explanation
* **What is the reason for sharing your medical information?** (`emergency_response_records_release_form_first_section`, `select_one`, required: false)
    *   This field allows you to select the reason for sharing your medical information. Choose one of the options provided: Emergency, Medical, or Other.
* **If other, please specify** (`emergency_response_records_release_form_other_reason`, `text`, required: false)
    *   If you selected "Other" in the above field, please provide more details in this text field.
* **How would you like your information to be shared?** (`emergency_response_records_release_form_contact_method`, `select_one`, required: false)
    *   This field allows you to specify how you would like your medical information to be shared. Choose one of the options provided: Emergency responders, Emergency Department, or Other.
* **If other, please specify the name of the recipient** (`emergency_response_records_release_form_other_contact_method`, `text`, required: false)
    *   If you selected "Other" in the above field, please provide the name of the recipient in this text field.
* **I understand the above and consent to share my medical information** (`emergency_response_records_release_form_consent`, `select_one`, required: false)
    *   This field is a confirmation of your consent to share your medical information. Select "True" to indicate your consent.
* **Additional comments** (`emergency_response_records_release_form_additional_comments`, `note`, required: false)
    *   If you have any additional comments or concerns, please provide them in this text field.
