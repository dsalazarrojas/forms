# Over The Air Update Request Form - Help Guide
## Purpose
The Over The Air Update Request Form is designed to collect information from employees for requesting Over The Air updates. This form helps the IT team to track and manage update requests efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name.
2. Fill in your Last Name.
3. Enter your Email address.
4. Enter your Phone number.
5. (Optional) Select a Scheduled Date and Scheduled Time for the update.
6. (Optional) Add any Additional Notes about the request.
7. Select the Category for the update (e.g., Device, Software, Configuration).
8. (Optional) Choose relevant Sub Category (e.g., Device Drivers, Firmware, Security Patches).
9. Provide a brief Description of the update request.
10. Select the current Status of the request (e.g., Scheduled, In Progress, Complete).
11. Assign the request to a team member (e.g., chatjimmy, John, Jane).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required):
  • A required field that collects your first name.
* **Last Name** (`last_name`, `text`, required):
  • A required field that collects your last name.
* **Email** (`email`, `email`, required):
  • A required field that collects your email address.
* **Phone** (`phone`, `text`, required):
  • A required field that collects your phone number.
* **Scheduled Date** (`scheduled_date`, `date`, optional):
  • An optional field to select a date for the update.
* **Scheduled Time** (`scheduled_time`, `time`, optional):
  • An optional field to select a time for the update.
* **Additional Note** (`note`, `note`, optional):
  • An optional field to add any additional information about the request.
* **Category** (`category`, `select_one`, required):
  • A required field that selects the category of the update (e.g., Device, Software, Configuration).
* **Sub Category** (`sub_category`, `select_multiple`, optional):
  • An optional field to choose relevant sub categories (e.g., Device Drivers, Firmware, Security Patches).
* **Description** (`description`, `text`, required):
  • A required field that provides a brief description of the update request.
* **Status** (`status`, `select_one`, required):
  • A required field that selects the current status of the request (e.g., Scheduled, In Progress, Complete).
* **Assigned To** (`assigned_to`, `select_one`, required):
  • A required field that assigns the request to a team member (e.g., chatjimmy, John, Jane).
