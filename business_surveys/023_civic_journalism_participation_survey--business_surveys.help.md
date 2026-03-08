# Civic Journalism Participation Survey - Help Guide
## Purpose
This form is designed to gather information from local residents on their engagement and behavior with local news and community reporting.

## How To Complete This Form
1. Please select how often you follow local community news.
2. Choose your primary source for local information.
3. Rate your level of trust in local media outlets.
4. Indicate your interest in contributing to local journalism.
5. Select all types of content you would be willing to provide.
6. Select the topics that are most important for local coverage.
7. If you've attended public meetings, select the number of meetings you've attended in the last year.
8. Indicate if you use apps to report community issues.
9. Identify the main barrier to more residents participating in local news.
10. Indicate if you would attend a workshop on citizen journalism and ethics.
11. Select your age range.
12. If you're willing, provide your email for follow-up questions from a reporter.
13. Finally, select the date you completed this survey.

## Field-by-Field Explanation

* **-- Civic Journalism Interest Survey --** (`journalism_intro`, note, required: false): Introduction to the survey.
* **How often do you follow local community news?** (`local_news_consumption`, select_one, required: true): This question helps us understand how often you engage with local community news.
* **What is your primary source for local information?** (`primary_news_source`, select_one, required: true): This question helps us understand where you get your local news from.
* **How much do you trust local media outlets?** (`media_trust_level`, number, required: true): This question helps us understand your level of trust in local media outlets.
* **Would you be interested in contributing to local journalism?** (`interest_in_contributing`, select_one, required: true): This question helps us understand if you're interested in contributing to local journalism.
* **What types of content would you be willing to provide?** (`contribution_types`, select_multiple, required: false): This question helps us understand what types of content you would be willing to contribute.
* **Which topics are most important for local coverage?** (`news_topic_preferences`, select_multiple, required: true): This question helps us understand what topics are most important for local coverage.
* **How many public meetings have you attended in the last year?** (`attendance_public_meetings`, number, required: false): This question helps us understand if you're engaged with local community events.
* **Do you use apps to report community issues?** (`civic_tech_usage`, select_one, required: true): This question helps us understand if you're using tools to report community issues.
* **What is the main barrier to more residents participating in local news?** (`barrier_to_journalism`, text, required: false): This question helps us understand what's holding you back from engaging more with local journalism.
* **Would you attend a workshop on citizen journalism and ethics?** (`interest_in_training`, select_one, required: false): This question helps us understand your interest in improving your skills and knowledge on local journalism.
* **Your Age Range** (`demographics_age`, select_one, required: false): This question helps us understand your age group.
* **May a reporter contact you for follow-up questions?** (`contact_for_interviews`, select_one, required: true): This question helps us understand if you're available for follow-up questions.
* **Your Email (Optional)** (`email_for_contact`, email, required: false): This question is for your contact information, if you're willing to share it.
* **Date** (`survey_completion_date`, date, required: true): This question helps us track when you completed this survey.
