# HOA Disclosures Form - Help Guide
## Purpose
This form is used to collect information from homeowners or property owners about their association's rules and regulations.

## How To Complete This Form
1. Fill in the required fields as accurately as possible.
2. Select the correct options for each field as per your association's rules and regulations.
3. Double-check your submissions for any errors or inaccuracies.

## Field-by-Field Explanation
* **HOA Disclosure** (`hoasubmission`, text, required): This is the main text field where you can provide a detailed description of the HOA's rules and regulations.
* **HOA Assessments** (`hoaassessments`, number, required): Enter the number of assessments or fees collected from homeowners or property owners.
* **HOA Frequency of Assessments** (`hoaassessments_2`, select_one, required): Choose the frequency of assessments (e.g., Monthly, Quarterly, Bi-Annually, Annually, As Needed).
* **HOA Maximum Assessment Value** (`hoaassessments_3`, number, required): Enter the maximum value of assessments collected from homeowners or property owners.
* **HOA Minimum Assessment Value** (`hoaassessments_4`, number, required): Enter the minimum value of assessments collected from homeowners or property owners.
* **HOA Rule Changes** (`hoaamendments`, select_one, required): Choose whether the HOA has rule changes (e.g., 'Yes', 'No').
* **HOA Rule Change Frequency** (`hoaamendments_2`, select_one, required): Choose the frequency of rule changes (e.g., Monthly, Quarterly, Bi-Annually, Annually, As Needed).
* **HOA Contact Information** (`hoacontactinfo`, text, required): Provide a detailed description of the contact information for the HOA.
* **HOA Contact Person** (`hoacontactinfo_2`, email, required): Enter the email address of the contact person for the HOA.
* **HOA Rules and Regulations** (`hoarules`, text, required): Enter a detailed description of the HOA's rules and regulations.

Note: This guide assumes that the provided YAML has some redundant fields. For actual implementation, the fields should be merged or restructured as necessary.
