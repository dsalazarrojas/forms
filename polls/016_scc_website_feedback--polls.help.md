<thinking>
This form is designed for users to provide feedback on the scc website, allowing them to rate their experience and provide comments or suggestions. It is likely to be used by website visitors or customers who want to share their opinions or report any issues they encountered while browsing or interacting with the website.

To prevent duplication and ensure the form is relevant to the user, consider adding a check to see if a user has already submitted feedback or if they are attempting to access the form from a non-relevant page (e.g., through a direct link). This would require additional backend logic or a simple "Are you sure you want to submit feedback?" prompt for users who have already submitted feedback.

</thinking>

# scc_website_feedback - Help Guide
## Purpose
The scc_website_feedback form is designed to collect user feedback and ratings on the scc website. Users can rate their experience, provide comments, and submit any issues they encountered while using the website.

## How To Complete This Form
To complete this form, follow these steps:

1.  Rate your experience by selecting one of the provided options.
2.  Provide any comments or suggestions you may have for the website.
3.  If you have any issues or problems with the website, describe them in the text field.
4.  Enter your email address for contact purposes.
5.  Provide your phone number for further communication (optional).
6.  Enter the website you are providing feedback on (optional).
7.  Provide a description of your issue or feedback (optional).
8.  Select the category your feedback belongs to (e.g., Polls, Reviews, or Other).
9.  Enter your overall feedback or comments on the website (optional).
10. Provide a description of your experience (optional).
11. Select the "Submit" option to send your feedback.

## Field-by-Field Explanation

* **User Input** (`user_input`, text, required: false): Enter your thoughts or comments about the website.
* **Rating** (`rating`, number, required: false): Rate your experience with the website (e.g., 1-5 stars).
* **Comment** (`comment`, text, required: false): Provide any comments or suggestions you may have for the website.
* **Email** (`email`, email, required: false): Enter your email address for contact purposes.
* **Phone** (`phone`, text, required: false): Provide your phone number for further communication (optional).
* **Website** (`website`, text, required: false): Enter the website you are providing feedback on (optional).
* **Comments** (`comment_section`, note, required: false): Enter any issues or problems you encountered while using the website.
* **Submit** (`submit`, select_one, required: false): Select one of the three options: Submit, Save and Continue, or Save and Continue Editing.
* **Category** (`category`, select_multiple, required: false): Select the category your feedback belongs to (e.g., Polls, Reviews, or Other).
* **Feedback** (`feedback`, text, required: false): Enter your overall feedback or comments on the website (optional).
* **Description** (`description`, text, required: false): Provide a description of your experience (optional).
* **Assigned Tool** (`assigned_tool`, text, required: false): Enter the tool used to access the website (optional).

Note: Some fields are optional, and users can choose to fill them out or not.
