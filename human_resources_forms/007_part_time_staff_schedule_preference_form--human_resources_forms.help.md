# part_time_staff_schedule_preference_form - Help Guide
## Purpose
This form is designed to collect information about a part-time staff member's schedule preferences, allowing them to express their availability and preferences for scheduling work hours.

## How To Complete This Form

To complete this form, follow the instructions below:

1. Select your preferred schedule type (Fixed or Flexible).
2. Choose your preferred shift (Morning, Afternoon, or Evening).
3. Select your preferred days of the week.
4. Enter your preferred start and end times.
5. Specify any special requests (e.g., 1, 2, or 3 days).
6. Specify any notice period required for schedule changes.
7. Identify potential schedule conflicts.
8. Specify any schedule overlap or conflicts.

## Field-by-Field Explanation

- **Schedule Type** (`schedule_type`, select_one, required): Choose between "Fixed" or "Flexible" schedule types.
  - Fixed: Work on fixed schedule as assigned.
  - Flexible: Work on flexible schedule with ability to adjust hours.

- **Shift** (`shift`, select_one, optional): Select your preferred shift, e.g., Morning, Afternoon, or Evening.

- **Day Part** (`day_part`, select_multiple, required): Select your preferred day part, e.g., morning, afternoon, or evening.

- **Start Time** (`start_time`, time, optional): Enter your preferred start time.

- **End Time** (`end_time`, time, optional): Enter your preferred end time.

- **Days of Week** (`days_of_week`, select_multiple, required): Select your preferred days of the week.

- **Preferred Start Time** (`preferred_start_time`, time, optional): Enter your preferred start time for scheduling.

- **Preferred End Time** (`preferred_end_time`, time, optional): Enter your preferred end time for scheduling.

- **Notice** (`notice`, select_one, optional): Specify the notice period required for schedule changes (1, 2, or 3 days).

- **Notice Period** (`notice_period`, select_multiple, optional): Select the notice period for schedule changes (1, 2, or 3 weeks).

- **Schedule Comment** (`schedule_comment`, text, optional): Add any additional comments about your schedule preferences.

- **Special Request** (`special_request`, select_multiple, required): Identify any special requests for schedule changes (1, 2, or 3 days).

- **Special Request Period** (`special_request_period`, select_multiple, required): Select the duration of your special request (1, 2, or 3 weeks).

- **Special Request Comment** (`special_request_comment`, text, optional): Add any additional comments about your special requests.

- **Other Special Request** (`other_special_request`, text, optional): Enter any other special requests.

- **Schedule Conflict** (`schedule_conflict`, select_one, optional): Identify potential schedule conflicts (None, Possible, Confirmed).

- **Schedule Conflict Period** (`schedule_conflict_period`, select_multiple, optional): Select the duration of schedule conflicts (1, 2, or 3 weeks).

- **Schedule Conflict Comment** (`schedule_conflict_comment`, text, optional): Add any additional comments about schedule conflicts.

- **Preferred Schedule Overlap** (`preferred_schedule_overlap`, select_multiple, optional): Specify the preferred overlap period for scheduling.

- **Preferred Schedule Overlap Period** (`preferred_schedule_overlap_period`, select_multiple, optional): Select the overlap period for scheduling.

- **Comments** (`comments`, note, optional): Add any other comments about your schedule preferences.

- **Available Days Off** (`available_days_off`, select_multiple, optional): Select the days you are available to take off.

- **Available Time Off** (`available_time_off`, text, optional): Enter the time you are available to take off.

- **Other Special Request** (`other_special_request`, text, optional): Enter any other special requests.

- **Available Days Off** (`available_days_off`, select_multiple, optional): Select the days you are available to take off.

- **Schedule Conflict** (`schedule_conflict`, select_one, optional): Identify potential schedule conflicts.

- **Schedule Conflict Period** (`schedule_conflict_period`, select_multiple, optional): Select the duration of schedule conflicts.

- **Available Time Off** (`available_time_off`, text, optional): Enter the time you are available to take off.
