# voice_channel_activation_form - Help Guide
## Purpose
The `voice_channel_activation_form` is used to activate new voice channels in the system. It allows administrators to select the type of voice channel, set the purpose, and define the activation timing.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out the `new_voice_channel` field on the first page. This field is a dropdown menu with two options: `voice channel` and `server channel`. Select the correct option based on your channel's needs.
* On the second page, fill out the `purpose` field with a brief description of the channel's purpose.
* On the third page, select the `access_needs` field to determine if the channel has any specific access needs. You can choose one or multiple options.
* On the fourth page, choose the `activation_timing` field to determine when the channel will be activated. You can select from three options: `immediate`, `scheduled`, or `pending`.
* On the fifth page, select the `server_admins` field to determine which server administrators will have access to the channel. You can choose one or multiple options.
* On the sixth page, add any additional notes about the channel in the `notes` field. This is optional.
* On the seventh page, fill out the `email` field with the email address of the channel's owner or administrator.
* On the eighth page, fill out the `phone` field with the channel's phone number or contact information.
* On the ninth page, choose the `assigned_to` field to determine who will be assigned to manage the channel. You can select from three options: `chatjimmy`, `it admin`, or `other`.

## Field-by-Field Explanation

* **New Voice Channel** (`new_voice_channel`, `select_one`, required/optional): This field allows you to select the type of voice channel you wish to activate. Choose between `voice channel` or `server channel`.
* **Purpose** (`purpose`, `text`, required/optional): This field is used to describe the purpose of the new voice channel.
* **Access Needs** (`access_needs`, `select_multiple`, required/optional): Select the access needs of the channel. You can choose one or multiple options.
* **Activation Timing** (`activation_timing`, `select_one`, required/optional): Choose when the channel will be activated. Options are `immediate`, `scheduled`, or `pending`.
* **Server Admins** (`server_admins`, `select_multiple`, required/optional): Select which server administrators will have access to the channel.
* **Notes** (`notes`, `note`, required/optional): Add any additional notes about the channel in this field. This is optional.
* **Email** (`email`, `email`, required/optional): Fill out the email address of the channel's owner or administrator.
* **Phone** (`phone`, `text`, required/optional): Fill out the channel's phone number or contact information.
* **Assigned To** (`assigned_to`, `select_one`, required/optional): Choose who will be assigned to manage the channel. Options are `chatjimmy`, `it admin`, or `other`.
