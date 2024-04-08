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

describe("CRUD on /api/cptCode", () => {
  const dummyData = { cpt_code: "999999", description: "Test Data" };

  it("GET all cptCodes, should return 200", async () => {
    const response = await request(app).get("/api/cptCode");
    expect(response.status).toBe(200);
  });

  it("POST cptCodes, should return status 201 on success", async () => {
    const response = await request(app).post("/api/cptCode").send(dummyData);
    expect(response.status).toBe(201);
  });

  it("GET single cptCodes, should return status 200 and cpt_code on successful", async () => {
    const response = await request(app).get(
      `/api/cptCode/${dummyData.cpt_code}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("description");
  });

  it("DELETE cptCodes, should return status 200 and cpt_code on successful", async () => {
    const response = await request(app).delete(
      `/api/cptCode/${dummyData.cpt_code}`
    );

    expect(response.status).toBe(200);
  });
});

describe("CRUD on /api/goldCardingCriteria", () => {
  const dummyData = {
    criteria_id: "test",
    level: "TTTTT",
    description: "Approval Rate >= 90%",
    metric: "approval_rate",
    threshold: 0.9,
    measurement_period_months: 12,
  };

  it("GET all goldCardingCriteria, should return 200", async () => {
    const response = await request(app).get("/api/goldCardingCriteria");
    expect(response.status).toBe(200);
  });

  it("POST goldCardingCriteria, should return status 201 on success", async () => {
    const response = await request(app)
      .post("/api/goldCardingCriteria")
      .send(dummyData);
    expect(response.status).toBe(201);
  });

  it("GET single goldCardingCriteria, should return status 200", async () => {
    const response = await request(app).get(
      `/api/goldCardingCriteria/${dummyData.criteria_id}`
    );

    expect(response.status).toBe(200);
  });

  it("DELETE goldCardingCriteria, should return status 200", async () => {
    const response = await request(app).delete(
      `/api/goldCardingCriteria/${dummyData.criteria_id}`
    );

    expect(response.status).toBe(200);
  });
});

describe("CRUD on /api/goldCardingRule", () => {
  const dummyData = {
    payer_id: "071c2cab-2608-4f68-9168-403494394ed4",
    description:
      "Providers must demonstrate 90% adherence to treatment guidelines for chronic conditions.",
    metric: "guideline_adherence",
    threshold: "90",
    measurement_period_months: "12",
  };

  let data: any;

  it("GET all goldCardingRule, should return 200", async () => {
    const response = await request(app).get("/api/goldCardingRule");

    expect(response.status).toBe(200);
  });

  it("POST goldCardingRule, should return status 201 on success", async () => {
    const response = await request(app)
      .post("/api/goldCardingRule")
      .send(dummyData);
    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
    data = response.body;
  });

  it("GET single goldCardingRule, should return status 200", async () => {
    const response = await request(app).get(
      `/api/goldCardingRule/${data.rule_id}`
    );

    expect(response.status).toBe(200);
  });

  it("DELETE goldCardingRule, should return status 200", async () => {
    const response = await request(app).delete(
      `/api/goldCardingRule/${data.rule_id}`
    );

    expect(response.status).toBe(200);
  });
});
