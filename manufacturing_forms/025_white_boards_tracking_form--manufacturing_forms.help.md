# white_boards_tracking_form - Help Guide
## Purpose
This form is designed to track the status and attributes of whiteboards in a manufacturing setting. It helps production teams stay organized and up-to-date on the current status and details of each whiteboard.

## How To Complete This Form
To use this form, please follow these steps:

1. Make sure you're tracking an existing whiteboard.
2. Click on the first field, "whiteboard_id", and enter the unique identifier of the whiteboard you want to track.
3. Enter the name of the whiteboard in the "name" field.
4. In the "description" field, provide a brief description of the whiteboard.
5. Set the start and end dates of the whiteboard's project in the "start_date" and "end_date" fields, respectively.
6. Choose the current status of the whiteboard from the "status" select menu.
7. Optionally, add any additional comments about the whiteboard in the "comments" field.
8. Assign any relevant tags to the whiteboard from the "tags" select menu.

## Field-by-Field Explanation
* **whiteboard_id (required)** (`manufacturing_form_whiteboard_id`, text, required): Enter the unique identifier of the whiteboard you want to track.
* **name (required)** (`manufacturing_form_name`, text, required): Enter the name of the whiteboard.
* **description (optional)** (`manufacturing_form_description`, text, optional): Provide a brief description of the whiteboard.
* **start_date (required)** (`manufacturing_form_start_date`, date, required): Set the start date of the whiteboard's project.
* **end_date (optional)** (`manufacturing_form_end_date`, date, optional): Set the end date of the whiteboard's project.
* **status (optional)** (`manufacturing_form_status`, select_one, optional): Choose the current status of the whiteboard.
* **comments (optional)** (`manufacturing_form_comments`, text, optional): Add any additional comments about the whiteboard.
* **tags (optional)** (`manufacturing_form_tags`, select_multiple, optional): Assign any relevant tags to the whiteboard.

## Tips
- Make sure to fill out all required fields before submitting the form.
- Use the unique identifier "whiteboard_id" to track the correct whiteboard.
- The "status" field should reflect the current status of the whiteboard.
- Tags can be used to categorize whiteboards for easier filtering and tracking.
