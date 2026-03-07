<thinking>...</thinking>

Before diving into the help guide, let's quickly review the form purpose and context. This form is designed to collect preferences and settings related to emergency services, likely for a specific organization or business. The goal is to provide a clear understanding of the form's purpose and usage.

# Emergency Services Schedule Preference - Help Guide
## Purpose
This form is used to collect preferences and settings related to emergency services. It will help in scheduling emergencies and other related services.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the shift type for the emergency services. Choose from "Morning", "Evening", "Night", or "Weekend".
2.  Fill in the start and end times of the emergency services schedule.
3.  Specify the break length and frequency.
4.  Set the constraint start and end times of the emergency services schedule.
5.  Choose any constraints that apply to the schedule.
6.  Select staff availability and schedule availability.
7.  Specify if emergency services are available or not.
8.  Set the shift length.
9.  Choose if on-call services are available.
10.  Decide on rotation.
11.  Select if emergency services are scheduled frequently.

## Field-by-Field Explanation

* **Schedule Form** (`schedule_form`, text, optional): This is the main schedule form where you can input details about the emergency services schedule.
* **Shift Type** (`schedule_type`, select_one, required): Choose the type of shift you want to schedule. Options are "Morning", "Evening", "Night", and "Weekend".
* **Start Time** (`schedule_start_time`, date, optional): Enter the start time of the emergency services schedule.
* **End Time** (`schedule_end_time`, date, optional): Enter the end time of the emergency services schedule.
* **Break Length** (`break_length`, number, optional): Specify the length of the break.
* **Break Frequency** (`break_frequency`, number, optional): Specify how often the breaks occur.
* **Constrain Start Time** (`schedule_constrain_start_time`, date, optional): Set the constraint start time of the schedule.
* **Constrain End Time** (`schedule_constrain_end_time`, date, optional): Set the constraint end time of the schedule.
* **Constrain** (`constraint`, select_multiple, required): Choose any constraints that apply to the schedule.
* **Staff Availability** (`staff_availability`, text, optional): Specify the availability of staff.
* **Schedule Availability** (`schedule_availability`, text, optional): Specify the availability of the schedule.
* **Emergency Services** (`emergency_services`, select_multiple, required): Choose whether emergency services are available or not.
* **Shift Length** (`shift_length`, number, optional): Set the length of the shift.
* **On Call** (`on_call`, select_multiple, optional): Choose if on-call services are available.
* **Rotation** (`rotation`, select_multiple, optional): Decide on rotation.
* **Schedule Frequency** (`schedule_frequency`, select_multiple, optional): Choose if emergency services are scheduled frequently.
* **Emergency Services** (`emergency_services_1`, select_multiple, optional): This field is a duplicate of the "Emergency Services" field and has the same options.
