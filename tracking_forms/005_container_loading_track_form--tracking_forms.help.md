# Container Loading Track Form - Help Guide

## Purpose
The purpose of this form is to track and record essential information about container loading operations. This form helps logistics managers and operators to monitor and manage container loading processes efficiently, ensuring accurate and up-to-date records of container loading activities.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant fields and fill in the required information for each field.
2. Ensure that all required fields are filled in according to the specified hints and guidelines.
3. Review and verify the accuracy of the information before submitting the form.

## Field-by-Field Explanation

* **Tracking Date (1)** (`tracking_date`, date, required): The date when the container loading operation began.
* **Shipment ID (2)** (`shipment_id`, text, required): Unique identification number for the shipment.
* **Container ID (3)** (`container_id`, text, required): Unique identification number for the container.
* **Origin Location (4)** (`origin_location`, text, required): The location where the container is being loaded.
* **Destination Location (5)** (`destination_location`, text, required): The final destination of the container.
* **Logistics Manager (6)** (`logistics_manager`, text, required): The name of the manager overseeing the loading operation.
* **Carrier Name (7)** (`carrier_name`, text, required): The name of the shipping company or carrier.
* **Container Size (8)** (`container_size`, select_one, required): The dimensions of the container, select one of: 20 feet Standard, 40 feet Standard, 40 feet High Cube, 45 feet High Cube.
* **Cargo Type (9)** (`cargo_type`, select_one, required): The general category of goods being shipped, select one of: Electronics, Machinery, Consumer Goods, Food Products, Textiles, Automotive Parts, Chemicals, Other.
* **Total Number of Packages (10)** (`total_packages`, number, required): The count of all packages in the container.
* **Total Weight (11)** (`total_weight`, number, required): The combined weight of all cargo.
* **Weight Unit (12)** (`weight_unit`, select_one, required): The unit of measurement for the weight, select one of: Kilograms, Pounds, Metric Tons.
* **Loading Start Time (13)** (`loading_start_time`, time, required): The time when the loading began.
* **Loading Completion Time (14)** (`loading_completion_time`, time, required): The time when the loading finished.
* **Loading Status (15)** (`loading_status`, select_one, required): The current status of the loading operation, select one of: Not Started, In Progress, Completed, Delayed, Cancelled.
* **Security Seal Applied (16)** (`seal_applied`, select_one, required): Whether the container has been sealed, select one of: True, False.
* **Seal Number (17)** (`seal_number`, text, optional): The security seal identification number.
* **Quality Check Passed (18)** (`quality_check_passed`, select_one, required): Whether the loading passed quality inspection, select one of: True, False, Pending.
* **Issues Encountered (19)** (`issues_encountered`, text, optional): Describe any problems that occurred during loading.
* **Expected Departure Date (20)** (`departure_date`, date, required): The expected date when the container will leave the facility.
* **Estimated Arrival Date (21)** (`estimated_arrival_date`, date, required): The estimated date of delivery at the destination.
* **Special Handling Instructions (22)** (`special_handling_instructions`, text, optional): Any special requirements for this shipment.
* **Tracking Notes (23)** (`tracking_notes`, text, optional): Additional comments or observations about the shipment.

Note: Fields marked as required must be filled in before submitting the form. Optional fields can be left blank unless otherwise specified.
