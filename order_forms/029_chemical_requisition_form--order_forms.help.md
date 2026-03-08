<thinking>
This form is used by researchers and laboratory staff to request chemical requisitions from the chemical inventory manager. The form is typically used to request chemicals for specific projects or experiments, and requires detailed information about the chemicals needed, their quantities, and the purpose of use. To ensure accuracy and efficiency in the requisition process, it is essential to complete the form thoroughly and truthfully. Before filling out this form, please confirm that you have checked the existing inventory and that your supervisor has approved the request.
</thinking>

# Chemical Requisition Form - Help Guide
## Purpose
This form is used to request chemicals for specific projects or experiments.

## How To Complete This Form

1.  Enter your name and ID to identify yourself as the requester.
2.  Select your department from the options provided.
3.  Enter your contact information (email address and phone number) so that we can get in touch with you if needed.
4.  Choose a date for your request and when the chemicals are needed.
5.  Enter the project name and provide details about the chemicals needed, including their quantities and concentrations.
6.  List any additional chemicals that are required.
7.  Explain the purpose of use for the chemicals requested.
8.  Indicate where the chemicals will be stored.
9.  Identify any safety precautions or special handling instructions required.
10.  Indicate if any of the requested chemicals are hazardous and provide details if necessary.
11.  Confirm that you have checked the existing inventory.
12.  Enter a budget code or account number if applicable.
13.  Confirm that your supervisor has approved the request.
14.  Provide your supervisor's name (if applicable).
15.  Indicate if the request requires safety officer review.
16.  Enter any special instructions for handling or delivery of the chemicals.
17.  Finally, confirm that the information provided is accurate by signing the form.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, `text`, required): Your full name as the requester.
* **Requester ID** (`requester_id`, `text`, required): Your employee or student ID number.
* **Department** (`department`, `select_one`, required): Select your department from the options provided.
* **Email Address** (`email_address`, `email`, required): Your email address for communication.
* **Phone Number** (`phone_number`, `text`, required): Your contact phone number.
* **Request Date** (`request_date`, `date`, required): Date of this request.
* **Required Date** (`required_date`, `date`, required): When do you need the chemicals.
* **Project Name** (`project_name`, `text`, required): Name of project or experiment.
* **Chemical 1 Name** (`chemical_1_name`, `text`, required): Name of first chemical.
* **Chemical 1 Quantity** (`chemical_1_quantity`, `text`, required): Amount needed.
* **Chemical 1 Concentration** (`chemical_1_concentration`, `text`, optional): Required concentration or purity.
* **Chemical 2 Name** (`chemical_2_name`, `text`, optional): Name of second chemical.
* **Chemical 2 Quantity** (`chemical_2_quantity`, `text`, optional): Amount needed.
* **Chemical 2 Concentration** (`chemical_2_concentration`, `text`, optional): Required concentration or purity.
* **Chemical 3 Name** (`chemical_3_name`, `text`, optional): Name of third chemical.
* **Chemical 3 Quantity** (`chemical_3_quantity`, `text`, optional): Amount needed.
* **Chemical 3 Concentration** (`chemical_3_concentration`, `text`, optional): Required concentration or purity.
* **Additional Chemicals** (`additional_chemicals`, `text`, optional): List any other chemicals needed.
* **Purpose of Use** (`purpose_of_use`, `text`, required): How will these chemicals be used.
* **Storage Location** (`storage_location`, `text`, required): Where will chemicals be stored.
* **Safety Precautions Required** (`safety_precautions`, `text`, required): What safety measures are needed.
* **Are Any Chemicals Hazardous** (`hazardous_materials`, `select_one`, required): Do any require special handling.
* **Hazardous Material Details** (`hazardous_details`, `text`, optional): Describe any hazardous materials.
* **Have You Checked Existing Inventory** (`previous_inventory_check`, `select_one`, required): Confirm you checked current stock.
* **Budget Code** (`budget_code`, `text`, optional): Budget or account code for this request.
* **Supervisor Approval** (`supervisor_approval`, `select_one`, required): Has your supervisor approved this request.
* **Supervisor Name** (`supervisor_name`, `text`, optional): Name of approving supervisor.
* **Safety Officer Review Required** (`safety_officer_review`, `select_one`, required): Does this request need safety review.
* **Special Instructions** (`special_instructions`, `text`, optional): Any special handling or delivery requirements.
* **Requester Signature** (`requester_signature`, `select_one`, required): I confirm this request is accurate.
