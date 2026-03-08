<thinking>
This form is used to gather information for film confirmations. It's meant to be completed by users who have submitted a film for review. The form is used to confirm details about the film, including its title, director, and submission details. It's a critical part of the review process to ensure that all necessary information is accurate and up-to-date. Please note that all fields are required unless otherwise specified.
</thinking>

# Film Confirmation Form - Help Guide
## Purpose

This form is used to collect information about a submitted film to ensure accuracy and up-to-date details in the review process.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your submission information, including your name and the name of the film you submitted.
2. Provide a brief description of the film, if desired.
3. Indicate the category and status of the submitted film (e.g., Active or Inactive).
4. Choose whether the film is a genre-specific submission (e.g., Yes or No).
5. Select a submission date and time for the film.
6. Enter a confirmation code to finalize your submission.

## Field-by-Field Explanation

* **Submitter Info**: (`submitter_info`, text, optional): This field is for your name and any additional information about your submission.
* **Film Details**: (`film_details`, text, required): Provide a brief description of the film you submitted.
* **Name**: (`name`, text, required): Enter the name of the film you submitted.
* **Director**: (`director`, text, optional): The name of the film's director.
* **Year**: (`year`, number, required): Enter the year the film was released.
* **Genre Specific**: (`genre`, select_one, required): Select Yes if this film submission is specific to a certain genre.
* **Description**: (`description`, text, optional): A brief description of the film (if desired).
* **Category**: (`category`, select_one, required): Select Active or Inactive to determine the film's status.
* **Status**: (`status`, select_one, required): Confirm the film's status as Active or Inactive.
* **Submission Date**: (`submission_date`, date, required): Select the date you submitted the film.
* **Submission Time**: (`submission_time`, time, optional): The time you submitted the film (if desired).
* **Confirmation Code**: (`confirmation_code`, text, required): Enter a unique code to finalize your submission.

Note: This form is designed to be filled out by users who have submitted a film for review and need to confirm its details.
