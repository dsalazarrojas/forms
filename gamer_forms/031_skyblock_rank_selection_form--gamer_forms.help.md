<thinking>
We'll create a help guide for a form with the following YAML fields:
The form collects information from a "Gamer" in a platform, likely a community or organization.
The form likely serves as an initial intake or registration process for the Gamer, and its purpose is to gather basic details such as name, application ID, rank, server preference, email, phone number, date of availability, time of availability, and any additional notes.
We should ensure the form is not being used for non-gamer purposes, as the name suggests it is.
</thinking>

# Gamer Form - Help Guide
## Purpose
The Gamer Form is a registration process for a "Gamer" in a platform. It collects essential details such as name, application ID, rank, server preference, email, phone number, date of availability, time of availability, and any additional notes.

## How To Complete This Form
To complete the Gamer Form, follow these steps:

1. Enter your Player Name in the text field provided.
2. Provide your Application ID, which is a unique identifier for your application.
3. Select your Rank from the available options.
4. Choose your preferred Server from the list of options.
5. Enter your Email address in the format `example@example.com`.
6. Enter your Phone number in the format `123-456-7890`.
7. Enter the Date when you are available to work.
8. If applicable, select the Time when you are available to work. If not available, you can leave this field blank.
9. Add any Additional Notes about yourself or your situation.

## Field-by-Field Explanation

* **Player Name** (`player_name`, text, required): Enter your full name as a gamer in the platform.
* **Application ID** (`application_id`, number, required): A unique identifier for your application, which we will use for internal tracking.
* **Rank** (`rank`, select_one, required): Select your rank from the available options to indicate your skill level or position.
* **Server** (`server`, select_multiple, required): Choose one or more servers where you are available to work on. This will allow us to match you with relevant projects.
* **Email** (`email`, email, required): Enter your email address in the format `example@example.com`. We will use this to communicate with you about your application.
* **Phone** (`phone`, text, required): Enter your phone number in the format `123-456-7890`. This is for our records and communication.
* **Date** (`date`, date, required): Enter the date when you are available to work. This can be a specific date or a range of dates if you are flexible.
* **Time** (`time`, time, optional): Enter the time when you are available to work. This is optional, so you can leave it blank if you are not specific about your schedule.
* **Notes** (`notes`, note, optional): Add any additional information about yourself or your situation. This is a free-text field for you to express your thoughts.
