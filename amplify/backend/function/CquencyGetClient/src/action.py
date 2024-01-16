import pymysql
import json
from datetime import date, datetime

from resources.secrets import get_secret


def default_converter(o):
    if isinstance(o, (datetime, date)):
        return o.isoformat()
    raise TypeError("Object of type '%s' is not JSON serializable" % type(o).__name__)


def get_db_connection():
    credentials = get_secret()
    return pymysql.connect(
        host=credentials['host'],
        user=credentials['username'],
        password=credentials['password'],
        db='rubicon'
    )


def search_clients_by_client_id(client_id):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT * FROM cquency.CLIENT
                WHERE ClientID = %s;
            """
            cursor.execute(sql, (client_id,))
            result = cursor.fetchall()
            return json.dumps(result, default=default_converter)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()


def search_clients_by_individual_name(first_name, last_name):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT * 
                FROM cquency.CLIENT 
                WHERE FirstName LIKE CONCAT('%%', %s, '%%')
                AND LastName LIKE CONCAT('%%', %s, '%%');
            """
            cursor.execute(sql, (first_name, last_name))
            result = cursor.fetchall()
            return json.dumps(result, default=default_converter)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()


def search_clients_by_company_name(company_name):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT * FROM cquency.CLIENT
                WHERE CompanyName LIKE CONCAT('%%', %s, '%%');
            """
            cursor.execute(sql, (company_name,))
            result = cursor.fetchall()
            return json.dumps(result, default=default_converter)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()


def search_clients_by_group_name(group_name):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT * FROM cquency.CLIENT
                WHERE GroupName LIKE CONCAT('%%', %s, '%%');
            """
            cursor.execute(sql, (group_name,))
            result = cursor.fetchall()
            return json.dumps(result, default=default_converter)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()


def get_client_details_by_client_guid(client_guid):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT * FROM cquency.CLIENTDETAIL
                WHERE ClientGUID = %s;
            """
            cursor.execute(sql, (client_guid,))
            result = cursor.fetchall()
            return json.dumps(result, default=default_converter)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()


def get_address_details_by_client_guid(client_guid):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT *
                FROM cquency.ADDRESSDETAIL
                JOIN cquency.ADDRESS ON ADDRESS.ADDRESSGUID = ADDRESSDETAIL.ADDRESSGUID
                WHERE ADDRESS.ClientGUID = %s;
            """
            cursor.execute(sql, (client_guid,))
            result = cursor.fetchall()
            return json.dumps(result, default=default_converter)
    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()
