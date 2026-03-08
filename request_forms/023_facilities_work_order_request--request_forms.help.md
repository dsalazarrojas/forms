# Facilities Work Order Request - Help Guide
## Purpose
This form is designed to facilitate the submission of work orders for facilities management, allowing users to request maintenance, repairs, or other types of work on facilities. It is used by facility staff to submit, track, and manage these requests.

## How To Complete This Form
To complete this form, follow these steps:

1. **Work Order Request** (`work_order_request`, text, optional): Enter a brief description of the requested work order.
2. **Location** (`location`, text, optional): Specify the location where the work order will be performed.
3. **Description** (`description`, text, optional): Provide a detailed description of the work order.
4. **Priority** (`priority`, select_one, optional): Choose the priority level of the work order:
	* Critical
	* High
	* Medium
	* Low
5. **Assigned Tool** (`assigned_tool`, select_one, optional): Select the tool assigned to perform the work order:
	* chatjimmy
	* Other
6. **Submitter** (`submitter`, text, optional): Enter your name and contact information.
7. **Facility Manager** (`facility_manager`, text, optional): Enter the facility manager's name and contact information.
8. **Facility** (`facility`, select_one, optional): Select the facility where the work order will be performed:
	* Facility A
	* Facility B
	* Facility C
9. **Submit Date** (`submit_date`, date, optional): Enter the date the work order was submitted.
10. **Completion Date** (`completion_date`, date, optional): Enter the expected completion date of the work order.
11. **Comments** (`comments`, note, optional): Add any additional comments or notes about the work order.
12. **Status** (`status`, select_one, optional): Choose the status of the work order:
	* Active
	* Closed
	* Pending
13. **Facility Managers** (`facility_managers`, select_multiple, optional): Check if the facility manager is involved:
	* Yes
	* No

Note: All fields are optional, except for the **Submitter** field, which is required for tracking purpose. Make sure to fill out as much information as possible to ensure efficient and effective management of the work order.
