# free_lunch_giveaway_entry_form - Help Guide
## Purpose
This form collects entries for a free lunch giveaway contest on campus. Participants can submit their name, email, preferred lunch time, preferred lunch location, phone number, whether they want to win, how they heard about the contest, and any additional notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name in the required field.
2. Enter your email address in the email field.
3. Choose your preferred lunch time from the list of available options.
4. Select your preferred lunch location from the list of available options.
5. If you have a phone number, enter it in the phone field.
6. Indicate if you would like to win by selecting 'True' from the win options.
7. Choose how you heard about the contest from the list of available options.
8. If you have any additional notes, enter them in the notes field.

## Field-by-Field Explanation
* **name** (`name`, `text`, required): Enter your name as you would like it to be referred to during the giveaway.
* **email** (`email`, `text`, required): Enter your email address so we can contact you if you win.
* **preferred lunch time** (`preferred_lunch_time`, `select_multiple`, required): Choose your preferred lunch time, which is the time you would like to be given the free lunch.
* **preferred lunch location** (`preferred_lunch_location`, `select_multiple`, required): Choose where you would like to be given the free lunch, whether it be on campus or off campus.
* **phone** (`phone`, `text`, optional): If you have a phone number, enter it here so we can reach you.
* **win** (`would_you_like_to_win`, `select_one`, required): Indicate if you would like to win by selecting 'True'.
* **how you heard about** (`how_did_you_hear_about_the_contest`, `select_multiple`, required): Choose how you heard about the giveaway, such as through social media or a flyer.
* **notes** (`notes`, `note`, optional): If you have any additional comments or information, enter them here.
