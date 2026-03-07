<thinking>
This form is designed to collect information from users about their preferences for various leadership roles within the Puppy Club. The form is likely intended for clubs that are electing their own leadership members for a specified period of time. The purpose of this form is to gather data on who will hold which positions and for how long. 

The form collects information on the following: club name, who will be president, vice president, treasurer, secretary, and how long the president will serve. Users are also asked to provide their email address for contact purposes. 

This form does not appear to have any validation or error checking for non-club member responses, so it's assumed that users will only be filling this form if they are actual club members. 

Please note that the "feedback" field is likely intended for users to provide any comments or suggestions about the election process, and the "email" field is likely for club administrators to contact users for further information or clarification. 

</thinking>

# Puppy Club Election Survey - Help Guide
## Purpose
This form is designed to collect information from users about their preferences for various leadership roles within the Puppy Club.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of your club in the "What is the name of your club?" field.
2. For each leadership position, select "Yes" if you would like to hold that position, and "No" otherwise.
3. If you would like to serve as president, enter the length of time you would like to serve in the "How long will your president serve?" field.
4. Enter your email address in the "What email would you like to use to contact you?" field.
5. Finally, provide any feedback or suggestions you have about the election process in the "What do you think about this election process?" field.

## Field-by-Field Explanation
- **What is the name of your club?** (`club_name`, text, required: false): Enter the name of your club.
- **Who will be your club president?** (`position_1`, select_one, required: false): Select "Yes" if you would like to be president, and "No" otherwise.
- **Who will be your club vice president?** (`position_2`, select_one, required: false): Select "Yes" if you would like to be vice president, and "No" otherwise.
- **Who will be your club treasurer?** (`position_3`, select_one, required: false): Select "Yes" if you would like to be treasurer, and "No" otherwise.
- **Who will be your club secretary?** (`position_4`, select_one, required: false): Select "Yes" if you would like to be secretary, and "No" otherwise.
- **How long will your president serve?** (`club_president`, time, required: false): If you would like to be president, enter the length of time you would like to serve.
- **What do you think about this election process?** (`feedback`, note, required: false): Provide any feedback or suggestions you have about the election process.
- **What email would you like to use to contact you?** (`email`, email, required: false): Enter your email address so that we can contact you for further information.
