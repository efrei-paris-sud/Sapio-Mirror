import boto3
import os
import time

access_key = "AKIAIZTB5PZ3UL3HVI3A"
access_secret = "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"
region ="us-east-1"
queue_url = "https://sqs.us-east-1.amazonaws.com/630577565982/AlexaScripts"

def pop_message(client, url):
    response = client.receive_message(QueueUrl = url, MaxNumberOfMessages = 10)

    #last message posted becomes messages
    message = response['Messages'][0]['Body']
    receipt = response['Messages'][0]['ReceiptHandle']
    client.delete_message(QueueUrl = url, ReceiptHandle = receipt)
    return message
    
client = boto3.client('sqs', aws_access_key_id = access_key, aws_secret_access_key = access_secret, region_name = region)

waittime = 20
client.set_queue_attributes(QueueUrl = queue_url, Attributes = {'ReceiveMessageWaitTimeSeconds': str(waittime)})

time_start = time.time()
while (time.time() - time_start < 60):
        print("Checking...")
        try:
                message = pop_message(client, queue_url)
                print(message)
                if message == "on":
                        os.system('sudo xset dpms force on')
                elif message == "off":
                        os.system("sudo xset dpms force off")
        except:
                pass
