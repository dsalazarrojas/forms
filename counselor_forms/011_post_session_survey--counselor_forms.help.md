<thinking>
This form is for post-session feedback from seminar participants. It helps the organizers understand the participants' overall experience, rating of the seminar, and rating of the counselor. The purpose of this form is to gather feedback to improve future seminars.
</thinking>

# Post Session Survey - Help Guide

## Purpose
The Post Session Survey is a feedback form designed to collect information from participants after a seminar. This form helps the organizers to understand what worked well and what didn't during the seminar, allowing them to improve future sessions.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the participants who attended the seminar.
2.  Rate the seminar (e.g., 'Excellent', 'Good', 'Satisfactory', 'Poor', 'Needs Improvement').
3.  Rate the counselor (e.g., 'Excellent', 'Good', 'Satisfactory', 'Poor', 'Needs Improvement').
4.  Provide any suggestions for improvement.
5.  Add any additional comments about the seminar.
6.  If you want to provide information about the seminar title, select 'Yes' from the dropdown menu.
7.  If you know the seminar date, enter it in the correct format (e.g., '2022-01-01').
8.  If you know the seminar time, enter it in the correct format (e.g., '12:00' or '13:00' for 12 or 1 pm).

## Field-by-Field Explanation
- **Session Survey Participants** (`session_survey_participants`, `select_multiple`, required: false): 
  Please select the participants who attended the seminar. If no participants attended, select 'No' from the dropdown menu.
  
- **Rating of Seminar** (`rating_of_seminar`, `number`, required: false): 
  Rate the overall experience of the seminar on a scale of 1 to 5, where 1 is the lowest and 5 is the highest.
  
- **Overall Experience** (`overall_experience`, `number`, required: false): 
  Rate your overall experience of the seminar on a scale of 1 to 5, where 1 is the lowest and 5 is the highest.
  
- **Rating of Counselor** (`rating_of_counselor`, `select_one`, required: false): 
  Rate the performance of the seminar counselor on a scale of 1 to 5, where 1 is the lowest and 5 is the highest.
  
- **Suggestions for Improvement** (`suggestions_for_improvement`, `text`, required: false): 
  Provide any suggestions you have for improving future seminars.
  
- **Comments** (`comments`, `note`, required: false): 
  Add any additional comments about the seminar.
  
- **Additional Comments** (`additional_comments`, `note`, required: false): 
  Add any other comments about the seminar that you didn't mention in the comments field.
  
- **Seminar Title** (`seminar_title`, `select_one`, required: false): 
  Confirm whether you know the title of the seminar or not.
  
- **Seminar Date** (`seminar_date`, `date`, required: false): 
  If you know the date of the seminar, enter it in the correct format (e.g., '2022-01-01').
  
- **Seminar Time** (`seminar_time`, `time`, required: false): 
  If you know the time of the seminar, enter it in the correct format (e.g., '12:00' or '13:00').
