# [The Challenge](https://techdevguide.withgoogle.com/paths/advanced/compress-decompression)

In this exercise, you're going to decompress a compressed string.

Your input is a compressed string of the format `number[string]` and the decompressed output form should be the string written number times. For example:

The input

`3[abc]4[ab]c`

Would be output as

`abcabcabcababababc`

Other rules

Number can have more than one digit. For example, `10[a]` is allowed, and just means `aaaaaaaaaa`

One repetition can occur inside another. For example, `2[3[a]b]` decompresses into `aaabaaab`

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity.

Learning objectives

This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.

## Solution

First, we need to loop for all the string looking for three situations:

1. The first bracket `[`. When we found it, we know that the next position starts the string, so we need to store this information.
2. We know also that the char(s) before the bracket it`s the repetition number. It's important to know that it's possible to have more then one char, so we need to check if the char is a number instead and store it.
3. It's possible to have char(s) without repetition, so we need to check it and concatenate with the output.

The exercise explained that it's possible to have nested compressed string, so we need to handle this to make a recursion. When we found the right bracket `]`, we close the cicle, so it's possible to do a loop to output the repeated string. However, if that string has another bracket(s) `[`, we need to do all over again. So that is the condition for the recursion.

## Execution

I wrote the algorithm in Javascript. We can run with the following instructions:

```
git clone git@github.com:adrianojfg/google-tech-dev-guide-exercises.git
cd google-tech-dev-guide-exercises
node compression-decompression
````

Make sure that you have nodejs installed.
