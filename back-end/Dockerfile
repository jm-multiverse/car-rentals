FROM eclipse-temurin:17-jdk-alpine
RUN ./gradlew build
ARG JAR_FILE=./back-end/build/libs/back-end-latest.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]