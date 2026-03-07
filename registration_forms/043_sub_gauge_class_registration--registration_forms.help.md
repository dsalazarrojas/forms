<thinking>
To confirm, you want me to create a user-facing help guide for a form called "Sub Gauge Class Registration" using the provided YAML fields. The form appears to be designed for registering participants in a class, with fields for enrolling participants, scheduling class dates, capturing attendee information, selecting preferred class times, and adding additional information. The fields for "Additional Info 1", "Additional Info 2", and "Additional Info 3" seem to be redundant and might be worth reevaluating for consolidation or simplification. I'll proceed with the original design, assuming these fields are intended to be kept as is.
</thinking>

# Sub Gauge Class Registration - Help Guide
## Purpose
This form is for registering participants in a class. It is used to collect information from class attendees, including schedules, participant details, and additional information.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the title of the class you are enrolling for.
2.  On the first page, "Enroll Participant", enter the required information for the participant.
3.  On the second page, "Schedule Class Dates", enter the dates and times of the class schedule.
4.  On the third page, "Attendee Info", enter any additional details about the participant.
5.  On the fourth page, "Preferred Class Times", select the preferred class times for the participant.
6.  On the last four pages, "Additional Info 1", "Additional Info 2", "Additional Info 3", and "Additional Info 4", select any additional information relevant to the participant.

## Field-by-Field Explanation
* **Enroll Participant** (`enroll_participant`, `text`, required): Enter the name of the participant you are enrolling.
* **Schedule Class Dates** (`schedule_class_dates`, `text`, optional): Enter the dates and times of the class schedule.
* **Attendee Info** (`attendee_info`, `text`, optional): Enter any additional details about the participant.
* **Preferred Class Times** (`select_one`, `select_one`, required): Select the preferred class times for the participant.
* **Additional Info 1** (`select_multiple`, `select_multiple`, optional): Select any additional information relevant to the participant.
* **Additional Info 2** (`select_multiple`, `select_multiple`, optional): Select any additional information relevant to the participant.
* **Additional Info 3** (`select_multiple`, `select_multiple`, optional): Select any additional information relevant to the participant.
* **Additional Info 4** (`select_multiple`, `select_multiple`, optional): Select any additional information relevant to the participant.
