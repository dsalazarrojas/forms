# 21 Day Weekly Check In - Help Guide

## Purpose
The 21 Day Weekly Check In form is designed to help participants reflect on their progress, mood, and goals during their 21-day program. It is a weekly check-in to gather information about your experiences, challenges, and plans for the next week.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your **Participant full name** in the "Participant full name" field.
2. Enter your **Contact email** in the "Contact email" field, where you will receive weekly summaries.
3. Select the **Week** of the 21-day program you are currently in (Week 1, Week 2, or Week 3).
4. Enter the **Date** of your check-in.
5. Rate your **Overall mood / energy level** from 1 to 10.
6. Select the option that best describes your **Progress toward personal goals** for the week.
7. If you made any **Program-related purchases** this week, select the relevant option.
8. Choose all that apply for **Main barriers or challenges encountered**.
9. Type in your **Planned actions for next week** in a short bullet-style format.
10. Provide any **Additional comments or feedback** you have in the space provided.

## Field-by-Field Explanation
* **Participant full name** (`participant_name`, `text`, required): Enter your full legal or preferred name.
* **Contact email** (`contact_email`, `email`, required): Enter the email address where you would like to receive weekly summaries.
* **Which weekly check-in is this?** (`week_number`, `select_one`, required): Select the week of the 21-day program you are currently in.
* **Date of check-in** (`checkin_date`, `date`, required): Enter the date of your check-in.
* **Overall mood / energy level** (`overall_mood_rating`, `integer`, required): Rate your overall mood/energy level from 1 to 10.
* **Progress toward personal goals this week** (`goals_progress`, `select_one`, required): Select the option that best describes your progress toward your personal goals.
* **Any program-related purchases made this week** (`notable_purchases`, `select_one`, optional): If you made any program-related purchases, select the relevant option.
* **Main barriers or challenges encountered** (`barriers_encountered`, `select_multiple`, optional): Choose all that apply for the main barriers or challenges you encountered.
* **Planned actions for next week** (`actions_for_next_week`, `text`, required): Type in your planned actions for next week in a short bullet-style format.
* **Additional comments or feedback** (`additional_comments`, `text`, optional): Provide any additional comments or feedback you have.
