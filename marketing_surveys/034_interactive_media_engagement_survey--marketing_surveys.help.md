<thinking>
We are creating a user-facing help guide for an Interactive Media Engagement Survey that is part of the "marketing_surveys" category. This guide aims to help end-users understand the purpose and completion process of the form, which is a series of questions related to their engagement with various types of media, such as video, podcast, blog, social media, email newsletters, and more. The guide will also explain each field in detail to ensure users can fill out the form correctly and provide valuable feedback. 

The main goal of the survey is to gather information about the types of media that users interact with most frequently, how often they engage with these media, how much time they spend on them, and their opinions about the quality and relevance of the content. This feedback will help the organization better understand their audience's preferences and improve their media content strategy.

Before starting the survey, please ensure that you have not previously submitted this form. If you have any questions or need assistance, please contact your supervisor or support team.
</thinking>

# Interactive Media Engagement Survey - Help Guide
## Purpose
This form is designed to gather information about your media engagement habits and preferences to help us better understand our audience's interests and preferences.

## How To Complete This Form
1. Please select the type of media you engage with the most from the options below.
2. Indicate how often you engage with the media selected in the previous step.
3. Estimate the average time you spend per day engaging with the media.
4. Evaluate the quality of the media content.
5. Assess the relevance of the media content to your interests.
6. Indicate the value of the media content to you.
7. Provide any suggestions you have for improving the media content.
8. Enter your email address and phone number for contact.

## Field-by-Field Explanation
### 1. What type of media do you engage with the most?
* **media_type** (`select_one`, required: `false`): Select one of the options: Video, Podcast, Blog, Social media, Email newsletter, None.

### 2. How often do you engage with the media?
* **engagement_level** (`select_multiple`, required: `false`): Select all that apply: Often, Occasionally, Rarely, Never.

### 3. How much time do you spend on the media per day?
* **time_spent_engaging** (`number`, required: `false`): Estimate the average time you spend per day engaging with the media.

### 4. How would you describe the quality of the media content?
* **content_quality** (`select_one`, required: `false`): Select one of the options: High, Medium, Low.

### 5. How relevant is the media content to your interests?
* **relevance_to_interests** (`select_one`, required: `false`): Select one of the options: Very relevant, Somewhat relevant, Not very relevant, Not at all relevant.

### 6. How valuable is the media content to you?
* **media_value** (`select_one`, required: `false`): Select one of the options: Very valuable, Somewhat valuable, Not very valuable, Not at all valuable.

### 7. Do you have any suggestions for improvement?
* **user_suggestions** (`text`, required: `false`): Provide any suggestions you have for improving the media content.

### 8. Enter your email address.
* **email** (`email`, required: `false`): Enter your email address for any follow-up communication.

### 9. Enter your phone number.
* **phone** (`text`, required: `false`): Enter your phone number for any follow-up communication.
