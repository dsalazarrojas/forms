# image_annotation_survey - Help Guide
## Purpose
The "image_annotation_survey" form is a tool for annotating images and collecting metadata for research or data collection purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Upload an image or provide a publicly accessible URL to an image you wish to annotate.
2. Select the type of annotation you are performing (Classification, Identification, Object Detection, or Segmentation).
3. Provide a label for the uploaded image (optional).
4. Choose the status of your annotation (Not Started, In Progress, or Completed).
5. Indicate your consent to the terms and conditions of the annotation task.

## Field-by-Field Explanation

* **Upload Image** (`upload_image`, number, required: false): This field allows you to upload an image for annotation. You can either upload a file from your computer or provide a publicly accessible URL to an image.
* **Annotation Details** (`annotation_details`, text, required: false): Please provide any additional information related to the image and annotation task.
* **Annotation Type** (`annotation_type`, select_one, required: true): Select the type of annotation you are performing:
	+ Classification: Label or categorize the image.
	+ Identification: Identify objects within the image.
	+ Object Detection: Detect and mark individual objects within the image.
	+ Segmentation: Identify and mark regions or areas within the image.
* **Consent** (`consent`, select_one, required: false): You will be asked to indicate your agreement or disagreement with the terms and conditions of the annotation task.
* **Upload URL** (`upload_url`, text, required: false): If you have a publicly accessible URL to an image, you can provide it instead of uploading a file.
* **Label** (`upload_url_label`, text, required: false): Provide a label for the uploaded image (if uploaded) or the URL (if provided).
* **Annotation Status** (`annotation_status`, select_one, required: true): Select the status of your annotation:
	+ Not Started: You have not yet begun annotating the image.
	+ In Progress: You are currently annotating the image.
	+ Completed: You have finished annotating the image.
