make a color flipper:

purpose
change the background of a div to the color input by a user

functionality
user needs to be able to use simple color names (red, blue, green, etc...)
as well as hex color code (#4c4c4c)

structure
need an input box for user to input the name or hex code of a color
need a selector for user to choose color or hexcode input type
need to have an error pop up prompting the user to enter a usable color 
	or hex code in the event that they type something different into
	the input
need a button for the user to click to deploy their typed input

script logic
need to listen for button click
check user input
if user input is a color name or a hexcode for a color then run function to deploy it
else prompt user to input a usable color or hexcode
add name or hexcode input to the css for the div background
deploy the new background color