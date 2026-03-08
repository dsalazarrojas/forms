# Maintenance Work Order Form - Help Guide
## Purpose
The Maintenance Work Order Form is used to create and manage maintenance work orders for equipment and maintenance activities.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the equipment that requires maintenance.
2. Choose the technician assigned to perform the maintenance activity.
3. Enter the scheduled start and end dates for the maintenance activity.
4. Provide a brief description of the maintenance activity.
5. Enter the expected cost of the maintenance activity.
6. Update the status of the work order as necessary.
7. Select the tool or equipment used for the maintenance activity.

## Field-by-Field Explanation

* **Equipment**: Select the equipment that requires maintenance.
  - Label: `Equipment`
  - Type: `number`
  - Required: `false`

* **Technician**: Choose the technician assigned to perform the maintenance activity.
  - Label: `Technician`
  - Type: `number`
  - Required: `false`

* **Start Date**: Enter the date and time when the maintenance activity is scheduled to begin.
  - Label: `Start Date`
  - Type: `date`
  - Required: `false`

* **End Date**: Enter the date and time when the maintenance activity is scheduled to end.
  - Label: `End Date`
  - Type: `date`
  - Required: `false`

* **Description**: Provide a brief description of the maintenance activity.
  - Label: `Description`
  - Type: `text`
  - Required: `false`

* **Cost**: Enter the expected cost of the maintenance activity.
  - Label: `Cost`
  - Type: `number`
  - Required: `false`

* **Status**: Select the current status of the work order (Active, Inactive, Cancelled, Completed).
  - Label: `Status`
  - Type: `select_multiple`
  - Required: `false`

* **Assigned Tool**: Select the tool or equipment used for the maintenance activity.
  - Label: `Assigned Tool`
  - Type: `select_one`
  - Required: `false`
  - Options: chatjimmy, Other
