<thinking>
We need to create a user-facing help guide for the esports_replay_publication_consent_form form that explains its purpose, how to complete it, and what each field means to the end user. To start, let's review the form's input schema to understand its structure and requirements.

The form has 14 fields across 4 pages, with each field having a label, type, and required/optional status. We'll need to break down the form into its components and provide clear explanations for each field to ensure end users can accurately complete it. We'll also need to cover best practices and considerations for users to be aware of when filling out the form.

Upon review, we notice that the form is related to the publication of replay data in esports events. The form likely gathers information about the player's participation in these events, including their details, consent, and other relevant information. This form might be used by event organizers or administrators to verify participant information for publication purposes.

</thinking>

# esports_replay_publication_consent_form - Help Guide

## Purpose
This form is used to gather information and obtain consent from players for the publication of their replay data in esports events. By completing this form, you'll be confirming your participation and providing details about your playthroughs for publication.

## How To Complete This Form

1.  Review each section of the form carefully.
2.  Ensure you answer all required fields correctly.
3.  Select "Yes" for questions where applicable, and "No" otherwise.
4.  Enter your email and phone number accurately.
5.  Sign and date the form to complete it.

## Field-by-Field Explanation

*   **Player Information**: This section is for providing your personal details. Enter your name, email, and phone number accurately.
    *   **Player Information** (`id: 1`, `type: text`, **required: false**): Enter your name as it should be published.
    *   **Email** (`id: 9`, `type: email`, **required: true**): Enter your email address for communication and record-keeping.
    *   **Phone** (`id: 10`, `type: text`, **required: false**): Enter your phone number for emergency contact.
*   **Publish Replay**: Select "Yes" to publish your replay data and "No" to keep it private.
    *   **Publish Replay** (`id: 2`, `type: select_one`, **required: false**): Select "Yes" to publish your replay data or "No" to keep it private.
*   **Sign Player**: Select "Yes" to sign and confirm your consent.
    *   **Sign Player** (`id: 3`, `type: select_one`, **required: false**): Select "Yes" to sign and confirm your consent.
*   **Date of Event**: Select the date of the event you participated in.
    *   **Date of Event** (`id: 4`, `type: date`, **required: false**): Enter the date of the event in MM/DD/YY format.
*   **Time of Event**: Select the time of the event you participated in.
    *   **Time of Event** (`id: 5`, `type: time`, **required: false**): Enter the time of the event in HH:MM format.
*   **Date of Publication**: Select the date you'd like to publish your replay data.
    *   **Date of Publication** (`id: 6`, `type: date`, **required: false**): Enter the date of publication in MM/DD/YY format.
*   **Date of Consent**: Select the date you're giving consent for publication.
    *   **Date of Consent** (`id: 7`, `type: date`, **required: false**): Enter the date of consent in MM/DD/YY format.
*   **Sign Player's Signature**: This is a text area for your digital signature.
    *   **Sign Player's Signature** (`id: 8`, `type: note`, **required: false**): Enter your digital signature as a confirmation of your consent.
*   **Category**: Select the category of the event you participated in.
    *   **Category** (`id: 11`, `type: select_one`, **required: false**): Select "Yes" if the event is in your preferred category.
*   **Game Mode**: Select the game mode of the event you participated in.
    *   **Game Mode** (`id: 12`, `type: select_one`, **required: false**): Select "Yes" if the event is in your preferred game mode.
*   **Game Version**: Select the game version of the event you participated in.
    *   **Game Version** (`id: 13`, `type: select_one`, **required: false**): Select "Yes" if the event is in your preferred game version.
*   **Platform**: Select the platform you played on.
    *   **Platform** (`id: 14`, `type: select_one`, **required: false**): Select "Yes" if you played on your preferred platform.

## Tips

*   Ensure you answer all questions accurately and truthfully.
*   Review each field carefully before submitting the form.
*   If you're unsure about any field, ask for clarification or assistance.
