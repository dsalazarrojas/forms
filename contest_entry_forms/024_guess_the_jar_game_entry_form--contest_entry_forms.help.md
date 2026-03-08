# Guess The Jar Game Entry Form - Help Guide
## Purpose
The "Guess The Jar Game Entry Form" is a collection of user input fields used for the Guess The Jar Game contest. This form will guide you through the necessary steps to complete it correctly.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in the required fields such as first name, last name, email, prize_winning_entry, and winner_selected.
2. Select the correct entry type (e.g., Guess the number, Guess the color) for your entry.
3. Optionally, provide your phone number, address, and message if you wish to share more information.
4. If you are a winner, select 'True' for winner_selected; otherwise, select 'False'.
5. Enter the date and time you made your guess.
6. Add any additional notes you'd like to share with the contest administrators.
7. Optionally, provide the name of an assigned tool or resource used for your entry.
8. You can leave the form ID and category fields blank as they are not required for submission.

## Field-by-Field Explanation

* **First name** (`first_name`, text, required): Enter your first name here.
* **Last name** (`last_name`, text, required): Enter your last name here.
* **Email** (`email`, email, required): Enter your email address here. This will be used for communication purposes.
* **Phone number** (`phone`, text, optional): If you'd like to be contacted by phone, provide your phone number here.
* **Address** (`address`, text, optional): Enter your physical address if you'd like to receive mail or messages.
* **Message** (`message`, text, optional): Share any additional information you'd like with the contest administrators.
* **Entry type** (`entry_type`, select_multiple, optional): Select the type of entry you're submitting (e.g., Guess the number, Guess the color).
* **Prize winning entry** (`prize_winning_entry`, select_one, required): Select the entry that you think is the correct answer to win a prize.
* **Winner selected** (`winner_selected`, select_one, required): Select 'True' if you are the winner; otherwise, select 'False'.
* **Date** (`date`, date, optional): Enter the date you made your guess.
* **Time** (`time`, time, optional): Enter the time you made your guess.
* **Notes** (`notes`, note, optional): Add any additional notes you'd like to share with the contest administrators.
* **Assigned tool** (`assigned_tool`, text, optional): If a tool or resource was assigned to you for your entry, enter it here.
* **Form ID** (`form_id`, text, optional): This field is not required for submission and can be left blank.
* **Category** (`category`, text, optional): This field is not required for submission and can be left blank.
* **Description** (`description`, text, optional): Provide a brief description of your entry if you'd like.
* **Title** (`title`, text, optional): Enter a title for your entry if you'd like.
* **Title of the game** (`title`, text, optional): This field has the same name as the title field. It seems to be a duplicate field and can be left blank.
