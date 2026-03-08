# on_site_team_report - Help Guide
## Purpose
This form is designed to collect information about on-site teams, including team members, shift start and end times, task progress, site updates, and comments from team members and supervisors.

## How To Complete This Form
1. Select the team members who were present on-site during the shift. You can choose multiple members from the list.
2. Enter the start and end times of the shift in the corresponding fields. This should be in the format of a standard 24-hour clock (e.g., 09:00 for 9:00 AM).
3. Enter the duration of the shift. This can be in the format of hours and minutes (e.g., 08:30 for 8 hours and 30 minutes).
4. Report the progress made on tasks during the shift. This should be a numerical value between 0 and 100%.
5. Enter any site updates, such as weather conditions, equipment issues, or other notable events.
6. Provide any additional comments from team members or supervisors.
7. If you're reporting on-site, select 'Yes' in the on-site_report field.

## Field-by-Field Explanation

* **team_members** (`team_members`, select_multiple, required): Select the team members who were present on-site during the shift.
* **shift_start** (`shift_start`, date, required): Enter the start time of the shift in the format of a standard 24-hour clock (e.g., 09:00 for 9:00 AM).
* **shift_end** (`shift_end`, date, required): Enter the end time of the shift in the format of a standard 24-hour clock (e.g., 17:00 for 5:00 PM).
* **shift_duration** (`shift_duration`, time, required): Enter the duration of the shift in the format of hours and minutes (e.g., 08:30 for 8 hours and 30 minutes).
* **task_progress** (`task_progress`, number, required): Report the progress made on tasks during the shift. This should be a numerical value between 0 and 100%.
* **site_updates** (`site_updates`, text, required): Enter any site updates, such as weather conditions, equipment issues, or other notable events.
* **site_comments** (`site_comments`, text, optional): Provide any additional comments from team members.
* **supervisor_comments** (`supervisor_comments`, text, optional): Provide any additional comments from supervisors.
* **on_site_report** (`on_site_report`, select_one, required): If you're reporting on-site, select 'Yes'.
