# tree_health_inspection_form - Help Guide
## Purpose
The tree health inspection form is designed to collect information on various aspects of a tree's health status. This form is used to track and record the tree's health over time.

## How To Complete This Form
1. Select the current health status of the tree from the options provided.
2. Enter the date of the last inspection in the format mm/dd/yyyy.
3. Enter the time of the inspection in 24-hour format (HH:MM).
4. Describe any reported problems on the tree.
5. Provide a detailed description of the problems found.

## Field-by-Field Explanation
- **What is the health status of the tree?** (`tree_health_status`, select_multiple, required): Select the current health status of the tree. This can be "Healthy", "Diseased", "Dead", or "Unknown".
- **Date of last inspection** (`last_inspection_date`, date, required): Enter the date of the last inspection in the format mm/dd/yyyy.
- **Was this tree healthy?** (`is_tree_healthy`, select_one, required): Select if the tree was healthy or not.
- **Time of inspection** (`inspection_time`, time, required): Enter the time of the inspection in 24-hour format (HH:MM).
- **Reported problem on the tree** (`reported_problem`, note, required): Describe any problem found on the tree, e.g., diseases, pests, or other health issues.
- **Description of the problem** (`problem_description`, text, required): Provide a detailed description of the reported problem.

## Tips
* Please answer each field carefully and accurately.
* Select "Healthy" only if the tree is indeed healthy.
* Select "Diseased" or "Dead" only if the tree is not healthy.
* Enter dates and times correctly to ensure accurate tracking.
* Provide detailed descriptions of any problems found on the tree.
