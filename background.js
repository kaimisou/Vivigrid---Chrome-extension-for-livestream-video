//chrome.webNavigation.onCompleted.addListener(function() {

	(function(){ document.title='s'; }).call(this);


	chrome.runtime.onInstalled.addListener(function(details) {
	   
	   const reason = details.reason

	   console.log('inst: ${reason }')
	   if(reason=='install'){
		        
		   	ch={
	        "WL":"稍後觀看.",
	        "PQLMD4iHhG8":"國會頻道 1",
	        "-9lQuKoyb9w":"國會頻道 2",
	        "YWp2YMsEczc":"美濃溪",
	        'xurynuSqi1M':'高雄燈塔',
	        'tWdI0YfY93Y':'花蓮七星潭',
	        'hZOpVKil9YE':'屏東 林邊溪',
	        "33c5gG8GZjQ":"馬祖 ",
	        "m3pbYDeAsaw":"石門水庫", 
	        "UUP8wWzfUcral_E6iNMdIdKg":"Train Railway",
	        "PLjjrV9IhkIpf3Lm_CcnGep8utrDf-3trd":"公視 全球",
	        "PLjjrV9IhkIpcwPTc3fRKCTZlWpl6MT4x0":"公視 每日",
	        "PLjjrV9IhkIpfgE-SC2T5B8LCuSA-nYfej":"公視 管見",
	        "UUVrJDXSpLMtnCfK5ckK3vAg":"公視 紀錄",
	        'PL4K-OwIaWxiDiYiPRgVfqgFLIu-abbVIl':'中央社 全球',
	        
	        "qr4rdJ7zDb8":"Hiroyuki",
	        
	        "coYw-eVU0Ks":"ANN live",
	        "UUGCZAYq5Xxojl_tSXcVJhiQ":"ANN ch",
	        
	        "_-ybzKvHz84":"Cat Hospital",
	        "siyW0GOBtbo":"Sky News",
	        "tPeUHECNLKs":"NBC2 US",
	        "kwxtkBcayK8":"ABC Aus",
	        "NvqKZHpKs-g":"DW",
	        "jL8uDJJBjMA":"Al Jazeera",
	        "vCDDYb_M2B4":"CCTV CH",
	    
	        "JvZVnBn6zEI":"CNA Singapore",

	        "UUkqrvXuqW7dN3E2_4v8Ha5Q":"中廣電台 830",
	        "1A6ytChL69g":"明鏡",
	        "B-2TOkxUFCI":"美國之音",

	        "plDqw6o0LXg":"台灣 地震",
	        "B8tQ8RUbTW8":"InYourChill 1",
	        "TY4nHKgSry0":"InYourChill 2",
	        'UU8mWulo_qPrlXZZw98nbR7g':'Train Slovakia /week',
	        "yEoEp85mw2A":"南海電車　高野線",
	        
	        "sbZNL98Z0GE":".Street Thailand",  // ----------
	        "vPxAgn3EtDQ":".Street NL",     // ----------

	        "earthcam5204":"Hawaii",
	        "earthcam15061":"Miami_N.",
	        "earthcamphilippinesHD1":"Boracay Ph",
	        "earthcam7382":"Falls_N",
	        "UG--sqneYYg":"Beach Florida ",
	        "V7L9xiKwq6U":"Ocean Bar Fl",
	        "5lK8CJLW1oI":"Beach Okaloosa",    
	        "6i0yI_pfg7k":"Beach Hawaii",  // ----------
	        "XgS54H9cokY":"Beach Thailand",    
	        
	        "1FvwPEKgcsA":"Beach Crystal bay",
	        "fa7wCF6JL1w":"Beach ball_N",
	        "DbY00xhcrgU":"Pier-Huntington Beach",
	        'bEoNVd3spEM':'Pier-Dania Beach ',
	        'sXXaMSLAtVI':'Pier-Cocoa Beach',
	        'YIaNM70J91M':'Ship Cam_N',  // ----------
	
	        "LXWVYoBluT4":"Beach Virgin Islands",
	        "DH0VmRsj05c":"Mississippi",        
	        "JqUREqYduHw":"Venice 1",
	        "P393gTj527k":"Venice 2",
	        "GgLRWs8OyMs":"Venice 3",
	        "mr-O8qqLqeM":"Venice 4",
	        "c4C1c4z8hTQ":"Katmai national park ",
	        "AAnXQt8-gRs":"圓山高塔 央廣",
	        "hJAdyea_BzI":"UW red",
	        
	        "https://live.fc2.com/19890425/":"cat_cam",
	        "XdsP3yX084A":"animal panda",
	        "O6Ir_sMsTtc":"animal Nest",
	        
	        "sDgWnw3YPjs":"animal shark",
	        "JVhWJmxVI9w":"AQUA 1",
	        "Z6v4hoxzpkc":"AQUA 2",
	        "ogMTmdbYaPs":"AQUA 3",
	        "HYknTgcw2BM":"AQUA 4",
	        "F109TZt3nRc":"AQUA 5",
	        "PLpc9QDUSa7bge6pcikc_FLYpH4s215ndb":"AlmazanKitchen",
	        "PL_uLYGDZi5I48zhEwT-Y6Nn9XC2pymsC2":"Wind Walk",
	        "PL2hH_nTlbRiMPG3ScndR0dUydCc61WwAp":"NYC Cyc",
	        "PL2hH_nTlbRiMCD2wR1_6JJEVkQwjpQNDh":"NYC walk",
	        'UUBcVQr-07MH-p9e2kRTdB3A':'Drive J Utah',
	        'UUAcsAE1tpLuP3y7UhxUoWpQ':'JP walk Rambalac',
	        "UUf9uPmJgnaaoLMro1BM8Dcw":"集落",
	        "UUnq0zNFkSa8YFc3f1-7Q3mg":"遊研社",
	        'UUHSsKYrMv7V34eGYGyv7BDA':'FTG M Bizarro/w',
	        'PL9XlYK9s2WGdOZO9PQI1BXdgKqjSJMutX':'Anime OPED',
	    };
	    img=[
	    'https://i.v-s.mobi/2K8dVAkEHhtoH2z1Tobxf6u8jmpO8UQSZrI0iT3INaFQsxa6ce_w5bakuhIDHA1h7RdTCBLFqAzmIgNVVjQzHQ.jpg',
	    'https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg', // 1 usd
	    'https://compote.slate.com/images/d315bc41-2074-4adf-86f1-4d108c5e4bce.jpg',// zimbabwe dollar
	    'https://vthumb.ykimg.com/0541040852E2C8556A0A4F51F58E97FB',// macross 7
	    
	    'https://66.media.tumblr.com/7e6d90ade128242844c420a6cc395def/tumblr_n9yt2iYR8F1qc5rbmo8_r1_250.gif',// cowboy bebop movie    
	    'https://i.pinimg.com/originals/2b/78/d5/2b78d577fefae8bb6df8f673ceef21ba.png',//film moon
	    'https://lesblablasdetachan.files.wordpress.com/2017/08/cover.jpg?w=549&h=242',// master keaton
	    
	    ];
	    reg = {};
	    
	    chrome.storage.sync.set({chennels: ch });
	    chrome.storage.sync.set({imgs: img });
	    chrome.storage.sync.set({ch_reg: reg });
	    
	    window.open('https://www.youtube.com/results?search_query=20190831_20240831','_blank');
	   }

	});

	chrome.browserAction.onClicked.addListener(function(tab) { 
		window.open('https://www.youtube.com/results?search_query=20190831_20240831','_blank');
	});


	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){

		if(changeInfo && changeInfo.status == "loading"){

			 //chrome.tabs.executeScript(tabId, {file: "jquery.slim.min.js"}); }
			 chrome.tabs.executeScript(tabId, {file: "jquery.js"}); 
			 
			 chrome.tabs.executeScript(tabId, {code:`
			 	
			 	let url =window.location.href;
			 	
			 	if(url.includes("https://www.youtube.com/results?search_query=20190831_20240831")){

			 	var css = 'div { opacity: 0; } ',
			    head = document.head || document.getElementsByTagName('head')[0],
			    style = document.createElement('style');

				head.appendChild(style);
				style.type = 'text/css';
				style.appendChild(document.createTextNode(css));
		    	}

			 	if(url.includes("https://kissanime.ru")||url.includes("kisscosplay")){
			 	
			 	var css = 'iframe { zoom: 1%; } a[target]{display:none}',
			    head = document.head || document.getElementsByTagName('head')[0],
			    style = document.createElement('style');

				head.appendChild(style);
				style.type = 'text/css';
				style.appendChild(document.createTextNode(css));
				 } 

				

			 	` }); 	
			
			 }

	    if(changeInfo && changeInfo.status == "complete"){
	    //if( changeInfo.status == "complete"){
	          chrome.tabs.executeScript(tabId, {file: "script.js"});
	        
	    }
	    

	});

	


//}, {url: [{urlMatches : 'https://www.youtube.com/'}]});

      
  