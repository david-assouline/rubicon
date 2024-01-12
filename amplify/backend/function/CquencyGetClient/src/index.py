import json

from action import search_clients_by_name


def handler(event, context):
    print('received event:')
    print(event)

    params = event['queryStringParameters']

    if params["type"] == "clientid":
        result = search_clients_by_name(params["policyGUID"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "Individual":
        result = search_clients_by_name(params["firstName"], params["lastName"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "Company":
        result = search_clients_by_name(params["policyGUID"], params["startDate"], params["endDate"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "Group":
        result = search_clients_by_name(params["policyGUID"], params["startDate"], params["endDate"])

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
        result = search_clients_by_name(params["policyGUID"])

        return {

            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }


