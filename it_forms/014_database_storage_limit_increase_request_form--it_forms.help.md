<thinking>
This form is designed to request an increase in database storage limits for a team. When completing this form, please ensure that:
* Your team leader has authorized you to submit this request
* You have a clear reason for requesting the limit increase, such as a large dataset or expected future growth
* You have considered the implications of the limit increase on other team members and resources
* You have checked if the requested limit increase is not already in progress or has already been approved

</thinking>

# Database Storage Limit Increase Request Form - Help Guide
## Purpose
This form is used to request an increase in database storage limits for your team's database. Fill out this form to provide necessary information to support your request.

## How To Complete This Form
1. **Select "Team Leader"**: Choose the person who has authorized you to submit this request.
2. **Team Members**: If your team has members who may be affected by the storage limit increase, select the option that best represents their status.
	* Yes: The team members are aware of and agree with the storage limit increase.
	* No: The team members do not agree with the storage limit increase.
3. **Database Type**: Choose the type of database you are managing (e.g., SQL, NoSQL, Other).
4. **Database Name**: Enter the name of your database.
5. **Reason for Request**: Provide a brief explanation for why you are requesting a storage limit increase.
6. **Expected Completion Date**: If applicable, enter the expected date when you plan to complete the storage limit increase.
7. **Required Storage Limit**, **Current Storage Limit**, and **Proposed Storage Limit**: Enter the current and proposed storage limits for your database.
8. **Database Size**: Enter the size of your database.

## Field-by-Field Explanation
* **Team Leader**:
  Team Leader (`team_leader`, text, required): Enter the name of the person who has authorized you to submit this request.
* **Team Members**:
  Team Members (`team_members`, select_multiple, required): If your team has members who may be affected by the storage limit increase, select the option that best represents their status. If unsure, please ask your team leader for guidance.
* **Database Type**:
  Database Type (`database_type`, select_one, required): Choose the type of database you are managing (e.g., SQL, NoSQL, Other).
* **Database Name**:
  Database Name (`database_name`, text, required): Enter the name of your database.
* **Reason for Request**:
  Reason for Request (`reason_for_request`, text, required): Provide a brief explanation for why you are requesting a storage limit increase.
* **Expected Completion Date**:
  Expected Completion Date (`expected_completion_date`, date, required): If applicable, enter the expected date when you plan to complete the storage limit increase.
* **Required Storage Limit**:
  Required Storage Limit (`required_storage_limit`, number, required): Enter the proposed storage limit for your database.
* **Current Storage Limit**:
  Current Storage Limit (`current_storage_limit`, number, required): Enter the current storage limit for your database.
* **Proposed Storage Limit**:
  Proposed Storage Limit (`proposed_storage_limit`, number, required): Enter the proposed storage limit for your database.
* **Database Size**:
  Database Size (`database_size`, number, required): Enter the size of your database.
* **Other (Database Type)**:
  Other (Database Type, select_one, required): If your database is of an unknown or other type, select this option and provide further explanation.

## Tips
* Before submitting the form, please ensure you have the necessary permissions and approvals from your team leader.
* If you are unsure about any of the fields, please contact your team leader for guidance.
* Please fill out all required fields to ensure your request is processed correctly.
