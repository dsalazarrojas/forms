<thinking>
This form is used for users to register for a virtual contest. The virtual contest can be a hackathon, competition, or other online event where participants submit their entries. The purpose of this form is to collect essential information from users about their entries, including entry details, category, and terms of participation.
To determine if a form completion is relevant and not a duplication, we check the following:
- The contest is not a physical event, hence it's virtual.
- The user is not already registered for the same contest, which would be indicated by existing entries in the system with matching entry details.
</thinking>

# virtual-contest-registration-form - Help Guide
## Purpose
This form is used for users to register their entries for a virtual contest. The contest can be a hackathon, competition, or other online event where participants submit their entries.

## How To Complete This Form

To complete this form, follow these steps:

* Click on the "Submit" button to start the registration process.
* Fill in the required fields with your information.
* Ensure that you have uploaded any required files, such as images or videos.

## Field-by-Field Explanation

* **Contest Date** (`contest_date`, date, required: false)
  • This field is not required, so you can leave it blank or fill it in with the date of the contest.
* **Entry Title** (`entry_title`, text, required: false)
  • This field is for the title of your entry. You can write a brief description or name of your entry.
* **Name** (`entry_name`, text, required: false)
  • This field is for your name. You can fill it in with your full name or any other name you'd like to be associated with your entry.
* **Phone** (`entry_phone`, text, required: false)
  • This field is for your contact phone number. If you want to be contacted, please provide your phone number.
* **Email** (`entry_email`, email, required: false)
  • This field is for your email address. If you want to receive email notifications, please fill in your email address.
* **URL** (`entry_url`, text, required: false)
  • This field is for any associated URL with your entry, such as a website or blog.
* **Message** (`entry_message`, text, required: false)
  • This field is for any message or description you want to include with your entry.
* **Category** (`entry_category`, select_one, required: true)
  • This field is to select the category of your entry. Please choose the correct category from the given options.
  • Options: Option 1, Option 2, Option 3
* **Tags** (`entry_tags`, text, required: false)
  • This field is for any additional tags you want to associate with your entry. You can separate them with commas.
* **File** (`entry_file`, text, required: false)
  • This field is for uploading any files related to your entry, such as images or videos.
* **File Type** (`entry_file_type`, select_one, required: true)
  • This field is to select the type of file you're uploading. Please choose between "image" or "video".
  • Options: image, video
* **Terms** (`entry_terms`, text, required: false)
  • This field is for any terms or conditions you want to include with your entry.
* **Comments** (`entry_comments`, text, required: false)
  • This field is for any additional comments you want to make with your entry.
* **Entries** (`entry_entries`, number, required: false)
  • This field is for the number of entries you're submitting. Please enter the number.
