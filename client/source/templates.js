// The templating function only supports variables.
// Define a variable as so: {variable_name}
export default {

	help: '<pre>                                                                \n' +
		'Tokumei, made by Violet Evergarden                                  \n' +
		'                                                                       \n' +
		'----------------------------------------------------------------------	\n' +
		'                                                                       \n' +
		'Client:                                                    			\n' +
		'	/key		enckey  	encryption key                  \n' +
		'	/nick		NickName		Nick ayarlar                   \n' +
		'	/mute  					Bildirimleri kapar									\n' +
		'	/unmute  				Bildirimleri Açar									\n' +
		'	/clear					Sohbeti temizler                      \n' +
		'	/help					Kayra yardım acil yardım.                                        \n' +
		'                                                                       \n' +
		'Room:                                                    				\n' +
		'	/join		roomid			Odaya katıl	                            \n' +
		'	/leave					Odadan ayrıl                               \n' +
		'	/count					Odadaki encrypted user sayısı                          \n' +
		'                                                                       \n' +
		'Host:  		                                                    	\n' +
		'	/connect				Hosta bağlan			          		     	\n' +
		'	/disconnect				Bağlantıyı kes    			        \n' +
		'                                                                       \n' +
		'                                                                       \n' + 
		'----------------------------------------------------------------------	\n' +
		'</pre>',

	default_nick: 'Kurt',

	// All post templates will have access to the properties in the 'settings' module, 
	// along with the current nick, room, mute-status and of course the message ('text').
	post: {
		motd: 		'<li id="{id}"><i class="motd">{text}</i></li>',
		info: 		'<li id="{id}"><i class="timestamp">[{timestamp}] </i>INF&gt; <i class="info">{text}</i></li>',
		server: 	'<li id="{id}"><i class="timestamp">[{timestamp}] </i>SRV&gt; <i class="server">{text}</i></li>',
		error: 		'<li id="{id}"><i class="timestamp">[{timestamp}] </i>ERR&gt; <i class="error">{text}</i></li>',
		message: 	'<li id="{id}"><i class="timestamp">[{timestamp}] </i>&gt; <i class="nick">{nick}&gt;</i> <i class="message">{text}</i></li>'
	},

	// All message templates will have access to the properties in the 'settings' module, 
	// along with the current nick, room and mute-status.
	messages: {
		key_to_short: 			'Daha uzun bir key girmelisin.',
		key_to_long: 			'Çok uzun key.',
		key_ok: 				'Encryption key ayarlandı.',
		key_no_host: 			'Host bağlantısı yok. Önce geri bağlan. /help',

		join_no_host: 			'Host bağlantısı yok. Önce geri bağlan. /help',

		nick_to_short: 			'ÇÜK KISA İSİM',
		nick_to_long: 			'ÇOK UZUN İSİM AMK',
		nick_set: 				'Bundan sonra adın \'{nick}\'. Key ayarlanıyor.',

		msg_no_room: 			'Önce bir odaya girmen gerek. /help',
		not_in_room: 			'Odada değilsin',
		msg_no_key: 			'Önce encryption keyini ayarlamalısın. /help (keyini bir yere not al) ',
		leave_from_nowhere: 	'Hata',

		torch_is_now: 			'Mesajlar {ttl} saniye sonra kendini yok edecek.',
		torch_not_set: 			'Doğru bir torch delay gir.',

		title_set: 				'Başlık \'{title}\' olarak değiştirildi.',

		muted: 					'Susturuldu.',
		unmuted: 				'Susturma kaldırıldı.',

		unrecognized_command: 	'BİLİNMEYEN KOMUT AMINI SİKTİĞİM GİT VİOYA KONUŞ VEYA /help',

		room_name_too_long: 	'ÇOK UZUN',
		room_name_too_short: 	'ÇOK KISA',

		joined_room: 			'{roomName} odasına giriş yapıldı. Keyler eşleşiyor.',
		left_room: 				'{roomName} odasından ayrılındı.',
		already_in_room: 		'Zaten bir odadasın: ({room}), önce /leave at.',

		unable_to_decrypt: 		'Unabled to decrypt received message, keys does not match.',

		socket_error: 			'A network error has occurred. A restart may be required to bring back full functionality.<br>Examine the logs for more details.',
		connecting: 			'Connecting to host {host}...',
		connected: 				'Bağlantı sağlandı. Encrpyted chat aktif.',
		disconnected: 			'Disconnected from host {host}.',
		already_connected:		'You have to disconnect from {host} before joining another.',
		reconnect_no_host:		'There is no host to reconnect with.',

		host_available: 		'<span class="info">{index}</span>	<span class="good">[AVAILABLE]</span>	<span class="neutral">{name}</span>\n',
		host_unavailable: 		'<span class="info">{index}</span>	<span class="bad">[UNAVAILABLE]</span>	<span class="neutral">{name}</span>\n'
	},

	server: {
		person_joined: 			'Odaya biri girdi.',
		person_left: 			'Odadan biri ayrıldı.',
		person_count: 			'{payload} kişi var.',
		person_single:			'Odadaki tek kişi sensin. Protokol değiştiriliyor',
		command_failed: 		'APTAL ZENCI SIKME KOMUTU.',
		bogus: 					'Bogus mogus viogus'
	},

	client: {
		title: 					'Tokumei - Offline'
	}
};
