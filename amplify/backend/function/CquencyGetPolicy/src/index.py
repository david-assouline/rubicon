import json

from action import get_policy_transactions, get_policy_transactions_between_dates
from widgets.main import get_data_for_policy_widgets
from widgets.policy_number import get_widget_data_policy_number


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

    elif params["type"] == "policyWidgets":
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

    elif params["type"] == "policyNumberWidget":
        result = get_widget_data_policy_number(params["policyGUID"])

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


