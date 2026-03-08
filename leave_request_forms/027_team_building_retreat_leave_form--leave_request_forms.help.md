# team_building_retreat_leave_form - Help Guide
## Purpose
The team building retreat leave form is used by team members to request time off for team building retreats, which are events that promote team bonding and collaboration outside of work hours.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Team Building Retreat Details" field with a brief description of the retreat.
2. Select the start and end dates of the retreat.
3. Enter the name of the team member requesting the retreat.
4. Select whether the team leader and/or manager has approved the retreat.
5. If approved, select your availability to participate in the retreat (Yes/No).
6. Provide any comments you want to share with your manager and/or team leader.
7. Provide any comments you want to share with your team members.

## Field-by-Field Explanation
- **Team Building Retreat Details** (`team_building_retreat_details`, `text`, required): Describe the retreat, including the activities and purpose.
- **Start Date** (`start_date`, `date`, required): Enter the start date of the retreat in the YYYY-MM-DD format.
- **End Date** (`end_date`, `date`, required): Enter the end date of the retreat in the YYYY-MM-DD format.
- **Team Member Name** (`team_member_name`, `text`, required): Enter your name as a team member.
- **Manager Approvals** (`manager_approvals`, `select_multiple`, required): Select whether the team leader has approved the retreat (Yes/No).
- **Team Leader Approvals** (`team_leader_approvals`, `select_multiple`, optional): Select whether the team leader has approved the retreat (Yes/No), only if the team leader is available.
- **Team Member Availability** (`team_member_availability`, `select_one`, required): Select whether you are available to participate in the retreat (Yes/No).
- **Manager Comments** (`manager_comments`, `text`, optional): Provide comments for your manager to review.
- **Team Member Comments** (`team_member_comments`, `text`, optional): Provide comments for your team members to review.
