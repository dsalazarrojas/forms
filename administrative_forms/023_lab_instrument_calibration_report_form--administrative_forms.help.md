# Lab Instrument Calibration Report Form - Help Guide
## Purpose
The Lab Instrument Calibration Report Form is a document used to record and track the calibration status of laboratory instruments. It helps laboratory personnel to maintain accurate records, ensure compliance with calibration schedules, and prevent instrument malfunction.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the instrument's unique identifier (Instrument Id) and name (Instrument Name).
2. Select the calibration status (Calibration Status) and enter the calibration date (Calibration Date) if applicable.
3. Record the user responsible for the last calibration (Instrument Last Calibrated By) and enter the last calibration date (Instrument Last Calibrated Date) and location (Instrument Last Calibrated Location).
4. Provide notes about the calibration process and any issues encountered (Calibration Notes and Comments 2).
5. Enter the instrument's next due calibration date (Instrument Next Calibration Due Date) and location (Instrument Next Calibration Location).
6. Select the instrument's status (Instrument Status) and type (Instrument Type).

## Field-by-Field Explanation
### Instrument Id
*   **Instrument Id** (`instrument_id`, `Number`, `required: false`): Enter the unique identifier of the laboratory instrument.

### Instrument Name
*   **Instrument Name** (`instrument_name`, `Text`, `required: false`): Enter the name of the laboratory instrument.

### Serial Number
*   **Serial Number** (`serial_number`, `Text`, `required: false`): Enter the serial number of the laboratory instrument.

### Calibration Status
*   **Calibration Status** (`calibration_status`, `Select One`, `required: false`): Select the current calibration status of the instrument (Calibrated, Not Calibrated, or Maintenance Required).

### Calibration Date
*   **Calibration Date** (`calibration_date`, `Date`, `required: false`): Enter the date of the last calibration if the instrument is calibrated.

### User Id
*   **User Id** (`user_id`, `Number`, `required: false`): Enter the ID of the user responsible for the last calibration.

### Calibration Notes
*   **Calibration Notes** (`calibration_notes`, `Text Area`, `required: false`): Enter notes about the calibration process and any issues encountered.

### Comments
*   **Comments** (`comments`, `Text Area`, `required: false`): Enter any additional comments about the instrument or calibration process.

### Assigned User Id
*   **Assigned User Id** (`assigned_user_id`, `Number`, `required: false`): Enter the ID of the user assigned to calibrate or maintain the instrument.

### Instrument Model
*   **Instrument Model** (`instrument_model`, `Text`, `required: false`): Enter the model of the laboratory instrument.

### Instrument Manufacturer
*   **Instrument Manufacturer** (`instrument_manufacturer`, `Text`, `required: false`): Enter the manufacturer of the laboratory instrument.

### Instrument Calibrated
*   **Instrument Calibrated** (`instrument_calibrated`, `Select Multiple`, `required: false`): Select if the instrument is currently calibrated (True, False, Maybe).

### Instrument Location
*   **Instrument Location** (`instrument_location`, `Text`, `required: false`): Enter the current location of the laboratory instrument.

### Instrument Condition
*   **Instrument Condition** (`instrument_condition`, `Text`, `required: false`): Enter the current condition of the laboratory instrument.

### Instrument Last Calibrated By
*   **Instrument Last Calibrated By** (`instrument_last_calibrated_by`, `Text`, `required: false`): Enter the name of the user who performed the last calibration.

### Instrument Last Calibrated Date
*   **Instrument Last Calibrated Date** (`instrument_last_calibrated_date`, `Date`, `required: false`): Enter the date of the last calibration.

### Instrument Next Calibration Due Date
*   **Instrument Next Calibration Due Date** (`instrument_next_calibration_due_date`, `Date`, `required: false`): Enter the date when the next calibration is due.

### Instrument Next Calibration Location
*   **Instrument Next Calibration Location** (`instrument_next_calibration_location`, `Text`, `required: false`): Enter the location for the next calibration.

### Instrument Next Calibration By
*   **Instrument Next Calibration By** (`instrument_next_calibration_by`, `Text`, `required: false`): Enter the name of the user responsible for the next calibration.

### Instrument Last Calibrated By 2
*   **Instrument Last Calibrated By 2** (`instrument_last_calibrated_by_2`, `Text`, `required: false`): Enter the name of the user who performed the last calibration.

### Instrument Last Calibrated Location
*   **Instrument Last Calibrated Location** (`instrument_last_calibrated_location`, `Text`, `required: false`): Enter the location where the last calibration was performed.

### Instrument Last Calibrated By 3
*   **Instrument Last Calibrated By 3** (`instrument_last_calibrated_by_3`, `Text`, `required: false`): Enter the name of the user who performed the last calibration.

### Comments 2
*   **Comments 2** (`comments_2`, `Text Area`, `required: false`): Enter any additional comments about the instrument or calibration process.

### Instrument Status
*   **Instrument Status** (`instrument_status`, `Select One`, `required: false`): Select the current status of the instrument (Active, Inactive, or Decommissioned).

### Instrument Type
*   **Instrument Type** (`instrument_type`, `Text`, `required: false`): Enter the type of laboratory instrument.
## Tips
*   Double-check the instrument's calibration status and due dates to avoid delays or missed calibrations.
*   Update the form regularly to maintain accurate records.
*   Enter the correct user ID and name for calibration events.
