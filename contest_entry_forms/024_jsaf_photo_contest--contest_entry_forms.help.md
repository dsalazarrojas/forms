<thinking>
The jxaf_photo_contest form is a data collection form designed to gather information about a photo submission for a contest. The form is intended for use by photographers who want to submit their photos for consideration in the contest. The form asks for general information about the photo, such as title, description, location, and tags, as well as details about the photographer, including their name, phone number, and email. The form also includes fields for the submitter, including their name, phone number, and email, as well as a field to indicate whether they have agreed to the terms of submission. This form is likely used in a contest or competition scenario where users need to provide detailed information about their submissions in order to be considered.
</thinking>

# jxaf_photo_contest - Help Guide
## Purpose
The jxaf_photo_contest form is a data collection form designed to gather information about a photo submission for a contest.

## How To Complete This Form
To complete the jxaf_photo_contest form, follow these steps:

1. Enter a title for your photo.
2. Provide a description of your photo.
3. Enter the name of the photographer who took the photo.
4. Enter the date and time the photo was taken.
5. Enter the location where the photo was taken.
6. Select any relevant tags for your photo (e.g. "Yes" or "No" for each tag).
7. Enter the phone number of the photographer.
8. Enter the email of the photographer.
9. Enter any additional notes for the submitter.
10. Confirm that you have agreed to the terms of submission by selecting "Yes" in the "Agreed" field.

## Field-by-Field Explanation
### 1. **Photo Title** (`photo_title`, text, required: false)
A title for your photo, which will be displayed when the photo is shared or presented.

### 2. **Photo Description** (`photo_description`, text, required: false)
A brief description of your photo, which will help the judges understand the context and story behind the image.

### 3. **Photographer** (`photographer_name`, text, required: false)
The name of the photographer who took the photo.

### 4. **Photo Taken Date** (`photo_taken_at`, date, required: false)
The date the photo was taken.

### 5. **Photo Taken Time** (`photo_taken_at_time`, time, required: false)
The time the photo was taken.

### 6. **Photo Location** (`photo_location`, text, required: false)
The location where the photo was taken.

### 7. **Photo Tags** (`photo_tags`, select_one, options: ['Yes', 'No'], required: false)
Select any relevant tags for your photo (e.g. "Yes" or "No" for each tag).

### 8. **Photographer Phone** (`photographer_phone`, text, required: false)
The phone number of the photographer.

### 9. **Photo Tags 2** (`photo_tags_2`, select_multiple, options: ['Yes', 'No'], required: false)
Select any additional relevant tags for your photo (e.g. "Yes" or "No" for each tag).

### 10. **Photo Tags 3** (`photo_tags_3`, select_multiple, options: ['Yes', 'No'], required: false)
Select any more relevant tags for your photo (e.g. "Yes" or "No" for each tag).

### 11. **Photo Tags 4** (`photo_tags_4`, select_multiple, options: ['Yes', 'No'], required: false)
Select any more relevant tags for your photo (e.g. "Yes" or "No" for each tag).

### 12. **Photo Tags 5** (`photo_tags_5`, select_multiple, options: ['Yes', 'No'], required: false)
Select any more relevant tags for your photo (e.g. "Yes" or "No" for each tag).

### 13. **Photo Tags 6** (`photo_tags_6`, select_multiple, options: ['Yes', 'No'], required: false)
Select any more relevant tags for your photo (e.g. "Yes" or "No" for each tag).

### 14. **Submitter** (`submitter`, text, required: false)
The name of the person submitting the photo.

### 15. **Submitter Phone** (`submitter_phone`, text, required: false)
The phone number of the person submitting the photo.

### 16. **Submitter Email** (`submitter_email`, email, required: false)
The email of the person submitting the photo.

### 17. **Submitter Notes** (`submitter_notes`, text, required: false)
Any additional notes or information from the submitter.

### 18. **Agreed** (`submitter_agree`, select_one, options: ['Yes', 'No'], required: false)
Confirm that you have agreed to the terms of submission by selecting "Yes".

## Tips
* Be sure to fill out all required fields to ensure your submission is complete and accurate.
* Select only relevant tags for your photo to help the judges understand its context.
* Double-check your information before submitting to ensure it is accurate.
