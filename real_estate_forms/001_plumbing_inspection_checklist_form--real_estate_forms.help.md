# plumbing_inspection_checklist_form - Help Guide
## Purpose

The plumbing inspection checklist form is a tool for inspectors and clients to document and track the condition of various plumbing systems in a location. This form is designed to be completed by the inspector after a thorough inspection of the plumbing systems.

## How To Complete This Form

1. Fill in the relevant information for the location being inspected.
2. Answer the questions and select the relevant options according to your findings.
3. Take note of any issues or defects found during the inspection.
4. Make any necessary recommendations for repairs or maintenance.
5. Sign and date the form to confirm that you have completed the inspection.

## Field-by-Field Explanation

* **house address** (`house_address`, `text`, required: false): Enter the address of the location being inspected.
* **client name** (`client_name`, `text`, required: false): Enter the name of the client or building owner.
* **inspector name** (`inspector_name`, `text`, required: false): Enter the name of the inspector completing the form.
* **date of inspection** (`date_of_inspection`, `date`, required: false): Enter the date the inspection was completed.
* **goals of inspection** (`goals_of_inspection`, `text`, required: false): Enter the reasons for conducting the inspection.
* **plumbing systems checked** (`plumbing_systems_checked`, `select_multiple`, required: false): Select all plumbing systems inspected, such as 'Yes' for yes and 'No' for no.
* **systems checked included** (`systems_checked_included`, `text`, required: false): List the systems checked during the inspection.
* **fixtures checked** (`fixtures_checked`, `select_multiple`, required: false): Select all fixtures inspected, such as 'Yes' for yes and 'No' for no.
* **type of fixtures** (`fixtures_type`, `select_multiple`, required: false): Select the type of fixtures checked during the inspection.
* **water quality** (`water_quality`, `select_multiple`, required: false): Select the water quality observed during the inspection, such as 'Good' or 'Poor'.
* **water source** (`water_source`, `text`, required: false): Enter the source of water supply.
* **inspection results** (`inspection_results`, `note`, required: false): Write any notes or observations about the inspected systems.
* **recommendations** (`recommendations`, `text`, required: false): Make any necessary recommendations for repairs or maintenance.
* **notes** (`notes`, `text`, required: false): Add any additional comments or observations.
* **photos taken** (`photos_taken`, `number`, required: false): Enter the number of photos taken during the inspection.
* **date of completion** (`date_of_completion`, `date`, required: false): Enter the date the form was completed.
* **completion notes** (`completion_notes`, `text`, required: false): Add any additional comments or observations about the completion of the inspection.
* **inspector signature** (`inspector_signature`, `text`, required: false): Enter your signature as the inspector.
* **client signature** (`client_signature`, `text`, required: false): Enter the client or building owner's signature.
* **date completed** (`date_completed`, `date`, required: false): Enter the date the form was completed.
