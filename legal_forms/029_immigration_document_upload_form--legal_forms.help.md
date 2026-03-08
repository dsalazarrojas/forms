# Immigration Document Upload Form - Help Guide
## Purpose
The Immigration Document Upload Form is used to gather essential information and upload relevant documents for immigration purposes.

## How To Complete This Form
- Start by filling out the "Legal Forms" text field, providing a brief description of the documents being uploaded.
- In the "Upload Document" field, provide the actual file to be uploaded.
- Select the "Applicant Details" field to choose between "US Citizen" and "Non-US Citizen" options.
- Enter the "Date of Birth" in the format "mm/dd/yyyy".
- Choose the "Upload Date" and "Upload Time" using the date and time pickers provided.
- In the "Upload File" field, provide the file to be uploaded.
- Select the "Legal Attorney" field to choose between "True" and "False" options, indicating if a legal attorney is involved.

## Field-by-Field Explanation
- **Legal Forms** (`Legal Forms`, text, Required): A brief description of the documents being uploaded.
- **Upload Document** (`Upload Document`, text, Required): The actual file to be uploaded. Please ensure the file is in a supported format and within the allowed size limit.
- **Applicant Details** (`Applicant Details`, select_one, Required): Choose between "US Citizen" and "Non-US Citizen" options.
  - Select "US Citizen" if the applicant is a citizen of the United States.
  - Select "Non-US Citizen" if the applicant is not a citizen of the United States.
- **Date of Birth** (`Date of Birth`, date, Required): Enter the applicant's date of birth in the format "mm/dd/yyyy".
- **Upload Date** (`Upload Date`, date, Required): Choose the date on which the document was uploaded using the provided date picker.
- **Upload Time** (`Upload Time`, time, Required): Choose the time on which the document was uploaded using the provided time picker.
- **Upload File** (`Upload File`, text, Required): The actual file to be uploaded. Please ensure the file is in a supported format and within the allowed size limit.
- **Legal Attorney** (`Legal Attorney`, select_multiple, Required): Select "True" if a legal attorney is involved in the document upload process. Select "False" otherwise.
