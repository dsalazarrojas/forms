# Building Demolition Permit Application Form - Help Guide
## Purpose
The Building Demolition Permit Application Form is used to gather essential information about a building demolition project, including the applicant's details, project specifics, and safety measures.

## How To Complete This Form
1. Fill out the form completely and accurately, ensuring all required fields are provided.
2. Provide the applicant's name, contact information, and job title.
3. Enter the property address and parcel number of the building to be demolished.
4. Choose the type of structure and its size, along with the number of stories.
5. Select the type of demolition and reason for demolishing the building.
6. Provide a detailed description of the reason for demolition and the estimated duration of the project.
7. Specify the demolition method and any hazardous materials present.
8. Choose the status of utilities and adjacent properties.
9. Provide dust control and debris disposal plans.
10. Submit all required documents and provide the contractor's license number and insurance coverage information.
11. Certify that all information is accurate.

## Field-by-Field Explanation
* **Applicant Name** (`applicant_name`, `text`, required): Please enter your full name.
* **Company Name** (`company_name`, `text`, required): Enter the full name of the company or organization you represent.
* **Job Title** (`title`, `text`, required): Enter your position within the company or organization.
* **Email Address** (`email`, `email`, required): Enter your contact email address.
* **Phone Number** (`phone`, `text`, required): Enter your contact phone number.
* **Application Date** (`application_date`, `date`, required): Choose the date the application was submitted.
* **Property Address** (`property_address`, `text`, required): Enter the full address of the building to be demolished.
* **Parcel Number** (`parcel_number`, `text`, required): Enter the tax parcel ID of the property.
* **Legal Description** (`legal_description`, `text`, optional): Enter the legal description of the property, if applicable.
* **Building Type** (`building_type`, `select_one`, required): Select the type of structure (e.g., Single Family Residence, Multi Family Residence, etc.).
* **Year Built** (`year_built`, `number`, optional): If known, enter the construction year of the building.
* **Building Size** (`building_size`, `number`, required): Enter the square footage of the building.
* **Number of Stories** (`number_of_stories`, `number`, required): Enter the total number of floors.
* **Demolition Type** (`demolition_type`, `select_one`, required): Select the type of demolition (e.g., Complete Demolition, Partial Demolition, etc.).
* **Reason for Demolition** (`demolition_reason`, `select_one`, required): Select the reason for demolishing the building (e.g., Structural Damage, Fire Damage, etc.).
* **Reason Description** (`reason_description`, `text`, required): Provide a detailed description of the reason for demolition.
* **Proposed Start Date** (`proposed_start_date`, `date`, required): Choose the start date of the demolition project.
* **Estimated Duration** (`estimated_duration`, `text`, required): Enter the estimated duration of the project.
* **Demolition Method** (`demolition_method`, `select_one`, required): Select the demolition method (e.g., Mechanical Demolition, Implosion, etc.).
* **Hazardous Materials Present** (`hazardous_materials`, `select_multiple`, required): Select all applicable hazardous materials present.
* **Hazardous Materials Report** (`hazardous_materials_report`, `select_one`, required): Choose whether a hazardous materials report has been completed or not.
* **Utility Disconnection** (`utility_disconnection`, `select_one`, required): Choose the status of utilities (e.g., All Disconnected, Partially Disconnected, etc.).
* **Adjacent Properties** (`adjacent_properties`, `text`, required): Enter the distance to the nearest structures.
* **Dust Control Plan** (`dust_control_plan`, `text`, required): Provide a description of dust mitigation measures.
* **Debris Disposal Plan** (`debris_disposal`, `text`, required): Describe the plan for debris disposal.
* **Traffic Impact** (`traffic_impact`, `text`, optional): Enter any expected impact on traffic.
* **Submitted Documents** (`submitted_documents`, `select_multiple`, required): Select all submitted documents (e.g., Site Plan, Demolition Plan, etc.).
* **Contractor License Number** (`contractor_license`, `text`, required): Enter the contractor's license number.
* **Insurance Coverage** (`insurance_coverage`, `text`, required): Enter the insurance policy number.
* **Applicant Certification** (`certification`, `select_one`, required): Certify that all information is accurate.
