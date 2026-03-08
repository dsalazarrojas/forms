# Library Organization Structure Survey - Help Guide
## Purpose
The Library Organization Structure Survey is designed to gather essential information about a library's internal organization and staffing to help in its effective management and development.

## How To Complete This Form
1. Start by reading the form's purpose and this guide to understand what is being asked.
2. Begin by describing the main organizing unit of your library in the "Main Organizing Unit" field.
3. In the "Main Organizing Unit Department" field, provide more details about the department's specific responsibilities.
4. In the "Main Organizing Unit Department Head" field, describe the head of the department.
5. Select the type of reporting line your library uses in the "Reporting Line" field. If unsure, refer to your library's organizational chart or ask your manager for clarification.
6. Provide a brief description of your library's reporting line in the "Reporting Line Description" field.
7. Choose the staff categories that apply to your library in the "Staffing" field. Multiple selections are allowed.
8. Estimate the number of staff currently employed in the main organizing unit in the "Staffing Level" field.
9. Enter the total number of staff currently employed in the main organizing unit in the "Total Staff" field.
10. Calculate and enter the current staffing ratio (staff per 1000 items) in the "Staffing Ratio" field.

## Field-by-Field Explanation
* **Main Organizing Unit** (`main_organizing_unit`, text, required: false): Describe the main organizing unit of your library, such as a branch, department, or section.
* **Main Organizing Unit Department** (`main_organizing_unit_department`, text, required: false): Provide more details about the department's specific responsibilities and duties.
* **Main Organizing Unit Department Head** (`main_organizing_unit_department_head`, text, required: false): Describe the head of the main organizing unit department.
* **Reporting Line** (`reporting_line`, select_one, required: false):
	+ **Flat**: A flat reporting line means that there are no hierarchical levels of management.
	+ **Hierarchical**: A hierarchical reporting line means that there are multiple levels of management.
* **Reporting Line Description** (`reporting_line_description`, text, required: false): Briefly describe the reporting line of your library.
* **Staffing** (`staffing`, select_multiple, required: false):
	+ **Librarian**: This category includes librarians and other staff responsible for collection development, reader services, and other traditional library roles.
	+ **Technical**: This category includes staff responsible for the library's infrastructure, such as IT, maintenance, and facilities management.
	+ **Support Staff**: This category includes staff members who provide administrative and support services to the library, such as secretaries and administrative assistants.
* **Staffing Level** (`staffing_level`, text, required: false): Estimate the number of staff currently employed in the main organizing unit.
* **Total Staff** (`total_staff`, text, required: false): Enter the total number of staff currently employed in the main organizing unit.
* **Staffing Ratio** (`staffing_ratio`, number, required: false): Calculate and enter the current staffing ratio (staff per 1000 items) of your library.
