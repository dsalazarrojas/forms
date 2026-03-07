<thinking>
The Network Inventory Survey form is intended to collect information about devices on the network. It's used to gather data about devices in the network, including inventory details such as department and location, device type and status, serial number, asset tag, last contacted date and time, priority level, upgrade status, and contact details (email and phone). This form will help administrators keep track of the network devices' condition, upgrade status, and other relevant information.
</thinking>

# Network Inventory Survey - Help Guide
## Purpose
The Network Inventory Survey form collects information about devices on the network, including inventory details, status, and contact information.

## How To Complete This Form
1. Select the appropriate option for 'device_type' from the select_one dropdown menu. If the device type is not listed, choose the 'Other' option and enter the custom type in the 'notes' field.
2. Enter the 'department_id' and 'location' fields to provide the device's department and location.
3. Input the 'serial_number' and 'asset_tag' fields with the device's serial number and asset tag.
4. Select 'Yes' or 'No' for 'upgrade_status' depending on whether the device has been upgraded.
5. Enter the 'last_contacted' date and time when the device was last contacted.
6. Input the 'email' and 'phone' fields with the device's contact information.

## Field-by-Field Explanation

* **device_inventory** (Required: False)
	+ A numerical field where you can input the number of devices in the inventory.
* **department_id** (Required: False)
	+ Enter the department ID of the device.
* **location** (Required: False)
	+ Enter the location of the device.
* **network_id** (Required: False)
	+ This field is not relevant as it is not used in the provided YAML.
* **device_type** (Required: False)
	+ Select the type of device using the select_one dropdown menu.
* **serial_number** (Required: False)
	+ Input the serial number of the device.
* **asset_tag** (Required: False)
	+ Input the asset tag of the device.
* **last_contacted** (Required: False)
	+ Enter the date when the device was last contacted.
* **last_contacted_time** (Required: False)
	+ Enter the time when the device was last contacted.
* **priority** (Required: False)
	+ Select the priority level of the device using the select_one dropdown menu.
* **upgrade_status** (Required: False)
	+ Select the upgrade status of the device using the select_multiple dropdown menu.
* **notes** (Required: False)
	+ Input any additional notes or comments about the device.
* **email** (Required: False)
	+ Input the device's contact email address.
* **phone** (Required: False)
	+ Input the device's contact phone number.

## Tips
- Make sure to fill out all required fields.
- Select the correct option for fields with dropdown menus.
- Input accurate and relevant information about the device's status and contact details. 
- Use the 'notes' field to store any additional comments or observations about the device.
