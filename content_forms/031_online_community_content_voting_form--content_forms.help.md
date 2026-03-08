<thinking>
This form is designed to allow users to vote on content within the online community. It's intended for users who want to express their opinion on a piece of content, such as a post, image, or video. The form should only be filled out once per content item. If you've already voted on a piece of content, you should not attempt to vote again.
</thinking>

# Online Community Content Voting Form - Help Guide
## Purpose
This form is used to allow users to vote on content within the online community, such as posts, images, or videos.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a title for the content you're voting on in the `content_form` field.
2. Choose your rating score out of a range of options (this option is not visible in the form, but it can be assumed to be the default).
3. Optionally, enter a submission ID to help identify your vote.
4. Select the type of submission (type, image, or video).
5. Enter the date and time you submitted the content (this may not be required).
6. Add any feedback about your submission.
7. Optionally, enter your email and/or phone number for contact purposes.
8. Select whether to submit your vote.

## Field-by-Field Explanation

* **content_form** (`form_title`, text, required): Enter a title for the content you're voting on.
* **rating_score** (`rating_score`, number, required): Choose your rating score out of a range of options.
* **submission_id** (`submission_id`, text, optional): Enter a submission ID to help identify your vote.
* **submission_type** (`submission_type`, select_one, required): Select the type of submission (type, image, or video).
* **submission_date** (`submission_date`, date, optional): Enter the date you submitted the content (if applicable).
* **submission_time** (`submission_time`, time, optional): Enter the time you submitted the content (if applicable).
* **feedback** (`feedback`, note, optional): Add any feedback about your submission.
* **email** (`email`, email, optional): Enter your email address for contact purposes.
* **phone** (`phone`, text, optional): Enter your phone number for contact purposes.
* **form_submit** (`form_submit`, select_multiple, required): Select whether to submit your vote.
