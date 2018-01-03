const ddb = AWS.DynamoDB.DocumentClient();
function handle(event, context, callback) {
    ddb.put({
        TableName: 'test_table',
        Item: { HI: 'OKAY' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}