# ReactJS and Spring Data REST - Gallery CMS
![Java CI](https://github.com/vzhyhunou/gallery-cms/actions/workflows/deploy.yml/badge.svg)
## About
This project is simple example of e-commerce landing page design based on [vzh-cms](https://github.com/vzhyhunou/vzh-cms) and demonstrate how to extend base model and functionality to be able to manage any product catalogs.

## Tech stack and libraries
- ReactJS
- React-admin
- React Router
- Material-UI
- ViteJS
- Jest

## Getting Started
### Running
- Download and install JDK 1.8
- Build the project: `./mvnw clean install`
- Run created JAR: `java -jar target/gallery-cms-0.0.1-SNAPSHOT-exec.jar`
### Usage
- Home page: http://localhost:8092
- Admin console: http://localhost:8092/pages, use `admin`, `editor`, `manager` as username and password

This code uses Fake Rest as data provider that means it has no backend implementation.
So keep in mind that all data updates store in memory and will be re-initialized once page reload.
