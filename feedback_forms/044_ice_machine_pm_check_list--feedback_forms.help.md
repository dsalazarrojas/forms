# ice_machine_pm_check_list - Help Guide
## Purpose
The ice machine PM check list form is used to collect information about the status and details of ice machines. This form helps us improve maintenance, operations, and efficiency by gathering standardized data on ice machine conditions.

## How To Complete This Form
1.  Ensure you have checked the ice machine and are filling out this form based on your observation.
2.  Answer the required questions accurately and thoroughly.
3.  For each question, provide as much detail as possible.

## Field-by-Field Explanation

* **Ice Machine Details** (`ice_machine_details`, `text`, required: false): This field is optional and allows you to provide any additional information about the ice machine you're assessing. Please use this field to note any notable characteristics or circumstances that might impact its status.
* **Ice Machine Model** (`ice_machine_model`, `select_one`, required: false): Choose one of the options to indicate whether the ice machine is currently running, idle, or offline. This will help us track its current status.
* **Ice Machine Status** (`ice_machine_status`, `select_one`, required: true): This is a required field that asks you to choose the current status of the ice machine. Please select one of the options: Running, Idle, or Offline.
* **Additional Comments** (`additional_comments`, `text`, required: false): This field is optional and provides a space for you to add any additional comments or notes about the ice machine's status.
* **Feedback** (`feedback`, `text`, required: false): This field is optional and allows you to provide any feedback or suggestions about the ice machine or the form itself.
* **Email Contact** (`email_contact`, `email`, required: true): Please enter the email address of the person responsible for the ice machine or the person who can be contacted for further information.
* **Phone Number** (`phone_number`, `text`, required: true): Enter the phone number of the person responsible for the ice machine or the person who can be contacted for further information.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: true): Choose one of the options to indicate which tool or equipment is assigned to the ice machine. Please select "chatjimmy" if it's a specific tool, or "Other" if it's something else.
