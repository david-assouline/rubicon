import json
import pymysql
from datetime import date, datetime
from resources.database import get_db_connection


def default_converter(o):
    if isinstance(o, (datetime, date)):
        return o.isoformat()
    raise TypeError("Object of type '%s' is not JSON serializable" % type(o).__name__)


def get_widget_data_policy_number(policy_guid):
    connection = get_db_connection()
    response = {}
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = "SELECT * FROM cquency.POLICYDETAIL WHERE PolicyGUID = %s"
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()

            for item in result:
                if item["TextValue"] is not None:
                    response[item["DisplayName"]] = item["TextValue"]
                elif item["FloatValue"] is not None:
                    response[item["DisplayName"]] = item["FloatValue"]
                elif item["DateValue"] is not None:
                    response[item["DisplayName"]] = item["DateValue"]

    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()
        return json.dumps(response, default=default_converter)

