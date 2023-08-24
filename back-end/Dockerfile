# Use a multi-stage build to build the application inside the Docker container
FROM gradle:7.2.0-jdk11 AS build
COPY ./back-end /app
WORKDIR /app
RUN ./gradlew build

FROM eclipse-temurin:17-jdk-alpine
ARG JAR_FILE=./back-end/build/libs/back-end-latest.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]