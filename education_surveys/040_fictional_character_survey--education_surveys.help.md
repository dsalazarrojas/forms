# Fictional Character Survey - Help Guide

## Purpose

The "Fictional Character Survey" form aims to gather information about users' favorite fictional characters, including their relationship level, favorite fandom, and the time spent reading about the character.

## How to Complete This Form

To complete this form, please follow the steps below:

1. Select your favorite character from the "Favorite Character" field. This field is a dropdown menu with options "Yes" and "No". Select "Yes" if you have a favorite character, and "No" otherwise.
2. Provide a reason for why you love this character in the "Why do you love this character?" field. This field is a text box where you can enter your thoughts on why this character is significant to you.
3. In the "How would you describe your relationship to this character?" field, provide a description of your relationship with the character. For example, you might describe yourself as a fan, enthusiast, or someone who has been inspired by the character.
4. Indicate your age range in the "What is your age range?" field. This field is a dropdown menu with options "Yes" and "No", but be aware that this field is meant to reflect your age range rather than a literal question about being a yes or no.
5. Enter the year you first encountered this character in the "How old were you when you first encountered this character?" field. This field is a date field where you can input the year you first met the character.
6. Estimate the time you spend reading about this character in the "How much time do you spend reading about this character?" field. This field is a time field where you can estimate the time spent reading about the character.
7. Select the type of character you believe this character is, such as action, romance, or hero. This field is a dropdown menu with options action, romance, villain, and hero.
8. Evaluate the importance of this character to you in the "How important is this character to you?" field. This field is a dropdown menu with options very important, somewhat important, not very important, and not at all important.
9. Indicate your favorite fandom related to this character in the "What is your favorite fandom related to this character?" field. This field is a dropdown menu with options "Yes" and "No", but be aware that this field is meant to reflect your favorite fandom rather than a literal question about being a yes or no.

## Field-by-Field Explanation

* **Favorite Character** (`favorite_character`, `select_one`, `required: false`):
	+ This field allows you to select your favorite character from the provided list. Please be aware that this field is only for characters you are familiar with.
* **Why do you love this character?** (`favorite_character_reason`, `text`, `required: false`):
	+ This field is meant for you to explain why this character is important to you.
* **How would you describe your relationship to this character?** (`relationship_level`, `text`, `required: false`):
	+ In this field, describe your relationship with the character, such as being a fan or inspired by the character.
* **What is your age range?** (`age_range`, `select_multiple`, `required: false`):
	+ This field should reflect your age range, and it's essential to be honest about your age.
* **How old were you when you first encountered this character?** (`age_range_years`, `date`, `required: false`):
	+ Please enter the year you first met the character, not the age you are currently.
* **How much time do you spend reading about this character?** (`time_spent_reading`, `time`, `required: false`):
	+ This field is meant to estimate the time you spend reading about the character, not the time spent thinking or dreaming about the character.
* **What type of character do you think this is?** (`character_type`, `select_one`, `required: false`):
	+ Choose the type of character this is, for example, action, romance, villain, or hero.
* **How important is this character to you?** (`character_importance`, `select_one`, `required: false`):
	+ Evaluate the importance of this character to you, using the provided options.
* **What is your favorite fandom related to this character?** (`favorite_fandom`, `select_multiple`, `required: false`):
	+ Select your favorite fandom related to this character.
