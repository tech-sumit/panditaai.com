CREATE TABLE IF NOT EXISTS interest_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  legal_name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  hardware_stack TEXT,
  sim TEXT,
  nda TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS investor_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  investor_name TEXT NOT NULL,
  firm_fund TEXT NOT NULL,
  message_conviction TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  identity_name TEXT NOT NULL,
  encrypted_email TEXT NOT NULL,
  transmission_packet TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
