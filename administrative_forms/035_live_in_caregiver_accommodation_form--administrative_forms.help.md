This internal reasoning block will explain the purpose of the form, check for relevance, and prevent duplication:

The "Live In Caregiver Accommodation Form" is used to gather information about a family member's accommodation needs and details of the caregiver's arrangement. This form is essential for caregivers and family members to provide accurate and reliable information about their accommodation requirements, which can help the administrative team make informed decisions about accommodation status. To ensure the form is completed accurately and efficiently, please review the fields carefully and provide the required information to the best of your ability.

</thinking>

# Live In Caregiver Accommodation Form - Help Guide
## Purpose
This form is designed to gather information about a family member's accommodation needs and details of the caregiver's arrangement, which helps the administrative team make informed decisions about accommodation status.

## How To Complete This Form
1. Review each field carefully to ensure you provide accurate and complete information.
2. Enter your family member's name in the **Family Member** field.
3. Enter your contact number in the **Contact Number** field.
4. Enter the caregiver's name in the **Caregiver Name** field.
5. Enter the start date of the accommodation in the **Accommodation Start Date** field.
6. Enter the end date of the accommodation in the **Accommodation End Date** field.
7. Select the type of accommodation arrangement in the **Accommodation Type** field. Options include:
	* Home Visit
	* Live In
	* Other
8. Enter a description of the accommodation needs in the **Accommodation Details** field.
9. Enter the number of care hours provided by the caregiver per week in the **Care Hours** field.
10. Select the current status of the accommodation in the **Accommodation Status** field. Options include:
	* Pending
	* Approved
	* Denied

## Field-by-Field Explanation

* **Family Member** (`family_member`, `text`, required: false): Enter the name of the family member requiring accommodation.
* **Contact Number** (`contact_number`, `text`, required: false): Enter your contact number for communication and follow-up.
* **Caregiver Name** (`caregiver_name`, `text`, required: false): Enter the name of the caregiver providing accommodation.
* **Accommodation Start Date** (`accommodation_start_date`, `date`, required: false): Enter the start date of the accommodation arrangement.
* **Accommodation End Date** (`accommodation_end_date`, `date`, required: false): Enter the end date of the accommodation arrangement.
* **Accommodation Type** (`accommodation_type`, `select_multiple`, required: false): Select the type of accommodation arrangement. Options include:
	+ Home Visit
	+ Live In
	+ Other
* **Accommodation Details** (`accommodation_details`, `text`, required: false): Describe the accommodation needs of the family member.
* **Care Hours** (`care_hours`, `number`, required: false): Enter the number of hours per week the caregiver will provide care for.
* **Accommodation Status** (`accommodation_status`, `select_one`, required: false): Select the current status of the accommodation. Options include:
	+ Pending
	+ Approved
	+ Denied
* **Accommodation Notes** (`accommodation_notes`, `text`, required: false): Enter any additional comments or notes about the accommodation arrangement.
