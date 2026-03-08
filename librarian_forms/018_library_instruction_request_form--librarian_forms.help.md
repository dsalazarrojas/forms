# Library Instruction Request Form - Help Guide
## Purpose
The Library Instruction Request Form is a tool for instructors to request a library instruction session for their class. This form helps the librarian plan and prepare for the session, ensuring that it is tailored to the needs of the class and instructor.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your course ID and instructor ID (if applicable).
2. Choose a date for the session.
3. Select a start and end time for the session.
4. Enter the duration of the session.
5. Provide the room number where the session will take place.
6. Enter the name of the librarian assigned to the session.
7. Enter a brief description of the topic that will be covered in the session.
8. Enter the status of the session (e.g. pending, accepted, canceled).

## Field-by-Field Explanation

* **Course ID** (`course_id`, number, required): Enter the ID of your course. This is a unique identifier for your class and helps the librarian track the session.
* **Instructor ID** (`instructor_id`, number, required): Enter your instructor ID if you have one.
* **Date** (`date`, date, required): Choose the date of the library instruction session. Please select a date in the format mm/dd/yyyy.
* **Start Time** (`start_time`, time, required): Choose the start time of the session. Please select the time in 24-hour format (e.g. 10:00am).
* **End Time** (`end_time`, time, required): Choose the end time of the session. Please select the time in 24-hour format (e.g. 11:30am).
* **Duration** (`duration`, number, required): Enter the duration of the session in minutes.
* **Room** (`room`, text, required): Enter the room number where the session will take place. Please make sure to enter the correct room number as it will be reserved for the session.
* **Librarian** (`librarian`, text, required): Enter the name of the librarian assigned to the session. This will be the librarian who will lead the session.
* **Course Name** (`course_name`, text, optional): Enter the name of your course. This is optional and will be used for informational purposes only.
* **Instructor Name** (`instructor_name`, text, optional): Enter your name or the name of the person leading the session. This is optional and will be used for informational purposes only.
* **Topic** (`topic`, text, required): Enter a brief description of the topic that will be covered in the session.
* **Description** (`description`, text, required): Enter a brief description of the session, including any specific needs or goals.
* **Assigned Librarian** (`assigned_librarian`, text, optional): Enter the name of the librarian assigned to the session. This will be automatically populated once the session is scheduled.
* **Status** (`status`, text, optional): Enter the status of the session, such as pending, accepted, or canceled.
