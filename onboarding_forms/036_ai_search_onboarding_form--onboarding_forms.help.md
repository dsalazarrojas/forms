# AI Search Onboarding Form - Help Guide
## Purpose
This form is used to gather information from the end user for the purpose of onboarding their AI search solution.

## How To Complete This Form
To complete this form, please follow the steps below:

* Answer all the fields as completely and accurately as possible.
* Please use the correct format for email addresses when entering contact information.
* For the "Primary search use case" field, select one of the provided options that best describes the main purpose of the search.

## Field-by-Field Explanation
### Project name
* **Project name** (`project_name`, `text`, `required`): Enter a short project identifier.
*   Please use a unique and descriptive name that represents the project.

### Contact name
* **Contact name** (`contact_name`, `text`, `required`): Enter the primary contact's name for onboarding.
*   This is the person who will be responsible for setting up and managing the search environment.

### Contact email
* **Contact email** (`contact_email`, `email`, `required`): Enter the contact's email address.
*   This email will be used for communication and setup purposes.

### Primary search use case
* **Primary search use case** (`primary_use_case`, `select_one`, `required`): Choose one of the provided options that best describes the main purpose of the search.
*   This will help in setting up the search environment according to your needs.

### Data sources
* **Data sources to index** (`data_sources`, `select_multiple`, `required`): Select all data sources that apply.
*   This will help in determining which data sources to include in the search environment.

### Expected document volume
* **Expected document volume** (`expected_volume`, `number`, `optional`): Enter an approximate number of documents.
*   This will help in planning and setting up the search environment according to the expected volume.

### Privacy requirements
* **Privacy or residency requirements** (`privacy_requirements`, `text`, `optional`): Enter any restrictions on data location.
*   This will help in determining any specific requirements or restrictions on data location.

### Success metrics
* **Success metrics for onboarding** (`success_metrics`, `text`, `required`): Enter how success will be measured.
*   This will help in setting up goals and metrics for the onboarding process.

### Additional requests
* **Additional technical requests** (`additional_requests`, `text`, `optional`): Enter any additional technical requests.
*   This is an optional field for any additional technical requests or notes.
