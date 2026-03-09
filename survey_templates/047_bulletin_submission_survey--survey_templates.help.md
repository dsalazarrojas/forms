# Bulletin Submission Survey - Help Guide
## Purpose
This form is for submitting announcements to be published on the bulletin system. Please fill out this form thoroughly to ensure your announcement is processed correctly and reaches its intended audience.

## How To Complete This Form
1. Start by filling out the submission date, which is the date you want the announcement to be posted.
2. Enter your name and email as the submitter, so that we can contact you in case of any questions or issues.
3. Select the department or organization that the announcement is relevant to, so that it can be properly categorized and distributed.
4. Choose a brief title for the announcement, as this will be displayed on the bulletin system.
5. Choose the type of announcement you are making (e.g. News, Event, Meeting, etc.).
6. Enter the full text of the announcement, including any relevant details.
7. Select who you want to see this announcement (e.g. all members, staff only, students, etc.).
8. If the announcement is about an event, enter the date and time of the event, as well as the location and contact information.
9. Choose a desired publication date for the announcement, and if necessary, a publication end date.
10. Select the priority level of the announcement (e.g. Urgent, High, Normal, Low).
11. If you want the announcement to be highlighted as a featured item on the bulletin system, choose "True".
12. If you have any supporting materials (e.g. images, documents), select "True" to attach them.
13. If the announcement requires approval before publishing, select "True" and enter the name of the approver.
14. Finally, enter any additional notes or instructions that may be relevant to the announcement.

## Field-by-Field Explanation

* **Submission Date (id: 1)** (`submission_date`, `date`, required): This is the date you want the announcement to be posted.
* **Submitter Name (id: 2)** (`submitter_name`, `text`, required): This is your name, which will be used for contact purposes.
* **Email Address (id: 3)** (`submitter_email`, `email`, required): This is your email address, which will be used for contact purposes.
* **Phone Number (id: 4)** (`submitter_phone`, `text`, optional): This is your phone number, which can be used for further contact or follow-up.
* **Department or Organization (id: 5)** (`department_organization`, `text`, required): This is the department or organization that the announcement is relevant to.
* **Announcement Title (id: 6)** (`announcement_title`, `text`, required): This is a brief title for the announcement.
* **Announcement Category (id: 7)** (`announcement_category`, `select_one`, required): This is the type of announcement (e.g. News, Event, Meeting, etc.).
* **Announcement Content (id: 8)** (`announcement_content`, `text`, required): This is the full text of the announcement.
* **Target Audience (id: 9)** (`target_audience`, `select_multiple`, required): This is who you want to see this announcement (e.g. all members, staff only, students, etc.).
* **Event Date (id: 10)** (`event_date`, `date`, optional): This is the date of the event, if the announcement is about an event.
* **Event Time (id: 11)** (`event_time`, `time`, optional): This is the start time of the event, if the announcement is about an event.
* **Event Location (id: 12)** (`event_location`, `text`, optional): This is the location of the event, if the announcement is about an event.
* **Event Contact Information (id: 13)** (`event_contact_info`, `text`, optional): This is the contact information for the event, if the announcement is about an event.
* **Desired Publication Date (id: 14)** (`publication_date`, `date`, required): This is the date you want the announcement to be published.
* **Publication End Date (id: 15)** (`publication_end_date`, `date`, optional): This is the date when you want the announcement to stop being published.
* **Priority Level (id: 16)** (`priority_level`, `select_one`, optional): This is the level of urgency for the announcement (e.g. Urgent, High, Normal, Low).
* **Request as Featured Announcement (id: 17)** (`featured`, `select_one`, optional): This is whether you want the announcement to be highlighted as a featured item on the bulletin system.
* **Image or Document Attached (id: 18)** (`image_attachment`, `select_one`, optional): This is whether you have any supporting materials attached.
* **Approval Required Before Publishing (id: 19)** (`approval_required`, `select_one`, required): This is whether the announcement requires approval before publishing.
* **Approver Name (id: 20)** (`approver_name`, `text`, optional): This is the name of the person who needs to approve the announcement.
* **Additional Notes (id: 21)** (`additional_notes`, `text`, optional): This is any additional notes or instructions that may be relevant to the announcement.
