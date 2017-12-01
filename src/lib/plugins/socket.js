import io from 'socket.io-client';

export default {
    socket: null,
    connect(address) {
        console.log('Connect socket');
        this.socket = io(address, {
            reconnection     : true,
            reconnectionDelay: 10000
        });
    },
    disconnect() {
        if (this.socket != null) {
            console.log('Disconnect socket');
            this.socket.disconnect();
            this.socket.close();
            this.socket = null;
        }
    },
    register(channel, listener) {
        if (this.socket != null) {
            this.socket.on(channel, listener);
        }
    }
};
