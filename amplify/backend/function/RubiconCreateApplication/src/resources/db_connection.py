import boto3
import json
import pymysql

from amplify.backend.function.RubiconCreateApplication.src.resources.secrets import get_secret


class DatabaseConnection:
    _connection = None
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
            credentials = get_secret()

            cls._connection = pymysql.connect(
                host=credentials['host'],
                user=credentials['username'],
                password=credentials['password'],
                db='rubicon'
            )
        return cls._instance

    @staticmethod
    def get_secret(secret_name, region_name):
        session = boto3.session.Session()
        client = session.client(
            service_name='secretsmanager',
            region_name=region_name
        )

        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
        secret = get_secret_value_response['SecretString']
        return json.loads(secret)

    @classmethod
    def get_connection(cls):
        return cls._connection

    @classmethod
    def close_connection(cls):
        cls._connection.close()
        cls._instance = None

