<thinking>...</thinking>

# Camp Activity Attendance Form - Help Guide

## Purpose
This form is designed to track and record attendance information for activities and camps, providing a centralized and efficient way to manage attendance data. It helps to ensure accurate and up-to-date records, facilitating effective communication among counselors, parents, and administrators.

## How To Complete This Form

To complete this form, please follow these steps:

1. Enter the **Counselor - Facilitator Name** of the activity, ensuring it's accurate.
2. Provide the **Camp Group - Cabin Name**, e.g., Blue Jays, Cabin 4.
3. Select the **Name of Activity** from the list of options.
4. Enter the **Date of Activity** when the activity took place.
5. Choose the **Time Slot** of the activity.
6. Enter the **Total Expected Participants** number for the activity.
7. Enter the number of **Participants Present** and **Participants Absent**.
8. Provide a list of **Names of Absent Participants** who did not attend.
9. Report if any **Incidents or First Aid Required?** occurred during the activity.
10. If incidents occurred, provide a detailed **Incident Description**.
11. Evaluate the **Overall Group Engagement Level**, selecting the level of participation.
12. Note any **Supplies Needing Replenishment** for future activities.
13. Verify the accuracy of the record by entering your **Counselor Initials**.

## Field-by-Field Explanation

* **Counselor - Facilitator Name** (`camp_counselor_name`, text, required): Enter the name of the person leading the activity.
* **Camp Group - Cabin Name** (`camp_group_name`, text, required): Enter the name of the camp group or cabin, e.g., Blue Jays, Cabin 4.
* **Name of Activity** (`activity_name_attendance`, select_one, required): Select the name of the activity from the list of options.
* **Date of Activity** (`attendance_date`, date, required): Enter the date when the activity took place.
* **Time Slot** (`activity_time_slot`, select_one, required): Choose the time slot for the activity.
* **Total Expected Participants** (`total_expected_participants`, number, required): Enter the total number of participants expected.
* **Number of Participants Present** (`attendees_present_count`, number, required): Enter the number of participants present.
* **Number of Participants Absent** (`attendees_absent_count`, number, required): Enter the number of participants absent.
* **Names of Absent Participants** (`names_of_absentees`, text, required): List the names of participants who did not attend.
* **Incidents or First Aid Required?** (`activity_incidents`, select_one, required): Report if any incidents or first aid required occurred.
* **Incident Description** (`incident_description_camp`, text, required): If incidents occurred, provide a detailed description.
* **Overall Group Engagement Level** (`camper_engagement_level`, select_one, required): Evaluate the level of group engagement.
* **Supplies Needing Replenishment** (`activity_supplies_replenishment`, text, required): Note any supplies that need replenishment.
* **Counselor Initials** (`counselor_initials_verification`, text, required): Verify the accuracy of this record by entering your initials.
