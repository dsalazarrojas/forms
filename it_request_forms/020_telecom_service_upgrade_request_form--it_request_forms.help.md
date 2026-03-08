# telecom_service_upgrade_request_form - Help Guide
## Purpose
The "telecom_service_upgrade_request_form" is designed for customers to submit upgrade requests for their telecom services.

## How To Complete This Form
To complete this form, please fill out the following sections:

1. Enter your full name.
2. Enter your email address associated with your account.
3. Provide a detailed description of the telecom service you wish to upgrade.
4. Select whether the telecom service is currently provided by 'Yes' or 'No'.
5. Select the type of upgrade you are requesting ('Yes' or 'No').
6. Choose a date for the upgrade to take place.
7. If applicable, enter the date the upgrade is scheduled to take place.
8. Enter any additional follow-up details for the upgrade (optional).
9. Enter any notes or comments for the customer (optional).
10. If desired, enter any internal follow-up details for the customer's upgrade (optional).

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter your full name to ensure we have the correct information on file.
* **Customer Email** (`customer_email`, email, required): Enter your email address associated with your account for communication purposes.
* **Telecom Service Details** (`telecom_service_details`, text, optional): Provide a detailed description of the telecom service you wish to upgrade, including any specific features or services requested.
* **Telecom Service Provider** (`telecom_service_provider`, select_one, required): Select 'Yes' if the telecom service is currently provided, 'No' otherwise.
* **Telecom Upgrade Type** (`upgrade_type`, select_one, required): Select the type of upgrade you are requesting, either 'Yes' or 'No'.
* **Upgrade Schedule** (`upgrade_schedule`, date, required): Choose a date for the upgrade to take place. This is the date when the upgrade will be applied to your account.
* **Scheduled Date** (`scheduled_date`, date, optional): If you already know the date the upgrade is scheduled, please enter it here.
* **Follow-up Details** (`follow_up_details`, text, optional): Enter any additional follow-up details for the upgrade, such as specific dates or times.
* **Customer Notes** (`customer_notes`, text, optional): Enter any notes or comments for the customer, such as special requests or instructions.
* **Internal Follow-up Details** (`internal_follow_up_details`, text, optional): Enter any internal follow-up details or notes for our team to reference.
