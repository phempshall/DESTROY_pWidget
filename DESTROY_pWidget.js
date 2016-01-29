(function(){
	/**
	 * [DESTROY_pWidget description]
	 * Waits for PO.ST widget to load and then destroys it:
	 * prevents meaningless bullshit from being copied to clipboard.
	 */
	function DESTROY_pWidget () {
		if (typeof pwidget_api === 'object') {
			pwidget_api = undefined;
			// console.log('Destroying: pwidget_api');
			DESTROY_pWidget.destroyed += 1;
		}
		if (typeof pwidget_modules === 'object') {
			pwidget_modules = undefined;
			// console.log('Destroying: pwidget_modules');
			DESTROY_pWidget.destroyed += 1;
		}
		if (typeof pwidget_config === 'object') {
			pwidget_config = undefined;
			// console.log('Destroying: pwidget_config');	
			DESTROY_pWidget.destroyed += 1;		
		}

		if (DESTROY_pWidget.destroyed !== 3) {
			// console.log('restarting');
			setTimeout(DESTROY_pWidget,1000);
		}
	}
	DESTROY_pWidget.destroyed = 0;
	DESTROY_pWidget();	
})();