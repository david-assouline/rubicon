import json

from action import search_clients_by_client_id, search_clients_by_individual_name, search_clients_by_group_name, \
    search_clients_by_company_name, get_client_details_by_client_guid, get_address_details_by_client_guid


def handler(event, context):
    print('received event:')
    print(event)

    params = event['queryStringParameters']

    if params["type"] == "Client ID":
        result = search_clients_by_client_id(params["clientID"])

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
        result = search_clients_by_individual_name(params["firstName"], params["lastName"])

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
        result = search_clients_by_company_name(params["companyName"])

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
        result = search_clients_by_group_name(params["groupName"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "ClientDetails":
        result = get_client_details_by_client_guid(params["clientGUID"])

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': result
        }

    elif params["type"] == "AddressDetails":
        result = get_address_details_by_client_guid(params["clientGUID"])


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
        return {

            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': "no search type was matched"
        }


