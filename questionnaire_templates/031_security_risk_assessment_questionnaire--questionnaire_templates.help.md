<thinking>
This form is for conducting a security risk assessment on an asset. A security risk assessment is a process to identify potential security risks to an asset and determine the necessary actions to mitigate or manage those risks. This form is to be filled out by a specific user, such as a security team member or a risk owner, to document and track the security risks of various assets. Please make sure this form is not filled out multiple times for the same asset, as this can create duplicate data. To complete this form, select all relevant information and answer all fields. If a field is not applicable or not relevant, please leave it blank.</thinking>

# security_risk_assessment_questionnaire - Help Guide
## Purpose
This form is for conducting a security risk assessment on an asset.

## How To Complete This Form
- Fill out the form for each asset that requires a security risk assessment.
- Select the risk level (High, Medium, Low) for each asset.
- Choose the frequency of risk reviews (Daily, Weekly, Monthly, Quarterly, Annually).
- Identify the asset type (Network, Database, System, Hardware, Software, Personnel).
- Specify the asset location and value.
- Determine the asset condition (High, Medium, Low).
- Choose the asset status (Critical, High, Medium, Low).
- Choose the impact level (High, Medium, Low).
- Choose the risk acceptance level (High, Medium, Low).
- Describe the risk in detail.
- Provide any risk recommendations.
- Outline the risk actions to take.
- Add any comments or notes.
- Designate the risk owner (Security Team, IT Department, Management).
- Select the review cycle (Monthly, Quarterly, Annually).
- Provide the next review date.
- Provide the last review date.
- Specify who last reviewed the asset.

## Field-by-Field Explanation

* **Risk Level** (`risk_level`, select_one, required/false): Select the level of risk for this asset.
* **Risk Frequency** (`risk_frequency`, select_one, required/false): Specify how often this risk is reviewed.
* **Security Risk** (`security_risk`, text, required/false): Describe the risk in detail.
* **Asset Type** (`asset_type`, select_multiple, required/false): Choose all relevant asset types (Network, Database, System, Hardware, Software, Personnel).
* **Asset Location** (`asset_location`, text, required/false): Specify the location of the asset.
* **Asset Value** (`asset_value`, number, required/false): Enter the value of the asset.
* **Asset Condition** (`asset_condition`, select_one, required/false): Determine the condition of the asset (High, Medium, Low).
* **Asset Status** (`asset_status`, select_one, required/false): Specify the status of the asset (Critical, High, Medium, Low).
* **Asset Impact** (`asset_impact`, select_one, required/false): Determine the impact of the risk (High, Medium, Low).
* **Risk Acceptance** (`asset_risk_acceptance`, select_one, required/false): Choose the risk acceptance level (High, Medium, Low).
* **Risk Owner** (`risk_owner`, select_one, required/false): Designate the risk owner (Security Team, IT Department, Management).
* **Risk Review Cycle** (`risk_review_cycle`, select_one, required/false): Specify the review cycle (Monthly, Quarterly, Annually).
* **Next Review Date** (`risk_next_review_date`, date, required/false): Enter the next review date.
* **Last Review Date** (`risk_last_review_date`, date, required/false): Enter the last review date.
* **Last Reviewed By** (`asset_last_reviewed_by`, select_one, required/false): Specify who last reviewed the asset.
