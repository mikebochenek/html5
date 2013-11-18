var websocketSession;

function f_onmessage(evt) {
	console.log('onmessage: [' + evt.data + ']');
}

function open() {
    if (!websocketSession) {
    	console.log('calling open websocket..');
        websocketSession = new WebSocket('ws://localhost:8080/javaee7-jms-websocket-example-1.0-SNAPSHOT/websocket');
        websocketSession.onmessage = f_onmessage;
    }
}

function close() {
    if (websocketSession) {
        websocketSession.close();
    }
}

function sendMessage(msg) {
	console.log('send message: ' + msg);
    websocketSession.send(msg);
}

