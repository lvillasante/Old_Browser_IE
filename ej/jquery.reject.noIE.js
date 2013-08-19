/*!
 * jReject: jQuery Browser Rejection
 *
 * jQuery Reject noIE 
 *
 * Copyright 2012, http://jreject.turnwheel.com
 * jReject provides a simple, robjust, light-weight way to display
 * rejections based on a the browser, specific browser version, specific
 * platforms, or rendering engine.
 *
 * http://jreject.turnwheel.com
*/ 
$(function() {
	$.reject({
		reject: {
            //chrome: true, // Google Chrome  
            //firefox: true, // Mozilla Firefox  
			msie5: true, 
			msie6: true, 
			msie7: true
		},
		//close: false,   
		header: 'UPPPSSS ... Disculpe, navegador sin soporte!',   
    	paragraph1: 'Esta pagina no tiene soporte para Internet Explorer 7 o versiones inferiores',  
       	paragraph2: 'Si desea disfrutar de nuestro contenido por favor actualize su navegador a:', 
		closeLink:'Cerrar esta ventana',
       	closeMessage: 'Cerrar esta ventana bajo el riesgo de no poder ver correctamente  el contenido!',
		display: ['chrome','firefox','msie','safari','opera'],
		browserInfo: { // Settings for which browsers to display
			firefox: {
				text: 'Firefox', // Text below the icon
				url: 'http://www.mozilla.com/firefox/' // URL For icon/text link
			},
			safari: {
				text: 'Safari',
				url: 'http://www.apple.com/safari/download/'
			},
			opera: {
				text: 'Opera',
				url: 'http://www.opera.com/download/'
			},
			chrome: {
				text: 'Chrome',
				url: 'http://www.google.com/chrome/'
			},
			msie: {
				text: 'Internet Explorer',
				url: 'http://www.microsoft.com/windows/Internet-explorer/'
			}
		}
		
	});
});
