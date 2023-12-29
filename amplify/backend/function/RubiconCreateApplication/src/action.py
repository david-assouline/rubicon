import json
import uuid
from datetime import datetime

from amplify.backend.function.RubiconCreateApplication.src.resources.db_connection import DatabaseConnection


def insert_create_application(json_data, policy_guid):
    db_connection = DatabaseConnection()
    connection = db_connection.get_connection()

    try:
        with connection.cursor() as cursor:
            guid = uuid.uuid4()
            current_utc_datetime = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")

            sql = "INSERT INTO rubicon.TRANSACTION (TRXGUID, TRXNAME, TRXDATETIME, STATUS, JSONDATA, POLICYGUID) " \
                  "VALUES (%s, %s, %s, %s, %s, %s)"

            data = (guid, "CreateApplication", current_utc_datetime, "pending", json_data, policy_guid)

            cursor.execute(sql, data)

            connection.commit()

    finally:
        connection.close()


# 38d76f58-bcf9-457f-b210-bef7daf4bc1f

insert_create_application(
    '{"age": 30, "name": "John Doe", "skills": ["JavaScript", "React"]}',
    '38d76f58-bcf9-457f-b210-bef7daf4bc1f')
