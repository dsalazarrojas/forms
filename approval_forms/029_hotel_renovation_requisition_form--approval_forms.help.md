<thinking> 
This form is for requesting and managing hotel renovations. It's used for submitting and tracking renovation requests, including descriptions, priority levels, costs, and status updates. This form is primarily used by hotel staff to submit and manage renovation requests internally. It's not intended for general public use. Ensure that you only access this form if you have the necessary permissions and clearance. Please do not duplicate or modify existing renovation requests without approval. If you have any questions or concerns, contact the hotel management team.</thinking>

# Hotel Renovation Requisition Form - Help Guide
## Purpose
The Hotel Renovation Requisition Form is used to submit and manage renovation requests for hotel properties. It allows users to provide detailed descriptions of the requested renovations, specify priority levels and costs, and track the status of the requests.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter a brief description of the renovation request in the **renovation_description** field.
2.  Select the **property_location** where the renovation will take place.
3.  Specify the **renovation_priority** level of the request (e.g., High, Medium, Low).
4.  Enter the estimated **renovation_cost** of the project.
5.  Choose the current **renovation_status** of the request (e.g., Awaiting approval, Approved, Declined, In progress, Completed).
6.  If applicable, select the team members or managers who have **approved_by** the request.
7.  Enter your **email** address and **phone** number for communication purposes.
8.  Optionally, add any additional **form_comments** or notes about the request.
9.  Click the "Submit" button to submit the form.

## Field-by-Field Explanation
* **form_title** (`form_title`, text, optional): Enter a descriptive title for the renovation request.
* **property_location** (`property_location`, text, required): Specify the location of the property where the renovation will take place.
* **renovation_description** (`renovation_description`, text, optional): Provide a detailed description of the renovation request.
* **renovation_priority** (`renovation_priority`, number, optional): Specify the priority level of the request (1=High, 2=Medium, 3=Low).
* **renovation_cost** (`renovation_cost`, number, optional): Enter the estimated cost of the renovation project.
* **renovation_status** (`renovation_status`, select_one, required): Choose the current status of the request (e.g., Awaiting approval, Approved, Declined, In progress, Completed).
* **approved_by** (`approved_by`, select_multiple, optional): Select team members or managers who have approved the request.
* **email** (`email`, email, required): Enter your email address for communication purposes.
* **phone** (`phone`, text, optional): Enter your phone number for communication purposes.
* **remarks** (`remarks`, note, optional): Add any additional notes or comments about the request.
* **created_date** (`created_date`, date, optional): Displays the date the request was created.
* **created_time** (`created_time`, time, optional): Displays the time the request was created.
* **updated_date** (`updated_date`, date, optional): Displays the date the request was last updated.
* **updated_time** (`updated_time`, time, optional): Displays the time the request was last updated.
* **form_comments** (`form_comments`, text, optional): Add any additional comments about the request.
* **form_id** (`form_id`, number, optional): A unique identifier for the request.
* **assigned_to** (`assigned_to`, text, optional): Specify the team member assigned to the request.
* **assigned_date** (`assigned_date`, date, optional): Displays the date the request was assigned.
* **updated_by** (`updated_by`, text, optional): Displays the team member who last updated the request.
* **updated_at** (`updated_at`, time, optional): Displays the time the request was last updated.
* **created_at** (`created_at`, time, optional): Displays the time the request was created.
* **last_updated** (`last_updated`, time, optional): Displays the last update time of the request.
* **last_updated_by** (`last_updated_by`, text, optional): Displays the team member who last updated the request.
* **created_by** (`created_by`, text, optional): Displays the team member who created the request.
* **submitted_at** (`submitted_at`, time, optional): Displays the time the request was submitted.
