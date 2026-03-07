<thinking>
This form appears to be intended to collect information about a social media post request, likely for internal team management and tracking purposes. The form's fields cover various aspects of the request, including the title and subtitle of the post, the social media channel to be used, the request date and time, a description of the post, relevant tags, the requester's name, the partner's name and email (if applicable), and the partner's phone number (if applicable). 

This form is likely used to ensure that social media posts are properly coordinated and documented within the team, and that requests are not duplicated or lost in the process. The form's fields seem to be focused on gathering essential information for efficient communication and collaboration. However, it may be beneficial to review the form's requirements and constraints to ensure that it effectively meets the needs of the team and stakeholders.

Upon reviewing the form, I noticed that the `form_title` and `form_subtitle` fields have the same `id` value (2 and 4, respectively), which might indicate a potential issue with data storage or consistency in the form design. Additionally, the `required` property is set to `false` for most fields, which may imply that the form is optional or intended for general information gathering rather than strict data collection.
</thinking>

# Social Media Post Request Form - Help Guide
## Purpose
This form is used to collect and manage social media post requests within the team.

## How To Complete This Form
To use this form, please follow these steps:

1. Provide a title for the social media post that will appear on the platform.
2. Optionally, add a subtitle for the post if needed.
3. Select the social media channel where you want to post (e.g., Twitter, LinkedIn, Facebook).
4. Choose a date and time for the request (if applicable).
5. Describe the content of the post in the form description field.
6. Add relevant tags to help track and categorize the post.
7. Enter your name and any additional information about yourself as the requester.
8. If applicable, enter your partner's name and email address.
9. Enter your partner's phone number (if provided).

## Field-by-Field Explanation

*   **Form Title** (`form_title`, text, optional): Enter a brief title for the social media post.
*   **Form Subtitle** (`form_subtitle`, text, optional): Add an optional subtitle for the post if needed.
*   **Social Media Channel** (`social_media_channel`, select_multiple, optional): Select the social media platform where you want to post (e.g., Twitter, LinkedIn, Facebook).
*   **Request Date** (`request_date`, date, optional): Choose a date for the request if applicable.
*   **Request Time** (`request_time`, time, optional): Select the desired time for the request if applicable.
*   **Form Description** (`form_description`, text, optional): Provide a brief description of the social media post.
*   **Form Tags** (`form_tags`, text, optional): Add relevant tags to help track and categorize the post.
*   **Requester Name** (`requester_name`, text, optional): Enter your name as the requester.
*   **Partner Name** (`partner_name`, text, optional): Enter your partner's name if applicable.
*   **Partner Email** (`partner_email`, email, optional): Enter your partner's email address if applicable.
*   **Partner Phone** (`partner_phone`, text, optional): Enter your partner's phone number if provided.
