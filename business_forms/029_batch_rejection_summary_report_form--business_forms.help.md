<thinking> 
This form, the Batch Rejection Summary Report Form, is intended to document the rejection of batches that fail to meet release standards. It's essential to use this form to ensure that incidents are properly recorded and communicated across the organization. 

The form is used to capture details about the rejected batch, including the reason for rejection, the impact analysis, and the corrective and preventive actions to be taken. 

To avoid duplication of effort, please use this form to document every batch rejection incident.

</thinking>

# Batch Rejection Summary Report Form - Help Guide
## Purpose
The Batch Rejection Summary Report Form is used to document and report batches that have failed to meet release standards. It captures essential information about the rejected batch, including the reason for rejection, impact analysis, and corrective actions to be taken.

## How To Complete This Form
1. Fill in the required fields as described below.
2. Complete the form in its entirety before submitting it for review and approval.

## Field-by-Field Explanation
* **Reporting Officer** (`reporting_officer`, text, required): Fill in the name and title of the officer or personnel responsible for reporting the batch rejection.
* **Rejected Batch ID** (`rejected_batch_id`, text, required): Enter the ID of the rejected batch.
* **Date of Rejection** (`rejection_date`, date, required): Enter the date when the batch was rejected.
* **Primary Reason for Rejection** (`reason_for_rejection`, select_one, required): Select the primary reason for rejecting the batch from the given options:
	+ Material Contamination
	+ Failed Potency Assay
	+ Incorrect Packaging/Labeling
	+ Equipment Malfunction
	+ Human Error
	+ Regulatory Non-compliance
* **Detailed Description of the Defect** (`defect_description`, text, required): Provide a detailed description of the defect that led to the rejection.
* **Quantity of Rejected Material** (`rejected_quantity`, text, required): Enter the quantity of material rejected, including units (e.g., kg, liters, units).
* **Estimated Financial Loss** (`estimated_cost_loss`, number, required): Estimate the financial loss associated with the rejection.
* **Approved Disposal Method** (`disposal_method`, select_one, required): Select the approved method of disposal for the rejected batch.
* **Action Assigned To** (`capa_assigned_to`, text, required): Assign the action to be taken for the corrective and preventive actions (CAPA).
* **Completion Deadline** (`capa_deadline`, date, required): Set the deadline for completing the CAPA.
* **Summary of Immediate Corrective Action** (`capa_summary`, text, required): Summarize the immediate corrective action to be taken.
* **Operations Manager Signature/Name** (`final_approval_officer`, text, required): The Operations Manager's name and signature confirm approval.
* **Report Completion Timestamp** (`report_timestamp`, date, required): Enter the date and time when the report is completed. 

Note: All fields are required and must be filled in.
