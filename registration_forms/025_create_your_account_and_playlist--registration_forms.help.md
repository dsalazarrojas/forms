<thinking>

The purpose of this form is to collect user information for account and playlist creation. The form has multiple sections for various fields such as contact information, account details, and platform-specific settings. This information will be used to create a user account and playlist with the provided settings.

To prevent duplication, we need to ensure that users do not already have an account with the same email address. We will check for duplicates before creating a new account.

</thinking>

# create-your-account-and-playlist - Help Guide
## Purpose
This form is used to create a new account and playlist with specific settings for a user. The collected information will be used to configure their account and playlist.

## How To Complete This Form
1. Select the type of account you want to create: Account or Playlist.
2. Enter your email address.
3. Enter your name.
4. Enter your password.
5. Optionally, enter a playlist name.
6. Enter a description for your playlist.
7. Select a category for your account.
8. Select the platforms you want to use for your account.
9. Select your role(s) for the account.
10. Select your time zone.
11. Select your languages.
12. Select your currency (optional).
13. Enter your country.
14. Enter your country code.
15. Enter your area.
16. Enter your city (optional).
17. Enter address line 1.
18. Enter address line 2 (optional).
19. Enter address line 3.
20. Enter your post code.
21. Enter your phone number.
22. Confirm your phone number.
23. (optional) If you want to confirm your phone number label.

## Field-by-Field Explanation
* **Account/Playlist** (`create-your-account-and-playlist`, `select_one`, required): Select the type of account you want to create, either "Account" or "Playlist".
* **Email Address** (`email`, `email`, required): Enter your email address to receive updates and notifications.
* **Name** (`name`, `text`, required): Enter your name to be displayed on your account and playlist.
* **Password** (`password`, `text`, required): Enter a strong password to secure your account.
* **Playlist** (`playlist`, `text`, optional): Optionally, enter a name for your playlist.
* **Description** (`description`, `text`, required): Enter a description for your playlist.
* **Category** (`category`, `select_one`, required): Select a category for your account (e.g., "media platforms" or "creator communities").
* **Platform** (`platform`, `select_multiple`, required): Select the platforms you want to use for your account.
* **Role** (`role`, `select_multiple`, required): Select your role(s) for the account (e.g., "role 1", "role 2", etc.).
* **Time Zone** (`timezone`, `select_multiple`, required): Select your time zone.
* **Language** (`language`, `select_multiple`, required): Select your languages.
* **Currency** (`currency`, `select_multiple`, optional): Select your currency (if applicable).
* **Country** (`country`, `text`, required): Enter your country.
* **Country Code** (`country_code`, `text`, required): Enter your country code.
* **Area** (`area`, `text`, required): Enter your area.
* **City** (`city`, `text`, optional): Enter your city (if applicable).
* **Address 1** (`address_1`, `text`, optional): Enter your address line 1.
* **Address 2** (`address_2`, `text`, optional): Enter your address line 2 (if applicable).
* **Address 3** (`address_3`, `text`, required): Enter your address line 3.
* **Post Code** (`post_code`, `text`, required): Enter your post code.
* **Phone** (`phone`, `text`, required): Enter your phone number.
* **Confirm Phone** (`confirm_phone`, `text`, required): Confirm your phone number.
* **Confirm Phone Label** (`confirm_phone_label`, `text`, optional): Optionally, confirm your phone number label (if applicable).
* **Submit** (`submit`, `text`, optional): Submit your form to create your account and playlist.
