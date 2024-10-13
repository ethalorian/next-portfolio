---
title: "Understanding Big O Notation: Drop Constants"
date: "2024-10-13"
subtitle: "Post #2"
author: "Eth"
---
*This is ***post#2*** of my note series as I study data structures and algorithms.*

# Introduction to Big O Notation

Recapping from my last post, big O notation describes the time complexity of an algorithm, providing a relative measure of the number of operations a program takes to complete a task. Essentially, it's a way to assess the "worst-case efficiency" of code.

## Simplifying Time Complexity: Big O Notation

To better understand time complexity, we use certain rules to simplify it, often referred to as "Big O notation." One of the most fundamental rules is the **drop constant rule**. Let's dive into this concept with an example.

### The Drop Constant Rule

Consider a simple example from a previous post, where a `for` loop iterates over `n` items to find a specific value. The Big O notation for this algorithm is **O(n)** because the loop runs `n` times. If the target value is at the last index of the array, the loop needs to run `n` times, which reinforces the idea that Big O represents the worst-case scenario.

### Example: A Single Loop

Here's a basic function that logs each value from `0` to `n-1`:

```javascript
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
```

If we call `logItems(3)`, the output will be:

```javascript
0
1
2
```

This function runs `n` times, and as `n` increases, the number of operations increases linearly. Therefore, the time complexity is **O(n)**.

## Two Loops and the Drop Constant Rule

Now, let's explore how the drop constant rule applies when we add another loop to the function.

### Example: Two Loops in the Same Function

```javascript
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
```
When we call `logItems(3)`, the function will operate as follows:

- The first loop runs and logs:

```javascript
0
1
2
```
- After the first loop finishes, the second loop runs and logs:

```javascript
0
1
2
```
The full output will be:

```javascript
0
1
2
0
1
2
```

Each loop runs `n` times, so the total number of operations is **O(n + n)**, which simplifies to **O(2n)**. However, the drop constant rule tells us to ignore constants in Big O notation, so we simplify it further to **O(n)**. This means that even though the second program runs twice as long, the time complexity still scales linearly with the size of `n`.

## Big O: Efficiency, Not Speed

It's important to clarify that Big O notation doesn't measure the actual speed of a program. Instead, it gives us a way to compare the efficiency of algorithms, providing a clear and concise mathematical relationship between the independent variable `n` and the number of operations, represented by **O**.

The best way to learn something is to teach it.  Thanks for stopping by!  See you again soon.


