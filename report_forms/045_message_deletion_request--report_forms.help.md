# <string> - Help Guide
## Purpose
This form is designed to collect information from users for reporting purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the **Title** field with a descriptive name for your report.
2. On **Page 1**, provide a message to describe the report in a few words.
3. On **Reason**, provide a brief explanation for the removal or issue.
4. On **Description**, give a detailed description of the incident, problem, or event.
5. Enter the **Submitter**'s name.
6. Enter the **Email** of the submitter.
7. Enter the **Phone** number of the submitter.
8. Add any additional **Notes** for the submitter.
9. Choose whether the submitter agrees to the report by selecting **Agreement** as 'Yes' or 'No'.
10. Enter the **Prophets ID** number (if applicable).
11. Enter the **Prophets goals** number (if applicable).
12. Finally, add your **Signature** by selecting a time stamp.

## Field-by-Field Explanation
- **Title** (`title`, string, required): A descriptive name for your report.
  This field is required as it helps identify the report.
- **Page 1** (`page_1`, text, required): A brief message to describe your report.
  Please provide a few words to summarize the report.
- **Message** (`message_to_delete`, text, required): A brief explanation for the removal or issue.
  This field helps clarify the reason for the report.
- **Reason** (`reason_for_removal`, text, required): A detailed description of the incident, problem, or event.
  Please provide a clear and concise explanation of the issue.
- **Description** (`description`, text, required): A detailed description of the incident, problem, or event.
  This field is required to provide a clear understanding of the issue.
- **Submitter** (`submitter`, text, required): The name of the submitter.
  Please enter the name of the person submitting the report.
- **Email** (`submitter_email`, email, required): The email of the submitter.
  Enter the email of the submitter, as it will be used to contact them.
- **Phone** (`submitter_phone`, text, required): The phone number of the submitter.
  Enter the phone number of the submitter.
- **Notes** (`submitter_notes`, text, required): Any additional information for the submitter.
  This field is optional but can be useful for additional context.
- **Agreement** (`submitter_agreement`, select_multiple, optional): Whether the submitter agrees to the report.
  Please select 'Yes' if you agree to the report.
- **Prophets ID** (`prophets_id`, number, optional): A Prophets ID number (if applicable).
  This field is only required if it's relevant to your report.
- **Prophets goals** (`goals`, number, optional): A Prophets goals number (if applicable).
  This field is only required if it's relevant to your report.
- **Signature** (`submitter_signature`, time, required): A timestamp for the submitter's signature.
  Please select a time stamp to complete the form. 

Note: This is a generated help guide, the fields and their purpose might change over time, it's recommended to update this guide accordingly.
