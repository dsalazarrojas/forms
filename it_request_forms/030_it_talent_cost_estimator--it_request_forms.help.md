# IT Talent Cost Estimator - Help Guide
## Purpose
The IT Talent Cost Estimator is a tool used to estimate the cost of labor and overhead costs for a given job role and location.

## How To Complete This Form
1. Select the "Yes" or "No" option for each field as it applies to the job role:
	* Role: Choose "Yes" if this is a new job role, "No" otherwise.
	* Location: Choose "Yes" if this is a new location, "No" otherwise.
	* Duration: Choose "Yes" if this is a project that will span multiple days or weeks, "No" otherwise.
2. Enter the role and location descriptions in the text fields. These fields should be as brief as possible while still conveying the necessary information.
3. Enter the labor cost, overhead cost, and tax rate as numerical values.
4. The total cost will be automatically calculated and displayed after filling out all the fields.
5. Specify the filename to save the generated estimate.

## Field-by-Field Explanation

* **Role** (`Role`, `select_one`, required: false): Choose "Yes" if this is a new job role, "No" otherwise.
* **Location** (`Location`, `select_one`, required: false): Choose "Yes" if this is a new location, "No" otherwise.
* **Duration** (`Duration`, `select_one`, required: false): Choose "Yes" if this is a project that will span multiple days or weeks, "No" otherwise.
* **Role Description** (`Role Description`, `text`, required: false): Briefly describe the job role.
* **Location Description** (`Location Description`, `text`, required: false): Briefly describe the location of the job.
* **Labor Cost** (`Labor Cost`, `number`, required: false): Enter the cost per hour of labor for this role.
* **Overhead Cost** (`Overhead Cost`, `number`, required: false): Enter the overhead cost for this role.
* **Tax Rate** (`Tax Rate`, `number`, required: false): Enter the tax rate to apply to labor and overhead costs.
* **Total Cost** (`Total Cost`, `number`, required: false): This field will display the total cost after filling out all the fields.
* **Output File** (`Output File`, `text`, required: false): Specify the filename to save the generated estimate.
