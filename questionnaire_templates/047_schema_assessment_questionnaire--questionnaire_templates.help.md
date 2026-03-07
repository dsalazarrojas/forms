<thinking>...This form is a questionnaire used for schema assessment. It is designed to collect metadata about a data schema, including information about data teams, stakeholders, schema type, scope, complexity, maturity, frequency, last updated date, version, status, change frequency, last updated by, last reviewed by, and comments...</thinking>

# schema_assessment_questionnaire - Help Guide
## Purpose
The schema_assessment_questionnaire is a form used to collect metadata about a data schema. This metadata is used to assess the schema's characteristics and track its evolution over time.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant fields based on the schema you are assessing.
2. Fill in the required fields, such as schema type, scope, complexity, maturity, frequency, last updated date, version, status, and change frequency.
3. Provide additional information about the schema, such as stakeholders and comments.
4. If applicable, provide details about the last review, including the last updated by, last reviewed by, and location.

## Field-by-Field Explanation

* **Data Teams** (`schema_assessment_questionnaire_data_teams`, text): Enter the data teams involved with this schema.
* **Stakeholders** (`schema_assessment_questionnaire_stakeholders`, text): List the stakeholders involved with this schema.
* **Schema Type** (`schema_assessment_questionnaire_schema_type`, select_multiple, required): Select the schema type. Options include: Data Team, Business Owner, IT, Data Architect, Business Analyst, Product Manager.
* **Schema Scope** (`schema_assessment_questionnaire_schema_scope`, select_one, required): Select the schema scope. Options include: Enterprise, Department, Team.
* **Schema Complexity** (`schema_assessment_questionnaire_schema_complexity`, select_one, required): Select the schema complexity. Options include: Simple, Complex.
* **Schema Maturity** (`schema_assessment_questionnaire_schema_maturity`, select_one, required): Select the schema maturity. Options include: High, Medium, Low.
* **Schema Frequency** (`schema_assessment_questionnaire_schema_frequency`, select_one, required): Select the schema frequency. Options include: High, Medium, Low.
* **Schema Last Updated** (`schema_assessment_questionnaire_schema_last_updated`, date, required): Enter the date of the last update.
* **Schema Last Reviewed** (`schema_assessment_questionnaire_schema_last_reviewed`, date, optional): Enter the date of the last review.
* **Schema Version** (`schema_assessment_questionnaire_schema_version`, number, required): Enter the schema version.
* **Schema Status** (`schema_assessment_questionnaire_schema_status`, select_one, required): Select the schema status. Options include: Active, In Active, In Progress, Retired, Inactive.
* **Schema Change Frequency** (`schema_assessment_questionnaire_schema_change_frequency`, select_one, required): Select the schema change frequency. Options include: High, Medium, Low.
* **Schema Last Updated By** (`schema_assessment_questionnaire_schema_last_updated_by`, text, optional): Enter the last updated by.
* **Schema Last Reviewed By** (`schema_assessment_questionnaire_schema_last_reviewed_by`, text, optional): Enter the last reviewed by.
* **Schema Last Updated By User** (`schema_assessment_questionnaire_schema_last_reviewed_by_user`, text, optional): Enter the last reviewed by user.
* **Schema Last Reviewed By User Id** (`schema_assessment_questionnaire_schema_last_reviewed_by_user_id`, number, optional): Enter the last reviewed by user id.
* **Schema Last Reviewed By Ip** (`schema_assessment_questionnaire_schema_last_reviewed_by_ip`, text, optional): Enter the last reviewed by ip.
* **Schema Last Reviewed By Country** (`schema_assessment_questionnaire_schema_last_reviewed_by_country`, text, optional): Enter the last reviewed by country.
* **Schema Last Reviewed By Region** (`schema_assessment_questionnaire_schema_last_reviewed_by_region`, text, optional): Enter the last reviewed by region.
* **Schema Last Reviewed By City** (`schema_assessment_questionnaire_schema_last_reviewed_by_city`, text, optional): Enter the last reviewed by city.
* **Schema Last Reviewed By Zip** (`schema_assessment_questionnaire_schema_last_reviewed_by_zip`, text, optional): Enter the last reviewed by zip.
* **Schema Last Reviewed By State** (`schema_assessment_questionnaire_schema_last_reviewed_by_state`, text, optional): Enter the last reviewed by state.
* **Schema Comment** (`schema_assessment_questionnaire_schema_comment`, text, optional): Enter any comments about the schema.
* **Schema Last Reviewed On** (`schema_assessment_questionnaire_schema_last_reviewed_on`, date, optional): Enter the date of the last review.
* **Schema Last Reviewed At** (`schema_assessment_questionnaire_schema_last_reviewed_at`, time, optional): Enter the time of the last review.
* **Schema Last Reviewed By User Id** (`schema_assessment_questionnaire_schema_last_reviewed_by_user_id`, number, optional): Enter the last reviewed by user id.
* **Schema Last Reviewed By User** (`schema_assessment_questionnaire_schema_last_reviewed_by_user`, text, optional): Enter the last reviewed by user.
