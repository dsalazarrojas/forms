# Coaching Session Planner Form - Help Guide
## Purpose
The Coaching Session Planner Form is a tool to help coaches prepare for coaching sessions with clients. It ensures that all necessary information is collected and that the coach is well-equipped to tailor the session to the client's needs.

## How To Complete This Form

### Step 1: Enter Client Information

*   **Client Full Name** (`client_name`, `text`, required): Enter the client's full name in the format "First Name Last Name". This will be used to identify the client and refer to their sessions.
*   **Client Email Address** (`client_email`, `email`, required): Enter the client's primary email address for session communications.
*   **Client Phone Number** (`client_phone`, `text`, optional): Enter the client's preferred contact number for session reminders.
*   **Previous Session Notes Review** (`previous_session_notes`, `text`, optional): Review the notes from the last session to ensure continuity and avoid duplication.

### Step 2: Plan the Session

*   **Session Date** (`session_date`, `date`, required): Select the planned date for the coaching session.
*   **Session Time** (`session_time`, `time`, required): Choose the preferred time for the coaching session.
*   **Session Type** (`session_type`, `select_one`, required): Select the format of this session - In-person, Video Call, Phone Call, or Hybrid.
*   **Session Duration** (`session_duration`, `select_one`, required): Choose the expected length of the session - 30, 45, 60, 90, or 120 minutes.
*   **Follow-up Session Needed** (`follow_up_needed`, `select_one`, required): Schedule a follow-up session after this session by selecting 'True', otherwise choose 'False' if no follow-up is needed, or 'To Be Determined' for uncertain cases.

### Step 3: Client's Objectives and Focus

*   **Primary Coaching Goals** (`coaching_goals`, `text`, required): Describe what the client aims to achieve in this session.
*   **Focus Areas for This Session** (`focus_areas`, `select_multiple`, required): Choose the areas that the client wants to focus on - Goal Setting, Time Management, Work-Life Balance, Career Development, Confidence Building, Stress Management, Communication Skills, or Leadership Skills.

### Step 4: Additional Information

*   **Client Preparation** (`client_preparation`, `text`, optional): Suggest any preparation the client should do before the session.
*   **Resources or Materials Needed** (`resources_needed`, `text`, optional): List any tools, documents, or resources the client may need.
*   **Session Location** (`session_location`, `text`, optional): Provide the physical address or video link for the session.
*   **Special Requirements or Accommodations** (`special_requirements`, `text`, optional): Notate any accessibility needs or special considerations for the client.

### Tips
-   Ensure all fields are filled out as the client may have specific needs not addressed in this guide.
-   Review the 'previous_session_notes' field to maintain continuity between sessions.
-   Tailor the session to the client's objectives and selected focus areas.
