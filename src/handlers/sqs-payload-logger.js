exports.sqsPayloadLoggerHandler = async (event, context) => {

    event.Records.forEach((record) => {
        const {body} = record;
        console.log(body);
    });
};
