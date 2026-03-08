# Screen Auto Lock Settings Form - Help Guide
## Purpose
The Screen Auto Lock Settings Form is designed to help users configure their screen auto-lock settings for various devices, including Android, iOS, and Windows.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of device you are configuring the auto-lock settings for from the "Device Type" dropdown list.
2. Choose your preferred operating system from the "OS" dropdown list.
3. Enter the current auto-lock timeout in minutes for the selected device.
4. Select the preferred auto-lock timeout in minutes.
5. Choose whether to allow exceptions to the auto-lock rule, including allowing the device to never lock or to lock after a certain amount of time.
6. Select the timeout for exceptions in minutes.
7. (Optional) Note any additional drag-and-drop settings or indicate that no code should be applied.

## Field-by-Field Explanation
* **Device Type** (`form_1`, `select_one`, required: false): Select the type of device you are configuring the auto-lock settings for. Choose from Android, iOS, or Windows.
* **OS** (`form_2`, `select_one`, required: false): Select the operating system of the device.
* **Current Timeout** (`form_3`, `number`, required: false): Enter the current auto-lock timeout in minutes for the selected device.
* **Preferred Timeout** (`form_4`, `number`, required: false): Enter the preferred auto-lock timeout in minutes.
* **Exception Requests** (`form_5`, `select_multiple`, required: false): Choose whether to allow exceptions to the auto-lock rule. Select from Never, 15, or 30 minutes.
* **Exception Timeout** (`form_6`, `select_one`, required: false): Select the timeout for exceptions in minutes.
* **Drag and Drop** (`form_7`, `note`, required: false): Note any drag-and-drop settings specific to the selected device.
* **No Code** (`form_8`, `note`, required: false): Indicate if you don't want any code to be applied on the selected device.
