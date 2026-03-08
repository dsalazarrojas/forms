<thinking>
This form is intended to collect user input for a fitness meme submission, which is a feature used to share and manage user-generated content related to fitness. 
The goal is to provide users with a structured format to share their thoughts, opinions, or experiences on fitness-related topics. The form's purpose is to gather information such as the user's first name, email (optional), fitness level, an image or video file, and a short description of their submission. The form also allows users to select multiple categories for their content, add additional tags, and display the date and time of submission.
To prevent form duplication, we will be using a check for existing submissions before allowing users to submit new content.
</thinking>

# Fitness Meme Submission Form - Help Guide
## Purpose
The Fitness Meme Submission Form is designed to collect user-generated content related to fitness, allowing users to share their thoughts, opinions, or experiences on fitness-related topics.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **First Name** in the text field provided. This field is required.
2. (Optional) Enter your **Email** address in the text field.
3. Select your **Fitness Level** from the dropdown menu:
	* Beginner
	* Intermediate
	* Advanced
4. Upload an **Image or Video** file by selecting it from your device or entering a URL.
5. Write a brief **Description** of your submission in the text field provided. This field is required.
6. Select one or more **Categories** for your content from the list:
	* Fitness
	* Fun
	* Challenge
7. Add any additional **Tags** for your content.
8. Click the **Submit** button to finalize your submission.

## Field-by-Field Explanation

* **First Name** (`first_name`, Text, Required): Enter your first name to accompany your submission.
* **Email** (`email`, Email, Optional): Enter your email address for further communication.
* **Fitness Level** (`fitness_level`, Select One, Optional): Select your current fitness level.
* **Image or Video** (`file`, Text, Optional): Upload an image or video file to illustrate your submission.
* **Description** (`description`, Text, Required): Write a brief description of your submission.
* **Category** (`category`, Select Multiple, Optional): Choose one or more categories for your content.
* **Tags** (`fitness_memes`, Note, Optional): Add any additional tags for your content.
* **Created on** (`created_date`, Date, Optional): Displays the date and time of submission.
* **Updated on** (`updated_at`, Date, Optional): Displays the date and time of last update.
* **Fitness Memes** (`fitness_meme_tags`, Note, Optional): Displays any tags associated with your content.
* **Submit** (`submit`, Text, Required): Finalize your submission and create a new entry in the database.

## Tips
* Be sure to fill out all required fields to complete the form successfully.
* Use clear and concise language in your description to ensure accurate representation.
* Select relevant categories and tags to help others discover your content.
* Upload high-quality images or videos to illustrate your submission.
* Check for existing submissions before finalizing your own to prevent duplication.
