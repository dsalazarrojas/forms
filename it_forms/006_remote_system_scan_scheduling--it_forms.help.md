# Remote System Scan Scheduling - Help Guide
## Purpose
The Remote System Scan Scheduling form is used to schedule and manage remote system scans. This form allows users to select time slots for scanning, specify scan requests, choose scan types, and record scan details such as start and end times, durations, and notes.

## How To Complete This Form
1. To start, select the time slots for which you want to schedule a scan. Choose one or more options from the drop-down menu to determine when the scan will take place.
2. If necessary, select the scan requests you want to make. This could include specific items or tasks to be scanned.
3. Choose a scan type to indicate the type of scan you need.
4. Optionally, choose a scan frequency to determine how often the scan will run.
5. Enter a start time for the scan.
6. Enter a duration for the scan.
7. Record any additional notes about the scan.
8. Finally, record the status of the scan.

## Field-by-Field Explanation

* **Time Slots** (`time_slots`, select_multiple, required=false): Select one or more time slots from the dropdown menu to determine when the scan will take place.
* **Scan Requests** (`scan_requests`, select_one, required=false): If necessary, select the scan requests you want to make. This could include specific items or tasks to be scanned.
* **Scan Type** (`scan_type`, text, required=false): Choose a scan type to indicate the type of scan you need (e.g., "Full System Scan", "Network Scan", etc.).
* **Scan Frequency** (`scan_frequency`, select_one, required=false): Optionally, choose a scan frequency to determine how often the scan will run (e.g., "Daily", "Weekly", etc.).
* **Scan Frequency 2** (`scan_frequency_2`, text, required=false): Enter any additional frequency details (e.g., "Every Tuesday and Thursday").
* **Scan Start Time** (`scan_start_time`, date, required=false): Enter the start time of the scan in date format (e.g., "2022-01-01 08:00").
* **Scan End Time** (`scan_end_time`, time, required=false): Enter the end time of the scan in time format (e.g., "12:00").
* **Scan Duration** (`scan_duration`, text, required=false): Enter the duration of the scan in a format such as "2 hours".
* **Scan Status** (`scan_status`, text, required=false): Record the status of the scan (e.g., "In Progress", "Complete", etc.).
* **Scan Notes** (`scan_notes`, text, required=false): Record any additional notes about the scan.
* **Time Slots 2** (`time_slots_2`, text, required=false): Enter any additional time slots details.
* **Time Slots 3** (`time_slots_3`, text, required=false): Enter any additional time slots details.
