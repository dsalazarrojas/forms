# small_claims_case_intake_form - Help Guide
## Purpose
The small claims case intake form is a template for capturing data from both plaintiffs and defendants for new cases. It is intended to gather user information, case details, and party information.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the user information section with your name and contact information.
2. Provide details about the case, including the type, value, and description.
3. Enter information about the plaintiff and defendant, including their names, addresses, and other relevant details.
4. Specify the court and case status.
5. Enter any additional information about the case, such as the filing fee and filing date.

## Field-by-Field Explanation

* **User Information** (`user_info`, text, required: false): 
  * Enter your name and contact information, including phone and email.
* **Case Details** (`case_details`, text, required: false): 
  * Provide a brief description of the case.
* **Contact Information** (`contact_information`, text, required: false): 
  * Enter your name and contact information, including phone and email.
* **Plaintiff Party Info** (`plaintiff_party_info`, text, required: false): 
  * Enter the name and address of the plaintiff.
* **Defendant Party Info** (`defendant_party_info`, text, required: false): 
  * Enter the name and address of the defendant.
* **Case Type** (`case_type`, select_one, required: false): 
  * Select the type of case (Small Claims, Eviction, or Other).
* **Case Value** (`case_value`, number, required: false): 
  * Enter the monetary value of the case.
* **Case Description** (`case_description`, text, required: false): 
  * Provide a brief description of the case.
* **Court** (`case_court`, select_one, required: false): 
  * Select the court that the case is being filed in (City, County, or Municipal).
* **Case Status** (`case_status`, select_one, required: false): 
  * Select the current status of the case (Filing, Pending, or Dismissed).
* **Filing Fee** (`case_filing_fee`, number, required: false): 
  * Enter the filing fee for the case.
* **Filing Date** (`case_filing_date`, date, required: false): 
  * Enter the date the case was filed.
* **Close Date** (`case_close_date`, date, required: false): 
  * Enter the date the case was closed.
* **Close Result** (`case_close_result`, select_one, required: false): 
  * Select the result of the case (Win, Lose, or Settled).
* **Plaintiff Party Name** (`plaintiff_party_name`, text, required: false): 
  * Enter the name of the plaintiff.
* **Plaintiff Party Address** (`plaintiff_party_address`, text, required: false): 
  * Enter the address of the plaintiff.
* **Defendant Party Name** (`defendant_party_name`, text, required: false): 
  * Enter the name of the defendant.
* **Defendant Party Address** (`defendant_party_address`, text, required: false): 
  * Enter the address of the defendant.
* **Attorney** (`attorney`, text, required: false): 
  * Enter the name of the attorney.
* **Case Number** (`case_number`, text, required: false): 
  * Enter the number of the case.
* **Other** (`case_type_other`, select_one, required: false): 
  * If the case type is Other, select 'Yes'. 

This guide is intended to help the user understand the purpose and use of the small claims case intake form.
