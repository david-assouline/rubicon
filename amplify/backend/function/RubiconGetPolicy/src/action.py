import pymysql
import json

from resources.secrets import get_secret


def get_db_connection():
    credentials = get_secret()
    return pymysql.connect(
        host=credentials['host'],
        user=credentials['username'],
        password=credentials['password'],
        db='rubicon'
    )


def get_policy_transactions(policy_guid):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = "SELECT * FROM rubicon.TRANSACTION WHERE POLICYGUID= %s ORDER BY TRXDATETIME DESC"
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            return json.dumps(result)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()


def get_policy_transactions_between_dates(policy_guid, start_date, end_date):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = "SELECT * FROM rubicon.TRANSACTION WHERE POLICYGUID = %s AND TRXDATETIME BETWEEN %s AND %s ORDER BY TRXDATETIME DESC"
            cursor.execute(sql, (policy_guid, start_date, end_date))
            result = cursor.fetchall()
            return json.dumps(result)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()
