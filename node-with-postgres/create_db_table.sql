-- psql -U postgres -d dynamic_gold_carding_db -f "create_db_table.sql"

CREATE DATABASE dynamic_gold_carding_db;

\c dynamic_gold_carding_db;

INSERT INTO "priorAuthorizationRequests" (request_id, description, provider_id, payer_id, cpt_code, metric, approval_status, denial_reason, "createdAt", "updatedAt")
VALUES 
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a67', 'Consultation for patient evaluation', 'bd01a086-c808-4727-a24f-a815dfa19cc9', '071c2cab-2608-4f68-9168-403494394ed4', '99213', '45', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a68', 'Laboratory tests for diagnosis', 'aa360bd3-c0f1-4192-9722-7894dd03ed7f', '05d9d9e0-8ac9-4660-9b48-e0c255678fbf', '99214', '62', false, 'Denied due to prior authorization requirements', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a69', 'MRI scan for injury assessment', '6c1d7535-edab-4365-9865-acaabe89ed95', '6cfeb9a5-481f-49b7-84d7-0095d14410b3', '93306', '78', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6a', 'Physical therapy sessions', 'd5da476f-bd57-46ee-b06d-a35d0d957f66', '55aca8da-9bee-4bd3-8558-a343d461ce67', '83036', '32', false, 'Denied due to medical necessity not established', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6b', 'Prescription medication refill', '02191d7c-336f-49b5-a9c1-85fdd3183409', '52593ef0-145e-4854-a4de-8c5e868990f0', '12002', '53', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a6c', 'Surgical procedure for treatment', '92be6359-95d9-4714-ba88-bb663541b082', 'd4b09b1b-9a84-47aa-9f91-c203262d3fbe', '99213', '81', false, 'Denied due to pre-existing condition', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days')
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
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a77', 'Surgical procedure for appendectomy', 'c2419f4a-8156-4dd3-9cde-9d592506ecd6', 'e35cce14-50af-476d-b48e-657bac2b319a', '99214', '41', false, 'Denied due to lack of pre-authorization', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a78', 'Physical examination for pre-employment check', '82286a8e-d74f-4150-aee9-882d707acc72', 'a898cdae-aa46-45ea-9576-efc3f95fcfe3', '93306', '67', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a79', 'Blood tests for diabetes monitoring', '5d4f4172-5e78-486e-a81c-38ea7c5fc00c', '5ca97522-a2d6-4b6e-936d-fa5d15261e3b', '12002', '73', false, 'Denied due to prior authorization requirements', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a7a', 'MRI scan for spinal cord injury assessment', '4e5b0aac-b659-4631-ba1f-5d6e843c918f', 'fbfcee12-978f-4a46-9bc7-0fa65e9208dc', '99213', '85', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a7b', 'Physical therapy sessions for sports injury', 'bd01a086-c808-4727-a24f-a815dfa19cc9', '071c2cab-2608-4f68-9168-403494394ed4', '99214', '60', false, 'Denied due to incorrect coding', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a7c', 'Consultation for specialist referral', 'aa360bd3-c0f1-4192-9722-7894dd03ed7f', '05d9d9e0-8ac9-4660-9b48-e0c255678fbf', '93306', '79', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days'),
    ('4e8fd8b7-fcc5-43cf-8e13-1480175b8a7d', 'Blood tests for anemia diagnosis', '6c1d7535-edab-4365-9865-acaabe89ed95', '6cfeb9a5-481f-49b7-84d7-0095d14410b3', '83036', '77', true, '', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days', CURRENT_DATE - INTERVAL '1 month' + RANDOM() * INTERVAL '30 days');

CREATE TABLE gold_carding_criteria (
    criteria_id STRING PRIMARY KEY,
    level VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    metric VARCHAR(50) NOT NULL,
    threshold DECIMAL NOT NULL,
    measurement_period_months INT NOT NULL
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
