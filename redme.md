1. getElementById
Selects one element by ID.
Returns: single element.
Example: document.getElementById("header")
getElementsByClassName
Selects all elements with a class.
Returns: HTMLCollection (live).
Example: document.getElementsByClassName("card")
querySelector / querySelectorAll
Uses CSS selectors.
querySelector: first match → single element.
querySelectorAll: all matches → NodeList (static).
Example:


2. Creating and Placing a New Element in the DOM
To birth a new node in the DOM, first summon it with document.createElement():
This forms an empty vessel, not yet bound to the page. To anchor it, graft it onto the DOM tree with appendChild():
Finally, breathe essence into it by adding text, attributes, or style:


3. Event Bubbling is a DOM mechanism where an event starts from the innermost element and rises through its ancestors. For example, clicking a button inside nested containers triggers the button first, then its parent, and continues upward.
This allows event delegation, where one listener on a parent can manage many child events efficiently. If needed, the flow can be stopped with event.stopPropagation()
In short, it’s the upward ripple of events through the DOM hierarchy.

4. Event Delegation in JavaScript

Event Delegation is a technique where instead of attaching event listeners to multiple child elements, you assign a single listener to their parent. This parent captures bubbling events and handles them based on the event’s source.
Why useful?
Efficiency – One listener replaces many, reducing memory load.
Flexibility – Works seamlessly with dynamically added elements.
Simplicity – Keeps code cleaner and
Think of it as a single host greeting every guest at the door, instead of hiring an usher for each one. Event Delegation brings order, speed, and elegance to JavaScript development.


5. preventDefault() stops a browser’s built-in behavior—like preventing a link from navigating—without affecting event flow.
stopPropagation() halts an event from moving through the DOM, keeping parent elements unaware of it.
In short: preventDefault() controls the browser’s action; stopPropagation() controls the event’s journey. Often used together, they give precise command over page interactions.


