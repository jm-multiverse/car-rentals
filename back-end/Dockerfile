FROM eclipse-temurin:17-jdk-alpine
ARG JAR_FILE=./back-end/build/libs/back-end-latest.jar
COPY ${JAR_FILE} /back-end/app.jar
ENTRYPOINT ["java", "-jar", "/back-end/app.jar"]