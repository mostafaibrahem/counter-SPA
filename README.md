# Counter App

## Instractions to Run App

Just run `npm install` then run `npm run dev`

### Instractions to run tests

Just run `npm run test`

### done tasks

02-[done] Implement a reset count button that resets the counter to zero.  

03-[done] Style the "+" and "-" buttons. You can add borders, and update the background color when hovering or unhovering.

04-[done] Convert each action button into a stateless component. 

05-[done] Do not show the buttons if browser size is less than 780px. Please try to implement this using css only. 

06-[done] Make Counter reusable so that you can have two instances of it; both are placed at the same row (line). The original Counter (Counter 1) you started with is on the left, and the other instance (Counter 2) is on the right. Counter 2 has a different behavior that all actions, increment, decrement, and reset are disabled. You need to follow a solid design pattern and object-orientation, such as inheritance, in your implementation.  

07-[done] Add a slider of the range 1 and 100. The default is 1, which refers to the increment or decrement amount. Increment and decrements must increase or decrease the count value based on the updated slider value. 

08-[done] The value of the counter in Counter 2 relies on the actions of Counter 1 but in a reverse manner. For instance, when we increase the counter in Counter 1, the counter in Counter 2 decreases, and vice versa.

09-[done] Change the app background color if browser size is less than 780px. 

10-[done] Fix the unnecessary scrollbars. Please make sure to externalize your values as scss variables in case you needed any. 

11-[done] Implement an auto increment/decrement toggle button that keeps incrementing or decrementing the counter based on an interval, such as 2 seconds. 

12-[done] The background color of the counter changes based on its value. 0 is white, more than 0 is shades of red, and less than zero is shades of green.  

13-[done] All controls must be placed in a collapsible panel. Using Bootstrap can help.

14-[done] Add some unit tests that test the decrement and increment actions by checking on the counter values in both controls. 

15-[done] Show a modal message box, preferably not the native JavaScript one, when: clicking increment a number of odd times (more than 3) and then clicking decrement the same number of times plus one. For instance: increment increment increment decrement decrement decrement decrement decrement. 

16-[done] Make increment and decrement keyboard accessible; ctrl + right allow increases and ctrl + left arrow decreases