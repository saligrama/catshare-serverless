# CatShare: A Cat-Themed Vulnerable Website

This is a purposely insecure toy webserver for learning about security vulnerabilities. 

This was originally designed for Stanford's [CS106S](https://cs106s.stanford.edu/) and was authored by [Cooper de Nicola](https://github.com/cdenicola), [Aditya Saligrama](https://saligrama.io), and George Hosono. It has since been used a few times for workshops by [Stanford Applied Cyber](https://applied-cyber.stanford.edu). Feel free to use for your own lessons or learning. 

This iteration has been refactored into serverless Cloudflare Pages functions in order to save on cost.

## Features

* IDOR (in `/user` endpoint)
* XSS (in `/hello` endpoint)
* Insecure session handling (in `/login` endpoint)

## Installation

This is designed to be deployed to Cloudflare Pages Functions. Create a Pages Functions project and deploy it by either connecting Functions to the GitHub repository or by using Wrangler (i.e., `wrangler pages deploy public`).
