# Animal Welfare Data Integration Request Form - Help Guide

## Purpose
This form is designed to collect necessary information for data integration requests between animal welfare systems. Please fill out this form to ensure that your request is processed correctly and efficiently.

## How To Complete This Form

1. Fill in the required personal and organizational information, including your full name, your organization's name, and the name of the data system you are requesting integration with.
2. Select the type of integration you need (One-way Sync, Bi-directional Sync, Batch Data Export, or Live API Connection).
3. Choose the frequency of data update (Real-time Updates, Daily Batch, Weekly Batch, or On-demand Manual Trigger).
4. Select all applicable data fields you want to share between systems.
5. Provide a brief description of the purpose of the data integration request.
6. Confirm that you agree to adhere to all data protection and privacy policies.
7. Enter your preferred implementation timeline.
8. Enter the technical contact email for this request.

## Field-by-Field Explanation

* **Requester Full Name** (`requester_name_full`, text, required): This field is used to collect your full name.
* **Organization or Institution Name** (`requester_org_name`, text, required): This field is used to collect the name of the organization or institution making the request.
* **Source Data System** (`source_data_system_name`, text, required): This field is used to collect the name of the data system you are requesting integration with. For example, if you are requesting integration with ShelterBuddy, enter "ShelterBuddy".
* **Target Data System or Destination** (`target_data_destination`, text, required): This field is used to collect the name of the system or destination where the data will be sent.
* **Integration Type** (`integration_type_selection`, select_one, required): This field is used to select the type of integration you need, such as One-way Sync, Bi-directional Sync, Batch Data Export, or Live API Connection.
* **Frequency of Data Update** (`update_frequency_requirement`, select_one, required): This field is used to select how often the data should be updated, such as Real-time Updates, Daily Batch, Weekly Batch, or On-demand Manual Trigger.
* **Data Fields to be Shared** (`data_fields_to_integrate`, select_multiple, required): This field is used to select all applicable data fields you want to share between systems. This includes Animal Unique IDs, Health and Medical Records, Adoption and Intake Status, Physical Location Data, and Owner and Contact Information.
* **Reason for Data Integration** (`integration_purpose_summary`, text, required): This field is used to provide a brief description of the purpose of the data integration request.
* **Security and Privacy Compliance Acknowledgment** (`privacy_compliance_ack`, select_one, required): This field is used to confirm that you agree to adhere to all data protection and privacy policies.
* **Preferred Implementation Timeline** (`timeline_expectation`, text, required): This field is used to enter your preferred implementation timeline, such as "Next 30 days".
* **Technical Contact Email** (`it_contact_email`, email, required): This field is used to enter the technical contact email for this request.

## Tips

* Please make sure to fill out all required fields correctly to avoid any issues during the integration process.
* If you have any questions or concerns, please don't hesitate to reach out to the support team.
* Double-check your answers before submitting the form to ensure accuracy and avoid any mistakes.
