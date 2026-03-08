# Gratitude And Recognition Voting - Help Guide
## Purpose
The Gratitude And Recognition Voting form enables employees to express their gratitude and appreciation towards their colleagues by nominating them for their outstanding work, service, or achievements. This form helps to foster a positive and supportive work environment by acknowledging and recognizing individual contributions.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the Nominee field with the name of the person you wish to nominate.
2. Select a category for the nomination from the provided options (Awards and Recognition, Community Service, Leadership, or Quality of Service).
3. Choose the type of recognition you believe the nominee deserves (Awards and Recognition, Bonus or Gift Card, Verbal Appreciation, or Written Letter of Appreciation).
4. Optionally, provide a brief description or explanation of the nominee's work or achievements in the Nomination Details field.
5. Enter the date of the nomination.
6. Optionally, provide additional comments or feedback about the nominee in the Vote Comment field.
7. Enter the number of votes for the nominee in the Vote field.
8. Optionally, provide additional comments about the vote in the Vote Comment field.

## Field-by-Field Explanation
* **Nominee** (`nomination_name`, text, required): Enter the name of the person you wish to nominate.
* **Category** (`nomination_category`, select_one, true): Choose the category for the nomination from the provided options (Awards and Recognition, Community Service, Leadership, or Quality of Service).
* **Recognition Type** (`recognition_type`, select_one, true): Select the type of recognition you believe the nominee deserves (Awards and Recognition, Bonus or Gift Card, Verbal Appreciation, or Written Letter of Appreciation).
* **Nomination Details** (`nomination_details`, text, false): Optionally, provide a brief description or explanation of the nominee’s work or achievements.
* **Date** (`nomination_date`, date, false): Enter the date of the nomination.
* **Vote Form** (`vote_form`, text, false): This field is not used.
* **Vote** (`vote_choice`, number, false): Enter the number of votes for the nominee.
* **Vote Comment** (`vote_comment`, text, false): Optionally, provide additional comments or feedback about the vote.
* **Comments** (`comment_form`, text, false): This field is not used.

## Tips
* Make sure to fill in all required fields (Nominee, Category, and Recognition Type) to complete the nomination.
* Use the provided category options to choose a relevant category for the nomination.
* Choose a recognition type that accurately reflects the nominee's achievements.
* Keep the Nomination Details and Vote Comment fields brief and concise for easier review and understanding.
