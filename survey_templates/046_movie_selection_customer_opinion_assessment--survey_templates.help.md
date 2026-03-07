<thinking>
To create a user-facing help guide for this form, we need to first understand its purpose. This form is designed to gather opinions from customers on selected movies. The form likely aims to collect demographic data such as age, gender, income, etc., which can be used to analyze movie preferences and create targeted marketing campaigns.
To avoid duplication and maintain the quality of the data collected, we need to ensure that customers don't answer the form multiple times for the same movie. We can implement a check to see if the customer has already filled out the form for a particular movie.
</thinking>

# Movie Selection Customer Opinion Assessment - Help Guide
## Purpose
This form is designed to gather opinions from customers on selected movies. By filling out this form, you'll help us understand what you like and dislike about a movie, which will allow us to create more tailored content and recommendations.

## How To Complete This Form
To complete this form, simply select the movie you'd like to provide feedback on from the list of available options. If you've already watched and rated the movie, you can also provide your feedback on your experience. You can skip any fields that don't apply to you.

## Field-by-Field Explanation
### Select a Film
* **Select a Film** (`film_title`, `select_one`): Choose a movie from the list to provide feedback on.
### How would you rate this film?
* **How would you rate this film?** (`rating`, `select_one`): Rate the movie as Excellent, Good, Average, or Poor.
### What genre do you prefer?
* **What genre do you prefer?** (`genre`, `select_multiple`): Select all the genres you enjoy, such as Action, Comedy, Drama, Horror, or Romance.
### Have you ever watched this film?
* **Have you ever watched this film?** (`watched`, `select_one`): Answer True if you've watched the movie, False otherwise.
### Is this a favorite film?
* **Is this a favorite film?** (`favorite`, `select_one`): Answer True if you consider the movie a favorite, False otherwise.
### How much time did you spend watching this film?
* **How much time did you spend watching this film?** (`time_watched`, `number`): Enter the number of hours you spent watching the movie. This field is optional.
### On what date did you watch this film?
* **On what date did you watch this film?** (`time_watched_date`, `date`): Enter the date you watched the movie. This field is optional.
### At what time did you watch this film?
* **At what time did you watch this film?** (`time_watched_time`, `time`): Enter the time you watched the movie. This field is optional.
