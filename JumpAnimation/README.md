# Keyboard Input Notes

|P5JS Key Sytem Variables | Meaning |Reference Link
|---|:---|---|
|`keyIsPressed`|a Boolean system variable that is `true` if any key is currently pressed and `false` otherwise |https://p5js.org/reference/p5/keyIsPressed/
|`key`|a system variable that contains the value of the last key typed. These aligh with the letter.|https://p5js.org/reference/p5/key/
|`keyCode`|a system variable that contains the code value of the last key typed.   |https://p5js.org/reference/p5/keyCode/

### `key`
Alphanumeric and punctuation keys have a `key` value that matches the letter, number or punctuation

### `keyCode`
All keys have a code. 'a' is 65, 'b' is 66, 'c' is 67 and non alpha numeric keys like ENTER = 13, LEFT_ARROW = 37 or SPACE = 32 also have a value. Use the website https://www.toptal.com/developers/keycode to easily determine keycodes. Or add `text(keyCode, 50, 50);` to any sketch.


|P5JS Key Functions | Meaning |Reference Link
|---|:---|---|
|`keyPressed()`|A function that is called everytime any key is pressed. | https://p5js.org/reference/p5/keyPressed/ 
|`keyIsDown(code)`|A function that returns `true` if the key it is checking for is pressed and false otherwise. `code` represents the keyCode for the specific key that you are checking. This function is useful when multiple keys may be pressed at the same time. |https://p5js.org/reference/p5/keyIsDown/


# Jump Animation

Part 1 left and right movement and keyboard input - 
https://youtu.be/DJxayA3k8Ec
 

Part 2 Discussing and Coding the jump -
https://youtu.be/1s_1NF_9BJM
 

Follow along with the videos to make a jump animation. If you only follow along that is 8/10

Then add more features on your own 10/10:

A better player drawing,
Prevent the double jump,
Get creative with it.