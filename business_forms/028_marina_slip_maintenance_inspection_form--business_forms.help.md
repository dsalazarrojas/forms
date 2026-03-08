# Marina Slip Maintenance Inspection Form - Help Guide
## Purpose
The Marina Slip Maintenance Inspection Form is used by marina staff to track and manage maintenance tasks for marina slips. The form helps keep track of maintenance status, assigned person, and due dates.

## How To Complete This Form
To complete this form, follow the steps below:

1.  Start by selecting the "slip_status" field, which should be set to "Active" if the slip is currently in use or "Inactive" if it's not.
2.  Enter the slip number in the "slip_number" field.
3.  Select the "maintenance_status" field and choose the status that best describes the maintenance situation, such as "Not Started," "In Progress," "Completed," or "Deferred."
4.  Enter the date when the maintenance was due in the "maintenance_due_date" field, if applicable.
5.  Enter the name and contact information for the person assigned to perform the maintenance in the "contact_name," "contact_phone," and "contact_email" fields.
6.  Select the "assigned_person" field and enter the name of the person assigned to perform the maintenance.
7.  Select the "assigned_date" field and enter the date when the maintenance was assigned.
8.  Optionally, enter a note in the "note" field for any additional comments.

## Field-by-Field Explanation

* **slip_status** (slip_number, select_one, required): Select the status of the slip, either "Active" or "Inactive."
* **slip_number** (slip_number, number, required): Enter the slip number.
* **maintenance_status** (maintenance_status, select_multiple, required): Select the status of the maintenance task, such as "Not Started," "In Progress," "Completed," or "Deferred."
* **inspection_date** (inspection_date, date, required): Currently not used in this form, this field can be ignored.
* **slip_inspect** (slip_inspect, time, required): Enter the time of inspection, currently not used in this form, this field can be ignored.
* **note** (note, note, required): Enter any additional comments or notes about the slip maintenance.
* **contact_name** (contact_name, text, required): Enter the name of the person in contact with regarding the slip maintenance.
* **contact_phone** (contact_phone, text, required): Enter the phone number of the contact person.
* **contact_email** (contact_email, email, required): Enter the email address of the contact person.
* **assigned_person** (assigned_person, text, required): Enter the name of the person assigned to perform the maintenance.
* **assigned_date** (assigned_date, date, required): Enter the date when the maintenance was assigned.
* **maintenance_due_date** (maintenance_due_date, date, required): Enter the date when the maintenance is due.

Tips:
* Make sure to select the correct slip status and maintenance status.
* Ensure that you enter the correct contact information for the assigned person.
* If the maintenance is due, be sure to enter the due date.
* Use the "note" field for any additional comments or information.
