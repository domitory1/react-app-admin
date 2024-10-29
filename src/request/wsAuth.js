import QualifierError from "./_qualifierError"

export const webSocket = new WebSocket('ws://127.0.0.1:3003/auth/admin/authenticate')

window.onbeforeunload = (e) => {
    if (webSocket.readyState === WebSocket.OPEN) {
        webSocket.send(JSON.stringify({"contentType": "close"}));
    }
}
webSocket.onclose = () => {
    webSocket.onclose = webSocket.onerror = webSocket.onopen = webSocket.onmessage = null;
}
webSocket.error = e => {
    QualifierError(e);
}