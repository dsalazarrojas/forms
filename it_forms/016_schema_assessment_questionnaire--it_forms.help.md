# Schema Assessment Questionnaire - Help Guide
## Purpose
The Schema Assessment Questionnaire is a form used to collect and document information about database schemas. It helps teams to assess and track the status of schemas, including their owners, versioning, and reviews.

## How To Complete This Form
To complete this form, please follow the instructions below:

1. Start by reading the introduction page, which provides general information about the form and its purpose.
2. Fill in the schema description, providing a brief summary of the schema being assessed.
3. Select the schema owner(s) from the list of available options.
4. Choose the schema version from the available options.
5. Select the reviewers and evaluators from the available options.
6. Provide feedback about the schema in the text field.
7. Rate the schema using the number rating field.
8. Add any additional recommendations for the schema.
9. Add any additional comments about the schema.
10. Select the submitter who created the schema.
11. Select the status of the schema from the available options.
12. Enter the date the schema was last reviewed.
13. Select the reviewer who last reviewed the schema.
14. Enter the date the schema was last updated.
15. Select the submitter who last updated the schema.
16. Enter the date the schema was created.
17. Select the submitter who created the schema.

## Field-by-Field Explanation

* **Introduction** (`Introduction`, `note`, required: false): This field provides a general introduction to the form and its purpose.
* **schema-description** (`schema_description`, `text`, required: false): Provide a brief summary of the schema being assessed.
* **schema-owner** (`schema_owner`, `select_multiple`, required: false): Select all owners of the schema.
* **schema-version** (`schema_version`, `date`, required: false): Select the current version of the schema.
* **reviewers** (`schema_reviewers`, `select_multiple`, required: false): Select all reviewers who have reviewed the schema.
* **evaluators** (`schema_evaluators`, `select_multiple`, required: false): Select all evaluators who have evaluated the schema.
* **feedback** (`schema_feedback`, `text`, required: false): Provide any feedback about the schema.
* **rating** (`schema_rating`, `number`, required: false): Rate the schema using a number rating field.
* **recommendations** (`schema_recommendations`, `text`, required: false): Add any additional recommendations for the schema.
* **additional-comments** (`schema_additional_comments`, `text`, required: false): Add any additional comments about the schema.
* **submitter** (`schema_submitter`, `select_one`, required: false): Select the submitter who created the schema.
* **status** (`schema_status`, `select_one`, required: false): Select the status of the schema.
* **last-reviewed** (`schema_last_reviewed`, `date`, required: false): Enter the date the schema was last reviewed.
* **last-reviewed-by** (`schema_last_reviewed_by`, `select_one`, required: false): Select the reviewer who last reviewed the schema.
* **last-updated** (`schema_last_updated`, `date`, required: false): Enter the date the schema was last updated.
* **last-updated-by** (`schema_last_updated_by`, `select_one`, required: false): Select the submitter who last updated the schema.
* **created** (`schema_created`, `date`, required: false): Enter the date the schema was created.
* **created-by** (`schema_created_by`, `select_one`, required: false): Select the submitter who created the schema.

Note: Fields with "select_multiple" and "select_one" types allow you to select one or multiple options from the available options. The "text" type fields allow you to enter free-formatted text. The "number" type fields allow you to enter a numerical value. The "date" type fields allow you to enter a date.
