<thinking>... internal form validation will be triggered to prevent non-relevant and duplicate submissions. This form is a collection of fields that gather feedback from users on 3D models. Please provide honest and constructive feedback on the models you have interacted with. Your input will be instrumental in helping us improve our 3D model offerings... </thinking>

# 3D Model Feedback Form - Help Guide
## Purpose
The 3D Model Feedback Form is designed to gather information about your experience with our 3D models. This form will help us identify areas of improvement and refine our 3D modeling capabilities.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the required fields, marked with an asterisk (*).
2. Select all applicable options for the "Platforms tested on" and "Best aspects of the model" fields.
3. Choose your ratings for the "Realism", "Performance", and "Ease of use / integration" fields.
4. Provide any additional comments or notes in the "Additional comments or notes" field.

## Field-by-Field Explanation

* **Full name** (`full_name`, text, required): Enter your full name to help us associate your feedback with your identity.
* **Email address** (`email_address`, email, required): Enter your contact email address so we can reach out to you for further questions or to follow up on your feedback.
* **Phone number** (`phone_number`, phone, optional): Include your country code if applicable.
* **Organization / Studio** (`organization`, text, optional): Enter your company or studio name if relevant.
* **Project or model name** (`project_name`, text, required): Enter the name of the project or model you are providing feedback on.
* **Primary purpose of the model** (`model_purpose`, select_one, required): Select the primary purpose of the model you interacted with.
	+ Visualization: The model was used for visualizing data or information.
	+ Prototyping: The model was used for prototyping or testing purposes.
	+ Production asset: The model was used for a production asset or project.
	+ VR/AR experience: The model was used for a VR or AR experience.
	+ 3D printing: The model was used for 3D printing.
* **Submitted file format** (`file_format`, select_one, required): Choose the primary format in which the model was submitted.
	+ OBJ: The model was submitted in OBJ format.
	+ FBX: The model was submitted in FBX format.
	+ STL: The model was submitted in STL format.
	+ GLB/GLTF: The model was submitted in GLB/GLTF format.
	+ Other: The model was submitted in a different format.
* **Approximate polygon count** (`polygon_count`, integer, optional): Enter an approximate number of polygons or triangles.
* **File size (MB)** (`model_size_mb`, decimal, optional): Provide the compressed file size in megabytes.
* **Platforms tested on** (`viewing_platform`, select_multiple, required): Select all platforms you tested the model on.
	+ Desktop: The model was tested on a desktop computer.
	+ Mobile: The model was tested on a mobile device.
	+ Web viewer: The model was tested in a web viewer.
	+ VR headset: The model was tested on a VR headset.
	+ AR app: The model was tested in an AR app.
* **Realism rating (1-10)** (`realism_rating`, integer, required): Rate the model's realism on a scale of 1 to 10.
* **Performance rating (1-10)** (`performance_rating`, integer, required): Rate the model's performance on a scale of 1 to 10.
* **Ease of use / integration (1-10)** (`usability_rating`, integer, required): Rate the ease of use and integration of the model on a scale of 1 to 10.
* **Best aspects of the model** (`best_aspects`, select_multiple, optional): Select all strengths of the model you noticed.
	+ Visual fidelity: The model had high visual fidelity.
	+ Texturing / materials: The model had good texturing and materials.
	+ Optimization: The model was well-optimized.
	+ Animation / rigging: The model had good animation and rigging.
	+ Accuracy to reference: The model was accurate to the reference.
	+ Ease of integration: The model was easy to integrate.
* **Areas to improve** (`areas_to_improve`, text, optional): Suggest areas that could be improved.
* **Issues encountered** (`encountered_issues`, select_multiple, optional): Select all issues you encountered.
	+ Geometry artifacts: You noticed geometry artifacts.
	+ Missing textures: You encountered missing textures.
	+ Scale mismatch: You experienced a scale mismatch.
	+ Rigging / animation bugs: You found rigging or animation bugs.
	+ UV / texture seams: You noticed UV or texture seams.
	+ Performance drops: The model caused performance drops.
* **Would you recommend this asset?** (`would_recommend`, select_one, required): Rate whether you would recommend this asset.
	+ Definitely: Yes, you would definitely recommend this asset.
	+ Probably: You probably would recommend this asset.
	+ Not sure: You are unsure about recommending this asset.
	+ Probably not: You probably would not recommend this asset.
	+ False: No, you would not recommend this asset.
* **Additional comments or notes** (`additional_comments`, text, optional): Provide any additional comments or notes about your experience with the model.
* **Date of feedback** (`submission_date`, date, required): The current date.
