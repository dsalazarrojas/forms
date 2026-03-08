# online_video_upload_form - Help Guide
## Purpose
The online video upload form is a tool used for uploading videos online. It is a simple and straightforward form designed for easy and efficient video upload process. The form requires minimal fields to ensure the uploaded video is correctly configured and ready for sharing.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the video upload option using the `select_file` field. If you are not sure which option to choose, select "Yes" to upload the video.
2. Input the path or URL of the video file to upload in the `file_to_upload` field. Make sure to input the correct path or URL of the video file.
3. Add a title to the video in the `video_title` field. This title will be displayed when the video is shared or embedded.
4. Add a description to the video in the `video_description` field. This description will be displayed when the video is shared or embedded.
5. Add tags to the video in the `video_tags` field. These tags will help categorize and search the video.
6. Select the date and time the video was uploaded using the `video_date_uploaded` and `video_time_uploaded` fields respectively. These fields are optional and can be left blank.
7. Input the URL of the uploaded video in the `video_upload_url` field. This field is optional and can be left blank.

## Field-by-Field Explanation
* **select_file** (`select_file`, `select_multiple`, required: false): This field is used to select the video upload option. Select "Yes" to upload the video.
* **upload_video** (`file_to_upload`, `text`, required: false): This field is used to input the path or URL of the video file to upload.
* **add_video_title** (`video_title`, `text`, required: false): This field is used to add a title to the video. The title will be displayed when the video is shared or embedded.
* **add_video_description** (`video_description`, `text`, required: false): This field is used to add a description to the video. The description will be displayed when the video is shared or embedded.
* **add_video_tags** (`video_tags`, `select_one`, required: false): This field is used to add tags to the video. The tags will help categorize and search the video.
* **video_date_uploaded** (`video_date_uploaded`, `date`, required: false): This field is used to select the date the video was uploaded. If left blank, the current date will be assumed.
* **video_time_uploaded** (`video_time_uploaded`, `time`, required: false): This field is used to select the time the video was uploaded. If left blank, the current time will be assumed.
* **video_upload_url** (`video_upload_url`, `text`, required: false): This field is used to input the URL of the uploaded video. If left blank, the URL will be auto-generated.

## Tips
* Make sure to input the correct path or URL of the video file in the `file_to_upload` field.
* If you are not sure which option to choose for `select_file`, select "Yes" to upload the video.
* The `video_date_uploaded` and `video_time_uploaded` fields are optional and can be left blank.
* The `video_upload_url` field is optional and can be left blank. The URL will be auto-generated if not provided.
