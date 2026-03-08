# User Story Item Entry Form - Help Guide
## Purpose
This form is used to create and edit user stories, a way to describe and track individual pieces of work needed to complete a project or task.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a **User Story** in the "User Story" field. This should be a concise but descriptive title that summarizes the story.
2. In the "Description" field, provide a more detailed explanation of the user story, including any relevant background or context.
3. For "Points", enter a numerical value that represents the estimated effort required to complete the story.
4. Select the "Priority" level:
	* **High**: Important and time-sensitive
	* **Low**: Less urgent or with less critical impact
	* **Medium**: Somewhere in between
5. Choose "Tags" to categorize the user story for easier tracking and searching.
6. Set the "Start Date" and "End Date" to schedule the story's expected timeline.
7. Select the "Status" of the story:
	* **Active**: Currently ongoing or active
	* **Inactive**: No longer active or pending
	* **Pending**: Waiting on other tasks or external factors

## Field-by-Field Explanation

* **User Story** (user_story, text, required): The title of the user story, a concise summary of the work to be done.
* **Description** (description, text, optional): A more detailed explanation of the user story.
* **Points** (points, number, optional): Estimated effort required to complete the story.
* **Priority** (priority, select_one, optional): The level of importance or urgency.
	+ **High**: Important and time-sensitive
	+ **Low**: Less urgent or with less critical impact
	+ **Medium**: Somewhere in between
* **Tags** (tags, select_multiple, optional): Categorize the user story for easier tracking and searching.
* **Start Date** (start_date, date, optional): The date the story is scheduled to start.
* **End Date** (end_date, date, optional): The date the story is scheduled to end.
* **Status** (status, select_one, optional): The current state of the story.
	+ **Active**: Currently ongoing or active
	+ **Inactive**: No longer active or pending
	+ **Pending**: Waiting on other tasks or external factors
