const ddb = AWS.DynamoDB();
exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'test_table',
        Item: { mom: 'yes' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}