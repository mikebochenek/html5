/**
 * https://code.google.com/p/svg-edit/wiki/ConfigOptions
 * http://code.google.com/p/svg-edit/wiki/ExtensionDocs
 * see ext-helloworld.js for more
 */

svgEditor.addExtension("Mine", function() {

	return {
		name : "Mine",
		svgicons : "extensions/helloworld-icon.xml",

		buttons : [{
			id : "hello_world",
			type : "mode",
			title : "Say 'Hello World'",
			events : {
				'click' : function() {
					svgCanvas.setMode("hello_world");
				}
			}
		}],

		elementChanged : function(opts) {
			if (!websocketSession) {
				console.log('trying to do open once agian because we failed to open it before...');
				open();
			}
			sendMessage('blah blah message for backend');
			//console.log('my log elementChanged', opts);
			var elem = opts.elems[0];
		}
	};
});

