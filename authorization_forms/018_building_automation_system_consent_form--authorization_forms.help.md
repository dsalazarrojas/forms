# Building Automation System Consent Form - Help Guide
## Purpose
The "Building Automation System Consent Form" is used for authorization and consent for building automation systems. It collects information for implementation and operation of building automation systems in your building.

## How To Complete This Form
To complete this form, follow these steps:

1.  Please fill out the "Property owner or authorized representative" field with your name or the name of the authorized representative.
2.  Enter the property address in the "Property address" field.
3.  Provide your email address in the "Email address" field.
4.  Enter your phone number in the "Phone number" field.
5.  Select the building automation system type in the "Building automation system type" field.
6.  Specify the scope of automation implementation in the "Scope of automation implementation" field.
7.  List the areas affected by the automation system in the "Areas affected by automation" field.
8.  Enter the name of the contractor or vendor in the "Contractor or vendor name" field.
9.  Provide the contact information of the contractor or vendor in the "Contractor contact information" field.
10.  Specify the project start date in the "Project start date" field.
11.  Enter the expected completion date in the "Expected completion date" field.
12.  Select the expected impact on building operations in the "Expected impact on building operations" field.
13.  Indicate whether occupants will be notified of the installation in the "Occupants notified of installation" field.
14.  Select whether system testing and commissioning will be included in the scope in the "System testing and commissioning" field.
15.  Indicate whether remote monitoring is authorized in the "Remote monitoring authorization" field.
16.  Select the level of data collection in the "Data collection and logging" field.
17.  Choose whether third-party data sharing is authorized in the "Third-party data sharing" field.
18.  Select the level of occupant privacy protections in the "Occupant privacy protections" field.
19.  Select the level of support and maintenance planned in the "Support and maintenance plan" field.
20.  Indicate whether comprehensive training will be provided to the occupants in the "Staff training provided" field.
21.  Select whether manual override capabilities are available in the "Manual override capabilities available" field.
22.  Select whether the contractor has liability insurance on file in the "Contractor has liability insurance on file" field.
23.  Choose the warranty coverage period in the "Warranty coverage period" field.
24.  Indicate your consent to the installation of the building automation system in the "I authorize implementation of the building automation system" field.
25.  Finally, select whether you agree to all the terms and conditions in the "I acknowledge and agree to all terms and conditions" field.

## Field-by-Field Explanation
*   **Property owner or authorized representative** (`property_owner`, `text`, required): This is the name of the property owner or authorized representative.
*   **Property address** (`property_address`, `text`, required): This is the address of the property where the building automation system will be installed.
*   **Email address** (`owner_email`, `email`, required): This is the email address of the property owner or authorized representative.
*   **Phone number** (`owner_phone`, `text`, required): This is the phone number of the property owner or authorized representative.
*   **Building automation system type** (`system_type`, `select_multiple`, required): This is the type of building automation system being implemented.
*   **Scope of automation implementation** (`system_scope`, `text`, required): This is a brief description of the scope of the automation implementation.
*   **Areas affected by automation** (`affected_areas`, `text`, required): This is a list of areas affected by the automation system.
*   **Contractor or vendor name** (`contractor_name`, `text`, required): This is the name of the contractor or vendor responsible for the installation.
*   **Contractor contact information** (`contractor_contact`, `email`, required): This is the contact information of the contractor or vendor.
*   **Project start date** (`project_start`, `date`, required): This is the date on which the project is expected to start.
*   **Expected completion date** (`project_completion`, `date`, required): This is the date on which the project is expected to be completed.
*   **Expected impact on building operations** (`installation_impact`, `select_one`, required): This is the expected impact on building operations.
*   **Occupants notified of installation** (`occupant_notification`, `select_one`, required): This is whether or not occupants will be notified of the installation.
*   **System testing and commissioning** (`system_testing`, `select_one`, required): This is whether system testing and commissioning will be included in the scope.
*   **Remote monitoring authorization** (`remote_monitoring`, `select_one`, required): This is whether remote monitoring is authorized.
*   **Data collection and logging** (`data_collection`, `select_one`, required): This is the level of data collection.
*   **Third-party data sharing** (`data_sharing`, `select_one`, required): This is whether third-party data sharing is authorized.
*   **Occupant privacy protections** (`occupant_privacy`, `select_one`, required): This is the level of occupant privacy protections.
*   **Support and maintenance plan** (`support_plan`, `select_one`, required): This is the level of support and maintenance planned.
*   **Staff training provided** (`training_provided`, `select_one`, required): This is whether comprehensive training will be provided to the occupants.
*   **Manual override capabilities available** (`emergency_override`, `select_one`, required): This is whether manual override capabilities are available.
*   **Contractor has liability insurance on file** (`liability_coverage`, `select_one`, required): This is whether the contractor has liability insurance on file.
*   **Warranty coverage period** (`warranty_terms`, `select_one`, required): This is the warranty coverage period.
*   **I authorize implementation of the building automation system** (`authorization_confirmed`, `select_one`, required): This is your consent to the implementation of the building automation system.
*   **I acknowledge and agree to all terms and conditions** (`terms_agreed`, `select_one`, required): This is whether you agree to all terms and conditions.
