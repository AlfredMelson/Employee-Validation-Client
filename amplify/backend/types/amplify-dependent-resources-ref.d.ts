export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "validdynamodb": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "EmployeeHandler": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "validapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}