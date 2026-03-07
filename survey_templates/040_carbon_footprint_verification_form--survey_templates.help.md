# Carbon Footprint Verification Form - Help Guide

## Purpose
<thinking>
The Carbon Footprint Verification Form is designed to collect and verify information about an entity's carbon emissions. This form is used to assess the entity's carbon footprint, ensuring accuracy, completeness, and consistency in their reporting. The data collected will be used to identify potential issues or discrepancies in the entity's carbon footprint verification process.
</thinking>

## How To Complete This Form
To complete this form, follow these steps:

1. Provide entity information:
	* Entity name (individual or organization)
	* Entity type (individual, small business, large corporation, non-profit, educational institution, government agency, or other)
2. Provide contact details:
	* Contact person name
	* Contact email
	* Contact phone number
3. Report carbon emissions:
	* Total reported carbon emissions (mtCO2e)
	* Scope 1, 2, and 3 emissions (mtCO2e)
	* Calculation methodology used
4. Provide data sources and quality:
	* Data sources for calculations (e.g., utility bills, fuel purchases, vehicle odometer, flight records, third-party database, estimation methods, or other)
	* Data quality assessment (excellent, good, fair, poor)
5. Complete the verification checklist:
	* Confirm data completeness for all scopes
	* Availability of supporting documentation
	* Calculation accuracy assessment (verified, likely accurate, reasonable estimates, uncertain, unable to verify)
	* Organizational boundary consistency (fully consistent, mostly consistent, somewhat inconsistent, not consistent)
6. Provide the verification status:
	* Verification status (verified, conditionally verified, under review, unable to verify, failed verification)
7. Confirm your confidence level:
	* Verification confidence level (very high, high, moderate, low)
8. Report any issues or discrepancies:
	* If any issues or discrepancies were found during the verification process

## Field-by-Field Explanation

* **Entity name (individual or organization)** (`entity_name`, text, required): Enter the name of the entity being verified (e.g., a company or individual).
* **Entity type** (`entity_type`, select_one, required): Select the type of entity being verified (e.g., individual, small business, large corporation, etc.).
* **Contact person name** (`contact_name`, text, required): Enter the name of the contact person responsible for the entity's carbon footprint verification.
* **Contact email** (`contact_email`, email, required): Enter the contact email address of the contact person.
* **Contact phone** (`contact_phone`, text, required): Enter the contact phone number of the contact person.
* **Verification period** (`verification_period`, select_one, required): Select the verification period for the entity's carbon footprint (e.g., calendar year 2023, calendar year 2024, etc.).
* **Total reported carbon emissions (mtCO2e)** (`reported_total_emissions`, number, required): Enter the total reported carbon emissions in metric tons of CO2e.
* **Scope 1 emissions (mtCO2e)** (`scope_1_portion`, number, required): Enter the scope 1 emissions in metric tons of CO2e.
* **Scope 2 emissions (mtCO2e)** (`scope_2_portion`, number, required): Enter the scope 2 emissions in metric tons of CO2e.
* **Scope 3 emissions (mtCO2e)** (`scope_3_portion`, number, required): Enter the scope 3 emissions in metric tons of CO2e.
* **Calculation methodology used** (`calculation_methodology`, select_one, required): Select the calculation methodology used for the entity's carbon footprint verification (e.g., ISO 14064, GHG Protocol, etc.).
* **Data sources for calculations** (`data_sources`, select_multiple, required): Select all data sources used for calculations (e.g., utility bills, fuel purchases, etc.).
* **Data quality assessment** (`data_quality`, select_one, required): Assess the quality of the data used for calculations (e.g., excellent, good, fair, etc.).
* **Is data complete for all scopes?** (`data_completeness`, select_one, required): Confirm if the data is complete for all scopes.
* **Supporting documentation available?** (`documentation_available`, select_one, required): Confirm if supporting documentation is available.
* **Calculation accuracy assessment** (`calculation_accuracy`, select_one, required): Assess the accuracy of the calculation used (e.g., verified, likely accurate, etc.).
* **Organizational boundary consistency** (`boundary_consistency`, select_one, required): Confirm the consistency of the entity's organizational boundaries.
* **Verification status** (`verification_status`, select_one, required): Select the verification status of the entity's carbon footprint (e.g., verified, conditionally verified, etc.).
* **Verification confidence level** (`confidence_level`, select_one, optional): Select your confidence level in the verification (e.g., very high, high, etc.).
* **Issues or discrepancies found** (`issues_found`, text, optional): Report any issues or discrepancies found during the verification process.
* **Recommendations for improvement** (`recommendations`, text, optional): Provide recommendations for improvement if any issues or discrepancies were found.
