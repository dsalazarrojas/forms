# fleet_maintenance_declaration_form - Help Guide
## Purpose
This form is designed to collect information about fleet maintenance from a user. It aims to track and record maintenance history for vehicles.

## How To Complete This Form

To complete this form, please follow the steps below:

1. Start by entering general information about the vehicle, including its registration, type, and storage location.
2. Choose the correct vehicle type from the options provided.
3. Select the storage location where the vehicle is currently stored.
4. Enter the last maintenance date and time, as well as the last maintenance location.
5. Enter the next maintenance date and time, as well as the next maintenance location.
6. Add any additional notes if necessary.

## Field-by-Field Explanation

* **General Information** (`id: 1`, `text`, required): This field asks for general information about the vehicle.
* **Vehicle Registration** (`id: 2`, `text`, required): Enter the vehicle's registration number for identification purposes.
* **Vehicle Type** (`id: 3`, `select_one`, required): Choose the type of vehicle (Car, Truck, or Motorcycle) from the options provided.
* **Storage Location** (`id: 4`, `select_multiple`, required): Select the location where the vehicle is currently stored (Downtown or Uptown).
* **Maintenance Notes** (`id: 5`, `text`, false): Leave any additional notes or comments about the maintenance process.
* **Last Maintenance Date** (`id: 6`, `date`, required): Enter the date of the last maintenance.
* **Last Maintenance Time** (`id: 7`, `time`, required): Enter the time of the last maintenance.
* **Last Maintenance Location** (`id: 8`, `select_multiple`, required): Choose the location where the last maintenance was performed (Downtown or Uptown).
* **Additional Notes** (`id: 9`, `text`, false): Add any further notes about the vehicle or maintenance process.
* **Next Maintenance Date** (`id: 10`, `date`, required): Enter the date of the next planned maintenance.
* **Next Maintenance Time** (`id: 11`, `time`, required): Enter the time of the next planned maintenance.
* **Next Maintenance Location** (`id: 12`, `select_multiple`, required): Choose the location where the next maintenance will be performed (Downtown or Uptown).

## Tips

* Make sure to double-check the vehicle registration number for accuracy.
* Select the correct vehicle type to ensure accurate tracking.
* Enter the correct storage location to ensure the vehicle is properly located.
* Be precise when entering maintenance dates and times.
* Double-check the location of the last and next maintenance for accuracy.
