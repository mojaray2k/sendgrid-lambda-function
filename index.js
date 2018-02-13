console.log('Loading function');

exports.handler = function(event, context) {
  console.log('Received event:', JSON.stringify(event, null, 2));
  var eventTypes = ["delivered", "open", "click", "bounce", 
                    "dropped", "spamreport", "unsubscribe"];

  for (var i = 0; i < event.length; i++) {
    var message = event[i];

    if (eventTypes.indexOf(message.event) > -1) {
      continue;
    }

    console.log('Received event:', JSON.stringify(message, null, 2));
  }

  context.done();
};