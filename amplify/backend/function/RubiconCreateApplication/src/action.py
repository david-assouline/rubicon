import json

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


def insert_create_application(data):
    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:

            sql = "INSERT INTO rubicon.TRANSACTION (TRXGUID, TRXNAME, TRXDATETIME, STATUS, JSONDATA, POLICYGUID) " \
                  "VALUES (%s, %s, %s, %s, %s, %s)"

            values = (
                data.get('trxGUID', ''),
                data.get('trxName', ''),
                data.get('trxDate', ''),
                data.get('trxStatus', ''),
                json.dumps({"name": "json", "notes": "this is a sample json"}),
                data.get('policyGUID', ''),
            )

            cursor.execute(sql, values)

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
