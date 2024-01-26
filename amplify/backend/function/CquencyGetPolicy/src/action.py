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


def get_data_for_policy_widgets(policy_guid):
    connection = get_db_connection()
    response = {}
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = "SELECT PolicyNumber FROM cquency.POLICY WHERE PolicyGUID = %s"
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

            sql = "SELECT Status FROM cquency.POLICY WHERE PolicyGUID = %s"
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

            sql = """
            SELECT Concat(cquency.PRODUCT.ProductNameShort , ' - ' , cquency.PLAN.PlanNameShort) as 'Product' 
            FROM cquency.POLICY
            JOIN cquency.PLAN ON cquency.PLAN.PLanGUID = cquency.POLICY.PLanGUID
            JOIN cquency.PRODUCT ON cquency.PLAN.ProductGUID = cquency.PRODUCT.ProductGUID
            WHERE POLICY.PolicyGUID = %s
            """
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

            sql = """
            SELECT COUNT(*) as 'Coverages' FROM  cquency.COVERAGE
            JOIN cquency.POLICY  on cquency.POLICY.PolicyGUID = cquency.COVERAGE.PolicyGUID
            WHERE COVERAGE.PolicyGUID = %s
            """
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

            sql = """
            SELECT FloatValue as 'TotalPremiumAmount' FROM cquency.POLICYDETAIL 
            WHERE FieldName = 'TotalPremiumAmount' AND PolicyGUID = %s
            """
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

            sql = """
            SELECT FloatValue as 'CashValue' FROM cquency.POLICYDETAIL WHERE FieldName = 'CashValue' AND PolicyGUID = %s
            """
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

            sql = """
            SELECT COUNT(*) as 'RolesCount' FROM cquency.ROLE WHERE PolicyGUID = %s
            """
            cursor.execute(sql, (policy_guid,))
            result = cursor.fetchall()
            response.update(result[0])

    except Exception as e:
        print(f"An error occurred: {e}")
        return json.dumps({'error': str(e)})
    finally:
        connection.close()
        return json.dumps(response)
