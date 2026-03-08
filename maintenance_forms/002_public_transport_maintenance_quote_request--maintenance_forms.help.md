<thinking>This form, "public_transport_maintenance_quote_request", is designed to capture essential information for requesting public transport maintenance quotes. It's a critical form for maintenance coordinators, transport managers, and other stakeholders to gather necessary details about transport vehicles, their conditions, and required maintenance work. This form ensures accurate and efficient communication between agencies and transport providers. To complete this form, please ensure that all required fields are filled out correctly, and be concise in your descriptions to avoid any confusion. This form is not a duplicate of any other form, and its purpose is to provide a clear and concise way to request maintenance quotes.</thinking>

# public_transport_maintenance_quote_request - Help Guide
## Purpose
This form is used to request public transport maintenance quotes from agencies and transport providers.

## How To Complete This Form
To complete this form, please follow the instructions below:

* Ensure all required fields are filled out correctly.
* Be accurate and concise in your descriptions to avoid any confusion.
* Review the form before submitting to make sure all necessary information is included.

## Field-by-Field Explanation
* **Transport Vehicle** (`Transport Vehicle`): This field is used to specify the transport vehicle that requires maintenance.
  * Type: text
  * Required: Yes
* **vehicle_type** (`vehicle_type`): This field is a yes/no selection to indicate if the vehicle is under maintenance.
  * Type: select_one
  * Required: Yes
* **vehicle_registration** (`vehicle_registration`): This field is used to input the vehicle's registration number.
  * Type: text
  * Required: Yes
* **vehicle_condition** (`vehicle_condition`): This field is used to select the condition of the vehicle.
  * Type: select_multiple
  * Required: Yes
  * Options: Bus, Train, Other
* **maintenance_details** (`maintenance_details`): This field is used to describe the specific maintenance required for the vehicle.
  * Type: text
  * Required: Yes
* **quote_date** (`quote_date`): This field is used to select the date for the maintenance quote.
  * Type: date
  * Required: Yes
* **quote_time** (`quote_time`): This field is used to select the time for the maintenance quote.
  * Type: time
  * Required: Yes
* **agency_name** (`agency_name`): This field is optional and used to specify the agency name if known.
  * Type: text
  * Required: No
* **contact_name** (`contact_name`): This field is required to specify the contact name for the agency.
  * Type: text
  * Required: Yes
* **contact_phone** (`contact_phone`): This field is required to specify the contact phone number.
  * Type: text
  * Required: Yes
* **contact_email** (`contact_email`): This field is required to specify the contact email.
  * Type: email
  * Required: Yes
* **agency_contractor** (`agency_contractor`): This field is used to select if the agency is a contractor or not.
  * Type: select_one
  * Required: Yes
  * Options: Agency, Contractor
* **agency_notes** (`agency_notes`): This is an optional field for agency notes.
  * Type: note
  * Required: No
* **agency_contact_name** (`agency_contact_name`): This field is optional and used to specify the agency contact name.
  * Type: text
  * Required: No
* **agency_phone** (`agency_phone`): This field is optional and used to specify the agency phone number.
  * Type: text
  * Required: No
* **agency_email** (`agency_email`): This field is optional and used to specify the agency email.
  * Type: text
  * Required: No
* **agency_address** (`agency_address`): This field is optional and used to specify the agency address.
  * Type: text
  * Required: No
* **agency_comments** (`agency_comments`): This field is optional and used to specify agency comments.
  * Type: note
  * Required: No
* **quote_total_cost** (`quote_total_cost`): This field is required to specify the total cost of the maintenance quote.
  * Type: number
  * Required: Yes
* **quote_status** (`quote_status`): This field is used to select the maintenance quote status.
  * Type: select_one
  * Required: Yes
  * Options: Open, In progress, Closed
* **agency_status** (`agency_status`): This field is optional and used to select the agency status.
  * Type: select_one
  * Required: No
  * Options: Pending, Accepted, Rejected, Approved
* **comments** (`comments`): This field is optional and used to add any additional comments.
  * Type: text
  * Required: No
