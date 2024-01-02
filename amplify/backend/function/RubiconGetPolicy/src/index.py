import json

from action import get_policy_transactions


def handler(event, context):
    print('received event:')
    print(event)

    params = event['queryStringParameters']

    result = get_policy_transactions(params["policyGUID"])
    print(result)

    return {

        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': result
    }