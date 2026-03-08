# Horror Movie Checklist - Help Guide

## Purpose
This form is designed to help users track their horror movie watching history. It allows users to provide information about a specific horror movie, including its title, director, genre, cast, release date, runtime, language, rating, and notes. Additionally, users can indicate if they have watched the movie, when they watched it, in what language, and if they would recommend it. The form also includes fields for rewatching the movie and providing a rewatching date, rewatching time, language, and notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Horror Movie Title" field with the actual title of the movie you are tracking.
2. Enter the director of the movie in the "Director" field.
3. Select the genre of the movie from the "Genre" field.
4. Enter the cast of the movie in the "Cast" field.
5. Enter the release date of the movie in the "Release Date" field.
6. Enter the runtime of the movie in the "Runtime" field.
7. Select the languages in which the movie was watched or rewatched from the "Language" field.
8. Rate your satisfaction with the movie in the "Rating" field.
9. Enter any notes about the movie in the "Notes" field.
10. Indicate if you have watched the movie by checking the "Watched" field.
11. If you have watched the movie, enter the date and time you watched it in the "Watched Date" and "Watched Time" fields.
12. If you have rewatched the movie, enter the date and time you rewatched it in the "Rewatched Date" and "Rewatched Time" fields.
13. If you would recommend the movie, check the "Recommendation" field.
14. If you have rewatched the movie, indicate if you rewatched it by checking the "Rewatched" field.
15. Enter the date and time you would recommend the movie in the "Recommendation Date" field.

## Field-by-Field Explanation

* **Horror Movie Title** (`watched_title`, text, required/optional): Enter the actual title of the horror movie you are tracking.
* **Director** (`watched_director`, text, required/optional): Enter the director of the movie.
* **Genre** (`watched_genre`, text, required/optional): Select the genre of the movie (e.g., horror, thriller, comedy).
* **Cast** (`watched_cast`, text, required/optional): Enter the cast members of the movie.
* **Release Date** (`watched_release_date`, date, required/optional): Enter the release date of the movie.
* **Runtime** (`watched_runtime`, number, required/optional): Enter the runtime of the movie.
* **Language** (`watched_language`, select_multiple, required/optional): Select the languages in which the movie was watched or rewatched (e.g., English, Spanish, French, Mandarin).
* **Rating** (`watched_rating`, select_one, required/optional): Rate your satisfaction with the movie (e.g., Very satisfied, Neutral, Dissatisfied).
* **Notes** (`watched_notes`, note, required/optional): Enter any notes about the movie.
* **Watched** (`watched_watched`, select_one, required/true): Indicate if you have watched the movie.
* **Watched Date** (`watched_watched_date`, date, required/true): Enter the date you watched the movie.
* **Watched Time** (`watched_watched_time`, time, required/true): Enter the time you watched the movie.
* **Watched Language** (`watched_watched_language`, select_multiple, required/true): Select the languages in which you watched the movie.
* **Watched Notes** (`watched_watched_notes`, note, required/true): Enter any notes about watching the movie.
* **Rewatched** (`watched_rewatched`, select_one, required/false): Indicate if you have rewatched the movie.
* **Rewatched Date** (`watched_rewatched_date`, date, required/false): Enter the date you rewatched the movie.
* **Rewatched Time** (`watched_rewatched_time`, time, required/false): Enter the time you rewatched the movie.
* **Rewatched Language** (`watched_rewatched_language`, select_multiple, required/false): Select the languages in which you rewatched the movie.
* **Rewatched Notes** (`watched_rewatched_notes`, note, required/false): Enter any notes about rewatching the movie.
* **Recommendation** (`watched_recommendation`, select_one, required/false): Indicate if you would recommend the movie.
* **Recommendation Date** (`watched_recommendation_date`, date, required/true): Enter the date you would recommend the movie.
* **Rewatched Rewatched** (`watched_rewatched_rewatched`, select_one, required/false): Indicate if you have rewatched the movie.
* **Watched Watched Rewatched Time** (`watched_watched_rewatched_time`, time, required/false): Enter the time you rewatched the movie.
* **Watched Rewatched Rewatched Language** (`watched_rewatched_rewatched_language`, select_multiple, required/false): Select the languages in which you rewatched the movie.
* **Watched Rewatched Rewatched Notes** (`watched_rewatched_rewatched_notes`, note, required/false): Enter any notes about rewatching the movie.

## Tips

* Make sure to fill in all required fields for a complete and accurate tracking of your horror movie history.
* You can use the "Notes" field to add any additional information about the movie that you don't find a place for in the other fields.
* The "Rewatched" field is used to track if you rewatched the movie, if you have not checked this field, it means you have not rewatched the movie.
* If you select "True" in the "Watched" field, you must fill in the "Watched Date" and "Watched Time" fields.
* If you select "True" in the "Rewatched" field, you must fill in the "Rewatched Date" and "Rewatched Time" fields.
* The "Language" fields are used to track the languages in which you watched or rewatched the movie.
* The "Rating" field is used to rate your satisfaction with the movie.
* The "Notes" fields are used to add any additional information about the movie.
