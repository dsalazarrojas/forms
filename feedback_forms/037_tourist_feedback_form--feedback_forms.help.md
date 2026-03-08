<Thinking>
We're going to create a user-facing help guide for the "Tourist Feedback Form". This form is designed to collect feedback from tourists who have visited a particular location. The form should be easy to fill out and provide clear explanations for each field. We'll aim to keep the explanations concise and focused on the intended use of each field.
</Thinking>

# Tourist Feedback Form - Help Guide
## Purpose
The Tourist Feedback Form is designed to gather feedback from tourists who have visited a location. This form helps us understand their experiences and suggestions for improvements.

## How To Complete This Form
To complete the form, follow these steps:

1. Review each question carefully and provide as much detail as possible.
2. Select one of the options for the "Tour Type" question, or choose "No" if you don't want to answer this question.
3. Type your location in the "Location" field. This is the place where you visited.
4. Provide your feedback about your visit in the "Feedback" field.
5. Enter the date you visited the location in the "Date Visited" field.

## Field-by-Field Explanation
* **Tour Type** (`tour_type`, select_one, required: false):
	+ This question helps us understand the type of tour you took (e.g., guided, self-guided, or other).
* **Location** (`location`, text, required: false):
	+ Please type the location where you visited, such as a city or a specific site.
* **Feedback** (`feedback`, text, required: false):
	+ Share your thoughts and opinions about your visit. What did you like or dislike?
* **Date Visited** (`date_visited`, date, required: false):
	+ Enter the date you visited the location in the format YYYY-MM-DD.
