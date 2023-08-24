FROM eclipse-temurin:17-jdk-alpine
# ARG JAR_FILE=./build/libs/back-end-latest.jar
COPY ./back-end/build/libs/back-end-latest.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]