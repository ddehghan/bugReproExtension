var port = chrome.runtime.connect(null, {
  name: 'mychannel'
});

// The line above causes this error: "Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist."

// // send initial state
// if (port.name) {
//   console.log('port has name');

//   port.postMessage({
//     msg: 'I am contnet script'
//   });
// }

// port.onMessage.addListener(function (msg) {
//   console.log('Got Message', msg);
// });