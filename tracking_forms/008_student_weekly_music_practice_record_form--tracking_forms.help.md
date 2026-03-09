# student-weekly-music-practice-record-form - Help Guide
## Purpose
This form is designed to track the music practice of students. It should be used by students to report their practice habits, including how often they practice, on which instrument, for how long, and what difficulties they encounter.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the question about whether you practiced music this week.
2. Select the instrument you practiced on from the list.
3. Indicate how long you practiced, using the time picker.
4. Fill in the date of your practice session.
5. Rate the difficulty level of your practice.
6. Describe your progress, if any.
7. Write any additional notes about your practice session.
8. Indicate if you have any goals for next week's practice.

## Field-by-Field Explanation
- **Music Practice Frequency** (`student_weekly_music_practice`, select_multiple, required/optional): Check if you practiced music this week.
  - Select 'Yes' if you practiced music this week.
  - Select 'No' if you did not practice music this week.
- **Instrument** (`instrument`, select_one, required/optional): Select the instrument you practiced on.
  - Choose from Violin, Guitar, Piano, Drums, or Other.
- **Practice Time** (`practice_time`, time, required/optional): Indicate how long you practiced.
  - Enter the time in the format 'HH:MM' (e.g., 02:30 for 2:30 am).
  - If no time was recorded, select 00:00.
- **Date** (`date`, date, required/optional): Enter the date of your practice session.
  - Use the format 'YYYY-MM-DD' (e.g., 2024-02-20 for February 20, 2024).
- **Difficulty Level** (`difficulty_level`, select_one, required/optional): Rate the difficulty level of your practice.
  - Choose from Easy, Medium, or Hard.
- **Progress** (`progress`, note, required/optional): Describe any progress you made during practice.
  - Write a few lines about what you accomplished.
- **Notes** (`notes`, text, required/optional): Add any additional notes about your practice session.
  - Write down any important details or thoughts.
- **Goals for Next Week** (`goals`, select_multiple, required/optional): Indicate if you have any goals for next week's practice.
  - Select 'Yes' if you have a goal.
  - Select 'No' if you do not have a goal for next week.
