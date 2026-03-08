# legal_case_records_release_form - Help Guide
## Purpose
This form is used to release information related to legal cases and track their status.

## How To Complete This Form
To complete this form, select the correct type of case and authorized officer, fill in the optional fields if necessary, and ensure the information is accurate and up-to-date.

## Field-by-Field Explanation
• **case_info** (`case_info`, text, optional): This field is intended to provide a brief description or summary of the case.
• **case_id** (`case_id`, number, optional): Enter the ID number of the case.
• **case_number** (`case_number`, text, optional): Enter the case number, if applicable.
• **case_status** (`case_status`, select_one, optional): Select the current status of the case, which can be Pending, Open, or Closed.
• **case_type** (`case_type`, select_one, required): Select the type of case, which can be Domestic, Family, Civil, or Criminal.
• **case_priority** (`case_priority`, number, optional): Enter the priority level of the case, if applicable.
• **authorized_officer** (`authorized_officer`, select_one, required): Choose the authorized officer, which can be Judge, Prosecutor, Defender, or Clerk.
• **date_of_authorization** (`date_of_authorization`, date, optional): Enter the date the case was authorized.
• **time_of_authorization** (`time_of_authorization`, time, optional): Enter the time the case was authorized.
• **authorized_agent** (`authorized_agent`, text, optional): Enter the name or title of the authorized agent.
