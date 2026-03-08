# Video Recommendation Form - Help Guide
## Purpose
This form is designed to collect metadata about videos for recommendation purposes. Please fill out the form thoroughly and accurately to provide relevant information.

## How To Complete This Form
1. Enter the title of the video in the `video_title` field. This should be a brief and descriptive title of the video.
2. Add a short description of the video in the `description` field. This should provide more details about the video content.
3. Add relevant tags to the `tags` field. These will help in filtering and searching for similar videos.
4. Choose the category for the video from the `category` field. This will help in categorizing the video for recommendation.
5. Rate the video in the `rating` field on a scale of 1-5.
6. Select the length of the video in the `video_length` field. Choose from the options provided.
7. Select the type of video in the `video_type` field. Choose from the options provided.
8. Select the language of the video in the `language` field. Choose from the options provided.
9. Choose the target audience for the video in the `target_audience` field. Select from the options provided.
10. Select the format of the video in the `video_format` field. Choose from the options provided.
11. List the recommended videos (comma-separated) in the `recommended_videos` field.
12. Click the `submit` button to submit your recommendation.

## Field-by-Field Explanation
* **video_title** (`video_title`, text, required): Enter the title of the video.
* **description** (`description`, text, required): Add a short description of the video.
* **tags** (`tags`, text, required): Add relevant tags to help in filtering and searching for similar videos.
* **category** (`category`, select_one, required): Choose a category for the video.
* **rating** (`rating`, number, required): Rate the video on a scale of 1-5.
* **video_length** (`video_length`, select_multiple, required): Select the length of the video.
* **video_type** (`video_type`, select_one, required): Select the type of video.
* **language** (`language`, select_multiple, required): Select the language of the video.
* **target_audience** (`target_audience`, select_one, required): Select the target audience for the video.
* **video_format** (`video_format`, select_multiple, required): Select the format of the video.
* **recommended_videos** (`recommended_videos`, text, required): List the recommended videos (comma-separated).
* **submit** (`submit`, text, required): Submit your recommendation.

Note: Fields with the `required` field set to `false` are not mandatory and can be left blank if not applicable. However, please fill out all fields that are marked as `required` for accurate recommendation.
