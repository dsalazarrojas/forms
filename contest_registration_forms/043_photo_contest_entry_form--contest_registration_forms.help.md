<thinking>
We are creating a help guide for a Photo Contest Entry Form. Before we dive into the guide, let's quickly confirm that this form is intended for users to submit their entries for a photo contest. This form should not be used for any other purpose. Additionally, we'll review the provided YAML fields to ensure we don't have any redundant or unnecessary information. Our goal is to make the form easy to understand and complete for end-users. We'll follow the provided YAML structure for the explanation, which includes fields for first name, last name, email, phone number, photos, comments, agreement, and consent. With this understanding, let's move on to creating the help guide.
</thinking>

# Photo Contest Entry Form - Help Guide
## Purpose
The Photo Contest Entry Form is for users to submit their entries for a photo contest. This form collects essential details and requirements for contest participants to provide their name, contact information, photos, and consent to participate.
## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your First Name and Last Name in the required First Name and Last Name fields.
2. Enter a valid Email address in the Email field.
3. Fill out the Phone Number field if you want us to contact you.
4. Upload or describe Photos 1, 2, and 3.
5. Add any additional comments about your entries or submissions.
6. Read and agree to the conditions stated in the Agreement section.
7. Confirm you consent to participate in the contest by entering your consent in the Consent field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, text, optional): Enter your last name as it appears on your official documents.
* **Email** (`email`, email, required): Enter a valid email address where you can be reached.
* **Phone Number** (`phone_number`, text, optional): If you want us to contact you, please enter your phone number. We'll use it for communication purposes only.
* **Photo 1** (`photo_1`, text, optional): Upload or describe your first photo entry, with a brief title or description.
* **Photo 2** (`photo_2`, text, optional): Upload or describe your second photo entry, with a brief title or description.
* **Photo 3** (`photo_3`, text, optional): Upload or describe your third photo entry, with a brief title or description.
* **Comments** (`comments`, text, optional): Add any additional comments or information about your photo entries.
* **Agreement** (`agreement`, select_multiple, required): Read and agree to the conditions stated below. You must confirm your agreement to participate.
	+ 'Yes': I agree to the terms and conditions.
	+ 'No': Do not participate in the contest.
* **Consent** (`consent`, text, required): Confirm your consent to participate in the contest by entering your name.

## Tips
* Make sure to enter a valid email address to ensure we can contact you with contest updates and results.
* If you have any questions or need help, don't hesitate to contact us.
* Ensure you have the necessary permissions and rights to upload and share your photos.
