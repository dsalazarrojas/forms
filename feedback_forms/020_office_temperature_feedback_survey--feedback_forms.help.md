# office_temperature_feedback_survey - Help Guide
## Purpose
This form is used to provide temperature readings and feedback on office settings, aiming to collect data on user activity, preferences, and office environment.

## How To Complete This Form

1. Enter your temperature reading in the `Temperature` field.
2. Select multiple feedback options that apply to your experience.
3. If applicable, enter your classroom or department number.
4. Confirm if you have specific goals or objectives related to office usage.
5. Enter your name for identification purposes.
6. Select your department from the provided options.
7. Enter your building location (e.g., floor, room, etc.).
8. If applicable, enter the time you spent at the desk.
9. If applicable, enter the time spent in the meeting room.
10. If applicable, enter the time spent in the cubicle.
11. Enter the time spent outside the office.
12. Leave comments or suggestions in the `Comments` field if you have any.
13. Finally, click the `Submit` button to submit your response.

## Field-by-Field Explanation

* **Temperature** (`office_temperature`, number, required): Enter your current temperature reading.
* **Feedback** (`feedback`, select_multiple, required): Select one or more options that apply to your experience. Options include:
	+ Option 1
	+ Option 2
	+ Option 3
	+ Option 4
	+ Option 5
	+ Option 6
* **Classroom** (`classroom`, text, optional): If you are not in a department, enter your classroom number for reference.
* **Goals** (`goals`, select_one, optional): Confirm if you have specific goals or objectives related to office usage. Options include:
	+ Yes
	+ No
* **Name** (`name`, text, optional): Enter your name for identification purposes.
* **Department** (`department`, text, required): Select your department or enter it manually.
* **Building Location** (`building_location`, text, optional): Enter your building location (e.g., floor, room, etc.).
* **Time Spent at Desk** (`time_spent_at_desk`, number, optional): Enter the time you spent at the desk.
* **Meeting Room** (`meeting_room`, text, optional): Enter the meeting room number if applicable.
* **Meeting Room Time** (`time_spent_in_meeting_room`, number, optional): Enter the time spent in the meeting room.
* **Cubicle Time** (`time_spent_in_cubical`, number, optional): Enter the time spent in the cubicle.
* **Time Spent Outside** (`time_spent_outside`, number, required): Enter the time spent outside the office.
* **Comments** (`comments`, text, optional): Leave any comments or suggestions.
* **Submit** (`submit`, text, required): Click to submit your response.
