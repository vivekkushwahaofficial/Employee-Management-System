# Stage 1: Build the application using a Maven/JDK image
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Stage 2: Create a minimal runtime image (Fixed the tag here)
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy only the compiled jar from the build stage
COPY --from=build /app/target/ems-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
# Run the application directly
ENTRYPOINT ["java", "-jar", "app.jar"]