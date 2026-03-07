<thinking>
# This form is used for ranking choices in a voting system. It is used to collect user input for voting on various options, where each option has a yes or no answer, and the user must rank the top 6 choices. This form is not meant to be filled out multiple times, so it's likely that it's being used for a one-time voting session.
</thinking>

# rank_choice_voting_form - Help Guide
## Purpose
The purpose of this form is to collect user input for a voting session where users rank their top 6 choices.

## How To Complete This Form
To complete this form, follow these steps:
1.  Enter your User ID in the field labeled "User ID".
2.  Enter the ID of your chosen candidate in the field labeled "Candidate ID".
3.  Indicate your choice for each option in the "Choice 1" to "Choice 6" fields.
4.  Rank the top 6 options in the "Rank 1" to "Rank 6" fields.
   - Each field is a number input, where you rank the choice that you most prefer.
   - Rank 1 is the choice you most prefer, and Rank 6 is the choice you least prefer.
5.  Click submit when you have filled out all fields.

## Field-by-Field Explanation
*   **User ID** (`user_id`, number, required): Enter your unique user ID to identify your vote.
*   **Candidate ID** (`candidate_id`, number, required): Enter the ID of your chosen candidate to associate your vote with them.
*   **Choice 1** (`choice_1`, select_one, optional): Indicate if you choose to answer "Yes" or "No" for this choice.
*   **Choice 2** (`choice_2`, select_one, optional): Indicate if you choose to answer "Yes" or "No" for this choice.
*   **Choice 3** (`choice_3`, select_one, optional): Indicate if you choose to answer "Yes" or "No" for this choice.
*   **Choice 4** (`choice_4`, select_one, optional): Indicate if you choose to answer "Yes" or "No" for this choice.
*   **Choice 5** (`choice_5`, select_one, optional): Indicate if you choose to answer "Yes" or "No" for this choice.
*   **Choice 6** (`choice_6`, select_one, optional): Indicate if you choose to answer "Yes" or "No" for this choice.
*   **Rank 1** (`rank_1`, number, required): Rank the option you most prefer, where Rank 1 is the highest rank.
*   **Rank 2** (`rank_2`, number, required): Rank the option you second most prefer, where Rank 2 is the second highest.
*   **Rank 3** (`rank_3`, number, required): Rank the option you third most prefer, where Rank 3 is the third highest.
*   **Rank 4** (`rank_4`, number, required): Rank the option you fourth most prefer, where Rank 4 is the fourth highest.
*   **Rank 5** (`rank_5`, number, required): Rank the option you fifth most prefer, where Rank 5 is the fifth highest.
*   **Rank 6** (`rank_6`, number, required): Rank the option you least prefer, where Rank 6 is the lowest rank.

## Tips
*   Each of the "Choice" fields must be answered to proceed with ranking the top 6 options.
*   The "Rank" fields must be filled in numerical order from highest to lowest preference.
*   A submitted form can only be filled out once per user.
