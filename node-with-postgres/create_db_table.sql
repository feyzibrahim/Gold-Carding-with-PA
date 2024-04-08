-- psql -U postgres -f "create_db_table.sql"

CREATE DATABASE dynamic_gold_carding_test;

\c dynamic_gold_carding_test;

CREATE TABLE IF NOT EXISTS cptCodes (
    cpt_code VARCHAR(10) PRIMARY KEY NOT NULL UNIQUE,
    description TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cptCodes (cpt_code, description, "createdAt", "updatedAt") VALUES
    ('10000', 'Edited', '2024-04-07T06:46:02.960Z', '2024-04-07T06:46:12.547Z'),
    ('12002', 'Simple wound repair', '2024-04-06T15:32:30.650Z', '2024-04-06T15:32:30.650Z'),
    ('83036', 'Hemoglobin A1C level', '2024-04-06T15:32:26.327Z', '2024-04-06T15:32:26.327Z'),
    ('93306', 'Echocardiography', '2024-04-06T15:32:21.478Z', '2024-04-06T15:32:21.478Z'),
    ('99214', 'Detailed office or other outpatient visit', '2024-04-06T15:32:12.647Z', '2024-04-06T15:32:12.647Z'),
    ('99213', 'Office or other outpatient visit', '2024-04-06T15:32:06.069Z', '2024-04-06T15:32:06.069Z');

CREATE TABLE IF NOT EXISTS providers (
  provider_id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  specialty VARCHAR(255) NOT NULL,
  approval_rate FLOAT,
  submission_volume INT,
  readmission_rate FLOAT,
  treatment_guideline_adherence FLOAT,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO providers (provider_id, name, specialty, approval_rate, submission_volume, readmission_rate, treatment_guideline_adherence, "createdAt", "updatedAt") VALUES 
    ('82286a8e-d74f-4150-aee9-882d707acc72', 'Dr. H', 'Ophthalmology', 1, 2, 0.08, 0.86, '2024-04-06T15:31:32.416Z', '2024-04-08T01:30:00.741Z'),
    ('5d4f4172-5e78-486e-a81c-38ea7c5fc00c', 'Dr. I', 'Psychiatry', 0, 2, 0.1, 0.88, '2024-04-06T15:31:37.586Z', '2024-04-08T01:30:00.755Z'),
    ('4e5b0aac-b659-4631-ba1f-5d6e843c918f', 'Dr. J', 'Rheumatology', 0.5, 2, 0.06, 0.98, '2024-04-06T15:31:43.664Z', '2024-04-08T01:30:00.757Z'),
    ('bd01a086-c808-4727-a24f-a815dfa19cc9', 'Dr. A', 'Cardiology', 0.67, 3, 0.02, 0.91, '2024-04-06T15:30:47.738Z', '2024-04-08T01:30:00.759Z'),
    ('6c1d7535-edab-4365-9865-acaabe89ed95', 'Dr. C', 'General Surgery', 0.67, 3, 0.02, 0.82, '2024-04-06T15:31:01.470Z', '2024-04-08T01:30:00.761Z'),
    ('d5da476f-bd57-46ee-b06d-a35d0d957f66', 'Dr. D', 'Orthopedics', 0.5, 2, 0.02, 0.8, '2024-04-06T15:31:08.686Z', '2024-04-08T01:30:00.763Z'),
    ('02191d7c-336f-49b5-a9c1-85fdd3183409', 'Dr. E', 'Pediatrics', 0.5, 2, 0.08, 0.96, '2024-04-06T15:31:15.223Z', '2024-04-08T01:30:00.764Z'),
    ('92be6359-95d9-4714-ba88-bb663541b082', 'Dr. F', 'Neurology', 0.5, 2, 0.1, 1, '2024-04-06T15:31:22.152Z', '2024-04-08T01:30:00.766Z'),
    ('c2419f4a-8156-4dd3-9cde-9d592506ecd6', 'Dr. G', 'Dermatology', 0.5, 2, 0.06, 0.93, '2024-04-06T15:31:27.859Z', '2024-04-08T01:30:00.768Z'),
    ('aa360bd3-c0f1-4192-9722-7894dd03ed7f', 'Dr. B', 'Endocrinology', 0.43, 7, 0.04, 0.86, '2024-04-06T15:30:54.200Z', '2024-04-08T01:30:00.770Z');

CREATE TABLE IF NOT EXISTS payers (
  payer_id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO payers (payer_id, name, description, "createdAt", "updatedAt") VALUES
    ('071c2cab-2608-4f68-9168-403494394ed4', 'HealthyLife Insurance', 'Nationwide health insurance provider offering a range of healthcare plans.', '2024-04-07T04:46:43.793Z', '2024-04-07T04:46:43.793Z'),
    ('05d9d9e0-8ac9-4660-9b48-e0c255678fbf', 'WellCare Insurance', 'A leading health insurance company focused on preventive care and wellness.', '2024-04-07T04:46:54.601Z', '2024-04-07T04:46:54.601Z'),
    ('6cfeb9a5-481f-49b7-84d7-0095d14410b3', 'BlueCross BlueShield', 'A well-established health insurance company with a wide network of healthcare providers.', '2024-04-07T17:39:35.006Z', '2024-04-07T17:39:35.006Z'),
    ('55aca8da-9bee-4bd3-8558-a343d461ce67', 'UnitedHealth Group', 'One of the largest health insurance companies offering a variety of health plans.', '2024-04-07T17:40:03.344Z', '2024-04-07T17:40:03.344Z'),
    ('52593ef0-145e-4854-a4de-8c5e868990f0', 'Cigna Corporation', 'A global health services company providing insurance and related products.', '2024-04-07T17:40:09.125Z', '2024-04-07T17:40:09.125Z'),
    ('d4b09b1b-9a84-47aa-9f91-c203262d3fbe', 'Aetna Inc.', 'A major health insurance company offering various healthcare plans and services.', '2024-04-07T17:40:14.052Z', '2024-04-07T17:40:14.052Z'),
    ('e35cce14-50af-476d-b48e-657bac2b319a', 'Kaiser Permanente', 'Integrated managed care consortium providing healthcare services and insurance.', '2024-04-07T17:40:19.388Z', '2024-04-07T17:40:19.388Z'),
    ('a898cdae-aa46-45ea-9576-efc3f95fcfe3', 'Anthem, Inc.', 'A leading health benefits company offering a wide range of insurance products.', '2024-04-07T17:40:25.578Z', '2024-04-07T17:40:25.578Z'),
    ('5ca97522-a2d6-4b6e-936d-fa5d15261e3b', 'Humana Inc.', 'A large health insurance company focusing on providing coordinated care and wellness programs.', '2024-04-07T17:40:30.783Z', '2024-04-07T17:40:30.783Z'),
    ('fbfcee12-978f-4a46-9bc7-0fa65e9208dc', 'Molina Healthcare', 'Healthcare organization providing Medicaid-related solutions and insurance.', '2024-04-07T17:40:35.844Z', '2024-04-07T17:40:35.844Z');

CREATE TABLE IF NOT EXISTS goldCardEvaluations (
  evaluation_id UUID PRIMARY KEY,
  provider_id UUID NOT NULL REFERENCES providers(provider_id),
  payer_id UUID NOT NULL REFERENCES payers(payer_id),
  evaluation_criteria JSONB NOT NULL,
  gold_carding_level VARCHAR(50) NOT NULL,
  remarks TEXT,
  evaluation_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO goldCardEvaluations (evaluation_id, provider_id, payer_id, evaluation_criteria, gold_carding_level, remarks, evaluation_date)
VALUES (
  'aa96118a-3739-44a2-8354-ae805aceb8f1',
  'aa360bd3-c0f1-4192-9722-7894dd03ed7f',
  '071c2cab-2608-4f68-9168-403494394ed4',
  '[
    {"value": 95, "metric": "approval_rate", "criteria": "Providers must have an approval rate of 95% or higher for all PA requests over the past 12 months.", "meets_criteria": true},
    {"value": 90, "metric": "treatment_guideline_adherence", "criteria": "Providers must demonstrate 90% adherence to treatment guidelines for chronic conditions.", "meets_criteria": true},
    {"value": 90, "metric": "readmission_rate", "criteria": "Must be higher than 90", "meets_criteria": true},
    {"value": 100, "metric": "submission_volume", "criteria": "Must be higher than 90", "meets_criteria": true}
  ]',
  'Advanced',
  'Sample remarks',
  '2024-04-08T00:51:05.229Z'
);

CREATE TABLE IF NOT EXISTS goldCardingCriteria (
  criteria_id VARCHAR(255) PRIMARY KEY,
  level VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  metric VARCHAR(255) NOT NULL,
  threshold FLOAT NOT NULL,
  measurement_period_months INTEGER NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO goldCardingCriteria (criteria_id, level, description, metric, threshold, measurement_period_months, "createdAt", "updatedAt")
VALUES
('basic_approval_rate', 'Basic', 'Approval Rate >= 90%', 'approval_rate', 0.9, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('basic_submission_volume', 'Basic', 'Submission Volume >= 50 requests in 12 months', 'submission_volume', 50, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('basic_readmission_rate', 'Basic', 'Readmission Rate <= 10% within 30 days', 'readmission_rate', 0.1, 1, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('basic_guideline_adherence', 'Basic', 'Adherence to Treatment Guidelines >= 80%', 'treatment_guideline_adherence', 0.8, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('advanced_approval_rate', 'Advanced', 'Approval Rate >= 95%', 'approval_rate', 0.95, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('advanced_submission_volume', 'Advanced', 'Submission Volume >= 100 requests in 12 months', 'submission_volume', 100, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('advanced_readmission_rate', 'Advanced', 'Readmission Rate <= 5% within 30 days', 'readmission_rate', 0.05, 1, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('advanced_guideline_adherence', 'Advanced', 'Adherence to Treatment Guidelines >= 90%', 'treatment_guideline_adherence', 0.9, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('premier_approval_rate', 'Premier', 'Approval Rate >= 98%', 'approval_rate', 0.98, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('premier_submission_volume', 'Premier', 'Submission Volume >= 200 requests in 12 months', 'submission_volume', 200, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('premier_readmission_rate', 'Premier', 'Readmission Rate <= 2% within 30 days', 'readmission_rate', 0.02, 1, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z'),
('premier_guideline_adherence', 'Premier', 'Adherence to Treatment Guidelines >= 95%', 'treatment_guideline_adherence', 0.95, 12, '2024-04-07T18:57:51.352Z', '2024-04-07T18:57:51.352Z');

CREATE TABLE IF NOT EXISTS goldCardingRule (
    rule_id UUID PRIMARY KEY,
    payer_id UUID NOT NULL REFERENCES payers(payer_id),
    description VARCHAR(255) NOT NULL,
    metric VARCHAR(255) NOT NULL,
    threshold VARCHAR(255) NOT NULL,
    measurement_period_months INT NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO goldCardingRule (rule_id, payer_id, description, metric, threshold, measurement_period_months, "createdAt", "updatedAt")
VALUES
    ('35c16a2d-1207-41b5-bca9-39e32e2ec2b6', '071c2cab-2608-4f68-9168-403494394ed4', 'Providers must have an approval rate of 95% or higher for all PA requests over the past 12 months.', 'approval_rate', '95', 12, '2024-04-07T10:27:22.263Z', '2024-04-07T10:27:22.263Z'),
    ('5e5d8f71-9da4-4e5c-869c-dd6337b79626', '05d9d9e0-8ac9-4660-9b48-e0c255678fbf', 'Providers must have submitted at least 100 PA requests in the past 12 months.', 'submission_volume', '100', 12, '2024-04-07T10:27:57.664Z', '2024-04-07T10:27:57.664Z'),
    ('97835a57-4486-4fe1-ae3b-71e264df19b5', '071c2cab-2608-4f68-9168-403494394ed4', 'Providers must demonstrate 90% adherence to treatment guidelines for chronic conditions.', 'treatment_guideline_adherence', '90', 12, '2024-04-07T10:28:26.438Z', '2024-04-07T20:59:22.179Z'),
    ('061f943e-ec86-414e-a5f3-0e0936c695dc', '071c2cab-2608-4f68-9168-403494394ed4', 'Must be higher than 90', 'readmission_rate', '90', 1, '2024-04-07T21:01:32.266Z', '2024-04-07T21:01:32.266Z'),
    ('affcb2c6-70b5-4a5f-bc67-fac73b2b202b', '071c2cab-2608-4f68-9168-403494394ed4', 'Must be higher than 90', 'submission_volume', '100', 12, '2024-04-07T21:01:57.589Z', '2024-04-07T21:02:19.280Z');

CREATE TABLE IF NOT EXISTS "priorAuthorizationRequests" (
    request_id UUID PRIMARY KEY,
    description TEXT NOT NULL,
    provider_id UUID NOT NULL,
    payer_id UUID NOT NULL,
    cpt_code VARCHAR(10) NOT NULL,
    metric VARCHAR,
    approval_status BOOLEAN,
    denial_reason VARCHAR,
    auto_approval BOOLEAN,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (provider_id) REFERENCES providers(provider_id),
    FOREIGN KEY (payer_id) REFERENCES payers(payer_id)
);


INSERT INTO "priorAuthorizationRequests" (request_id, description, provider_id, payer_id, cpt_code, metric, approval_status, denial_reason, "createdAt", "updatedAt")
VALUES 
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a67', 'Consultation for patient evaluation', 'bd01a086-c808-4727-a24f-a815dfa19cc9', '071c2cab-2608-4f68-9168-403494394ed4', '99213', '45', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a68', 'Laboratory tests for diagnosis', 'aa360bd3-c0f1-4192-9722-7894dd03ed7f', '05d9d9e0-8ac9-4660-9b48-e0c255678fbf', '99214', '62', false, 'Denied due to prior authorization requirements', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a69', 'MRI scan for injury assessment', '6c1d7535-edab-4365-9865-acaabe89ed95', '6cfeb9a5-481f-49b7-84d7-0095d14410b3', '93306', '78', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6a', 'Physical therapy sessions', 'd5da476f-bd57-46ee-b06d-a35d0d957f66', '55aca8da-9bee-4bd3-8558-a343d461ce67', '83036', '32', false, 'Denied due to medical necessity not established', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6b', 'Prescription medication refill', '02191d7c-336f-49b5-a9c1-85fdd3183409', '52593ef0-145e-4854-a4de-8c5e868990f0', '12002', '53', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6c', 'Surgical procedure for treatment', '92be6359-95d9-4714-ba88-bb663541b082', 'd4b09b1b-9a84-47aa-9f91-c203262d3fbe', '99213', '81', false, 'Denied due to pre-existing condition', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6d', 'X-ray imaging for fracture diagnosis', 'c2419f4a-8156-4dd3-9cde-9d592506ecd6', 'e35cce14-50af-476d-b48e-657bac2b319a', '99214', '68', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6e', 'Dental check-up and cleaning', '82286a8e-d74f-4150-aee9-882d707acc72', 'a898cdae-aa46-45ea-9576-efc3f95fcfe3', '93306', '79', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6f', 'Physical examination for annual check-up', '5d4f4172-5e78-486e-a81c-38ea7c5fc00c', '5ca97522-a2d6-4b6e-936d-fa5d15261e3b', '83036', '38', false, 'Denied due to coverage limits', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a70', 'Blood tests for cholesterol levels', '4e5b0aac-b659-4631-ba1f-5d6e843c918f', 'fbfcee12-978f-4a46-9bc7-0fa65e9208dc', '99213', '50', false, 'Denied due to missing information', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a71', 'Ultrasound scan for abdominal pain', 'bd01a086-c808-4727-a24f-a815dfa19cc9', '071c2cab-2608-4f68-9168-403494394ed4', '99214', '72', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a72', 'Consultation for follow-up care', 'aa360bd3-c0f1-4192-9722-7894dd03ed7f', '05d9d9e0-8ac9-4660-9b48-e0c255678fbf', '93306', '82', false, 'Denied due to incorrect diagnosis', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a73', 'MRI scan for brain tumor assessment', '6c1d7535-edab-4365-9865-acaabe89ed95', '6cfeb9a5-481f-49b7-84d7-0095d14410b3', '83036', '90', false, 'Denied due to lack of medical necessity', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a74', 'Physical therapy sessions for rehabilitation', 'd5da476f-bd57-46ee-b06d-a35d0d957f66', '55aca8da-9bee-4bd3-8558-a343d461ce67', '12002', '40', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a75', 'Prescription medication for pain relief', '02191d7c-336f-49b5-a9c1-85fdd3183409', '52593ef0-145e-4854-a4de-8c5e868990f0', '99213', '61', false, 'Denied due to non-coverage', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a76', 'Laboratory tests for infection diagnosis', '92be6359-95d9-4714-ba88-bb663541b082', 'd4b09b1b-9a84-47aa-9f91-c203262d3fbe', '93306', '88', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a77', 'Surgical procedure for appendectomy', 'c2419f4a-8156-4dd3-9cde-9d592506ecd6', 'e35cce14-50af-476d-b48e-657bac2b319a', '99214', '41', false, 'Denied due to lack of pre-authorization', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days');


CREATE TABLE IF NOT EXISTS "goldCardingCriteria" (
    criteria_id VARCHAR(50) PRIMARY KEY,
    level VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    metric VARCHAR(50) NOT NULL,
    threshold DECIMAL NOT NULL,
    measurement_period_months INT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "goldCardingCriteria" (criteria_id, level, description, metric, threshold, measurement_period_months, "createdAt", "updatedAt")
VALUES 
    ('basic_approval_rate', 'Basic', 'Approval Rate >= 90%', 'approval_rate', 0.90, 12, NOW(), NOW()),
    ('basic_submission_volume', 'Basic', 'Submission Volume >= 50 requests in 12 months', 'submission_volume', 50, 12, NOW(), NOW()),
    ('basic_readmission_rate', 'Basic', 'Readmission Rate <= 10% within 30 days', 'readmission_rate', 0.10, 1, NOW(), NOW()),
    ('basic_guideline_adherence', 'Basic', 'Adherence to Treatment Guidelines >= 80%', 'treatment_guideline_adherence', 0.80, 12, NOW(), NOW()),
    ('advanced_approval_rate', 'Advanced', 'Approval Rate >= 95%', 'approval_rate', 0.95, 12, NOW(), NOW()),
    ('advanced_submission_volume', 'Advanced', 'Submission Volume >= 100 requests in 12 months', 'submission_volume', 100, 12, NOW(), NOW()),
    ('advanced_readmission_rate', 'Advanced', 'Readmission Rate <= 5% within 30 days', 'readmission_rate', 0.05, 1, NOW(), NOW()),
    ('advanced_guideline_adherence', 'Advanced', 'Adherence to Treatment Guidelines >= 90%', 'treatment_guideline_adherence', 0.90, 12, NOW(), NOW()),
    ('premier_approval_rate', 'Premier', 'Approval Rate >= 98%', 'approval_rate', 0.98, 12, NOW(), NOW()),
    ('premier_submission_volume', 'Premier', 'Submission Volume >= 200 requests in 12 months', 'submission_volume', 200, 12, NOW(), NOW()),
    ('premier_readmission_rate', 'Premier', 'Readmission Rate <= 2% within 30 days', 'readmission_rate', 0.02, 1, NOW(), NOW()),
    ('premier_guideline_adherence', 'Premier', 'Adherence to Treatment Guidelines >= 95%', 'treatment_guideline_adherence', 0.95, 12, NOW(), NOW());

CREATE TABLE IF NOT EXISTS providerGoldCardingStatus (
    status_id UUID PRIMARY KEY,
    provider_id UUID NOT NULL,
    payer_id UUID NOT NULL,
    criteria_met BOOLEAN NOT NULL,
    gold_carding_level VARCHAR NOT NULL,
    valid_from TIMESTAMP WITH TIME ZONE NOT NULL,
    valid_until TIMESTAMP WITH TIME ZONE NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (provider_id) REFERENCES providers(provider_id),
    FOREIGN KEY (payer_id) REFERENCES payers(payer_id)
);

INSERT INTO providerGoldCardingStatus (status_id, provider_id, payer_id, criteria_met, gold_carding_level, valid_from, valid_until, "createdAt", "updatedAt")
VALUES 
    ('c1830052-765d-41ed-a661-6fa9c8d605b3', 'aa360bd3-c0f1-4192-9722-7894dd03ed7f', '071c2cab-2608-4f68-9168-403494394ed4', true, 'Advanced', '2024-04-08T00:51:05.210Z', '2024-05-08T00:51:05.210Z', '2024-04-08T00:51:05.212Z', '2024-04-08T00:51:05.212Z');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10),
    payer_id UUID REFERENCES payers(payer_id),
    provider_id UUID REFERENCES providers(provider_id),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password, role, payer_id, "createdAt", "updatedAt")
VALUES ('WellCare Insurance', 'wellcare@gmail.com', 'Payer@1234', 'payer', '05d9d9e0-8ac9-4660-9b48-e0c255678fbf', NOW(), NOW());

INSERT INTO users (name, email, password, role, payer_id, "createdAt", "updatedAt")
VALUES ('HealthyLife Insurance', 'healthylife@gmail.com', 'Payer@1234', 'payer', '071c2cab-2608-4f68-9168-403494394ed4', NOW(), NOW());

INSERT INTO users (name, email, password, role, "createdAt", "updatedAt")
VALUES ('Admin', 'admin@gmail.com', 'Admin@1234', 'admin', NOW(), NOW());

INSERT INTO users (name, email, password, role, provider_id, "createdAt", "updatedAt")
VALUES ('Dr. A', 'dra@gmail.com', 'Provider@1234', 'provider', 'bd01a086-c808-4727-a24f-a815dfa19cc9', NOW(), NOW());

INSERT INTO users (name, email, password, role, provider_id, "createdAt", "updatedAt")
VALUES ('Dr. B', 'drb@gmail.com', 'Provider@1234', 'provider', 'aa360bd3-c0f1-4192-9722-7894dd03ed7f', NOW(), NOW());
