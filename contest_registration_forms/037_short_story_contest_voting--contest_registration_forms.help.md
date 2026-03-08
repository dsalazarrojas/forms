<thinking>...internal reasoning to understand the form purpose and fields... 

The form "short_story_contest_voting" is used for users to participate in a short story contest. The purpose of this form is to collect user's details, their chosen story, and ratings/votes for each story in the contest. This form guides users through the voting process for a short story contest.

</thinking>

# short_story_contest_voting - Help Guide
## Purpose
The form is used for users to participate in a short story contest by submitting their votes and ratings for each participating story.

## How To Complete This Form

- To complete this form, follow these steps:
    1. Click on the "Submit" button to start the form.
    2. Enter your User Details in the "User Details" field.
    3. Select the stories you want to vote for in the "Choose A Story" field.
    4. Choose the type of vote in the "Vote Type" field.
    5. Rate each story in the "Rate the Story" field.
    6. Optionally, enter your comment in the "Comment" field.
    7. Review your form details before submitting.

## Field-by-Field Explanation
### User Details
* **User Details** (`user_details`, `text`, required/optional): Enter your name, email address, or any other relevant details to help us track your participation in the contest.

### Choose A Story
* **Choose A Story** (`story_choice`, `select_multiple`, required): Select all the stories you want to vote for. Available options are "The Great Gatsby", "The Catcher in the Rye", "The Great Expectations", and "The Old Man and the Sea".

### Vote Type
* **Vote Type** (`vote_type`, `select_one`, required): Choose the type of vote you want to submit. Options are "For the win" or "Against the win".

### Rate the Story
* **Rate the Story** (`rating`, `number`, required): Rate each selected story on a scale. The higher the rate, the better.

### Comment
* **Comment** (`comment`, `note`, optional): Optionally, enter any comment or feedback for each selected story.

### Submit
* **Submit** (`submit_button`, `text`, required): Review and submit your form after filling all required fields.
