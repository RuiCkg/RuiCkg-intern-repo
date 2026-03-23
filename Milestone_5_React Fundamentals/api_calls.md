# API Calls Reflection

## Why is it useful to create a reusable Axios instance?

A reusable Axios instance helps keep API code consistent and easier to maintain. Instead of repeating the same base URL, headers, and timeout settings in every request, they can be configured once and reused throughout the project. This makes the code cleaner and reduces duplication.

## How does intercepting requests help with authentication?

Request interceptors help with authentication by automatically attaching tokens or other required headers before each request is sent. This means the developer does not need to manually add the token every time, which reduces mistakes and makes the application more secure and scalable.

## What happens if an API request times out, and how can you handle it?

If an API request times out, the request does not complete within the configured time limit. This can happen because of a slow server or network issue. It can be handled by catching the timeout error and showing a helpful message to the user, such as telling them to try again later.