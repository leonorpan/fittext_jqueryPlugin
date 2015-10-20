FitText jQuery Plugin
==============
The purpose of this plugin is to “fit” the input text into a div, so it will fit in one line, within a div’s 50px height and width while using the maximum possible integer font-size. 

The fittext.js file includes the plugin.

The folder "example" includes an example of the plugin, with customizable div width and text (using a range and text input respectively).
You will also find a folder called "tests", which are unit tests that confirm the plugin.

The folder "simplest_example", includes a simple html page that showcases the simplest implementation of the plugin.


Suggestions for Improvements
--------------

1. The plugin is not compatible with Internet Explorer. In a 2015 report, more than half of the users worldwide browse the web via IE. Thus compatibility with IE is the highest priority.

2. One fundamental concept of a plugin is its reusability. Currently the plugin only supports div heights of 50px. In the ideal scenario, the user/developer would be able to use the plugin for any div height.

3. The plugin maximum font size is 39px. An improved version should support bigger font-sizes.

For the implementation of 2 and 3 the plugin could accept div height in the plugins' options, and calculate maximum font-size relatively to the div's height on the fly.

4. When the text is very big comparing to the div's width, the unused space inside the div is big ("right-padding"). A "hack" could be the use of decimal font sizes.

5. Due to the hetereogenity of devices in our days, there was little capability of testing the plugin on different devices, screen sizes, browsers etc. The plugin is tested in Chrome, Opera, Mozilla as well as simulated on those browsers' consoles.More testing is needed.


 