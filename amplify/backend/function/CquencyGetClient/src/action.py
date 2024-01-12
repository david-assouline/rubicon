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


def search_clients_by_name(first_name, last_name):
    connection = get_db_connection()
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT * FROM cquency.CLIENT
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


print(search_clients_by_name("Ralph", "Edwards"))
