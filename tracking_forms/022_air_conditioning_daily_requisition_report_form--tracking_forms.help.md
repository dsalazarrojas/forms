# Air Conditioning Daily Requisition Report Form - Help Guide
## Purpose
The purpose of this form is to provide a daily report of air conditioning work performed by employees, allowing supervisors and managers to track and monitor progress and status.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in your employee name and ID.
2.  Enter the report date and the shift you worked.
3.  Fill in the job site location and customer name.
4.  Select the type of work performed and the equipment type.
5.  List any tools and equipment used during the job.
6.  Report any safety issues or concerns encountered.
7.  Complete all other sections as instructed.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, `text`, required): Enter your name as it appears on your ID badge.
* **Employee ID** (`employee_id`, `text`, required): Enter your ID number as assigned to you by the company.
* **Report Date** (`report_date`, `date`, required): Enter the date of the work performed.
* **Shift** (`shift`, `select_one`, required): Select the shift you worked from the options provided.
* **Job Site Location** (`job_site`, `text`, required): Enter the location of the job site where work was performed.
* **Customer Name** (`customer_name`, `text`, required): Enter the name of the customer or site contact.
* **Type of Work** (`work_type`, `select_one`, required): Select the type of work performed from the options provided.
* **Equipment Type** (`equipment_type`, `select_one`, required): Select the type of air conditioning equipment involved.
* **Equipment Brand** (`equipment_brand`, `text`, optional): Enter the brand of the equipment if applicable.
* **Work Description** (`work_description`, `text`, required): Provide a detailed description of the work performed.
* **Materials Used** (`materials_used`, `text`, required): List the materials consumed during the job.
* **Refrigerant Type** (`refrigerant_type`, `select_one`, optional): Select the type of refrigerant used if applicable.
* **Refrigerant Amount Added (lbs)** (`refrigerant_amount`, `number`, optional): Enter pounds of refrigerant added if applicable.
* **Parts Replaced** (`parts_replaced`, `text`, optional): List any parts replaced if applicable.
* **Part Numbers** (`parts_part_numbers`, `text`, optional): Enter part numbers if applicable.
* **Tools and Equipment Used** (`tools_used`, `select_multiple`, required): Select the tools and equipment used from the options provided.
* **Hours Worked** (`hours_worked`, `number`, required): Enter the total hours worked on the job.
* **Start Time** (`start_time`, `time`, required): Enter the time work started.
* **End Time** (`end_time`, `time`, required): Enter the time work ended.
* **System Status After Work** (`system_status`, `select_one`, required): Select the current system status after work from the options provided.
* **Test Results** (`test_results`, `text`, optional): Enter any test results if applicable.
* **Safety Issues Encountered** (`safety_issues`, `select_one`, required): Select any safety concerns encountered from the options provided.
* **Customer Satisfaction** (`customer_satisfaction`, `select_one`, required): Select the customer's satisfaction level from the options provided.
* **Follow-up Visit Needed** (`follow_up_needed`, `select_one`, required): Select if a follow-up visit is required from the options provided.
* **Follow-up Date** (`follow_up_date`, `date`, optional): Enter the scheduled follow-up date if a follow-up visit is required.
* **Vehicle Mileage** (`vehicle_mileage`, `number`, optional): Enter the vehicle mileage for this job if applicable.
* **Supervisor Name** (`supervisor_name`, `text`, required): Enter the name of your supervisor.
* **Employee Signature** (`employee_signature`, `text`, required): Enter your digital signature.
