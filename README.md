# schoology-stylemod-v2
literally so much better if you're using v1 then go kys (in minecraft of course) <br>
ALSO: the extension version recieves less frequent updates because building it is annoying

# install as userscript
step 1: have tampermonkey installed. if you don't want to install tampermonkey then use the extension thing below <br>
get tampermonkey [here](https://www.tampermonkey.net/) <br>
step 2: click [this link](https://github.com/bean-frog/schoology-stylemod-v2/raw/main/src/main-obf.user.js) to automatically install as long as you have tampermonkey. if you dont want to click it you can go to src/main.user.js and clic the little button that says raw, it does the exact same shit

# install as extensiion
step 1: go to the [latest release](https://github.com/bean-frog/schoology-stylemod-v2/releases/latest) <br>
step 2: download schoology-mod.crx <br>
step 3: go to your browser's extension panel (usually browser-name://extensions, for example: brave://extensions) <br>
step 4: drag and drop schoology-mod.crx to that menu and it will open a window to confirm <br>
step 5: go to schoology and reload
  (actual extension on the Chrome Web Store will come at some point when this mod is actually good)
  
# features or some shit idk i was told i should add this part
  - Windows 10 style draggable menu window<br>
  - change background image
  - change content opacity
  - change header color
  - hide posts from a certain user
  - silly goofy lil easter egg dm if find
 
  
# features that are going to be added but im lazy so dont count on it
  - change border color
  - change text color
  - basic prebuilt themes
  - custom css support/schoology+ themes???? maybe

# how each thing works for the nerds who want to know
#### Background Image:
function takes the user uploaded image and converts it into a base64 encoded string, so that it can be stored as a key-value pair in local storage. `background-image` css property of the `#body` element is then set to that string. on document load, the function checks local storage for the key and string. if the key exists and it has valid base64 as its value, the element is set. if not, the function waits until an image is uploaded.
#### Header Color:
this one was a little more complicated. i made a custom version of the palo alto senior high school logo because the original did not have a transparent background. at the beginning of the document, several css rules are defined using jQuery's `$(element).css(...)` function. some of these make the buttons and text elements of the header transparent. by default the header looks exactly the same aside from the slightly modified school logo. a function checks a color input for its hex value and again saves that as a key-value pair in local storage. just like the background image, this is checked for on document load and css rules are changed appropriately if applicable.
#### Content Opacity: 
function reads the value of a slider and assigns it a decimal from 0 to 1 which is stored in local storage. the opacity of the `.clearfix` layer is set to this value and once again on document load if the value exists already in local storage
#### Hide Teachers:
this one is fun to use but was a nightmare to code because stuff just kept not working. in the userscript version, while a value is saved to local storage, on document load it does not hide the teacher. however in the extension version it seems to work fine. a function looks at the value of the text box and searches all of the post authors that are loaded when it runs. if any of the post authors matches the value, whichever post element it is a child of is hidden. the clear button both shows all hidden posts as well as clears the local storage value.

  
