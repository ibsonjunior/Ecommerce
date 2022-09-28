FROM openjdk:17.0.2-jdk
WORKDIR /app
EXPOSE 9000
COPY ./target/ecommerce-0.0.1-SNAPSHOT.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
#"-Dspring.profiles.active=docker",

