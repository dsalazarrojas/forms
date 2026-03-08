# Thanksgiving Giveaway Form - Help Guide
## Purpose
The Thanksgiving Giveaway Form is used to collect contact and demographic information from participants, such as name, email, phone number, address, and zip code. The form also captures three select fields: win possibility, prize type, and winner. The purpose of this form is to understand who participated in the giveaway and what kind of information can be shared with them regarding the prizes and outcomes.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your Email in the "Email" field. Ensure it is a valid email address.
4. Enter your Phone in the "Phone" field.
5. Enter your Address in the "Address" field.
6. Enter your Zip Code in the "Zip Code" field.
7. Select your "Win Possibility" from the options: "Yes" or "No".
8. Select your "Prize Type" from the options: "Yes" or "No".
9. Select your "Winner" from the options: "Yes" or "No".

## Field-by-Field Explanation

- **First Name** (`first_name`, text, required/optional): A user's first name.
  Enter your first name, as it should be spelled correctly.
  
- **Last Name** (`last_name`, text, required/optional): A user's last name.
  Enter your last name, as it should be spelled correctly.

- **Email** (`email`, email, required/optional): A user's email address.
  Enter a valid email address that you can receive notifications at.
  
- **Phone** (`phone`, text, required/optional): A user's phone number.
  Enter your phone number in the format (XXX) XXX-XXXX.

- **Address** (`address`, text, required/optional): A user's address.
  Enter your home, work, or any other address you'd like to list.
  
- **Zip Code** (`zip_code`, text, required/optional): A user's zip code.
  Enter your zip code as it appears on your address.
  
- **Win Possibility** (`win_possibility`, select_multiple, required/optional): Whether the user has a possibility of winning.
  Select "Yes" if you think you have a chance to win, or "No" otherwise.
  
- **Prize Type** (`prize_type`, select_one, required/optional): The type of prize the user is interested in.
  Select the type of prize you are interested in, if applicable.
  
- **Winner** (`winner`, select_one, required/optional): Whether the user is a winner.
  Select "Yes" if you've won, or "No" otherwise.
  
- **Date** (`date`, date, required/optional): The date for the prize draw.
  Enter the date you'd like to have your prize drawn for.
