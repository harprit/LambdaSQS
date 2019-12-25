exports.sqsPayloadLoggerHandler = async (event, context) => {

    event.Records.forEach((record) => {
        console.log(JSON.stringify(record));
    });
};
