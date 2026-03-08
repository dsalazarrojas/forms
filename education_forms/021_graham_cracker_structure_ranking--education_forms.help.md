</thinking>

# graham_cracker_structure_ranking - Help Guide
## Purpose
The graham_cracker_structure_ranking form is used to collect ratings and feedback from students, staff, and parents on the structural integrity of a Graham cracker. This form is intended to be filled out by individuals who have had a chance to evaluate the Graham cracker's structure and provide their honest feedback.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Event Name: This is the title of the event where the Graham cracker was evaluated.
2. Upload a photo of the Graham cracker (photo1, photo2, photo3, photo4): You can upload up to 4 photos of the Graham cracker to help illustrate your evaluation.
3. Enter your rating: Rate the structural integrity of the Graham cracker on a scale of 1-5.
4. Provide feedback: Enter any comments or suggestions you have about the Graham cracker's structure.
5. Select who submitted the evaluation: Choose the submitter's category from the drop-down menu.
6. Enter the Event Date and Time: This is the date and time of when the Graham cracker was evaluated.
7. Submit your evaluation: Click the submit button to send in your rating and feedback.

## Field-by-Field Explanation
* **Event Name** (`event_name`, text, optional): Enter the title of the event where the Graham cracker was evaluated.
* **photo_url** (`graham_cracker_photo_url`, text, optional): Upload a photo of the Graham cracker to help illustrate your evaluation. This field is used to view the photo you uploaded.
* **rating** (`graham_cracker_rating`, number, optional): Rate the structural integrity of the Graham cracker on a scale of 1-5.
* **feedback** (`feedback`, text, optional): Enter any comments or suggestions you have about the Graham cracker's structure.
* **photo1**, **photo2**, **photo3**, **photo4** (`photo1`, `photo2`, `photo3`, `photo4`, text, optional): Upload up to 4 photos of the Graham cracker to help illustrate your evaluation.
* **Event Date** (`event_date`, date, optional): Enter the date of when the Graham cracker was evaluated.
* **Event Time** (`event_time`, time, optional): Enter the time of when the Graham cracker was evaluated.
* **Submitted By** (`submitted_by`, select_one, optional): Choose the category of who submitted the evaluation (admin, student, staff, parent, other).
* **Submitted On** (`submitted_on`, date, optional): Enter the date when the evaluation was submitted.
* **photo1**, **photo2**, **photo3**, **photo4** (text, optional): Note that these fields are used to store additional photos of the Graham cracker and are only displayed if a photo is uploaded.
