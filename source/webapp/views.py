import json
from datetime import datetime
# Create your views here.

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def api_example(request, *args, **kwargs):
    request_data = None
    if request.body:
        request_data = json.loads(request.body)
    print(request_data.get('data'))
    data = {
        'method' : request.method,
        'time' : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'content': request_data
    }
    data_json = json.dumps(data)
    response = HttpResponse(data_json)
    response['Content-Type'] = 'application/json'
    return response

@csrf_exempt
def add(request, *args, **kwargs):
    if request.method == 'POST':
        if request.body:
            product_data = json.loads(request.body)
            a = product_data.get('A')
            b=product_data.get('B')
            try:
                a = int(product_data.get('A'))
                b = int(product_data.get('B'))
                return JsonResponse({'answer': a + b})
            except ValueError:
                response = JsonResponse({'error': 'User input is string'})
                response.status_code = 400
                return response
        else:
            response = JsonResponse({'error' : 'No data provided'})
            response.status_code = 400
            return response

@csrf_exempt
def substract(request, *args, **kwargs):
    if request.method == 'POST':
        if request.body:
            product_data = json.loads(request.body)
            a = product_data.get('A')
            b=product_data.get('B')
            try:
                a = int(product_data.get('A'))
                b = int(product_data.get('B'))
                return JsonResponse({'answer': a - b})
            except ValueError:
                response = JsonResponse({'error': 'User input is string'})
                response.status_code = 400
                return response
        else:
            response = JsonResponse({'error' : 'No data provided'})
            response.status_code = 400
            return response


@csrf_exempt
def multiply(request, *args, **kwargs):
    if request.method == 'POST':
        if request.body:
            product_data = json.loads(request.body)
            a = product_data.get('A')
            b=product_data.get('B')
            try:
                a = int(product_data.get('A'))
                b = int(product_data.get('B'))
                return JsonResponse({'answer': a * b})
            except ValueError:
                response = JsonResponse({'error': 'User input is string'})
                response.status_code = 400
                return response
        else:
            response = JsonResponse({'error' : 'No data provided'})
            response.status_code = 400
            return response


@csrf_exempt
def divide(request, *args, **kwargs):
    if request.method == 'POST':
        if request.body:
            product_data = json.loads(request.body)
            a = product_data.get('A')
            b=product_data.get('B')
            try:
                a = int(product_data.get('A'))
                b = int(product_data.get('B'))
                print(a, b)
                if (a==0 or b==0):
                    response = JsonResponse({'error': 'Division by zero!'})
                    response.status_code = 400
                    return response

                else:
                    return JsonResponse({'answer': a / b})

            except ValueError:
                response = JsonResponse({'error': 'User input is string'})
                response.status_code = 400
                return response
        else:
            response = JsonResponse({'error' : 'No data provided'})
            response.status_code = 400
            return response
