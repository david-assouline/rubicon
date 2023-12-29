import json

from resources.db_connection import DatabaseConnection


def get_policy_transactions(policy_guid):
    db_connection = DatabaseConnection()
    connection = db_connection.get_connection()

    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM rubicon.TRANSACTION WHERE POLICYGUID = %s"

            data = policy_guid

            cursor.execute(sql, data)
            result = cursor.fetchall()

            # Convert the result to JSON
            json_result = json.dumps(result)

    finally:
        connection.close()
        return json_result
