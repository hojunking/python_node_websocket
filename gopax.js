var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {

            if(message.utf8Data.includes("primus::ping"))
            connection.sendUTF( message.utf8Data.replace("primus::ping","primus::pong"));
            console.log("Received: '" + message.utf8Data + "'");
            // connection.sendUTF( 서버와 연결 핑퐁~)
        }
    });
    
    function sendNumber() {
        if (connection.connected) {
             console.log("\"{\\\"exchange\\\":1,\\\"uuid\\\":\\\"03a17b7372014751af281e69b3cecab3\\\",\\\"uuidType\\\":\\\"web\\\",\\\"messageFormatVersion\\\":1}\"");
             connection.sendUTF("\"{\\\"exchange\\\":1,\\\"uuid\\\":\\\"03a17b7372014751af281e69b3cecab3\\\",\\\"uuidType\\\":\\\"web\\\",\\\"messageFormatVersion\\\":1}\"");
        

        //"{\"m\":0,\"i\":2,\"n\":\"GetLandingNoticesList\",\"o\":\"{}\"}"
        //"{\"m\":0,\"i\":2,\"n\":\"GetLandingNoticesList\",\"o\":\"{}\"}"
        setTimeout(()=>{
        
        console.log("\"{\\\"m\\\":0,\\\"i\\\":2,\\\"n\\\":\\\"GetLandingNoticesList\\\",\\\"o\\\":\\\"{}\\\"}\"");
        connection.sendUTF("\"{\\\"m\\\":0,\\\"i\\\":2,\\\"n\\\":\\\"GetLandingNoticesList\\\",\\\"o\\\":\\\"{}\\\"}\"");
        },200);
        }
    }   
    sendNumber();
});

client.connect('wss://wss.gopax.co.kr/primus/', 'echo-protocol');