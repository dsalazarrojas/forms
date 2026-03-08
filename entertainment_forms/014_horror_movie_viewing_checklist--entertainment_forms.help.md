</thinking>

# Horror Movie Viewing Checklist - Help Guide
## Purpose
This form is designed to help users track and record their horror movie viewing experience. It allows users to input details such as the title, genre, director, release year, rating, plot, main cast, runtime, and other relevant information about a horror movie they have watched.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by selecting the "Horror Movie Title" field and enter the title of the movie you watched.
2. Choose the genre of the movie from the "Horror Movie Genre" dropdown menu.
3. Enter the name of the director in the "Director" field.
4. Input the release year of the movie in the "Release Year" field.
5. Rate the movie using the "Rating" field.
6. Rate the movie out of 10 using the "Rating Out of 10" field.
7. Provide a brief summary of the movie's plot in the "Plot" field.
8. Select the main cast of the movie from the options provided in the "Main Cast" field.
9. Choose the runtime of the movie from the "Runtime" dropdown menu.
10. Add any notes or recommendations for the movie in the "Recommended for" field.
11. Enter the date and time you watched the movie in the "Watched On" field.

## Field-by-Field Explanation
- **Horror Movie Title** (`movie_title`, `text`, required: false): Enter the title of the horror movie you watched.
- **Horror Movie Genre** (`genre`, `select_one`, required: false): Select the genre of the horror movie from the provided options: horror, thriller, suspense.
- **Director** (`director`, `text`, required: false): Enter the name of the director of the movie.
- **Release Year** (`release_year`, `number`, required: false): Input the release year of the movie.
- **Rating** (`rating`, `number`, required: false): Rate the movie with a score out of a default number (e.g., 1-5).
- **Rating Out of 10** (`rating_out_of_10`, `number`, required: false): Rate the movie out of 10.
- **Plot** (`plot`, `text`, required: false): Enter a brief summary of the movie's plot.
- **Main Cast** (`cast`, `select_multiple`, required: false): Select the main cast members of the movie.
- **Runtime** (`runtime`, `select_one`, required: false): Choose the runtime of the movie from the provided options.
- **Recommended for** (`recommended_for`, `note`, required: false): Add any notes or recommendations for the movie.
- **Watched On** (`watched_on`, `date`, required: false): Enter the date and time you watched the movie. 

## Tips
- Please fill in all the fields that apply to your viewing experience.
- Use the provided options for fields like genre, genre and runtime to ensure accuracy.
- You can add multiple main cast members by selecting multiple options in the "Main Cast" field.
- The "Recommended for" field is for adding any additional notes or recommendations for the movie, and can be as short or detailed as you like.
