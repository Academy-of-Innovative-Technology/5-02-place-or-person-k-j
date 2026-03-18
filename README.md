[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23185034&assignment_repo_type=AssignmentRepo)
# Countries / Persons Profile

 Create a profile for *5* people (historic or current) *and* 5 countries. The user should be able to search for the country or people and see the results. Once completed, fellow classmates will review and rate your design and content.

# Example
    
JSBin: [https://output.jsbin.com/wiyocox?authuser=0](https://output.jsbin.com/wiyocox?authuser=0)

# Instructions

 1. Research a location and person you are interested in.

  - *all information will be stored as an object in the array in the research.json file* under src/api folder
			
 2. Use the Web and/or Wikipedia for your research.

 3. Create the Object format described below in the src/api/data.json


# Requirements

 - Make sure to link in the correct order in <head> tag the
   - bootstrap.min.css
   - style.css

 - Also link the scripts before the </body> tag
   - bootstrap.min.js
   - script.js 
   
 - Take into account, how will the user know what countries you researched that are options.

 - Do not select a country your seating partner chose. *There are 195 countries in the world, not continents.*

 - Create a design that is creative and that is logical. You can make the layout to display the information. Make sure the information displayed is labeled. 

 ## JavaScript

  a. Load the research.json using fetch
				
  b. Minimum 3 Functions

  c. The object should contain

  d. Use JSON Validator to make sure your API syntax is correct [JS List](https://jsonlint.com/) [https://jsonlint.com/]: 
  
- *7 Key/Values* that contains (country)
  - type: "location"
  - name
  - population
  - capital
  - national animal
  - language as an *array* (if more than one language)
  - nation anthem (if present an audio download to link it)
  - images as an *object* that contains
  - country flag
  - contains a sub array of images *3 images* 
    - city
    - people 
    - leader (last one if none)
											
 *OR*
				
  - *7 Key/Values* that contains (person)
    - name
    - birth date
    - county/area born in
    - background/race as an *array* (if mixed)
    - parents as an *array* that contains
      - mother (if present)
      - father (if present)
    - education as an *array* (if more than one school)
    - images as an *object* that contains
      - person
      - contains a sub array of images *3 images* of
        - most popular works or awards
											
  ## HTML

 - Design the page using any html5 or bootstrap tags
 - improve the page creatively than using the template

  ## CSS
		
 -  Use creative but consistent colors that makes sense.

		
# Challenge
		
  - create the template dynamically.

  - use a drop down menu

  - the drop down is dynamically populated with your countries name

  - use Object.keys() and Object.values in a function.
 
  - use a single function that passes a parameter to search for the object.