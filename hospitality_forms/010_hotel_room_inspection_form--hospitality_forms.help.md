<thinking>
The purpose of this form is to collect information about the condition of hotel rooms during inspections. This form will likely be used by hotel staff or management to assess the cleanliness, maintenance, and amenities of a room. I will assume that this form is used for internal record-keeping and reporting purposes, and that the fields are designed to provide a standardized and structured way of collecting this information. I will also assume that the form is intended to be completed by authorized staff members, who are familiar with the hotel's policies and procedures. I will base my explanation on the fields provided in the YAML configuration, but I will try to provide a clear and concise explanation for each field, without inventing unsupported business logic.
</thinking>

# Hotel Room Inspection Form - Help Guide
## Purpose
This form is designed to collect information about the condition of hotel rooms during inspections, allowing hotel staff or management to assess and report on the cleanliness, maintenance, and amenities provided in each room.

## How To Complete This Form
To complete this form, follow these steps:
1. Review the form carefully and ensure you are familiar with the fields and their purpose.
2. Select the correct options for each field, based on your observation of the room's condition.
3. Fill in any required fields, such as the Room Number and Date of Inspection.
4. Provide any additional comments or notes in the Notes field.
5. Submit the form once you have completed it.

## Field-by-Field Explanation
- **General Information** (`general_info`, text, optional): This field is intended to capture any relevant general information about the room, such as the guest's name or room assignment.
- **Room Condition** (`room_condition`, number, optional): This field is used to rate the overall condition of the room, with higher numbers indicating better condition.
- **Cleanliness** (`cleanliness`, number, optional): This field is used to rate the cleanliness of the room, with higher numbers indicating cleaner conditions.
- **Maintenance Issues** (`maintenance`, select_one, optional): Select one of the options to indicate any maintenance issues found in the room.
  * Option 1: No issues
  * Option 2: Minor issues
  * Option 3: Major issues
  * Option 4: Critical issues
- **Amenities** (`amenities`, select_multiple, optional): Select all applicable amenities that are available in the room.
  * Option 1: TV
  * Option 2: Wi-Fi
  * Option 3: Hair dryer
  * Option 4: Mini bar
- **Room Number** (`room_number`, text, optional): This field is used to enter the room number or other identifier for the room being inspected.
- **Room Type** (`room_type`, select_one, optional): Select the type of room being inspected.
  * Option 1: Single occupancy
  * Option 2: Double occupancy
  * Option 3: Suite
  * Option 4: Other
- **Assigned Staff** (`assigned_staff`, number, optional): This field is used to report which staff member is assigned to the room or task.
- **Notes** (`notes`, note, optional): This field is intended to capture any additional comments or notes about the room.
- **Email Address** (`email`, text, optional): This field is used to enter the contact information for the person completing the form.
- **Phone Number** (`phone`, text, optional): This field is used to enter the contact phone number for the person completing the form.
- **Room Status** (`room_status`, select_one, optional): Select the current status of the room.
  * Option 1: Available
  * Option 2: Occupied
  * Option 3: Maintenance
  * Option 4: Closed
- **Date of Inspection** (`date`, date, optional): This field is used to record the date of the inspection.
- **Time of Inspection** (`time`, time, optional): This field is used to record the time of the inspection.
- **Submitted By** (`submitted_by`, select_one, optional): Select who completed the form.
  * Option 1: Staff member
  * Option 2: Manager
  * Option 3: Guest
  * Option 4: Other
