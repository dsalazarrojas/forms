<thinking>...</thinking>

# trail_visitor_check_in_form - Help Guide
## Purpose
The "trail_visitor_check_in_form" is used to record visitor information for trailheads, providing a way to track and manage visitor data for trailhead management.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Trailhead Name" field with the name of the trailhead where the visitor is currently visiting.
2. Enter the "Contact Email" of the visitor, if available.
3. Add the "Contact Phone" number of the visitor, if available.
4. Select the "Trailhead Group" that the visitor is part of (e.g. Park Rangers, Park Management, Trail Maintenance).
5. Enter the "Visit Start Time", which is the time the visitor started their visit.
6. Specify the "Visit Duration" in minutes.
7. Enter the "Visit Date", which is the date the visitor started their visit.
8. Select the "Trail Type" that the visitor is engaging in during their visit (e.g. Hiking, Biking, Horseback riding, Other).
9. If necessary, add any "Trailhead Comments" for reference.
10. Finally, include any "Visitor Comments" in the space provided.

## Field-by-Field Explanation

* **Trailhead Name** (`trailhead_name`, text, required): Enter the name of the trailhead the visitor is currently visiting.
* **Contact Email** (`contact_email`, email, optional): Enter the email address of the visitor, if available.
* **Contact Phone** (`contact_phone`, text, optional): Enter the phone number of the visitor, if available.
* **Trailhead Group** (`trailhead_group`, select_one, optional): Select the trailhead group the visitor is part of (e.g. Park Rangers, Park Management, Trail Maintenance).
* **Visit Start Time** (`visit_start_time`, time, optional): Enter the start time of the visitor's visit.
* **Visit Duration** (`visit_duration`, number, optional): Enter the duration of the visit in minutes.
* **Visit Date** (`visit_date`, date, optional): Enter the date the visitor started their visit.
* **Trail Type** (`trail_type`, select_multiple, optional): Select one or more trail types the visitor is engaging in (e.g. Hiking, Biking, Horseback riding, Other).
* **Trailhead Comments** (`trailhead_comments`, text, optional): Add any additional comments about the visitor's visit.
* **Visitor Comments** (`visitor_comments`, text, optional): Include any comments or feedback from the visitor.
