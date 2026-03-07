<thinking>
To avoid duplication and ensure accurate help documentation, let's break down the requirements and constraints of the form.

The form appears to be a submission form for sports-related content, possibly for a platform like YouTube or a similar video-sharing website. The form has several fields that need to be filled out for a user to submit their sports clips.

The purpose of this form is to collect information about sports-related videos or clips that users want to submit for evaluation or sharing. Users can select the platform (channel) where they want to share their clips, choose a category for the content (Sports, Gaming, or Entertainment), and provide details about the clip, such as its title, description, URL, and tags.

Users can also specify the type of clip (Gameplay, Highlight, Montage, or Other), and if the clip is sponsored or not. Additionally, they can provide information about the channel where the clip is from, including the channel name and display name.

To prevent duplication, the form is designed to only allow submission of new clips.

Here is the final help guide for the end-user in Markdown format:

# Submit Your Clips EN - Help Guide

## Purpose
This form is designed to allow you to submit sports-related videos or clips for evaluation or sharing. Please fill out the form with the required and optional information to submit your clips.

## How To Complete This Form

1. Select the platform where you want to share your clip from the dropdown menu.
2. Choose a category for your content (Sports, Gaming, or Entertainment).
3. Enter a title for your clip.
4. Write a description of your clip.
5. Enter the URL of the clip.
6. Add tags relevant to your clip.
7. If applicable, provide the ID of the video.
8. Select the type of clip (Gameplay, Highlight, Montage, or Other).
9. If your clip is sponsored, choose the corresponding option.
10. Enter the name of the channel where the clip is from.
11. If you want to display a different name for the channel, enter it here.
12. Enter the start time of the clip.
13. Enter the duration of the clip.
14. Choose the type of clip (Gameplay, Highlight, Montage, or Other).

## Field-by-Field Explanation
* **Submit Your Clips EN** (`submit_your_clips_en`, text, required): Enter a brief description of the form purpose.
* **Channel URL** (`channel_url`, select multiple, required): Select the platform where you want to share your clip from.
* **Category** (`category`, select one, required): Choose a category for your content (Sports, Gaming, or Entertainment).
* **Video Title** (`video_title`, text, required): Enter a title for your clip.
* **Description** (`description`, text, required): Write a description of your clip.
* **Video URL** (`video_url`, text, required): Enter the URL of the clip.
* **Tags** (`tags`, text, required): Add tags relevant to your clip.
* **Video ID** (`video_id`, text, optional): If applicable, provide the ID of the video.
* **Submit Type** (`submit_type`, select one, required): Select the type of clip (Regular, Sponsored, or Sponsored by channel).
* **Channel Name** (`channel_name`, text, required): Enter the name of the channel where the clip is from.
* **Channel Display Name** (`channel_name_display`, text, optional): If you want to display a different name for the channel, enter it here.
* **Clip Start Time** (`clip_start_time`, time, optional): Enter the start time of the clip.
* **Clip Duration** (`clip_duration`, number, required): Enter the duration of the clip.
* **Clip Type** (`clip_type`, select one, required): Choose the type of clip (Gameplay, Highlight, Montage, or Other).

Please note that some fields are marked as required or optional, as per the form schema. If you're unsure about any of the fields, please refer to the field label or the provided explanations above.
