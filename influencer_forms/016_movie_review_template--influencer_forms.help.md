# movie_review_template - Help Guide
## Purpose
This form is designed to collect movie reviews from users, including details about the movie title, director, rating, and review body.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the title of the movie you are reviewing in the "Movie Title" field.
2. Enter the director's name in the "Director" field.
3. Choose a rating for the movie from 1-5, where 1 is the lowest and 5 is the highest.
4. Provide a brief review of the movie in the "Review Body" field.
5. Enter the time you watched the movie in the "Watch Time" field.
6. Check the "Recommended" field to indicate if you would recommend the movie.
7. Enter any notes or additional comments you'd like to add in the "User Rating" field.
8. Optionally, enter the image of the movie in the "Movie Image" field.

## Field-by-Field Explanation
* **Movie Title** (`movie_title`, text, required): Enter the title of the movie you are reviewing.
* **Director** (`movie_director`, text, optional): Enter the director's name. If you're not sure, you can leave this field blank.
* **Rating** (`movie_rating`, number, required): Choose a rating from 1-5 to indicate how much you enjoyed the movie.
* **Review Body** (`review_body`, text, required): Write a brief review of the movie, including your thoughts and opinions.
* **Watch Time** (`watch_time`, date, optional): Enter the time you watched the movie, in a standard date format (e.g., MM/DD/YYYY).
* **Recommended** (`recommended`, text, optional): Check this box if you would recommend the movie to others.
* **User Rating** (`user_rating`, text, optional): Add any additional comments or ratings you'd like to provide.
* **Movie Image** (`movie_image`, text, optional): If you have a public image URL for the movie, enter it here.

## Tips
* Make sure to enter the movie title and rating fields, as they are required.
* You can use a standard date format to enter the watch time field.
* If you're unsure about any field, you can leave it blank, but be aware that it may affect the form's functionality.
