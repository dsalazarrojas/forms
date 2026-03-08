# Building Maintenance Forecast Request Form - Help Guide
## Purpose
The Building Maintenance Forecast Request Form is a tool for staff and building administrators to submit and track maintenance requests for facilities. This form helps to ensure that all necessary work orders are prioritized and allocated according to urgency and resources available.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you have the necessary permissions and access to submit a request.
2.  Select the request date and ensure it is accurate.
3.  Provide the property address and its unique ID (if available).
4.  Specify who is making the request and their contact information.
5.  Choose the type of maintenance required (Preventive, Corrective, etc.).
6.  Describe the issue in detail, specifying any affected systems or areas of the building.
7.  Indicate the level of urgency and preferred completion date (if applicable).
8.  Optionally, provide estimated budget, historical information, equipment details, and supporting documentation.
9.  Add any additional comments or notes as necessary.

## Field-by-Field Explanation
### 1. Request Date
 * **Request Date** (`request_date`, date, required): Enter the date when this request was submitted.

### 2. Property Address
 * **Property Address** (`property_address`, text, required): Enter the address of the property where the maintenance is required.

### 3. Property ID
 * **Property ID** (`property_id`, text, optional): Enter the unique reference number for the property, if available.

### 4. Requester Information
 * **Requester Name** (`requester_name`, text, required): Enter the name of the person making this request.
 * **Email Address** (`requester_email`, email, required): Enter the email address of the person making this request.
 * **Phone Number** (`requester_phone`, text, optional): Enter the contact number of the person making this request.

### 5. Maintenance Type
 * **Type of Maintenance** (`maintenance_type`, select_one, required): Choose the category of maintenance required (Preventive, Corrective, etc.).

### 6. Issue Description
 * **Description of Issue** (`issue_description`, text, required): Provide a detailed explanation of the issue.

### 7. Affected Systems or Areas
 * **Affected Systems or Areas** (`affected_systems`, select_multiple, required): Specify the areas or systems affected by the issue.

### 8. Urgency Level
 * **Urgency Level** (`urgency_level`, select_one, required): Choose the urgency level for this request (Emergency - Immediate, High - Within 1 Week, Medium - Within 1 Month, Low - Planned Maintenance).

### 9. Preferred Completion Date
 * **Preferred Completion Date** (`forecast_date`, date, optional): Enter the target completion date for the maintenance, if applicable.

### 10. Estimated Budget
 * **Estimated Budget Range** (`estimated_budget`, select_one, optional): Choose the estimated budget range for this maintenance request (Under 1000, 1000 - 5000, 5000 - 10000, 10000 - 25000, Over 25000, Unknown).

### 11. Historical Issues
 * **Has This Issue Occurred Before** (`historical_issues`, select_one, optional): Indicate if this issue has occurred before.

### 12. Frequency
 * **How Often Does This Occur** (`frequency`, select_one, optional): Specify the frequency of this issue (One-time Issue, Occasional, Regularly, Constantly).

### 13. Impact on Occupancy
 * **Impact on Building Occupancy** (`occupancy_impact`, select_one, optional): Indicate if this issue affects the building's operations.

### 14. Equipment Information
 * **Equipment or System Information** (`equipment_info`, text, optional): Provide details about any affected equipment or systems (model number, age, etc.).

### 15. Supporting Documentation
 * **Supporting Documentation** (`documentation`, select_one, optional): Indicate if supporting photos or reports are available for this issue.

### 16. Additional Notes
 * **Additional Notes** (`notes`, text, optional): Enter any other relevant information about this request.
