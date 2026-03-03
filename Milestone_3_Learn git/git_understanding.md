# Learb Git - Rui Chosa
# Pull Requests #47
## Research what a Pull Request (PR) is and why it’s used.
A Pull Request (PR) is a request for team members to know that their code changes are ready to merge into the main codebase. It is used as a dedicated forum for discussing, reviewing, and testing code before it is integrated.

## Why are PRs important in a team workflow?
PRs are important because team members will be working in different branches. It allows us to review and test codes before merging them into main branch whcich will lead to consistency and great quality.

## What makes a well-structured PR?
- A clear and meaningful title 
- A detailed description
- Small and focused changes
- Clean commit history
- Professional communication

## What did you learn from reviewing an open-source PR?
I noticed that reviewers focus heavily on clarity and maintainability, even for small changes, which highlights how important code quality is in large open-source projects.

# Writing Meaningful Commit Messages #48
## Research best practices for writing commit messages.
- Limit the subject line to 50 characters
- Capitalize the subject/description line
- Do not end the subject line with a period
- Separate the subject from the body with a blank line
- Wrap the body at 72 characters
- Use the body to explain what and why
- Use the imperative mood in the subject line let it seem like you’re giving a command eg “feat: Add unit tests for user authentication”. Using the imperative mood in commit messages makes them more consistent and commands-like, which is helpful in understanding the actions taken.

## Explore commit histories in an open-source GitHub project (e.g., React, Node.js) and analyze good vs. bad commit messages.
*Good*
- "fix: remove unused variable to fix linter (#35919)": This shows good example action + scope + reason.
- "crypto: fix missing nullptr check on RSA_new()" and "deps: upgrade npm to 11.11.0": This shows clear prefixing by area (doc/tls/tools/crypto/etc.)

*Bad*
- Vague messages like "update", "fix", "stuff", which don’t tell you what changed or why.

## Make three commits in your repo with different commit message styles:
### A vague commit message (e.g., "fixed stuff").
Test line 1
https://github.com/RuiCkg/RuiCkg-intern-repo/commit/663d6f5af014d20859fb674f352b9d4630a5629a
### An overly detailed commit message.
Test line 2
https://github.com/RuiCkg/RuiCkg-intern-repo/commit/ef9dc88ff8b5383464b2d6bf857b4b4aad96d971

### A well-structured commit message.
Test line 3
https://github.com/RuiCkg/RuiCkg-intern-repo/commit/652eaea854b1e74bb3d09b4199d905365052402e

## What makes a good commit message?
As I mentioned in Research best practices for writing commit messages above.

## How does a clear commit message help in team collaboration?
Clear commit messages save time for everyone. Teammates can understand the purpose of a change without opening every diff, which makes reviews, debugging, and handovers easier

## How can poor commit messages cause issues later?
There would be tons of commits you have to look at and if there are poor commits, it can be really hard to find certain commits and keep track of the history of the code.


# Understand git bisect #49
## Research git bisect and how it helps in debugging.

