<thinking>Before we create the help guide, let's review the form's purpose and fields. The form is called "wellness_quiz" and it appears to be a quiz that assesses various aspects of a person's wellness, including their sleep habits, nutrition, exercise frequency, stress levels, emotional health, mental health, and overall wellness. The form has multiple pages, but all the relevant fields are located on the intro page and subsequent pages, with some fields repeated on multiple pages. Each field has a specific label, type, and hint that should be taken into account when explaining each field to the user.

The required fields are: age (page 2), nutrition_habit (page 4), exercise_frequency (page 5), emotional_health (page 7), mental_health (page 7), physical_health (page 9), and overall_wellness (page 10). Some fields have multiple options, like select_one or select_multiple, while others are simple text inputs. The form also has a submit field at the end, which is not required but still important for the user to complete the form.

The help guide should aim to explain each field in a clear and concise manner, without assuming the user has any prior knowledge of the form's purpose or the underlying business logic. The guide should also be easy to navigate, with each field explained on a separate page or section.</thinking>

# wellness_quiz - Help Guide
## Purpose
The wellness_quiz is a form that helps you assess your overall wellness by answering a series of questions about your habits and feelings. It's designed to provide you with a better understanding of your current wellness status and help you identify areas for improvement.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Answer all the required fields, marked with an asterisk (*) on each page.
2. For questions with multiple options, select one or more of the options that best fit your response.
3. Make sure to fill in all pages, even if you don't want to submit anything.
4. Once you've completed all the pages, click the submit button at the end to review your responses.

## Field-by-Field Explanation

### Welcome to the Quiz (Page 1)
* **Welcome to the Quiz**: This is a note field that introduces the quiz. You can read it carefully before starting the quiz.
* **Age** (`age`, `number`, required): Please enter your age to help us better understand your demographic.
* **How often do you get enough sleep?** (`sleep_habit`, `select_one`, required): How often do you get enough sleep each night? Select one of the options that best fit your answer.
	+ Every night: You get at least 7-8 hours of sleep each night.
	+ Most nights: You get 5-6 hours of sleep each night, but sometimes more or less.
	+ Rarely: You get less than 5 hours of sleep each night.
	+ Never: You almost never sleep or have trouble falling asleep.

### How often do you eat Fruits and Veggies? (Page 3)
* **How often do you eat fruits and vegetables?** (`nutrition_habit`, `select_multiple`, required): How often do you eat fruits and vegetables? Select all the options that best fit your answer.
	+ Most days: You eat fruits and vegetables on most days of the week.
	+ 2-3 times a week: You eat fruits and vegetables 2-3 times a week.
	+ Rarely: You rarely eat fruits and vegetables.
	+ Never: You almost never eat fruits and vegetables.

### Exercise Frequency (Page 5)
* **How often do you exercise?** (`exercise_frequency`, `select_one`, required): How often do you exercise? Select one of the options that best fit your answer.
	+ Daily: You exercise every day.
	+ 2-3 times a week: You exercise 2-3 times a week.
	+ 1-2 times a week: You exercise 1-2 times a week.
	+ Rarely: You rarely exercise.

### Stress Levels (Page 6)
* **How do you rate your stress levels?** (`stress_levels`, `select_multiple`, required): How do you rate your stress levels? Select all the options that best fit your answer.
	+ Low: You rarely feel stressed.
	+ Medium: You sometimes feel stressed, but you know how to manage it.
	+ High: You often feel stressed.
	+ Extremely High: You are constantly stressed.

### Emotional and Mental Health (Page 7)
* **How do you feel?** (`emotional_health`, `select_multiple`, required): How do you feel? Select all the options that best fit your answer.
	+ Happy: You feel happy most of the time.
	+ Sad: You sometimes feel sad.
	+ Neutral: You feel neutral or okay.
	+ Very sad: You feel very sad most of the time.
* **What's your mental health like?** (`mental_health`, `select_multiple`, required): What's your mental health like? Select all the options that best fit your answer.
	+ Excellent: You have excellent mental health.
	+ Good: You have good mental health, but you're not perfect.
	+ Fair: You have fair mental health, with some issues.
	+ Poor: You have poor mental health.

### Physical Health (Page 8)
* **How's your physical health?** (`physical_health`, `select_multiple`, required): How's your physical health? Select all the options that best fit your answer.
	+ Excellent: You have excellent physical health.
	+ Good: You have good physical health, but you're not perfect.
	+ Fair: You have fair physical health, with some issues.
	+ Poor: You have poor physical health.

### Overall Wellness (Page 9)
* **How do you rate your overall wellness?** (`overall_wellness`, `select_one`, required): How do you rate your overall wellness? Select one of the options that best fit your answer.
	+ Excellent: You feel excellent overall.
	+ Good: You feel good overall.
	+ Fair: You feel fair overall.
	+ Poor: You feel poor overall.

### Comments (Page 10)
* **Comments**: This is a text field where you can add any additional comments or answers that didn't fit into the previous questions.
* **Submit**: Once you've completed all the pages, click this button to review your responses.

## Tips
* Make sure to answer all required fields.
* Be honest about your habits and feelings to get an accurate picture of your wellness.
* Don't hesitate to add comments if you have anything additional to share.
* Once you've submitted, you can review your responses and see your overall wellness score.
