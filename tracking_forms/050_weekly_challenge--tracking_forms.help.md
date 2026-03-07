<thinking>
This form appears to be for tracking challenges, specifically for clients, with the purpose of creating a weekly challenge that they can participate in. Upon closer inspection, it appears that the form is for collecting data on a challenge, likely for tracking purposes or feedback. I'm assuming that the form will be used by a client-facing application or website, given the presence of fields like "challenge_title" and "description". I'm not seeing any duplication or non-relevance issues with the form, but I'll keep an eye out for any potential issues.
</thinking>

# weekly_challenge - Help Guide
## Purpose
The **Weekly Challenge** form is designed to track and collect information about challenges assigned to clients. It's intended to be used by clients to participate in and provide feedback on these challenges.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in the `challenge_title` field with a brief title describing the challenge.
2. Select the `category` field with the relevant tracking form category.
3. In the `description` field, provide a detailed description of the challenge, keeping in mind it will be for client-facing purposes.
4. If assigned to the client, select the `assigned_tool` field to specify which tool was assigned for this challenge.
5. Provide the name of the file generated as an output in the `output_file` field.

## Field-by-Field Explanation
* **challenge_title** (`text`, required/optional): A brief title of the challenge.
* **category** (`text`, required/optional): The relevant tracking form category.
* **description** (`text`, required/optional): A detailed description of the challenge, intended for client-facing purposes.
* **assigned_tool** (`select_one`, required/true): Select the tool assigned to the client for this challenge.
* **output_file** (`text`, required/optional): The name of the output file generated for this challenge.

## Tips
* Make sure to select the correct category and tool to ensure accurate tracking information.
* Use a descriptive title and description to provide clear context about the challenge.
