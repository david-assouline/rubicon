import json
import uuid
from datetime import datetime

import pymysql

from resources.secrets import get_secret


def get_db_connection():
    credentials = get_secret()
    return pymysql.connect(
        host=credentials['host'],
        user=credentials['username'],
        password=credentials['password'],
        db='rubicon'
    )


def insert_create_application(json_data, policy_guid):
    connection = get_db_connection()
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


def process_create_application(trx_guid):
    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            sql = "UPDATE rubicon.TRANSACTION SET STATUS = 'Active' WHERE TRXGUID = %s"
            cursor.execute(sql, (trx_guid,))
            connection.commit()

    finally:
        connection.close()


def undo_create_application(trx_guid):
    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            sql = "UPDATE rubicon.TRANSACTION SET STATUS = 'Pending' WHERE TRXGUID = %s"
            cursor.execute(sql, (trx_guid,))
            connection.commit()

    finally:
        connection.close()
