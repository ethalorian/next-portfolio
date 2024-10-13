---
title: "Getting Started with Data Structures and Algorithms: Understanding Big O Notation"
date: "2024-10-12"
subtitle: "Post #1"
author: "Eth"
---
*This is ***post#1*** of my note series as I study data structures and algorithms.*

Now that I’ve completed my bootcamp, I’m shifting my focus to studying Data Structures and Algorithms in preparation for potential technical interviews. I’ve realized that I learn best when I teach, so I’ve decided to blog about my progress here. After all, what better place to share my learning journey and insights than on my personal portfolio site?

Since this is the first post, I want to set the context for the rest of my blog. I’ll keep things simple by numbering the posts sequentially and adding the date. I initially planned to include a subtitle for context, but after reconsidering, I’ve decided to start with a descriptive title, followed by a subtitle that indicates the post number. That should give me enough structure to get started. Now, let’s dive into the basics of Big O notation.

## Measuring Code Efficiency

When measuring code efficiency, we look at two key factors: **time complexity**, which refers to how long a program takes to run, and **space complexity**, which refers to how much memory it uses during execution. These concepts become crucial when explaining code performance during technical interviews.

For example, if I need time-efficient code to process data quickly and I’m working with a powerful machine, I might not be too concerned about memory usage. On the flip side, if I’m running multiple processes simultaneously and time isn’t a major factor, I might prioritize space efficiency, minimizing memory usage even if the code takes longer to run. It’s also worth noting that time complexity is measured in terms of operations, not actual time.

## Understanding Big O Notation

In data structures and algorithms, we use three Greek letters: **Omega (Ω)**, **Theta (Θ)**, and **Omicron (O)**, with Omicron more commonly known as **Big O**. Big O represents the "worst-case scenario," Omega the "best case," and Theta the "average case."

### Example: Array Search

To illustrate, consider an array containing the numbers 1 through 7 in order. If I write a loop to search for the number 1, I’ll find it at index 0 almost immediately—that’s the Omega case. On the other hand, if I’m searching for the number 7, I’ll need to iterate through the entire array, which is the Big O (worst case) scenario.

## What is O(n)?

The simplest example is a basic for loop. The graph of **O(n)** shows a linear relationship, where the number of operations increases directly with the input size (n). In this case, n is the independent variable, and Big O is the dependent variable, illustrating that as n grows, the number of operations required increases at a constant rate.

That’s all I have time for today! Now I just need to build the blog on my portfolio site to host this post. 
