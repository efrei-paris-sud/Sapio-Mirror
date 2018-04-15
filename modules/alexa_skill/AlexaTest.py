import boto3

access_key = "AKIAIZTB5PZ3UL3HVI3A"
access_secret = "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"
region ="us-east-1"
queue_url = "https://sqs.us-east-1.amazonaws.com/630577565982/AlexaScripts"

def post_message(client, message_body, url):
    response = client.send_message(QueueUrl = url, MessageBody= message_body)

def pop_message(client, url):
    response = client.receive_message(QueueUrl = url, MaxNumberOfMessages = 10)

    #last message posted becomes messages
    message = response['Messages'][0]['Body']
    receipt = response['Messages'][0]['ReceiptHandle']
    client.delete_message(QueueUrl = url, ReceiptHandle = receipt)
    return message
    
client = boto3.client('sqs', aws_access_key_id = access_key, aws_secret_access_key = access_secret, region_name = region)
post_message(client, "test", queue_url)
message = pop_message(client, queue_url)
print(message)