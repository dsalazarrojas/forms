# Solar Energy Quiz - Help Guide
## Purpose
This form is designed to collect data on users' knowledge and completion status of a solar energy quiz.

## How To Complete This Form
1. Answer the quiz questions, choosing the correct energy types and renewable energy sources.
2. Provide your feedback and score for the quiz.
3. Record your time spent on the quiz.
4. Mark whether you have completed the quiz or not.
5. Provide your score, time spent, and completion status.
6. If you are an administrator, you may choose a tool to assign to a user and record user information.

## Field-by-Field Explanation

* **Quiz Questions** (`quiz_questions`, `note`, required: false): This is where you start the quiz, answering the questions about solar energy. The more you know, the better!
* **Energy Types** (`energy_types`, `select_multiple`, required: false): Choose the types of energy you are familiar with. This will help us see what you know about different types of energy.
* **Renewable Energy Sources** (`renewable_energy_sources`, `select_multiple`, required: true): Choose the renewable energy sources you know. This will help us see what you know about renewable energy.
* **Benefits of Solar Energy** (`benefits_of_solar_energy`, `text`, required: false): Describe the benefits of using solar energy. This will help us see what you know about the advantages of solar energy.
* **Quiz Score** (`quiz_score`, `number`, required: true): Enter your score for the quiz. This will help us see how well you did.
* **Quiz Results** (`quiz_results`, `note`, required: false): You will see your quiz results here.
* **Feedback** (`feedback`, `text`, required: false): Provide feedback about your experience with the quiz.
* **Quiz Score Out of** (`quiz_score_out_of`, `number`, required: true): This is the maximum score for the quiz.
* **Time Spent** (`quiz_time_spent`, `number`, required: true): Record the time you spent on the quiz. This will help us see how long it took you to complete the quiz.
* **Assigned Tool** (`assigned_tool`, `text`, required: false): If you are an administrator, you can choose a tool to assign to a user.
* **Assigned User** (`assigned_user`, `text`, required: false): If you are an administrator, you can record user information.
* **User Score** (`user_score`, `number`, required: true): Enter your score for the quiz.
* **User Results** (`user_results`, `note`, required: false): You will see your quiz results here.
* **User Feedback** (`user_feedback`, `text`, required: false): Provide feedback about your experience with the quiz.
* **Quiz Completed** (`quiz_completed`, `select_one`, required: true): Mark whether you have completed the quiz or not.
* **User Time Spent** (`user_time_spent`, `number`, required: true): Record the time you spent on the quiz.
* **Quiz Duration** (`quiz_duration`, `time`, required: true): Record the duration of the quiz.
* **Quiz Start Time** (`quiz_start_time`, `date`, required: true): Record the start time of the quiz.
* **Quiz End Time** (`quiz_end_time`, `date`, required: true): Record the end time of the quiz.
* **Quiz Date** (`quiz_date`, `date`, required: true): Record the date of the quiz.
* **Quiz Time** (`quiz_time`, `time`, required: true): Record the time of the quiz.
* **Quiz Status** (`quiz_status`, `select_one`, required: true): Mark the status of the quiz as Not Started, In Progress, or Completed.
* **Assigned Tool Name** (`assigned_tool_name`, `text`, required: false): If you are an administrator, you can record the name of the tool assigned to a user.
* **Assigned User Name** (`assigned_user_name`, `text`, required: false): If you are an administrator, you can record the name of the user assigned to a tool.
* **Assigned User ID** (`assigned_user_id`, `text`, required: false): If you are an administrator, you can record the ID of the user assigned to a tool.
