# Daily Gratitude Journal Form - Help Guide
## Purpose
The Daily Gratitude Journal Form is a tool for recording and reflecting on your thoughts, feelings, and experiences on a daily basis. It is meant to help you cultivate a sense of gratitude and mindfulness.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `Daily Gratitude Journal Form` field with a brief description of your thoughts, feelings, and experiences from the day.
2. Select the type of journal entry you want to record, such as "Text" for a written entry, "Integer" for a numerical value, etc.
3. Choose the "Tags" fields that best describe your entry, such as "Gratitude", "Happiness", "Mindfulness", etc.
4. Select the date and time of the journal entry.
5. Optionally, enter any contact information, such as your email or phone number.

## Field-by-Field Explanation

* **Daily Gratitude Journal Form**:
	+ (`daily_gratitude_journal_form`, text, required): A brief description of your thoughts, feelings, and experiences from the day.
* **Questions**:
	+ (`daily_gratitude_journal_form_questions`, text, required): A text field for recording any questions or prompts that guide your reflection.
* **Question**:
	+ (`daily_gratitude_journal_form_question`, text, required): A text field for recording a specific question or prompt.
* **Type**:
	+ (`daily_gratitude_journal_form_question_type`, select_one, required): A dropdown menu for selecting the type of journal entry, such as "Text", "Integer", etc.
* **Answer**:
	+ (`daily_gratitude_journal_form_answer`, text, required): A text field for recording the answer to the question or prompt.
* **Date**:
	+ (`daily_gratitude_journal_form_date`, date, required): A date field for selecting the date of the journal entry.
* **Time**:
	+ (`daily_gratitude_journal_form_time`, time, required): A time field for selecting the time of the journal entry.
* **Note**:
	+ (`daily_gratitude_journal_form_note`, note, required): A text field for recording any additional notes or comments.
* **Email**:
	+ (`daily_gratitude_journal_form_email`, email, optional): A field for entering your email address.
* **Phone**:
	+ (`daily_gratitude_journal_form_phone`, text, optional): A field for entering your phone number.
* **Tags**:
	+ (`daily_gratitude_journal_form_tags`, select_multiple, optional): A field for selecting multiple tags or categories for the journal entry.
* **Tags 1**, **Tags 2**, ..., **Tags 13**:
	+ (`daily_gratitude_journal_form_tags_1`, select_multiple, optional): A field for selecting multiple tags or categories for the journal entry, with 13 options.
* **Submit**:
	+ (`daily_gratitude_journal_form_submit`, text, required): A text field for confirming the submission of the journal entry.

## Tips

* Use the "Tags" fields to categorize and label your journal entries for easier reference.
* Select the correct type of journal entry for each field to ensure accurate recording and tracking of your data.
* Use the "Date" and "Time" fields to keep track of when you recorded the journal entry.
* Optionally, enter your contact information for sharing or tracking purposes.
