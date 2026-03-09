# Maid Service Work Order - Help Guide
## Purpose
This form is used to create a work order for a maid service, allowing you to schedule a cleaning appointment for a customer.

## How To Complete This Form
1. Fill out the form title to identify the purpose of the work order.
2. Enter the customer's name and address in the "Customer Name" and "Customer Address" fields, respectively.
3. Select a "Service Type" from the provided options (One-time or Recurring) to indicate the nature of the service required.
4. Choose a "Start Time" and "End Time" for the appointment.
5. Select a "Status" (Scheduled, Completed, or Cancel) to indicate the current status of the work order.
6. Optionally, provide "Service Notes" and "Client Instructions" if relevant to the appointment.
7. Assign the task to a specific person using the "Assigned To" field.
8. Finally, select a "Follow Up" option to schedule a reminder or further communication with the customer.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, `text`, Required): Enter the customer's name for whom the appointment is scheduled.
* **Customer Address** (`address`, `text`, Optional): Enter the customer's address for the appointment.
* **Appointment Date** (`appointment_date`, `date`, Required): Choose the date of the appointment.
* **Service Type** (`service_type`, `select_one`, Required): Select whether the service is "One-time" or "Recurring".
* **Start Time** (`start_time`, `time`, Required): Select the start time of the appointment.
* **End Time** (`end_time`, `time`, Required): Select the end time of the appointment.
* **Service Notes** (`service_notes`, `text`, Optional): Enter any additional notes related to the appointment.
* **Client Instructions** (`client_instructions`, `text`, Optional): Enter any specific instructions or requests from the customer.
* **Follow Up** (`follow_up`, `text`, Optional): Suggest a follow-up time or action for the customer.
* **Assigned To** (`assigned_to`, `text`, Required): Assign the task to a specific person.
* **Assigned Time** (`assigned_time`, `time`, Required): Assign a time for the task completion.
* **Status** (`status`, `select_one`, Required): Select the status of the work order (Scheduled, Completed, or Cancel).
* **Notes** (`notes`, `note`, Optional): Enter any additional notes related to the appointment.

## Tips
- Always ensure all required fields are filled out correctly to ensure form accuracy.
- Be specific and clear when providing customer instructions to avoid confusion.
- Consider using the "Recurring" service type for regular appointments and "One-time" for single visits.
- Review the "Assigned To" field carefully to ensure the correct person is responsible for the task.
