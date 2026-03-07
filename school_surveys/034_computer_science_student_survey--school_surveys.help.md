<thinking>
To create this help guide, I'll review the form fields and provide a brief internal reasoning block to ensure the form's purpose and relevance are clear. This will help me understand the form's context and make the help guide more accurate and helpful.

The form "Computer Science Student Survey" is designed to collect feedback and ratings from students about their experiences with a computer science course. The form has a mix of demographic questions (student name, email address, major), questions about course specifics (course name, instructor name, semester), and evaluation questions (rating of course content, instructor effectiveness, difficulty, and pace).

The form is meant to gather information about the course's strengths and weaknesses from students' perspectives. This data can be used by instructors and course administrators to identify areas for improvement and make informed decisions about course development.

Before completing this form, please make sure you have taken the course in question and have a clear understanding of your experiences with it.

</thinking>

# Computer Science Student Survey - Help Guide
## Purpose
The purpose of this form is to collect feedback and ratings from students about their computer science course experiences. This data will help instructors and course administrators understand student perspectives and make improvements to the course.

## How To Complete This Form

To complete this form, follow these steps:

1. Review the questions carefully and answer them based on your experiences with the course.
2. For questions with ratings (e.g., rating of course content, instructor effectiveness), select the rating that best reflects your opinion.
3. For questions with multiple-choice options, select the one that best matches your experience.
4. If you have any additional comments or feedback, use the "Additional Comments" field.

## Field-by-Field Explanation

* **Survey ID** (`survey_id`, text, required): This is a unique identifier for the survey, not relevant to your input.
* **Survey Date** (`survey_date`, date, required): The date you took the survey.
* **Student Name** (`student_name`, text, optional): Your full name (if you choose to provide it).
* **Student ID** (`student_id`, text, optional): Your student identification number (if you have one).
* **Email Address** (`email_address`, email, optional): Your student email address (if you have one).
* **Academic Year** (`academic_year`, select_one, required): Select the year you are in (e.g., Freshman, Sophomore, Junior, Senior, Graduate Student, Doctoral Candidate, Other).
* **Major** (`major`, select_one, required): Select your major or field of study (e.g., Computer Science, Software Engineering, Data Science, Cybersecurity, Information Technology, Computer Engineering, Other).
* **Course Name** (`course_name`, text, required): The name of the course you are surveying.
* **Course Code** (`course_code`, text, optional): The course code or number (if applicable).
* **Instructor Name** (`instructor_name`, text, required): The name of the instructor for the course.
* **Semester** (`semester`, select_one, required): Select the semester you took the course (e.g., Spring 2026, Fall 2025, Spring 2025, Fall 2024, Summer 2025, Other).
* **Course Content Rating** (`course_content_rating`, select_one, required): Rate the course content (e.g., 5 - Excellent, 4 - Good, 3 - Average, 2 - Poor, 1 - Very Poor).
* **Instructor Effectiveness** (`instructor_effectiveness`, select_one, required): Rate the instructor's effectiveness (e.g., 5 - Excellent, 4 - Good, 3 - Average, 2 - Poor, 1 - Very Poor).
* **Course Difficulty** (`course_difficulty`, select_one, required): Rate the course difficulty (e.g., Too Easy, Easy, Just Right, Challenging, Too Difficult).
* **Workload Rating** (`workload_rating`, select_one, required): Rate the workload (e.g., Too Light, Light, Appropriate, Heavy, Too Heavy).
* **Materials Quality** (`materials_quality`, select_one, required): Rate the quality of course materials (e.g., 5 - Excellent, 4 - Good, 3 - Average, 2 - Poor, 1 - Very Poor).
* **Lab Sessions Rating** (`lab_sessions_rating`, select_one, optional): Rate the lab sessions (e.g., 5 - Excellent, 4 - Good, 3 - Average, 2 - Poor, 1 - Very Poor, Not Applicable).
* **Programming Languages Learned** (`programming_languages_learned`, select_multiple, optional): Select the programming languages you learned in the course (e.g., Python, Java, C Plus Plus, JavaScript, C Sharp, Ruby, Go, Rust, Swift, Other).
* **Skills Gained** (`skills_gained`, select_multiple, required): Select the skills you gained in the course (e.g., Programming, Problem Solving, Algorithm Design, Data Structures, Database Management, Web Development, Mobile Development, Machine Learning, Version Control, Debugging).
* **Course Pace** (`course_pace`, select_one, required): Rate the course pace (e.g., Too Slow, Slow, Just Right, Fast, Too Fast).
* **Would Recommend Course** (`would_recommend`, select_one, required): Select whether you would recommend the course (e.g., Definitely Yes, Probably Yes, Neutral, Probably No, Definitely No).
* **Best Aspect of Course** (`best_aspect`, text, optional): Provide a short description of the best part of the course.
* **Areas for Improvement** (`areas_for_improvement`, text, optional): Suggest areas for improvement for the course.
* **Additional Comments** (`additional_comments`, text, optional): Share any additional feedback or comments about the course.
