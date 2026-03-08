# Batch Analysis Report Request Form - Help Guide
## Purpose
The Batch Analysis Report Request Form is used to request analysis on specific batches of products or samples. This form collects necessary information about the batch and the analysis required.

## How To Complete This Form
1. Fill out the requestor's information (Full Name, Department/Division, Contact Email).
2. Provide the batch details (Batch ID, Product/Sample Name, Date of Manufacture).
3. Specify the type of analysis required (Select one or more options).
4. Choose the priority level for the analysis (Standard, Expedited, Urgent).
5. Enter the sample quantity and unit (e.g., 500ml, 1kg, 10 units).
6. Provide any special handling or safety instructions for the sample.
7. Specify any specific regulatory standards to be met (e.g., ISO 9001, FDA CFR 211, USP).
8. Finally, enter the date the request was made.

## Field-by-Field Explanation
* **Requestor Full Name** (`requestor_full_name`, `text`, required): Enter the full name of the person or organization requesting the analysis.
* **Department or Division** (`department_name`, `text`, required): Enter the name of the department or division associated with the batch.
* **Contact Email** (`contact_email`, `email`, required): Enter the email address where the report will be delivered to. This will be used for the report's delivery.
* **Batch ID or Lot Number** (`batch_id_number`, `text`, required): Enter the batch ID or lot number of the batch to be analyzed.
* **Product or Sample Name** (`product_name`, `text`, required): Enter the name of the product or sample being analyzed.
* **Date of Manufacture** (`manufacturing_date`, `date`, required): Enter the date the batch was manufactured.
* **Type of Analysis Requested** (`analysis_type_requested`, `select_multiple`, required): Select the type of analysis required (Chemical Composition, Microbiological Screening, Physical Properties Testing, Heavy Metal Analysis, Stability Testing, Potency Assay).
* **Priority Level** (`priority_level`, `select_one`, required): Choose the priority level for the analysis (Standard, Expedited, Urgent).
* **Sample Quantity and Units** (`sample_quantity_submitted`, `text`, required): Enter the quantity and unit of the sample (e.g., 500ml, 1kg, 10 units).
* **Special Handling or Safety Instructions** (`safety_handling_notes`, `text`, optional): Enter any special handling or safety instructions for the sample (e.g., Biohazard, Flammable, Keep Chilled).
* **Specific Regulatory Standards to Meet** (`additional_requirements`, `text`, optional): Enter any specific regulatory standards to be met (e.g., ISO 9001, FDA CFR 211, USP).
* **Submission Date** (`submission_date`, `date`, required): Enter the date the request was made.
