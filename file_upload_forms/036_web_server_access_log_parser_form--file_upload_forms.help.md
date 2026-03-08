<thinking>
The web_server_access_log_parser_form is used to parse access logs from web servers to extract relevant information. This form is designed to be used by web administrators or analysts to analyze logs from different web servers such as Apache, IIS, and Nginx. 
The form is likely used to monitor and troubleshoot web server performance, security, or configuration issues. However, the exact use case may vary depending on the specific requirements of the organization using this form.

</thinking>

# web_server_access_log_parser_form - Help Guide
## Purpose
The web_server_access_log_parser_form is used to parse access logs from web servers to extract relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Upload the access log file from your web server using the File Upload field.
2. Select the log start and end times using the Start Time and End Time fields.
3. Choose the log path using the Log Path field.
4. Select the log level (Critical, Info, Debug, or Warn) using the Log Level field.
5. Enter the log size using the Log Size field.
6. Enter your timezone using the Timezone field.
7. Enter the timezone offset using the Timezone Offset field.
8. Select the start and end times in UTC using the Start Time UTC and End Time UTC fields.
9. Select the file type using the File Type field.
10. Select the parser type using the Parser Type field.

## Field-by-Field Explanation
* **File Upload** (`File Upload`, `text`, optional):
	+ This field allows you to upload an access log file from your web server.
* **Start Time** (`log_start_time`, `date`, optional):
	+ This field is used to select the start time of the log period.
* **End Time** (`log_end_time`, `date`, optional):
	+ This field is used to select the end time of the log period.
* **Log Path** (`log_path`, `text`, optional):
	+ This field is used to select the path to the log file.
* **Log Level** (`log_level`, `select_one`, optional):
	+ This field is used to select the level of the log (Critical, Info, Debug, or Warn).
* **Log Size** (`log_size`, `number`, optional):
	+ This field is used to enter the size of the log.
* **Timezone** (`timezone`, `text`, optional):
	+ This field is used to enter the timezone of the log.
* **Timezone Offset** (`timezone_offset`, `number`, optional):
	+ This field is used to enter the timezone offset.
* **Start Time UTC** (`start_time_utc`, `date`, optional):
	+ This field is used to select the start time in UTC.
* **End Time UTC** (`end_time_utc`, `date`, optional):
	+ This field is used to select the end time in UTC.
* **File Type** (`file_type`, `select_one`, optional):
	+ This field is used to select the type of the file (Apache, IIS, Nginx, or Other).
* **Parser Type** (`parser_type`, `text`, optional):
	+ This field is used to select the type of parser.
