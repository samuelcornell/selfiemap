# Install and load the tidyverse package if not already installed
# install.packages("tidyverse")
library(tidyverse)

# Your dataset
# Assuming your dataset is named 'incident_data'
# If it's not, replace 'incident_data' with your actual dataset name
incident_data <- read.table(text = "
Case_number Date Country Latitude Longitude Type_of_Incident age sex
71 19-May-18 Australia -35.11867 117.89275 Fall 20 male
74 22-Jul-18 Australia -34.016615 151.231784 Fall 19 male
81 28-Feb-19 Australia -34.19481 151.03861 Fall 22 male
87 17-Aug-19 Australia -33.862684 151.282771 Fall 27 female
91 12-Jan-20 Australia -33.862684 151.282771 Fall 21 female
92 17/4/2020 Australia -33.862684 151.282771 fall 15 female
94 12-Dec-20 Australia -37.239176 142.410725 Fall 38 female
96 9-Jul-21 Australia -27.47793 153.03444 Fall 33 female
102 12-Feb-23 Australia -35.4868338 148.9345944 Fall 19 male
103 19-Feb-23 Australia -35.4868338 148.9345944 Fall 22 male
104 25-Aug-23 Australia -26.39232 153.11678 Fall 30 female
105 3-Jan-24 Australia -17.43713 145.8569 Trapped_in_water NA NA
106 8-Jan-24 Australia -27.32346 152.77931 Fall 22 male
12 7-Jan-16 Brazil 22.25 -42.5 Fall NA NA
21 16-Apr-16 Brazil -18.5264844 -44.1588654 Fall NA NA
22 21-Apr-16 Brazil -21.76404381 -41.32489014 Fall NA NA
69 22-Apr-18 Brazil -5.32413 -41.54531 Fall NA NA
70 30-Apr-18 Brazil -17.76214 -48.6851 Fall NA NA
11 Aug-15 China 29.0000001 119.9999999 Fall NA NA
67 11-Jan-18 Colombia 5.94701 -73.34495 Fall NA NA
80 10-Jan-19 Colombia 2.071 -76.91037 Fall NA NA
90 8-Jan-20 Colombia 2.071 -76.91037 Fall NA NA
10 Jun-15 Croatia 44.88124 15.6199 Fall NA NA
30 1-Jul-16 Croatia 44.88124 15.6199 Fall NA NA
68 20-Apr-18 Greece 37.9650175 23.6207952 Fall NA NA
97 10-Jul-21 Hong_Kong 39.11251 -100.35875 Fall NA NA
19 12-Mar-16 Hong_Kong_China 22.3528832 114.1868763 Fall NA NA
99 6-Aug-21 Hungary 47.4857313 19.0549183 Fall NA NA
7 Mar-15 India 21.1498134 79.0820556 Drowned NA NA
13 9-Jan-16 India 19.0549792 72.8402203 Drowned NA NA
14 9-Jan-16 India 26.2644203 71.6027498 Fall NA NA
15 12-Feb-16 India 12.9767936 77.590082 Drowned NA NA
16 13-Feb-16 India 20.0112475 73.7902364 Drowned NA NA
17 22-Feb-16 India 51.5323423 9.937216 Fall NA NA
20 5-Apr-16 India 17.360589 78.4740613 Fall NA NA
23 26-Apr-16 India 10.9094334 78.3665347 Fall NA NA
24 3-Jun-16 India 23.3889007 88.372439 Drowned NA NA
25 12-Jun-16 India 22.2973142 73.1942567 Drowned NA NA
27 22-Jun-16 India 26.513188 80.2364843 Drowned NA NA
31 2-Jul-16 India 30.3255646 78.0436813 Fall NA NA
32 6-Jul-16 India 24.53399 81.29596 Drowned NA NA
33 12-Jul-16 India 18.0654743 74.0410999 Fall NA NA
34 13-Jul-16 India 25.3171947 81.9193735 Drowned NA NA
35 17-Jul-16 India 8.079252 77.5499338 Drowned NA NA
36 19-Jul-16 India 13.1009554 75.4820907 Fall NA NA
37 23-Jul-16 India 18.9068356 75.6741579 Fall NA NA
38 27-Jul-16 India 30.3255646 78.0436813 Drowned NA NA
39 30-Jul-16 India 23.2584857 77.401989 Drowned NA NA
40 31-Jul-16 India 23.25968 77.39769 Fall NA NA
41 3-Aug-16 India 9.79309 78.93223 Fall NA NA
42 7-Aug-16 India 19.07184 73.53602 Fall NA NA
44 12-Aug-16 India 18.84886 76.72376 Drowned NA NA
45 15-Aug-16 India 11.07631 76.90701 Fall NA NA
47 17-Sep-16 India 18.44701 79.12603 Drowned NA NA
48 1-Oct-16 India 17.28789 78.36843 Drowned NA NA
51 9-Oct-16 India 18.74931 73.40805 Fall NA NA
52 11-Oct-16 India 19.17669 72.99686 Drowned NA NA
53 12-Oct-16 India 19.1987 84.11652 Drowned NA NA
54 11-Nov-16 India 17.88867 79.27928 Drowned NA NA
56 13-Jan-17 India 30.0158 79.30918 Drowned NA NA
59 8-May-17 India 19.04145 72.82303 Drowned NA NA
60 24-May-17 India 22.80578 88.24662 Drowned NA NA
62 27-Jun-17 India 19.06253 72.85714 Drowned NA NA
64 10-Jul-17 India 21.16603 79.06308 Drowned NA NA
65 26-Jul-17 India 21.6637 78.24272 Drowned NA NA
88 7-Oct-19 India 10.79185 78.34753 Fall NA NA
101 28-Aug-22 India 21.6637359 81.8406351 Drowned NA NA
8 May-15 Indonesia -8.06265 114.2619352 Fall NA NA
9 May-15 Indonesia -8.678942 115.4573313 Fall NA NA
72 11-Jun-18 Indonesia -8.68117 115.44933 Fall NA NA
95 16-May-21 Indonesia -6.98607 110.17311 Drowned NA NA
79 4-Jan-19 Ireland 52.97184 -9.42905 Fall NA NA
1 Jun-14 Italy 40.548816 17.0805801 Fall NA NA
84 14-Jul-19 Italy 45.90682 8.66225 Fall NA NA
98 28-Jul-21 Italy 42.62242 13.76932 Fall NA NA
66 25-Dec-17 Mexico 21.84897 -102.32385 Fall NA NA
18 29-Feb-16 Nepal 27.6995688 84.4222747 Drowned NA NA
49 1-Oct-16 Nepal 28.28297 84.44296 Fall NA NA
57 9-Feb-17 New_Zealand -38.66353 176.08142 Drowned NA NA
63 1-Jul-17 Nigeria 7.25093 5.18471 Drowned NA NA
50 8-Oct-16 Oman 17.05942 54.11462 Drowned NA NA
43 9-Aug-16 Pakistan 34.08488 71.68741 Drowned NA NA
46 20-Aug-16 Pakistan 34.08488 71.68741 Drowned NA NA
55 4-Jan-17 Pakistan 27.54642 69.18718 Drowned NA NA
85 15-Jul-19 Pakistan 34.01161 71.99236 Fall NA NA
86 16-Jul-19 Pakistan 35.20783 72.54851 Drowned NA NA
28 29-Jun-16 Peru -13.164422 -72.5450851 Fall NA NA
29 29-Jun-16 Peru -6.0231208 -77.8869851 Fall NA NA
2 Jul-14 Philippines 14.5948914 120.9782618 Fall NA NA
4 Oct-14 Philippines 18.5217754 120.7442893 Drowned NA NA
3 Aug-14 Portugal 38.780905 -9.4994163 Fall NA NA
73 12-Jun-18 Portugal 38.96353 -9.41763 Fall NA NA
6 Jan-15 South_Africa -26.1274536 27.9673161 Fall NA NA
5 Nov-14 Spain 37.38283 -5.97317 Fall NA NA
83 4-Jul-19 Spain 37.9775416 -0.6828446 Fall NA NA
78 12-Nov-18 Sri_Lanka 6.80199 80.80738 Fall NA NA
89 14-Nov-19 Thailand 9.4705 99.98985 Fall NA NA
93 30-Apr-20 Turkey 36.85103 30.79785 Fall NA NA
82 Apr-19 Uganda 0.5949127 33.0527993 Drowned NA NA
61 22-Jun-17 United_Kingdom 50.76032 0.1181 Fall NA NA
26 18-Jun-16 United_States 44.00034 -74.49989 Fall NA NA
58 25-Mar-17 United_States 43.119563 -124.4094086 Drowned NA NA
75 5-Sep-18 United_States 37.724892 -119.5335388 Fall NA NA
76 19-Sep-18 United_States 46.56424 86.31647 Fall NA NA
77 25-Oct-18 United_States 37.712936 -119.604622 Fall NA NA
100 24-Jan-22 United_States 33.4286606 -111.4181856 Fall NA NA
", header = TRUE, stringsAsFactors = FALSE)

# Convert 'Date' to a standardized date format
incident_data$Date <- as.Date(incident_data$Date, format = "%d-%b-%y")

# Extract year from the date
incident_data$Year <- format(incident_data$Date, "%Y")

# Count the number of cases by year
cases_by_year <- incident_data %>%
  group_by(Year) %>%
  summarise(Count = n())

# Plot the bar chart
ggplot(cases_by_year, aes(x = Year, y = Count, fill = Year)) +
  geom_bar(stat = "identity") +
  labs(title = "Worldwide number of incidents by year",
       x = "Year",
       y = "Number of Cases") +
  theme_minimal()
  theme(legend.position = "none")
  
  
  #########
  
  # Install and load the tidyverse package if not already installed
  # install.packages("tidyverse")
  library(tidyverse)
  
  # Assuming your dataset is named 'incident_data'
  # If it's not, replace 'incident_data' with your actual dataset name
  incident_data <- read_table(incident_data, header = TRUE, stringsAsFactors = FALSE)
  
  # Count the number of cases in each country
  cases_by_country <- incident_data %>%
    group_by(Country) %>%
    summarise(Count = n())
  
  # Sort the data by Count in descending order for better visualization
  cases_by_country <- cases_by_country[order(-cases_by_country$Count), ]
  
  # Plot the bar chart
  ggplot(cases_by_country, aes(x = reorder(Country, -Count), y = Count, fill = Country)) +
    geom_bar(stat = "identity") +
    labs(title = "Number of Cases by Country",
         x = "Country",
         y = "Number of Cases") +
    theme_minimal() +
    theme(axis.text.x = element_text(angle = 45, hjust = 1))  # Rotate x-axis labels for better readability
  
############
  
  # Assuming your dataset is named 'incident_data'
  # If it's not, replace 'incident_data' with your actual dataset name
  incident_data <- read.table(text = "Your data here", header = TRUE, stringsAsFactors = FALSE)
  
  # Filter cases related to Australia
  australia_cases <- incident_data[incident_data$Country == "Australia", ]
  
  # Display summary statistics
  summary(australia_cases)
  
  
  ###########
  
  # Count the number of cases for each type of incident in Australia
  cases_by_incident <- selfieincidentsworldmapbox %>%
    group_by(`Type of Incident`) %>%
    summarise(Count = n())
  
  # Plot the bar chart
  ggplot(cases_by_incident, aes(x = reorder(Type of Incident, -Count), y = Count, fill = Type of Incident)) +
    geom_bar(stat = "identity") +
    labs(title = "Number of Cases by Incident Type in Australia",
         x = "Incident Type",
         y = "Number of Cases") +
    theme_minimal() +
    theme(axis.text.x = element_text(angle = 45, hjust = 1))  # Rotate x-axis labels for better readability

  
  ##########
  
  # Assuming your dataset is named 'incident_data'
  # If it's not, replace 'incident_data' with your actual dataset name
  incident_data <- read.table(text = "Your data here", header = TRUE, stringsAsFactors = FALSE)
  
  # Filter cases related to Australia
  australia_cases <- selfieincidentsworldmapbox[selfieincidentsworldmapbox$Country == "Australia", ]
  
  # Display summary of incident types
  cat("Summary of Incident Types in Australia:\n")
  summary(australia_cases$Type_of_Incident)
  
  # Count the number of incidents related to each age group
  cat("\nNumber of Incidents by Age Group:\n")
  age_counts <- table(australia_cases$age)
  print(age_counts)
  
  
  ###########
  
  # Assuming your dataset is named 'selfieincidentsworldmapbox'
  # If it's not, replace 'selfieincidentsworldmapbox' with your actual dataset name
  selfieincidentsworldmapbox <- read.table(text = "Your data here", header = TRUE, stringsAsFactors = FALSE)
  
  # Inspect column names in the dataset
  column_names <- names(australia_cases)
  print(column_names)
  
  # Load necessary libraries
  library(ggplot2)
  library(dplyr)
  
  # Make sure to use backticks for column names with spaces
  # Create a bar chart for incident types
  ggplot(australia_cases, aes(x = `Type of Incident`, fill = `Type of Incident`)) +
    geom_bar() +
    labs(title = "Distribution of Incident Types in Australia",
         x = "Incident Type",
         y = "Number of Incidents") +
    theme_minimal()
  
  # Create a bar chart for incidents by age group
  ggplot(selfieincidentsworldmapbox, aes(x = as.factor(age), fill = `Type of Incident`)) +
    geom_bar(position = "dodge") +
    labs(title = "Number of Incidents by Age Group in Australia",
         x = "Age Group",
         y = "Number of Incidents") +
    theme_minimal()
  