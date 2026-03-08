# Production Line Efficiency Evaluation Form - Help Guide

## Purpose
The Production Line Efficiency Evaluation Form is a tool used to monitor and improve the efficiency of production lines. It helps to identify areas that need improvement and optimize production processes. This form is meant to be filled out by employees who interact with the production lines on a regular basis.

## How To Complete This Form
1. Fill out the form for each production line that needs to be evaluated.
2. Enter the start and end time of the production line's operation.
3. Estimate the downtime in minutes.
4. Provide any safety observations.
5. Rate the quality of the production line's output (excellent, good, fair, or poor).
6. Rate the overall safety score (yes or no).
7. Add any comments or feedback.
8. Select all production lines that were evaluated.

## Field-by-Field Explanation
* **production_line** (`production_line_id`, `text`, required: false): Enter the name of the production line being evaluated.
* **start_time** (`start_time`, `time`, required: false): Enter the start time of the production line's operation.
* **end_time** (`end_time`, `time`, required: false): Enter the end time of the production line's operation.
* **downtime_minutes** (`downtime_minutes`, `number`, required: false): Estimate the downtime in minutes.
* **safety_observation** (`safety_observation`, `text`, required: false): Provide any safety observations.
* **quality_observation** (`quality_observation`, `text`, required: false): Provide any quality observations.
* **safety_score** (`safety_score`, `select_one`, required: false): Rate the overall safety score (yes or no).
* **quality_score** (`quality_score`, `select_one`, required: false): Rate the quality of the production line's output (excellent, good, fair, or poor).
* **comments** (`comments`, `text`, required: false): Add any comments or feedback.
* **production_line** (`production_line_id_2`, `select_multiple`, required: false): Select all production lines that were evaluated.
* **production_line_2** (`production_line_id_3`, `select_multiple`, required: false): Select all production lines that were evaluated.

Note: Please fill out all fields that are relevant to the current production line being evaluated.
