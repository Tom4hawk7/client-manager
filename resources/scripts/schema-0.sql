CREATE TABLE IF NOT EXISTS Client (
    id INTEGER,
    name TEXT,
    dob TEXT,
    address TEXT,
    school TEXT,
    p_number TEXT,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS Parent (
    id INTEGER,
    name TEXT,
    email TEXT,
    phone TEXT,
    FOREIGN KEY ("id") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS Plan (
    id INTEGER,
    start_date TEXT,
    end_date TEXT,
    budget REAL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("id") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS PlanManager (
    id INTEGER,
    name TEXT,
    email TEXT,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("id") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS Service (
    id INTEGER,
    date TEXT,
    description TEXT,
    item_number TEXT,
    minutes INT,
    unit_price REAL,
    client_id INT NOT NULL,
    FOREIGN KEY ("client_id") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS Invoice (
    id integer primary key AUTOINCREMENT
);


CREATE INDEX IF NOT EXISTS idx_client_name
ON Client(name);

CREATE INDEX IF NOT EXISTS idx_service_client_id
ON Service (client_id);

CREATE INDEX IF NOT EXISTS idx_service_search
ON Service (client_id, date, description);


CREATE VIEW IF NOT EXISTS
  VTable AS
SELECT
  Client.id,
  Client.name client_name,
  Client.address client_address,
  Client.school client_school,
  Parent.name AS parent_name,
  Parent.phone AS parent_phone
FROM
  Client
  INNER JOIN Parent ON Client.id = Parent.id;

CREATE VIEW IF NOT EXISTS
  VForm AS
SELECT
  Client.id,
  Client.name AS client_name,
  Client.dob AS client_dob,
  Client.address AS client_address,
  Client.school AS client_school,
  Client.p_number AS client_p_number,
  Parent.name AS parent_name,
  Parent.email AS parent_email,
  Parent.phone AS parent_phone,
  Plan.start_date AS plan_start_date,
  Plan.end_date AS plan_end_date,
  Plan.budget AS plan_budget,
  PlanManager.name AS planmanager_name,
  PlanManager.email AS planmanager_email
FROM
  Client
  INNER JOIN Parent ON Client.id = Parent.id
  INNER JOIN Plan ON Client.id = Plan.id
  INNER JOIN PlanManager ON Client.id = PlanManager.id;