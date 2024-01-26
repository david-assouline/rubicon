import json

from action import get_policy_transactions, get_policy_transactions_between_dates, get_data_for_policy_widgets


def handler(event, context):
    print('received event:')
    print(event)

    params = event['queryStringParameters']

    if params["type"] == "regular":
        result = get_policy_transactions(params["policyGUID"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "daterange":
        result = get_policy_transactions_between_dates(params["policyGUID"], params["startDate"], params["endDate"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "widgets":
        result = get_data_for_policy_widgets(params["policyGUID"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    else:
        result = get_policy_transactions(params["policyGUID"])

        return {

            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }


