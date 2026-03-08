# Server Information Collection Form - Help Guide
## Purpose
The Server Information Collection Form is designed to collect and track server information, including operating system, IP address, location, and other relevant details.

## How To Complete This Form
1. Fill out the form with the requested information for the server.
2. Ensure you complete all the required fields, marked with an asterisk (\*).
3. Review the information for accuracy before submitting the form.

## Field-by-Field Explanation

* **Server Name** (`server_name`, text, optional):
	+ A text input field for the server's name.
	+ This field is not required but helps with tracking and identification.
* **Operating System** (`operating_system`, select_one, required):
	+ A dropdown menu with three options: CentOS, Ubuntu, and Windows.
	+ Select the operating system of the server.
* **Server IP** (`server_ip`, text, required):
	+ A text input field for the server's IP address.
	+ This field is required to ensure accurate identification and communication with the server.
* **Server Location** (`server_location`, text, required):
	+ A text input field for the server's physical location.
	+ This field is required for logistical and infrastructure planning purposes.
* **Server Type** (`server_type`, select_multiple, optional):
	+ A dropdown menu with two options: physical and virtual.
	+ Select the server type, if applicable.
* **Server OS Version** (`server_os_version`, text, optional):
	+ A text input field for the server's operating system version.
	+ This field is optional but helpful for software updates and compatibility checks.
* **Server Vendor** (`server_vendor`, text, optional):
	+ A text input field for the server's vendor information.
	+ This field is optional but useful for vendor-specific support and maintenance.
* **Notes** (`notes`, note, optional):
	+ A text area for any additional notes or comments about the server.
	+ This field is optional and can be used to store any relevant information.
