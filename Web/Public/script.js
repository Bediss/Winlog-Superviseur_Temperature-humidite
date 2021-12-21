function indexPage()
{
	var httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', '/get-config.cgi', false);
	httpRequest.send(null);
	var config = JSON.parse(httpRequest.responseText);

	var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

	var language = navigator.language || navigator.userLanguage;
	if (language == 'it-IT' || language == 'it' || language == 'IT') {
		document.getElementById('description').innerHTML = 'Accedi all’applicazione SCADA da PC (Java Web Client) e da smartphone e tablet (Smart app)';
		document.getElementById('webclient-link').appendChild(document.createTextNode('Java Web Client'));
		document.getElementById('smartclient-link').appendChild(document.createTextNode('Smart app'));
		document.getElementById('shareddir-link').appendChild(document.createTextNode('Cartella pubblica'));
	} else {
		document.getElementById('description').innerHTML = 'Accès à <b>Bizeyes Energy Supervisor </b>à partir d\'un PC (client Web Java) et d\'un smartphone ou d\'une tablette (application intelligente).';
		document.getElementById('webclient-link').appendChild(document.createTextNode('Java Web Client'));
		document.getElementById('smartclient-link').appendChild(document.createTextNode('Smart app'));
		document.getElementById('shareddir-link').appendChild(document.createTextNode('Public folder'));
	}

	if (mobile == 1) {
		document.getElementById('webclient').className += ' disabled';
	}

	if (config['webclient'] == 0) {
		document.getElementById('webclient').className += ' disabled';
	} else {
		if (document.cookie.replace(/(?:(?:^|.*;\s*)webclient-skip\s*\=\s*([^;]*).*$)|^.*$/, '$1') !== 'true')
			document.getElementById('webclient-link').href='webclient.html';
		else
			document.getElementById('webclient-link').href='webclient/get-jnlpfile.cgi';
	}

	if (config['smartclient'] == 0) {
		document.getElementById('smartclient').className += ' disabled';
	}

	if (config['shared-dir'] == 0) {
		document.getElementById('shareddir').className += ' disabled';
	}
}

function webClientPage()
{
	var language = navigator.language || navigator.userLanguage;

	if (language == 'it-IT' || language == 'it' || language == 'IT') {
		document.getElementById('run-webclient').innerHTML = 'Avvia Java Web Client';
		document.getElementById('skip-checkbox-label').innerHTML = 'Non mostrare più questa pagina';
		document.getElementById('title').innerHTML = 'Informazioni sulla sicurezza di Java';
		document.getElementById('p1').innerHTML = 'A partire dalla versione 8 di Java, per eseguire Java Web Client è necessario configurare la <em>lista di eccezione dei siti</em> come di seguito descritto:';
		document.getElementById('li1').innerHTML = 'Aprire il pannello di controllo Java (maggiori dettagli qui: <a class="link" href="https://www.java.com/it/download/help/win_controlpanel.xml">Windows</a>/<a class="link" href="https://www.java.com/it/download/help/mac_controlpanel.xml">Mac OS X</a>)';
		document.getElementById('li2').innerHTML = 'Entrare nella scheda <strong>Sicurezza</strong>';
		document.getElementById('li3').innerHTML = 'Fare click sul pulsante <strong>Modifica lista siti</strong>';
		document.getElementById('li4').innerHTML = 'Fare click su <strong>Aggiungi</strong> nella finestra <strong>Lista di eccezioni dei siti</strong>';
		document.getElementById('li5').innerHTML = 'Fare click nel campo vuoto sotto <strong>Posizione</strong> per immettere l’URL.<br />L’URL deve iniziare con <span class="monospaced">http://</span> e terminare con <span class="monospaced">/</span>, ad esempio <span class="monospaced">http://mysite/</span></li>, oppure <span class="monospaced">http://208.67.222.222/</span>, oppure <span class="monospaced">http://myscada.dyndns.com/</span>';
		document.getElementById('li6').innerHTML = 'Fare click su <strong>OK</strong> per salvare l’URL immesso';
		document.getElementById('li7').innerHTML = 'Fare click su <strong>Continua</strong> nella finestra di dialogo <strong>Avvertenza di sicurezza</strong>';
		document.getElementById('p2').innerHTML = 'Se si immette un URL non valido, accanto alla voce compare un’icona di errore. È necessario correggere l’URL, prima di premere <strong>OK</strong>, altrimenti non viene salvato.';
	} else {
		document.getElementById('run-webclient').innerHTML = 'Run Java Web Client';
		document.getElementById('skip-checkbox-label').innerHTML = 'Don’t show this page again';
		document.getElementById('title').innerHTML = 'Details about Java security';
		document.getElementById('p1').innerHTML = 'Starting with Java 8, in order to run Java Web Client, you must configure the <em>Exception site list</em> as described below:';
		document.getElementById('li1').innerHTML = 'Open Java Control Panel (further details here: <a class="link" href="https://www.java.com/en/download/help/win_controlpanel.xml">Windows</a>/<a class="link" href="https://www.java.com/en/download/help/mac_controlpanel.xml">Mac OS X</a>)';
		document.getElementById('li2').innerHTML = 'Go to <strong>Security</strong> tab';
		document.getElementById('li3').innerHTML = 'Click on <strong>Edit site list</strong> button';
		document.getElementById('li4').innerHTML = 'Click on <strong>Add</strong> button in <strong>Exception site list<strong> window';
		document.getElementById('li5').innerHTML = 'Click on the empty field below the <strong>Location</strong> label for typing the URL.<br />URL must start with <span class="monospaced">http://</span> and must terminate with <span class="monospaced">/</span>, for example <span class="monospaced">http://mysite/</span></li>, or <span class="monospaced">http://208.67.222.222/</span>, or <span class="monospaced">http://myscada.dyndns.com/</span>';
		document.getElementById('li6').innerHTML = 'Click on <strong>OK</strong> button to save the typed URL';
		document.getElementById('li7').innerHTML = 'Click on <strong>Continue</strong> in the <strong>Security Warning</strong> window';
		document.getElementById('p2').innerHTML = 'If typed URL is invalid, you can see an error icon next to the URL. You must correct it before clicking <strong>OK</strong>, otherwise it will not be saved';
	}
	
	document.getElementById('skip-checkbox').addEventListener('change', function(event) { 
		if (event.target.checked) document.cookie = 'webclient-skip=true';
		else document.cookie = 'webclient-skip==;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	});

	document.getElementById('skip-checkbox').checked = document.cookie.replace(/(?:(?:^|.*;\s*)webclient-skip\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true';
}
