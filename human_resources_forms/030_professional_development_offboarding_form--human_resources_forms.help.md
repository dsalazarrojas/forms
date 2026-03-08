<thinking>
As an expert form designer and technical writer, I must admit that I need to make an assumption about the form purpose based on the provided YAML schema. I will infer that the "Professional Development Offboarding Form" is used to document an employee's departure from the company, including details such as the last day of work, reason for leaving, outplacement services, and next steps. It's used by HR or a similar department to maintain accurate employee departure records.

Before creating the help guide, let's review the schema to ensure it's comprehensive. From the given YAML, I observe that the form covers various aspects of offboarding, including:

1. Employee details (employee name, ID, and manager name)
2. Transition plan
3. Last day of work
4. Reason for departure
5. Outplacement services
6. Exit interview
7. Next steps

This form appears to be a comprehensive guide for offboarding procedures, ensuring a structured and systematic approach to managing employee departures.

</thinking>

# Professional Development Offboarding Form - Help Guide

## Purpose
The Professional Development Offboarding Form is used to document an employee's departure from the company, ensuring accurate and comprehensive records for HR and management teams.

## How To Complete This Form

To complete this form, follow the steps below:

1. Fill in the employee details section (Employee Name, Employee ID, and Manager Name) as required.
2. Provide a transition plan for the employee's exit, if applicable.
3. Enter the last day of work for the employee.
4. Specify the reason for the employee's departure.
5. Check if outplacement services are necessary and provide justification if required.
6. Indicate if an exit interview is necessary and add any relevant comments.
7. Check if a final check is required and provide any additional comments.
8. Record the last contact with the employee and add any relevant details.
9. Specify the return date and time, if applicable.
10. Provide a reason for the return, if applicable.
11. Add any comments about the return, if applicable.
12. Outline the next steps for the employee, including any relevant details and deadlines.
13. Add any final notes about the employee's departure.

## Field-by-Field Explanation

* **Transition Plan** (`transition_plan`, `text`, required: false): A brief description of the employee's transition plan, including any training or support provided during the offboarding process.
* **Employee Name** (`employee_name`, `text`, required: false): The name of the employee departing from the company.
* **Employee ID** (`employee_id`, `number`, required: false): The ID number of the employee.
* **Manager Name** (`manager_name`, `text`, required: false): The name of the employee's manager.
* **Last Day of Work** (`last_day_of_work`, `date`, required: false): The date the employee's last day of work was.
* **Reason for Departure** (`reason_for_departure`, `text`, required: false): The reason for the employee's departure from the company.
* **Outplacement Services** (`outplacement_services`, `select_one`, required: false): Check if outplacement services are necessary.
* **Outplacement Services Justification** (`outplacement_services_justification`, `text`, required: false): A brief explanation for requesting outplacement services.
* **Exit Interview** (`exit_interview`, `select_one`, required: false): Check if an exit interview is required.
* **Exit Interview Comments** (`exit_interview_comments`, `text`, required: false): Any comments about the exit interview, if necessary.
* **Final Check** (`final_check`, `select_one`, required: false): Check if a final check is required.
* **Final Check Comments** (`final_check_comments`, `text`, required: false): Any comments about the final check, if necessary.
* **Last Contact** (`last_contact`, `time`, required: false): The time of the last contact with the employee.
* **Last Contact Details** (`last_contact_details`, `text`, required: false): Any additional details about the last contact.
* **Return Date** (`return_date`, `date`, required: false): The date the employee is expected to return, if applicable.
* **Return Time** (`return_time`, `time`, required: false): The time the employee is expected to return, if applicable.
* **Return Reason** (`return_reason`, `text`, required: false): The reason for the employee's return, if applicable.
* **Return Comments** (`return_comments`, `text`, required: false): Any comments about the employee's return, if necessary.
* **Next Steps** (`next_steps`, `text`, required: false): A description of the next steps for the employee, including any relevant details and deadlines.
* **Next Steps Details** (`next_steps_details`, `text`, required: false): Any additional details about the next steps.
* **Next Steps Date** (`next_steps_date`, `date`, required: false): The date for the next steps.
* **Next Steps Time** (`next_steps_time`, `time`, required: false): The time for the next steps.
* **Next Steps Reason** (`next_steps_reason`, `text`, required: false): The reason for the next steps.
* **Next Steps Comments** (`next_steps_comments`, `text`, required: false): Any comments about the next steps, if necessary.
* **Notes** (`notes`, `text`, required: false): Any additional notes about the employee's departure.

## Tips

* Make sure to complete the form as soon as possible after the employee's last day of work to ensure accuracy and efficiency.
* Review and update the form regularly to reflect changes in the employee's status.
* Use this form as a reference guide for HR and management teams to maintain accurate and comprehensive records about employee departures.
