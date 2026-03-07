<thinking>

**Internal Note:**
Before proceeding with this help guide, I would like to check if the form "student_support_team_referral_form" is not a duplication or misnomer. It seems there is a large number of fields with identical labels but different names, which might indicate a design flaw. I will attempt to create a help guide assuming these fields are intended to be used in a specific context, but please double-check the form's purpose and functionality with the development team.

</thinking>

# student_support_team_referral_form - Help Guide
## Purpose
The student support team referral form is designed to facilitate referrals for students who require support from the school's student support team. This form helps in documenting student referrals and their related information for efficient tracking and follow-up.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the school from the list of options provided in the `school_id` field.
2. Enter the student's name in the `student_name` field.
3. Provide the student's email address in the `student_email` field.
4. Explain the reason for referral in the `referral_reason` field.
5. Choose whether the referral source is 'Yes' or 'No' in the `referral_source` field.
6. Select the support team member(s) responsible for handling the referral in the `support_team_member` field.
7. Choose whether the referral is related to a resource in the `resource_id` field.
8. Enter the name of the resource in the `resource_name` field (if applicable).
9. Add any additional comments or explanations in the `additional_comments` field.
10. Choose whether the student submitted the referral in the `submitted_by` field.
11. Date the referral was submitted in the `submitted_on` field (if applicable).
12. Choose whether the referral was updated by someone else in the `updated_by` field.
13. Date the referral was updated in the `updated_on` field (if applicable).
14. Select the current status of the referral in the `status` field.
15. Enter any comments or feedback related to the referral in the `comments` field.
16. Choose whether the referral was submitted by the school in the `submitted_by_school` field.
17. Choose whether the referral was updated by the school in the `updated_by_school` field.
18. Enter the school's ID in the `school_id` field (if applicable).
19. Choose whether the referral is related to a student's school in the `student_school_id` field.
20. Choose whether the referral is related to a resource at the student's school in the `resource_school_id` field.
21. Choose whether the referral was submitted by someone else in the `submitted_by_id` field.
22. Choose whether the referral was updated by someone else in the `updated_by_id` field.
23. Choose whether the referral was submitted by the school in the `submitted_by_school_id` field.
24. Choose whether the referral was updated by the school in the `updated_by_school_id` field.

## Field-by-Field Explanation
- **school** (`school_id`, number, required: false): Select the school from the list of options provided.
- **Student Name** (`student_name`, text, required: false): Enter the student's name.
- **Student Email** (`student_email`, email, required: false): Provide the student's email address.
- **Referral Reason** (`referral_reason`, text, required: false): Explain the reason for referral.
- **Referral Source** (`referral_source`, select_one, required: false): Choose whether the referral source is 'Yes' or 'No'.
- **Support Team Member** (`support_team_member`, select_multiple, required: false): Select the support team member(s) responsible for handling the referral.
- **Resource** (`resource_id`, select_one, required: false): Choose whether the referral is related to a resource.
- **Resource Name** (`resource_name`, text, required: false): Enter the name of the resource (if applicable).
- **Additional Comments** (`additional_comments`, note, required: false): Add any additional comments or explanations.
- **Submitted By** (`submitted_by`, select_one, required: false): Choose whether the student submitted the referral.
- **Submission Date** (`submitted_on`, date, required: false): Date the referral was submitted (if applicable).
- **Updated By** (`updated_by`, select_one, required: false): Choose whether the referral was updated by someone else.
- **Update Date** (`updated_on`, date, required: false): Date the referral was updated (if applicable).
- **Status** (`status`, select_one, required: false): Select the current status of the referral.
- **Comments** (`comments`, text, required: false): Enter any comments or feedback related to the referral.
- **Submitted By School** (`submitted_by_school`, select_one, required: false): Choose whether the referral was submitted by the school.
- **Updated By School** (`updated_by_school`, select_one, required: false): Choose whether the referral was updated by the school.
- **School ID** (`school_id`, number, required: false): Enter the school's ID (if applicable).
- **Student School ID** (`student_school_id`, select_one, required: false): Choose whether the referral is related to a student's school.
- **Resource School ID** (`resource_school_id`, select_one, required: false): Choose whether the referral is related to a resource at the student's school.
- **Submitted By ID** (`submitted_by_id`, select_one, required: false): Choose whether the referral was submitted by someone else.
- **Updated By ID** (`updated_by_id`, select_one, required: false): Choose whether the referral was updated by someone else.
- **Submitted By School ID** (`submitted_by_school_id`, select_one, required: false): Choose whether the referral was submitted by the school.
- **Updated By School ID** (`updated_by_school_id`, select_one, required: false): Choose whether the referral was updated by the school.

## Tips
- Make sure to fill out all required fields before submitting the form.
- Double-check your entries for accuracy and completeness.
- Review the form carefully before submitting it to ensure you have provided all necessary information.
