# Voiceover Picture - Help Guide
## Purpose
This form is used to collect user input for a "Voiceover Picture" task, which involves creating a voiceover or audio description for a picture or video. The form is designed to gather necessary information to process the voiceover or audio description request.

## How To Complete This Form
To complete this form, follow these steps:

1. Select all applicable video files from the "video_files" field.
2. Enter the duration of the video in the "video_duration" field.
3. Enter the title of the video in the "video_title" field.
4. Select the type of voiceover or audio description required from the "video_over" field.
5. Choose the specific type of voiceover or audio description from the "video_over_type" field.
6. Indicate if an audio file is required from the "audio_file" field.
7. Enter the duration of the audio file in the "audio_duration" field, if applicable.
8. Enter the title of the audio file in the "audio_title" field, if applicable.

## Field-by-Field Explanation
* **video_files** (`select_multiple`, required/optional): Select all video files that need to be processed for voiceover or audio description. This field is optional.
* **video_duration** (`number`, required): Enter the duration of the video in seconds.
* **video_title** (`text`, optional): Enter the title of the video.
* **video_over** (`select_one`, required): Select the type of voiceover or audio description required.
* **video_over_type** (`select_one`, required): Choose the specific type of voiceover or audio description. Options include "narration", "voiceover", "dubbing", and "none".
* **audio_file** (`select_multiple`, optional): Indicate if an audio file is required for the voiceover or audio description.
* **audio_duration** (`number`, optional): Enter the duration of the audio file in seconds, if applicable.
* **audio_title** (`text`, optional): Enter the title of the audio file, if applicable.
