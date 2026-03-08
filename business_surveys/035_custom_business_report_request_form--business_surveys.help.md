# custom_business_report_request_form - Help Guide
## Purpose
The custom business report request form is a tool used to request specific reports on business surveys. This form helps users submit reports that are tailored to their needs, providing relevant information to the survey teams in the organization. 

## How To Complete This Form
To complete the custom business report request form, please follow these steps:
- Select the category of the report you are interested in from the **Business Survey Category** dropdown menu.
- Choose the sub-category that best describes the specific report you need from the **Business Survey Sub Category** dropdown menu.
- Enter the date range for which you would like the report to cover, if applicable.
- Select the type of report you are interested in from the **Business Survey Type** dropdown menu.
- Enter a brief description of the report you need in the **Business Survey Description** field.
- Provide the name of the contact person responsible for the report in the **Contact Person** field.
- Enter the name of the company or organization related to the report in the **Company Name** field.
- Select the status of the report from the **Business Survey Status** dropdown menu.
- Optionally, provide any additional comments about the report in the **Business Survey Comments** field.

## Field-by-Field Explanation
* **Business Survey Category** (`business_survey_category`, select_one, required: false): Selects the category of the report, which helps in organizing and filtering reports.
* **Business Survey Sub Category** (`business_survey_sub_category`, select_one, required: false): Further specifies the sub-category of the report to help in precise search and organization.
* **Survey Date Range** (`survey_date_range`, date, required: false): If applicable, enter the specific date range for which you would like the report to cover.
* **Business Survey Type** (`business_survey_type`, select_one, required: false): Selects the type of report you are interested in.
* **Business Survey Subject** (`business_survey_subject`, text, required: false): Enter a brief description of the report you need.
* **Business Survey Description** (`business_survey_description`, text, required: false): Enter a detailed description of the report you need.
* **Contact Person** (`contact_person`, text, required: false): Provide the name of the contact person responsible for the report.
* **Company Name** (`company_name`, text, required: false): Enter the name of the company or organization related to the report.
* **Business Survey Status** (`business_survey_status`, select_one, required: false): Selects the current status of the report.
* **Business Survey Comments** (`business_survey_comments`, note, required: false): Enter any additional comments or information about the report.
