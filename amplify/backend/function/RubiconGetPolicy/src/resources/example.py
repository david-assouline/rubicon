from resources.db_connection import DatabaseConnection

db_connection = DatabaseConnection()
connection = db_connection.get_connection()

# Select
# try:
#     with connection.cursor() as cursor:
#         sql = "SELECT * FROM POLICY"
#         cursor.execute(sql)
#         results = cursor.fetchall()
#         for result in results:
#             print(result)
# finally:
#     connection.close()

# Insert
# try:
#     with connection.cursor() as cursor:
#         guid = uuid.uuid4()
#         current_utc_datetime = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
#         sql = "INSERT INTO rubicon.POLICY (POLICYGUID, CREATIONDATETIME, STATUS, JSONDATA) VALUES (%s, %s, %s, %s)"
#         data = (guid, current_utc_datetime, status, json_data)
#         cursor.execute(sql, data)
#         connection.commit()
# finally:
#     connection.close()
