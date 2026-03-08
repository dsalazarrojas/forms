# Music Selection For Phone Hold - Help Guide
## Purpose
The Music Selection For Phone Hold form is used to select music for phone holds, which is used to provide a pleasant experience for customers while on hold.

## How To Complete This Form
- To complete this form, select the music for the phone hold by choosing one or multiple options in the **Music Selection** field.
- Choose the phone hold approvals, which is the person that approved the music selection in the **Phone Hold Approvals** field.
- Enter the start time of the phone hold in the **Start Time** field.
- Enter the end time of the phone hold in the **End Time** field.
- If you want to add music preferences, select the options in the **Music Preferences** field.
- Choose the approval status, which can be either Approved or Rejected, in the **Approval Status** field.
- Enter any approval comments in the **Approval Comments** field.
- If the approval date is known, enter it in the **Approval Date** field.
- Enter the on hold duration in the **On Hold Duration** field.
- Enter the on hold start time in the **On Hold Start Time** field.
- Enter the on hold end time in the **On Hold End Time** field.
- Enter the created by field with the username of the person who created the music selection.
- Enter the created at field with the timestamp of when the music selection was created.
- Enter the updated at field with the timestamp of when the music selection was updated.
- Enter the approved at field with the timestamp of when the music selection was approved.
- Enter the music selection ID in the **Music Selection ID** field.
- Enter the approval user field with the username of the person who approved the music selection.
- Enter the on hold ID field with the ID of the on hold.

## Field-by-Field Explanation
- **Music Selection** (`music_selection`, select_multiple, **required**: false): Select one or multiple music selections for the phone hold.
- **Phone Hold Approvals** (`phone_hold_approvals`, select_one, **required**: false): Choose the person who approved the music selection.
- **Start Time** (`start_time`, time, **required**: false): Enter the start time of the phone hold.
- **End Time** (`end_time`, time, **required**: false): Enter the end time of the phone hold.
- **Music Preferences** (`music_preferences`, select_multiple, **required**: false): Select the music preferences for the phone hold.
- **Approval Status** (`approval_status`, select_one, **required**: false): Choose the approval status, which can be either Approved or Rejected.
- **Approval Comments** (`approval_comments`, note, **required**: false): Enter any comments for the approval status.
- **Approval Date** (`approval_date`, date, **required**: false): Enter the approval date if known.
- **On Hold Duration** (`on_hold_duration`, number, **required**: false): Enter the on hold duration.
- **On Hold Start Time** (`on_hold_start_time`, date, **required**: false): Enter the on hold start time.
- **On Hold End Time** (`on_hold_end_time`, date, **required**: false): Enter the on hold end time.
- **Created By** (`created_by`, text, **required**: false): Enter the username of the person who created the music selection.
- **Created At** (`created_at`, number, **required**: false): Enter the timestamp of when the music selection was created.
- **Updated At** (`updated_at`, number, **required**: false): Enter the timestamp of when the music selection was updated.
- **Approved At** (`approved_at`, number, **required**: false): Enter the timestamp of when the music selection was approved.
- **Music Selection ID** (`music_selection_id`, number, **required**: false): Enter the music selection ID.
- **Approval User** (`approval_user`, text, **required**: false): Enter the username of the person who approved the music selection.
- **On Hold ID** (`on_hold_id`, number, **required**: false): Enter the on hold ID.
