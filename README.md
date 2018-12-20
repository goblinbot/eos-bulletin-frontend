# Eos-bulletin (FrontEnd)
FrontEnd to display the messages recorded in the eos-bulletin-backend. A small experiment.

## But what does it do?
Display the messages obtained by the [eos-bulletin-backend](https://github.com/goblinbot/eos-bulletin-backend), by initially just doing a HTTP GET request, but responding to websocket emits as well (name: 'updateMessages').

The result from the backend is a simple JSON Array, which Angular interrates through and displays.

### TODO?
Add a bit of styling to the messages for fun. Right now it's just green plaintext.

### How to run?
( Make sure you run the Node.JS based [eos-bulletin-backend](https://github.com/goblinbot/eos-bulletin-backend) )

(WIP: NPM install, NG serve, yadda yadda)
