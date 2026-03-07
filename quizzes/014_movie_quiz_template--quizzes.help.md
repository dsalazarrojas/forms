<thinking>
The form purpose is to create a movie quiz template that allows users to select a movie category, input the released year, director, movie title, main actor, and other relevant details. 
This template is likely used for quizzes or surveys on movies, and the information gathered can be used to evaluate user responses or opinions about movies. 
Please confirm that the form is for creating a movie quiz and that the provided YAML fields are accurate. If there are any changes needed to be made, let me know so I can assist in creating the correct form.

</thinking>

# Movie Quiz Template - Help Guide
## Purpose
The Movie Quiz Template is a form designed to create a quiz or survey about movies. It helps in gathering information about movies, such as category, release year, director, and other details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the movie category from the options provided in the first field.
2. Enter the released year of the movie in the second field.
3. Enter the director of the movie in the third field.
4. Enter the movie title in the fourth field.
5. Enter the main actor's name in the fifth field.
6. Select the genres of the movie that apply in the sixth field.
7. Enter the number of awards won by the movie in the seventh field.
8. Enter the runtime of the movie in minutes in the eighth field.
9. Enter the release date of the movie in the ninth field.
10. Enter the user's rating of the movie in the tenth field.
11. Enter any additional notes about the movie in the eleventh field.

## Field-by-Field Explanation

* **Movie Category** (`movie_category`, select_one, optional): Choose the category of the movie, such as action, comedy, drama, etc.
* **Released Year** (`released_year`, text, optional): Enter the year the movie was released.
* **Director** (`director`, text, optional): Enter the name of the movie's director.
* **Movie Title** (`movie_title`, text, optional): Enter the title of the movie.
* **Main Actor** (`main_actor`, text, optional): Enter the name of the main actor in the movie.
* **Movie Genre** (`movie_genre`, select_multiple, optional): Select the genres of the movie, such as action, comedy, horror, etc.
* **Awards Won** (`awards_won`, number, optional): Enter the number of awards the movie won.
* **Runtime in Minutes** (`runtime_in_minutes`, number, optional): Enter the runtime of the movie in minutes.
* **Movie Release Date** (`movie_release_date`, date, optional): Enter the release date of the movie.
* **Movie Rating** (`movie_rating`, number, optional): Enter the user's rating of the movie.
* **User Rating** (`user_rating`, number, optional): Enter your rating of the movie.
* **Notes** (`notes`, note, optional): Enter any additional notes or comments about the movie. 

## Tips

* Please ensure that the movie categories and genres you select are accurate.
* Enter the released year, director, and release date in the format MM/DD/YYYY.
* If you want to rate the movie, select a rating between 0 and 5, where 0 is the lowest and 5 is the highest.
* Use the notes field to add any additional information or feedback about the movie.
