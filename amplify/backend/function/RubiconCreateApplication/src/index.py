import json

from action import process_create_application, undo_create_application, insert_create_application


def handler(event, context):
    print('received event:')
    print(event)

    params = event['queryStringParameters']

    if params["action"] == "process":
        process_create_application(params["trxGUID"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('lambda success')
        }

    if params["action"] == "undo":
        undo_create_application(params["trxGUID"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('lambda success')
        }

    if params["action"] == "insert":
        insert_create_application(json.loads(event['body']))

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('lambda success')
        }

    else:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('hit else statement on lambda')
    }
