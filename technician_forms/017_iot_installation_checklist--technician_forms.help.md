<thinking>
This form is designed to help technicians and administrators verify the status of IoT device installations in a specific location. It will likely be used in a variety of settings, such as commercial or industrial environments, where IoT devices are used for various purposes like automation, monitoring, or control systems. The form will help ensure that the installation meets the required standards and specifications for secure and safe operation.

The form will be used to gather information on the location of the installation, the type of device, and the status of its connections and power supply. It will also allow the technician to leave notes and comments on the installation, as well as capture their name, signature, and other relevant details.

The form has a simple layout with text fields for location information and a select-one field for device type. The form also includes fields for testing the security and power connections, as well as fields for notes and comments from the technician. This form will be useful for tracking and verifying the status of IoT device installations across different locations.

To avoid duplication of effort, the form should not be used for other purposes or in other contexts that are not related to IoT device installations.

Please note that the fields have the following requirements:
- location: text field
- device_type: select-one field with options IoT Device and Other
- connectivity_test: select_multiple field with options Secure, Not Secure, and Unable to Test
- power_test: select_multiple field with options Present, Not Present, and Unable to Test
- photo_attachment: note field for comments and notes from the technician
- installation_notes: note field for comments and notes from the technician
- technician_name: text field for the technician's name
- technician_signature: time field for the technician's signature
- location_notes: text field for additional location notes
- location_address: text field for location address
- location_city: text field for location city
- location_state: text field for location state
- location_zip: text field for location zip code
- device_id: text field for device ID

Please ensure that the fields are populated as per the required and optional fields specified in the schema.</thinking>

# iot_installation_checklist - Help Guide
## Purpose
This form is designed to help technicians and administrators verify the status of IoT device installations in a specific location.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the location fields (location, location_notes, location_address, location_city, location_state, location_zip) with the relevant information.
2. Select the type of device installed (IoT Device or Other) and ensure it is secure (connectivity_test) and powered (power_test).
3. Add any additional notes or comments regarding the installation (installation_notes).
4. Provide your name and signature as the technician who performed the installation (technician_name, technician_signature).
5. Add any additional notes or comments regarding the location (location_notes).

## Field-by-Field Explanation

* **Location** (`location`, text): Enter the name or description of the location where the IoT device is installed.
* **Device Type** (`device_type`, select-one): Select the type of device installed (IoT Device or Other).
* **Connectivity Test** (`connectivity_test`, select_multiple): Check if all connections are secure. Options: Secure, Not Secure, Unable to Test.
* **Power Test** (`power_test`, select_multiple): Check if power is present. Options: Present, Not Present, Unable to Test.
* **Photo Attachment** (`photo_attachment`, note): Leave a comment or note about the installation.
* **Installation Notes** (`installation_notes`, note): Leave a comment or note about the installation.
* **Technician Name** (`technician_name`, text): Enter the name of the technician who performed the installation.
* **Technician Signature** (`technician_signature`, time): Enter the date and time of the technician who performed the installation.
* **Location Notes** (`location_notes`, text): Leave a comment or note about the location.
* **Location Address** (`location_address`, text): Enter the address of the location where the IoT device is installed.
* **Location City** (`location_city`, text): Enter the city where the IoT device is installed.
* **Location State** (`location_state`, text): Enter the state where the IoT device is installed.
* **Location Zip** (`location_zip`, text): Enter the zip code of the location where the IoT device is installed.
* **Device ID** (`device_id`, text): Enter the ID of the device installed.
