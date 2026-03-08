<thinking>
This form is designed to facilitate user requests for tool storage authorization. It is meant for employees to request access to a tool that they need for their work. The form will ask for a brief description of the tool, the category it belongs to, and the date and time the user plans to use the tool. It also asks for the user's email address and phone number. The form is used by maintenance team members to verify the tool requests and ensure that users are properly authorized to access the tools they need.

The form will only be used for employees who have been granted access to the tool storage system.

This form is used in conjunction with other processes, like the tool management system. Please make sure to only submit a new request if you have not submitted one before. If you have previously submitted a request, please check the status of your previous requests before submitting a new one.

The output file is used to store the submitted form data, which will be used for tracking and reporting purposes.

The "output_file" dropdown option is a custom field to store the unique form ID.
</thinking>

# tool_storage_authorization_request_form - Help Guide
## Purpose
The tool storage authorization request form is designed to allow users to request access to tools and equipment for work purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the required information, including category, assigned tool, description, submitter email, and submitter phone.
2. Select the correct category for the tool you are requesting.
3. Choose the correct assigned tool from the dropdown menu.
4. Enter a brief description of the tool and the reason for the request.
5. Enter a valid email address and phone number for the submitter.
6. Click on the "Submit" button to send the request to the maintenance team for approval.

## Field-by-Field Explanation

* **form_title** (`tool_storage_authorization_request_form`, text, required/optional): This is the title of the form, which will be automatically filled out.
* **category** (`category`, select_one, required/optional): Select the category that the tool belongs to.
* **assigned_tool** (`assigned_tool`, select_one, required): Choose the tool you are requesting access to.
* **description** (`description`, text, required/optional): Enter a brief description of the tool and the reason for the request.
* **reason** (`reason`, text, required/optional): Enter a brief description of the tool and the reason for the request. (Note: This field and description are similar, use one or the other.)
* **submitter_email** (`submitter_email`, email, required): Enter a valid email address for the submitter.
* **submitter_phone** (`submitter_phone`, text, required/optional): Enter a valid phone number for the submitter.
* **submitter_date** (`submitter_date`, date, required/optional): Enter the date the tool will be used.
* **submitter_time** (`submitter_time`, time, required/optional): Enter the time the tool will be used. (Note: This field is not used for this form, but was left in the original YAML for possible future use.)
* **submitter_note** (`submitter_note`, note, required/optional): This field is not used for this form, but was left in the original YAML for possible future use.
* **form_id** (`form_id`, number, required/optional): This is a unique identifier for the form, automatically filled out.
* **output_file** (`output_file`, select_one, required/optional): Select the output file type. (Note: This field is for storing the submitted form data, not for user input.)
