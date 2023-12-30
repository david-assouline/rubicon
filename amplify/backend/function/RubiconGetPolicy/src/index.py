import json

from action import get_policy_transactions


def handler(event, context):
    print('received event:')
    print(event)

    result = get_policy_transactions("38d76f58-bcf9-457f-b210-bef7daf4bc1f")
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