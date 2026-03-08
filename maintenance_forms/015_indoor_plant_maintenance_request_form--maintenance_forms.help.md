# indoor_plant_maintenance_request_form - Help Guide
## Purpose
The indoor plant maintenance request form is a tool for submitting maintenance requests for indoor plants. Authorized personnel use this form to track and report plant maintenance activities.

## How To Complete This Form
1. Select the category that best describes the maintenance request.
2. Provide a brief description of the issue or maintenance required.
3. Choose the type of plant that needs maintenance.
4. Select the type of maintenance required (e.g., watering, pruning, etc.).
5. Add any additional information that might be helpful for the maintenance team.
6. Select the tool or equipment assigned for the maintenance task.
7. Verify that the form is accurate and complete before submitting it.

## Field-by-Field Explanation
* **form_title** (`form_title`, text, optional): Provide a brief title for the maintenance request.
* **category** (`category`, select_one, required): Select a category that best describes the maintenance request.
*   • Maintenance Forms: General maintenance requests for plants.
*   • Other: For any other maintenance purpose not listed above.
* **description** (`description`, text, optional): Enter a brief description of the issue or maintenance required.
* **what_plant** (`what_plant`, select_multiple, required): Choose the type of plant that needs maintenance.
*   • Begonia
*   • Fiddle Leaf
*   • Pothos
*   • Other (if not listed)
* **request_type** (`request_type`, select_one, required): Select the type of maintenance required.
*   • Watering
*   • Pruning
*   • Pest Control
*   • Other (if not listed)
* **additional_info** (`additional_info`, text, optional): Add any additional information that might be helpful for the maintenance team.
* **assigned_tool** (`assigned_tool`, text, required): Select the tool or equipment assigned for the maintenance task.
*   • This field requires the selected tool or equipment for the maintenance task.
*   • Make sure to select the correct tool or equipment for the task.
* **reviewed_by** (`reviewed_by`, text, optional): Enter the name of the person reviewing the request.

Note: Some fields are marked as required or optional, please ensure you complete all required fields before submitting the form.
