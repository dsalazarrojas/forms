# defect_type_selection_survey - Help Guide
## Purpose

The "defect_type_selection_survey" form is used to collect information about defects reported. This form helps to categorize defects into different types and gather relevant details for further analysis and resolution.

## How To Complete This Form

1. Select the **Defect Type** from the provided options: crack, dimple, indent, laceration, or puncture.
2. Enter the **Defect Location** where the defect was found.
3. Choose the **Defect Pattern**: random, systemic, human, or unknown.
4. Select the **Severity** of the defect: low, medium, or high.
5. Enter any **Comments** regarding the defect.
6. Enter the **Contact Person** responsible for the defect.
7. Enter the **Contact E-mail** for the contact person.
8. Enter the **Contact Phone** number for the contact person (optional).
9. Enter the **Location** where the defect occurred.
10. Enter the **Department** responsible for the defect.
11. Enter the **Date Reported** when the defect was noticed.
12. Enter the **Time Reported** when the defect was noticed.
13. (Optional) Enter the **Time in Minutes** spent on the issue (if applicable).

## Field-by-Field Explanation

* **Defect Type** (`defect_type`, `select_one`, required): Choose the type of defect that occurred. This field will help categorize and track different types of defects.
* **Defect Location** (`defect_location`, `text`, required): Enter the specific location where the defect was found. This helps to pinpoint the exact area of concern.
* **Defect Pattern** (`defect_pattern`, `select_multiple`, required): Select the pattern of the defect, such as random, systemic, human, or unknown. This field helps to identify potential causes or contributing factors.
* **Severity** (`severity`, `select_one`, required): Choose the severity level of the defect: low, medium, or high. This helps to prioritize and address defects based on their impact.
* **Comments** (`comments`, `text`, optional): Provide any additional comments or notes about the defect. This field is for free-text input and can help to capture further details.
* **Contact Person** (`contact_person`, `text`, required): Enter the name of the person responsible for the defect.
* **Contact E-mail** (`contact_email`, `email`, required): Enter the email address of the contact person.
* **Contact Phone** (`contact_phone`, `text`, optional): Enter the contact person's phone number (if available).
* **Location** (`location`, `text`, required): Enter the location where the defect occurred.
* **Department** (`department`, `text`, required): Enter the department responsible for the defect.
* **Date Reported** (`date_reported`, `date`, required): Enter the date when the defect was noticed.
* **Time Reported** (`time_reported`, `time`, required): Enter the time when the defect was noticed.
* **Time in Minutes** (`time_in_minutes`, `number`, optional): (Optional) Enter the time spent on the issue, if applicable.

## Tips

* Ensure that all required fields are completed accurately and thoroughly.
* If unsure about any field, please contact the relevant department or contact person for guidance.
* This form is designed to be completed once for each defect reported. If you need to report multiple defects, please create a new form for each one.
