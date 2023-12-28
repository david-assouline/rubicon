import json
import uuid
from datetime import datetime

from amplify.backend.function.RubiconCreateApplication.src.resources.db_connection import DatabaseConnection


def insert_create_application(status, json_data):

    db_connection = DatabaseConnection()
    connection = db_connection.get_connection()

    try:
        with connection.cursor() as cursor:
            guid = uuid.uuid4()
            current_utc_datetime = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")

            sql = "INSERT INTO rubicon.POLICY (POLICYGUID, CREATIONDATETIME, STATUS, JSONDATA) VALUES (%s, %s, %s, %s)"

            data = (guid, current_utc_datetime, status, json_data)

            cursor.execute(sql, data)

            connection.commit()

    finally:
        connection.close()


insert_create_application("22", '{"age": 30, "name": "John Doe", "skills": ["JavaScript", "React"]}')