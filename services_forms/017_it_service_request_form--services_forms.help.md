# it_service_request_form - Help Guide
## Purpose
The it_service_request_form is used for submitting requests for services within the organization. It helps the service team to understand the requirements and prioritize them correctly.

## How To Complete This Form
- Start by providing a title for your service request form in the text field labeled "it_service_request_form".
- Next, select the category of your service request from the options provided in the "category" field.
- In the "description" field, provide a detailed description of your service request.
- Choose whether the service request has an assigned tool by selecting "Yes" or "No" in the "assigned_tool" field.
- You can also provide a unique ID for your service request in the "form_id" field.
- Select whether the service request is for a specific form category by choosing "Yes" or "No" in the "form_category" field.
- Provide a file output name in the "output_file" field if your service request requires a file output.
- Again, select whether the service request has an assigned tool by choosing "Yes" or "No" in the "assigned_tool" field.
- Finally, provide any additional information or comments in the "description" field.

## Field-by-Field Explanation
- **it_service_request_form**: (`form_title`, text, required: false)
This field is the title of the service request form. It should be a brief description of the service request.
- **category**: (`category`, select_one, required: false)
This field helps the service team to categorize and prioritize the service requests. Select the most relevant category from the options provided.
- **description**: (`description`, text, required: false)
This field requires a detailed description of the service request. Please provide as much information as possible to ensure that the service team understands the requirements correctly.
- **assigned_tool**: (`assigned_tool`, select_one, required: false)
This field indicates whether a tool is assigned to the service request. If you choose "Yes", please provide more information about the tool in the "description" field.
- **form_id**: (`form_id`, number, required: false)
This field is for providing a unique ID for the service request. It helps the service team to track and manage the requests.
- **form_category**: (`form_category`, select_one, required: false)
This field indicates whether the service request is for a specific form category. If you choose "Yes", please provide more information about the category in the "description" field.
- **output_file**: (`output_file`, text, required: false)
This field is for providing a file name if the service request requires a file output.
- **assigned_tool**: (`assigned_tool`, select_one, required: false)
This field indicates whether the service request has an assigned tool. If you choose "Yes", please provide more information about the tool in the "description" field.
