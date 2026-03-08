# Animated Series Trivia Quiz - Help Guide
## Purpose
This form is designed to test your knowledge of animated shows. It will ask you a series of multiple-choice questions about various anime series and capture some demographic information from you. Your goal is to provide accurate answers to the questions and optionally provide feedback after completing the quiz.

## How To Complete This Form
1. Enter your name and email address on the second page.
2. Select your experience level with anime.
3. Answer each question on the subsequent pages.
4. Rate the difficulty level of the quiz after completing it.
5. Provide feedback about your experience.
6. If you're interested, you can request more trivia questions.

## Field-by-Field Explanation

* **Your Name** (`participant_name`, text, required): Enter your name so that we can personalize your quiz results.
* **Email Address** (`email`, email, required): Provide your email address for your quiz results. Please note that we do not intend to use your email for any marketing or communication purposes.
* **Your Anime Knowledge Level** (`experience_level`, select_one, required): Select how much you know about anime:
	+ Beginner - Just starting
	+ Casual - Watch occasionally
	+ Regular - Watch frequently
	+ Enthusiast - Very knowledgeable
	+ Expert - Ultimate fan
* **Question 1** (`question_one`, select_one, required): Select the correct premiere year of the anime series Dragon Ball.
* **Question 2** (`question_two`, select_one, required): Select the animation studio that produced the anime series Demon Slayer.
* **Question 3** (`question_three`, select_one, required): Select the name of the main protagonist in the anime series Attack on Titan.
* **Question 4** (`question_four`, select_one, required): Select the real name of the main character in the anime series My Hero Academia.
* **Question 5** (`question_five`, select_one, required): Select the anime series that had the episode titled "The Day the Clown Wept".
* **Question 6** (`question_six`, select_one, required): Select the number of seasons produced for the anime series Steins;Gate.
* **Question 7** (`question_seven`, select_one, required): Select the magical system used in the anime series Jujutsu Kaisen.
* **Question 8** (`question_eight`, select_one, required): Select the original creator of the Code Geass franchise.
* **How difficult was this quiz?** (`quiz_difficulty`, select_one, optional): Rate the difficulty level of the quiz:
	+ Too easy
	+ Easy
	+ Just right
	+ Difficult
	+ Too difficult
* **Did you enjoy this trivia quiz?** (`enjoyed_quiz`, select_one, optional): How was your experience:
	+ Yes, very much
	+ Yes, somewhat
	+ Neutral
	+ Not really
	+ Not at all
* **Would you like more trivia questions?** (`more_questions`, select_one, optional): Are you interested in more questions:
	+ Yes, create more questions
	+ Yes, but different topics
	+ Maybe
	+ No thanks
* **Additional Comments** (`additional_comments`, text, optional): If you have any feedback about the quiz, you can write it here.
