import type { Message } from "./type";

class XSocket {
    private ws: WebSocket;

    constructor(url: string) {
        this.ws = new WebSocket(url);
    }

    send(message: Message): void {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        } else {
            this.ws.addEventListener('open', () => {
                this.ws.send(JSON.stringify(message));
            });
        }
    }

    message(callback: (event: MessageEvent) => void): void {
        this.ws.addEventListener('message', callback);
    }

    closed(callback: (event: CloseEvent) => void): void {
        this.ws.addEventListener('close', callback);
    }

    open(callback: (event: Event) => void): void {
        this.ws.addEventListener('open', callback);
    }
}

export default XSocket;
