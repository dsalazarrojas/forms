<thinking>
To determine if the form is relevant and not a duplicate, I'll review the YAML fields. The form is called "Call For Composers" and appears to be a form for composers to submit their work, provide details about themselves, and agree to terms and conditions. The form has 25 fields in total, with various sections for composer information, composition details, premiere and rights, recording information, and submission agreement.

The form's purpose seems to be to collect data from composers for some sort of call or opportunity. The form requires the composer's personal information (name, email, phone number), professional experience (years of composing experience, music education or training), and composition details (composition title, style or genre, duration, instrumentation, description). Additionally, the form asks for specific details about the composition, such as whether it's a world premiere, if the composer holds all performance rights, and if they agree to have their work performed publicly. Finally, the form includes fields for agreement and submission terms.

Upon reviewing the YAML fields, there doesn't seem to be any duplication or irrelevant fields. All fields appear to be relevant to the form's purpose. Therefore, the form should be relevant and not a duplicate.
</thinking>

# Call For Composers - Help Guide
## Purpose
The Call For Composers form is designed to collect information from composers for a call or opportunity. This form gathers personal details about the composer, composition information, and agreement terms for submission and performance.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your personal details, including your name, email address, and phone number.
2. Provide information about your professional experience, including years of composing experience and music education or training.
3. Submit your composition details, including title, style or genre, duration, instrumentation, and description.
4. Choose whether this composition is a world premiere and if you hold all performance rights.
5. Agree to the submission terms and conditions.

## Field-by-Field Explanation

### Composer Information

* **Composer Name** (`composer_name`, `text`, required): Enter your name as you would like it to be displayed.
* **Email Address** (`composer_email`, `email`, required): Enter your email address for communication purposes.
* **Phone Number** (`composer_phone`, `text`, required): Enter your phone number for contact purposes.
* **Country** (`composer_country`, `text`, optional): Enter your country of residence.
* **Years of Composing Experience** (`years_composing`, `number`, required): Enter the number of years you have been composing.
* **Music Education or Training** (`education`, `text`, optional): Briefly describe your music education or training.

### Professional Experience

* **Previous Compositions or Performances** (`previous_work`, `text`, optional): Briefly describe your previous work.

### Composition Details

* **Composition Title** (`composition_title`, `text`, required): Enter the title of your composition.
* **Musical Style or Genre** (`composition_style`, `select_one`, required): Choose the style or genre of your composition.
* **Duration (in minutes)** (`duration`, `number`, required): Enter the duration of your composition in minutes.
* **Instrumentation** (`instrumentation`, `text`, required): List the instruments used in your composition.
* **Composition Description** (`composition_description`, `text`, required): Briefly describe your composition.

### Premiere and Rights

* **Is This a World Premiere?** (`world_premiere`, `select_one`, required): Choose whether your composition is a world premiere.
* **Do You Hold All Performance Rights?** (`performance_rights`, `select_one`, required): Choose whether you hold all performance rights.
* **Agree to Have This Work Performed Publicly** (`agree_to_perform`, `select_one`, required): Agree to have your work performed publicly.
* **I Understand I May Receive Royalties** (`royalties_agreement`, `select_one`, required): Agree to potential royalties.

### Recording Information

* **Audio Sample URL (if available)** (`recording_sample`, `text`, optional): Provide a URL for an audio sample of your composition.
* **Music Score Attached** (`score_submission`, `text`, optional): Attach a PDF or image of your music score.

### Submission Agreement

* **This is Original, Unpublished Work** (`original_work`, `select_one`, required): Choose whether your composition is original and unpublished.
* **I Agree to the Submission Terms and Conditions** (`agree_to_perform`, `select_one`, required): Agree to the submission terms and conditions.
