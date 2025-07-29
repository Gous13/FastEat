import sqlite3
from models import CREATE_USERS_TABLE

DB_NAME = "database.db"

conn = sqlite3.connect(DB_NAME)
cursor = conn.cursor()

# ✅ Create Users Table
cursor.execute(CREATE_USERS_TABLE)

conn.commit()
conn.close()

print("✅ Database initialized successfully!")
