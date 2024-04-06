import request from "supertest";
import app from "../src/app";

describe("POST /api/auth/login", () => {
  it("should return status 200 and name on successful login", async () => {
    // Define login credentials
    const loginCredentials = {
      email: "admin@gmail.com",
      password: "Admin@1234",
    };

    // Send a POST request to the login endpoint with login credentials
    const response = await request(app)
      .post("/api/auth/login")
      .send(loginCredentials);

    // Assertions
    expect(response.status).toBe(200); // Check if status is 200 OK
    expect(response.body).toHaveProperty("name"); // Check if response contains a token
  });

  it("should return status 401 for invalid credentials", async () => {
    // Define invalid login credentials
    const invalidCredentials = {
      email: "invalid@example.com",
      password: "invalidPassword",
    };

    // Send a POST request to the login endpoint with invalid credentials
    const response = await request(app)
      .post("/api/auth/login")
      .send(invalidCredentials);

    // Assertions
    expect(response.status).toBe(400); // Check if status is 400 Unauthorized
  });
});
