<thinking>
We need to ensure that only users who are eligible and not duplicates fill out the Secret Santa Survey form. This implies that we should verify the user's role in our organization and that they haven't filled out the survey before. We also need to consider using some sort of validation mechanism to prevent users from accessing the form multiple times. To address this, we can implement role-based access controls and add a unique identifier to each user's survey response to track whether they've already submitted their form. This way, we can ensure that users can only submit their survey once and that it's filled out correctly. 
</thinking>

# Secret Santa Survey - Help Guide
## Purpose
The Secret Santa Survey form is a crucial tool for the event planning committee to gather essential information about participants' gift preferences for our Secret Santa event. This form will help us create a more enjoyable and meaningful gift-giving experience for everyone involved. It's essential that all users fill out this form accurately and honestly, as it will help us tailor gifts to each person's interests and budget.

## How To Complete This Form
1. **User Information** (`user_info`, text, optional): Please enter your name and any other relevant information about yourself. This will help us get to know you better.
2. **Gift Preferences** (`gift_preferences`, select_multiple, required): Select the type of gifts you would enjoy most. Please choose all that apply.
3. **Budget** (`gift_budget`, number, optional): If you're willing, please enter your preferred gift budget. This will help us choose gifts within your budget.
4. **Gift Ideas** (`gift_ideas`, select_multiple, optional): Select the type of gift ideas you would like or find interesting. Please choose all that apply.
5. **Budget for Gift Card** (`gift_card_budget`, number, optional): If you have a gift card preference, please enter the budget.
6. **Favorite Hobbies** (`favorite_hobbies`, select_multiple, optional): Choose your favorite hobbies or interests from the provided options.
7. **Interests** (`favorite_hobbies_interests`, select_multiple, optional): Indicate whether or not you have any interests or hobbies that you'd like to share. Please choose all that apply.
8. **Gift Interests** (`gift_interests`, select_multiple, optional): Select whether or not you have any gift interests. Please choose all that apply.
9. **User Notes** (`user_notes`, note, optional): If you have any additional information or comments, please share them here.
10. **Submit Form** (`submit_form`, select_one, required): Once you've filled out the form, please select "Submit" to finalize your entries. You can also choose "Cancel" if you'd like to exit the form.

## Field-by-Field Explanation

* **User Information**: Enter your name and any other information you think is relevant to your gift preferences.
* **Gift Preferences**: Select all the types of gifts you would enjoy most, such as Gift Ideas or Unique Experiences.
* **Budget**: If you're willing, enter your preferred budget for gifts. This will help us choose gifts within your budget.
* **Gift Ideas**: Select the types of gift ideas you would like or find interesting, such as Gift Cards.
* **Budget for Gift Card**: If you have a gift card budget, enter it here.
* **Favorite Hobbies**: Choose your favorite hobbies or interests from the provided options.
* **Interests**: Indicate whether or not you have any interests or hobbies that you'd like to share.
* **Gift Interests**: Select whether or not you have any gift interests.
* **User Notes**: Add any additional information or comments you'd like to share.
* **Submit Form**: Once you've filled out the form, select "Submit" to finalize your entries or "Cancel" to exit the form.
