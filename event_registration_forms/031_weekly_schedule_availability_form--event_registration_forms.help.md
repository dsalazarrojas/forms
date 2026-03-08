# Weekly Schedule Availability Form - Help Guide

## Purpose
The Weekly Schedule Availability Form is a tool used to determine your availability for events and meetings during the week. It helps to collect information about your preferred time slots when you are available and willing to work or participate in events. This form will be used to create a schedule that suits your needs and preferences.

## How To Complete This Form

### To complete the form, follow these steps:

- Select the days you are available to work or participate in events.
- Choose the start and end times when you are available.
- Specify your time zone offset in hours and minutes.
- Select your time zone (EST, CST, PST, MST).
- Optionally, select whether your time zone is in daylight saving time or standard time.
- Select the event date and time you would like to schedule.
- Optionally, specify your event time zone and offset in hours and minutes.

### Tips

- Be honest about your availability to ensure accurate scheduling.
- Make sure to select specific days and times that work for you.
- Review your selections carefully before submitting the form.

## Field-by-Field Explanation

- **week_days** (`week_days`, select_multiple, required): Select the days you are available to work or participate in events. You can choose one or more days from the list: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
- **start_time** (`start_time`, time, required): Select the start time of your availability.
- **end_time** (`end_time`, time, required): Select the end time of your availability.
- **available_time** (`available_time`, time, required): This field appears to be redundant with `start_time` and `end_time`. Please use the former for accurate selection.
- **timezone** (`timezone`, select_one, required): Select your time zone from the options: EST, CST, PST, MST.
- **timezone_offset** (`timezone_offset`, number, required): Specify your time zone offset in hours.
- **timezone_name** (`timezone_name`, text, required): This field seems to be related to the timezone you have selected. Please enter the name of your selected timezone.
- **timezone_offset_hours** (`timezone_offset_hours`, number, required): This field appears to be redundant with `timezone_offset`. Please use the former for accurate selection.
- **timezone_offset_minutes** (`timezone_offset_minutes`, number, required): This field seems to be redundant with `timezone_offset`. Please use the former for accurate selection.
- **timezone_dst** (`timezone_dst`, select_one, required): Select whether your time zone is in daylight saving time or standard time.
- **event_date** (`event_date`, date, optional): Select the date of the event you would like to schedule.
- **event_time** (`event_time`, time, optional): Select the time of the event.
- **event_start_time** (`event_start_time`, time, optional): This field is not required, but it seems to be related to the event time. Please use the latter for accurate selection.
- **event_end_time** (`event_end_time`, time, optional): This field is not required, but it seems to be related to the event time. Please use the latter for accurate selection.
- **event_duration** (`event_duration`, number, optional): This field seems to be unrelated to the other fields. Please disregard it.
- **event_timezone** (`event_timezone`, select_one, optional): Select the time zone of the event.
- **event_timezone_offset** (`event_timezone_offset`, number, optional): This field appears to be related to the event time zone. Please use the latter for accurate selection.
- **event_timezone_name** (`event_timezone_name`, text, optional): This field seems to be related to the event time zone. Please enter the name of the event time zone.
- **event_timezone_offset_hours** (`event_timezone_offset_hours`, number, optional): This field is redundant with `event_timezone_offset`. Please use the latter for accurate selection.
- **event_timezone_offset_minutes** (`event_timezone_offset_minutes`, number, optional): This field is redundant with `event_timezone_offset`. Please use the latter for accurate selection.
- **event_timezone_dst** (`event_timezone_dst`, select_one, optional): Select whether the event time zone is in daylight saving time or standard time.
