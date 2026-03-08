# service_record_form - Help Guide
## Purpose
The Service Record Form is used to track and record vehicle service history. This form provides a comprehensive view of a vehicle's maintenance and service history, including service dates, vehicle status, and cost information.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the vehicle history tab.
2. Fill in the service history section, which includes the service status, history dates, and any service notes.
3. Fill in the vehicle information, including vehicle type, model, year, and current mileage.
4. Enter the last service details, including the service date, cost, and status.
5. Enter the next service details, including due date, mileage, and status.
6. If applicable, select the staff member responsible for the task and the date they were assigned to it.
7. Review and submit the form when complete.

## Field-by-Field Explanation
- **Service Record Form** (`service_record_form`, note, required: false): This is the main title of the form.
- **Vehicle History** (`vehicle_history`, text, required: false): Enter a brief description of the vehicle's history.
- **Usage** (`usage`, text, required: false): Describe how the vehicle is used (e.g., personal, commercial, etc.).
- **Maintenance Dates** (`maintenance_dates`, date, required: false): Enter the dates for any scheduled or completed maintenance work.
- **Service History** (`service_history`, select_multiple, required: false): Select all the services that have been completed for this vehicle, such as Fuel Service or Maintenance.
- **Fuel Efficiency** (`fuel_efficiency`, number, required: false): Enter the vehicle's current fuel efficiency rating.
- **Service History Dates** (`service_history_dates`, date, required: false): Enter the dates for all completed services.
- **Staff Assigned** (`staff_assigned`, select_one, required: false): Select the staff member responsible for the task.
- **Service Status** (`service_status`, select_one, required: false): Select the current status of the service, such as Completed, Pending, or Cancelled.
- **Vehicle Type** (`vehicle_type`, select_one, required: false): Select the type of vehicle, such as Car or Truck.
- **Vehicle Model** (`vehicle_model`, select_one, required: false): Select the vehicle model or type.
- **Vehicle Year** (`vehicle_year`, number, required: false): Enter the vehicle's year of manufacture.
- **Vehicle Mileage** (`vehicle_mileage`, number, required: false): Enter the current mileage of the vehicle.
- **Last Service Date** (`last_service_date`, date, required: false): Enter the date of the last service.
- **Last Service Cost** (`last_service_cost`, number, required: false): Enter the cost of the last service.
- **Last Service Mileage** (`last_service_mileage`, number, required: false): Enter the mileage at the time of the last service.
- **Last Service Status** (`last_service_status`, select_one, required: false): Select the status of the last service, such as Completed, Pending, or Cancelled.
- **Last Service Notes** (`last_service_notes`, text, required: false): Enter any notes about the last service.
- **Next Service Due Date** (`next_service_due_date`, date, required: false): Enter the date of the next scheduled service.
- **Next Service Mileage** (`next_service_mileage`, number, required: false): Enter the mileage at which the next service is due.
- **Next Service Cost** (`next_service_cost`, number, required: false): Enter the cost of the next service.
- **Next Service Status** (`next_service_status`, select_one, required: false): Select the status of the next service, such as Completed, Pending, or Cancelled.
- **Next Service Notes** (`next_service_notes`, text, required: false): Enter any notes about the next service.
- **Assigned To** (`assigned_to`, select_one, required: false): Select the staff member responsible for the next service.
- **Assigned Date** (`assigned_date`, date, required: false): Enter the date assigned to the staff member.
