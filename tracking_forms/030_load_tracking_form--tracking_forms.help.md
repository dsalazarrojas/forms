# Load Tracking Form - Help Guide
## Purpose
The Load Tracking Form is designed to track the details of shipments, including weight, trailer number, load status, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: trailer number, shipment description, shipment date, and submitted by.
2. Optionally, add the shipment weight, weight unit, and shipment time.
3. Select the load status (Active, Inactive, or On Hold) and choose the weight unit (kg, lbs, or tons).
4. Choose the shipment location (Warehouse 1, Warehouse 2, or Warehouse 3) and select the assigned tool.
5. Optionally, add the assigned user.

## Field-by-Field Explanation

* **Trailer Number** (`trailer_number`, `select_one`, required): Enter the trailer number of the shipment.
* **Shipment Description** (`shipment_description`, `text`, required): Briefly describe the shipment.
* **Load Status** (`load_status`, `select_multiple`, required): Select the load status (Active, Inactive, or On Hold).
* **Weight Unit** (`weight_unit`, `select_multiple`, required): Choose the weight unit (kg, lbs, or tons).
* **Weight** (`weight`, `number`, required): Enter the weight of the shipment.
* **Shipment Date** (`shipment_date`, `date`, required): Enter the date of the shipment.
* **Shipment Time** (`shipment_time`, `time`, required): Enter the time of the shipment.
* **Shipment Location** (`shipment_location`, `select_multiple`, required): Choose the shipment location (Warehouse 1, Warehouse 2, or Warehouse 3).
* **Assigned Tool** (`assigned_tool`, `text`, required): Enter the assigned tool for the shipment.
* **Assigned User** (`assigned_user`, `text`, required): Enter the user assigned to the shipment.
* **Submitted By** (`submitted_by`, `select_one`, required): Choose the user who submitted the shipment.

## Tips
* Make sure to fill in all required fields.
* Double-check the shipment weight and unit for accuracy.
* Ensure the shipment status and location are up-to-date.
* If you're unsure about any field, please contact your supervisor for guidance.
