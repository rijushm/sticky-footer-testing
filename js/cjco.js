function stickyFooter(args){

	// Infos
	if (args.company && args.phone && args.email) {
		var company_name = args.company;
		if (args.description) {
			var desc = args.description;
		}else{
			var desc = "contact us";
		}
		var call = args.phone;
		var email = args.email;
		var whatsapp = args.whatsapp;
	}else{
		console.error("Please provide required details to initiate CJCO Sticky Footer. Required fields are company, phone, email");
		return;
	}

	var iconPath = 'https://cdn.jsdelivr.net/gh/cjcoaustralia/sticky-footer-cdn/images/icons', iconType = "";

	// colors
	var primary_btn_color = "#FFC521";
	var primary_color = "#000000";
	if (args.color){
		if (args.color.primary) {
			var primary_btn_color = args.color.primary;
		}

		if (args.color.text) {
			var primary_color = args.color.text;
		}
	}

	var iconType;

	var whatsapp_btn_color = "#46C756";
	var whatsapp_text_color = "#ffffff";

	iconType = "-light";
	if (args.whatsappIcon){
		if (args.whatsappIcon.bg) {
			var whatsapp_btn_color = args.whatsappIcon.bg;
		}

		if (args.whatsappIcon.color) {
			var whatsapp_text_color = args.whatsappIcon.color;
		}

		if (args.whatsappIcon.icon == "dark"){
			iconType = "";
		}else if (args.whatsappIcon.icon == "light"){
			iconType = "-light";
		}
	}
	var whatsappIconImg = `${iconPath}/whatsapp${iconType}.png?v${Math.floor(Math.random() * 10000)}`;

	var email_btn_color = "#000000";
	var email_text_color = "#ffffff";

	iconType = "-light";
	if (args.emailIcon){
		if (args.emailIcon.bg) {
			var email_btn_color = args.emailIcon.bg;
		}

		if (args.emailIcon.color) {
			var email_text_color = args.emailIcon.color;
		}

		iconType = "-light";
		if (args.emailIcon.icon == "dark"){
			iconType = "";
		}else if (args.emailIcon.icon == "light"){
			iconType = "-light";
		}
	}
	var emailIconImg = `${iconPath}/email${iconType}.png?v${Math.floor(Math.random() * 10000)}`;

	iconType = "";
	if (args.callIcon){
		if (args.callIcon.bg) {
			var call_btn_color = args.callIcon.bg;
		}else{
			var call_btn_color = primary_btn_color;
		}

		if (args.callIcon.color) {
			var call_text_color = args.callIcon.color;
		}else{
			var call_text_color = primary_color;
		}

		if (args.callIcon.icon == "dark"){
			iconType = "";
		}else if (args.callIcon.icon == "light"){
			iconType = "-light";
		}
	}else{
		var call_btn_color = primary_btn_color;
		var call_text_color = primary_color;
	}
	var callIconImg = `${iconPath}/call${iconType}.png?v${Math.floor(Math.random() * 10000)}`;

	if (args.closeIcon == "light"){
		var cancelIconImg = `${iconPath}/cancel-light.png?v${Math.floor(Math.random() * 10000)}`;
	}else{
		var cancelIconImg = `${iconPath}/cancel.png?v${Math.floor(Math.random() * 10000)}`;
	}

	// Maximum window size (px)
	var window_size = 768;
	if (args.breakpoint && args.breakpoint > 0) {
		window_size = args.breakpoint;
	}

	//Buttons format
	var callPos, whatsappPos, emailPos, arrPos = [];

	var contactFormat = ["call", "whatsapp", "email"];

	var callPos = contactFormat.indexOf("call");
	var whatsappPos = contactFormat.indexOf("whatsapp");
	var emailPos = contactFormat.indexOf("email");

	if (args.callIcon && args.whatsappIcon && args.emailIcon){
		if (args.callIcon.position && args.whatsappIcon.position.position && args.callIcon.position !== args.whatsappIcon.position && args.callIcon.position !== args.emailIcon.position) {

			var iconPos = {
		      callPos: args.callIcon.position,
		      whatsappPos: args.whatsappIcon.position,
		      emailPos: args.emailIcon.position
		    },
		    min = Infinity,
		    max = 1,
		    keyMin, keyMax, firstPos, lastPos, midPos, arrPos = [], allPos = ["whatsapp", "call", "email"];

		    for(var j in iconPos) {
			  if(iconPos[j] < min) {
			    min = iconPos[j];
			    keyMin = j;
			  }
			}

			for(var j in iconPos) {
			  if(iconPos[j] > max) {
			    max = iconPos[j];
			    keyMax = j;
			  }
			}

			if (keyMin == 'whatsappPos') {
				firstPos = "whatsapp";
			}
			else if (keyMin == 'callPos'){
				firstPos = "call";
			}
			else if (keyMin == 'emailPos'){
				firstPos = "email";
			}
			arrPos.push(firstPos);
			index = allPos.indexOf(firstPos);
			if (index > -1) {
			  allPos.splice(index, 1); 
			}

			if (keyMax == 'whatsappPos') {
				lastPos = "whatsapp";
			}
			else if (keyMax == 'callPos'){
				lastPos = "call";
			}
			else if (keyMax == 'emailPos'){
				lastPos = "email";
			}
			index = allPos.indexOf(lastPos);
			if (index > -1) {
			  allPos.splice(index, 1); 
			}
			midPos = allPos[0];
			arrPos.push(midPos);
			arrPos.push(lastPos);

			// console.log('Final '+arrPos);
			contactFormat = arrPos;
			
		}
	}


	// ------------------------------------------------------- Options -------------------------------------------------------------- //

	// Window size
	var mql = window.matchMedia(`(max-width: ${window_size}px)`);

	var animeScript = document.createElement('script');  
	animeScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js');
	document.head.appendChild(animeScript);

	whatsapp = whatsapp.replace(/[- )(]/g,'');

	if (args.effect <= 2) {
		var effect = args.effect;
	}else{
		var effect = 1;
	}

	if (effect == 1) {
		startFooterStyle1(mql, company_name, desc, call, email, whatsapp, primary_btn_color, primary_color, call_btn_color, call_text_color, whatsappIconImg, whatsapp_btn_color, callIconImg, emailIconImg, email_btn_color, cancelIconImg, contactFormat);
	}if (effect == 2) {
		startFooterStyle2(mql, company_name, call, email, whatsapp, primary_btn_color, primary_color, call_btn_color, call_text_color, whatsappIconImg, whatsapp_btn_color, whatsapp_text_color, callIconImg, emailIconImg, email_btn_color, email_text_color, cancelIconImg, contactFormat, callPos, whatsappPos, emailPos);
	}

}




// Effects

function startFooterStyle1(mql, company_name, desc, call, email, whatsapp, primary_btn_color, primary_color, call_btn_color, call_text_color, whatsappIconImg, whatsapp_btn_color, callIconImg, emailIconImg, email_btn_color, cancelIconImg, contactFormat){

	var contactSize, contactIconUrl, contactUrl, contactType;

	function addStickyFooter(){

		const parent = document.body;
		const stickyContainer = document.createElement('div');
		stickyContainer.classList = 'sticky__footer_container';
		parent.append(stickyContainer);
		// btn
		const callBtn = document.createElement('button');
		callBtn.setAttribute('aria-label', 'Call us');
		callBtn.classList = 'sticky__footer_btn';
		const callIcon = document.createElement('img');
		callIcon.setAttribute('src', callIconImg);
		const callText = document.createElement('p');
		callText.innerHTML = `Call Us ${call}`;

		const ripple1 = document.createElement('span');
		ripple1.classList = "sticky__footer_btn_ripple sticky__footer_btn_ripple_1";
		const ripple2 = document.createElement('span');
		ripple2.classList = "sticky__footer_btn_ripple sticky__footer_btn_ripple_2";

		callBtn.append(callIcon);
		callBtn.append(callText);
		callBtn.append(ripple1);
		callBtn.append(ripple2);
		stickyContainer.append(callBtn);

		// popup
		const SFPopUp = document.createElement('div');
		SFPopUp.classList = "sticky__footer_popup";
		const popUpHeader = document.createElement('h4');
		popUpHeader.innerHTML = company_name;
		const popUpText = document.createElement('p');
		popUpText.innerHTML = desc;
		const SFLinkList = document.createElement('ul');
		SFLinkList.classList = "sticky__footer_popup_ul";
		SFPopUp.append(popUpHeader);
		SFPopUp.append(popUpText);
		SFPopUp.append(SFLinkList);
		
		if (whatsapp.length) {
			contactSize = 3;
		}else{
			contactSize = 2;
			contactFormat = contactFormat.filter(e => e !== 'whatsapp');
		}

		//console.log(contactFormat);

		for (var i = 1; i <= contactSize; i++) {
			let SFLinkListItem = document.createElement('li');
			let SFLinkListItemLink = document.createElement('a');
			let SFLinkListItemIcon = document.createElement('img');

			contactType = contactFormat[i-1];
			contactIconUrl = eval(`${contactType}IconImg`);

			if (contactType == "whatsapp") {
				contactUrl = `https://api.whatsapp.com/send?phone=${whatsapp}`;
				SFLinkListItemLink.setAttribute('target', '_blank');
				SFLinkListItemLink.setAttribute('aria-label', 'connect with whatsapp');
			}else if(contactType == "call") {
				contactUrl = `tel:${call}`;
				SFLinkListItemLink.setAttribute('aria-label', 'call us');
			}else if(contactType == "email") {
				contactUrl = `mailto:${email}`;
				SFLinkListItemLink.setAttribute('target', '_blank');
				SFLinkListItemLink.setAttribute('aria-label', 'email us');
			}

			SFLinkListItemLink.setAttribute('href', contactUrl);
			SFLinkListItemIcon.setAttribute('src', contactIconUrl);
			SFLinkListItem.classList = `sticky__footer_popup_list sticky__footer_list_${i} sticky__footer_list_${contactType}`;
			SFLinkListItem.append(SFLinkListItemLink);
			SFLinkListItemLink.append(SFLinkListItemIcon);
			SFLinkList.append(SFLinkListItem);
		}

		stickyContainer.append(SFPopUp);

		// Styles
		const styles = [{
			// container styles
		    width: '96%',
		    height: 'auto',
		    position: 'fixed',
		    bottom: '22.4px',
		    right: '22.4px',
		    zIndex: '9999',
		    display: 'flex',
		    justifyContent: 'flex-end',
		    transform: 'translateX(120px)',
		    opacity: '0'
		}, {
			// btn styles
		    maxWidth: '100%',
		    padding: '12.8px 28.8px',
		    backgroundColor: primary_btn_color,
		    color: primary_color,
		    borderRadius: '999px',
		    boxShadow: '0px 3px 8px rgba(0,0,0,0.16)',
		    display: 'flex',
		    alignItems: 'center',
		    gap: '10px',
		    border: 'none',
		    outline: 'none',
		    transition: '0.5s',
		    position: 'relative',
		    zIndex: '5',
		    overflow: 'hidden',
		    cursor: 'pointer'
		}, {
			// btn icon styles
		    width: '16px',
		    height: 'auto',
		    // filter: 'invert(1)',
		    position: 'relative',
		    zIndex: '2'
		}, {
			// btn text styles
		    fontWeight: '700',
		    fontSize: '17px',
		    position: 'relative',
		    transition: '0.1s',
		    zIndex: '2',
		    margin: '0'
		}, {
			// popup styles
		    width: '75%',
		    maxWidth: '330px',
		    padding: '32px 30px',
		    position: 'absolute',
		    bottom: 'calc(100% + 16px)',
		    right: '0rem',
		    zIndex: '9999',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    flexDirection: 'column',
		    backgroundColor: '#ffffff',
		    borderRadius: '12.8',
		    boxShadow: '0px 3px 8px rgba(0,0,0,0.16)',
		    transform: 'translateY(250px)',
		    opacity: '0',
		    zIndex: '4'
		}, {
			// popup header styles
		    fontSize: '17px',
		    fontWeight: '700',
		    marginTop: '0',
		    marginBottom: '12.8px',
		    color: '#000000',
		    textAlign: 'center'
		}, {
			// popup txt styles
		    fontSize: '16px',
		    marginBottom: '30px',
		    color: '#000000',
		    textAlign: 'center',
		    textTransform: 'capitalize'
		}, {
			// popup ul styles
			width: '100%',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    gap: '22px',
		    margin: '0',
		    padding: '0',
		    listStyle: 'none'
		}, {
			// popup li styles
		    display: 'block',
		    transform: 'translateY(120px)',
		    opacity: '0'
		}, {
			// popup link styles
		    display: 'flex',
		    padding: '16px',
		    borderRadius: '50%',
		    backgroundColor: '#efefef',
		    boxShadow: '0px 3px 8px rgba(0,0,0,0.16)',
		}, {
			// popup link icon styles
		    width: '16px',
		    height: '16px',
		    objectFit: 'cover'
		}, {
			// popup link styles - whatsapp
		    backgroundColor: whatsapp_btn_color,
		}, {
			// popup link icon styles - whatsapp
		    // filter: 'invert(1)'
		}, {
			// popup link styles - call
		    backgroundColor: call_btn_color,
		}, {
			// popup link icon styles - call
		    // filter: 'invert(1)'
		}, {
			// popup link styles - mail
		    backgroundColor: email_btn_color,
		}, {
			// popup link icon styles - mail
		    // filter: 'invert(1)'
		}, {
			// ripple 1
			width: '80%',
			height: '80%',
			borderRadius: '999px',
		    position: 'absolute',
		    top: '50%',
		    left: '50%',
		    transform: 'translate(-50%, -50%)',
		    border: '2px solid #fff',
		    zIndex: '1',
		    opacity: '0.2'
		}, {
			// ripple 2
			width: '50%',
			height: '50%',
			borderRadius: '999px',
		    position: 'absolute',
		    top: '50%',
		    left: '50%',
		    transform: 'translate(-50%, -50%)',
		    border: '2px solid #fff',
		    zIndex: '1',
		    opacity: '0.1'
		}];

		Object.assign(stickyContainer.style, styles[0]);
		Object.assign(callBtn.style, styles[1]);
		Object.assign(callIcon.style, styles[2]);
		Object.assign(callText.style, styles[3]);
		Object.assign(SFPopUp.style, styles[4]);
		Object.assign(popUpHeader.style, styles[5]);
		Object.assign(popUpText.style, styles[6]);
		Object.assign(SFLinkList.style, styles[7]);
		var iconList = document.querySelectorAll('.sticky__footer_popup_list');
		iconList.forEach(function(el){
			Object.assign(el.style, styles[8]);
			Object.assign(el.querySelector('a').style, styles[9]);
			Object.assign(el.querySelector('a img').style, styles[10]);
		})
		if (contactSize == 3) {
			Object.assign(document.querySelector('.sticky__footer_list_whatsapp a').style, styles[11]);
			Object.assign(document.querySelector('.sticky__footer_list_whatsapp a img').style, styles[12]);
		}
		Object.assign(document.querySelector('.sticky__footer_list_call a').style, styles[13]);
		Object.assign(document.querySelector('.sticky__footer_list_call a img').style, styles[14]);
		Object.assign(document.querySelector('.sticky__footer_list_email a').style, styles[15]);
		Object.assign(document.querySelector('.sticky__footer_list_email a img').style, styles[16]);

		Object.assign(ripple1.style, styles[17]);
		Object.assign(ripple2.style, styles[18]);

		setTimeout(()=>{
			anime({
			  targets: stickyContainer,
			  translateX: 0,
			  opacity: 1,
			  duration: 1000
			});
		}, 1000);
	}

	function addEffects() {
		var footerBtn = document.querySelector('.sticky__footer_btn');
		var footerPopUp = document.querySelector('.sticky__footer_popup');
		var btnWidth = footerBtn.clientWidth;
		var btnHeight = footerBtn.clientHeight;
		footerBtn.style.width = btnWidth+10+'px';
		footerBtn.style.height = btnHeight+'px';

		setTimeout(()=>{
			anime({
			  targets: '.sticky__footer_btn_ripple_1',
			  opacity: 0,
			  scale: 1.2,
			  direction: 'alternate',
			  loop: true,
			  duration: 3000,
			  easing: 'easeInOutSine'
			});
			anime({
			  targets: '.sticky__footer_btn_ripple_2',
			  opacity: 0,
			  scale: 1.2,
			  direction: 'alternate',
			  loop: true,
			  duration: 3000,
			  easing: 'easeInOutSine'
			});
		}, 1000);

		footerBtn.addEventListener('click', function(){
			footerPopUp.classList.toggle('active');
			if (footerPopUp.classList.contains('active')) {
				anime({
				  targets: '.sticky__footer_popup',
				  translateY: 0,
				  opacity: 1,
				  duration: 1800
				});
				anime({
				  targets: '.sticky__footer_popup li',
				  translateY: 0,
				  opacity: 1,
				  delay: anime.stagger(100),
				  duration: 2000
				});
				anime({
				  targets: '.sticky__footer_btn',
				  width: btnHeight,
				  padding: '19.2px',
				  gap: '0',
				  duration: 100
				});
				document.querySelector('.sticky__footer_btn p').style.position = 'absolute';
				document.querySelector('.sticky__footer_btn p').style.top = '30%';
				anime({
				  targets: '.sticky__footer_btn p',
				  width: btnWidth+'px',
				  top: '50%',
				  // translateY: '50%',
				  translateX: '800px',
				  left: '160px',
				  opacity: 0,
				  duration: 1000,
				});
				setTimeout(()=>{
					anime({
					  targets: '.sticky__footer_btn p',
					  opacity: 0,
					  duration: 1400
					});
				}, 300)
				document.querySelector('.sticky__footer_btn img').setAttribute('src', cancelIconImg);
			}else{
				anime({
				  targets: '.sticky__footer_popup',
				  translateY: 250,
				  opacity: 0,
				  duration: 3000
				});
				anime({
				  targets: '.sticky__footer_popup li',
				  translateY: 120,
				  opacity: 10,
				  delay: anime.stagger(100),
				  duration: 2000
				});
				anime({
				  targets: '.sticky__footer_btn',
				  width: btnWidth+10,
				  padding: '12.8px 28.8px',
				  gap: '12px',
				  duration: 100
				});
				setTimeout(()=>{
					document.querySelector('.sticky__footer_btn p').style.position = 'relative';
					anime({
					  targets: '.sticky__footer_btn p',
					  top: '0',
					  opacity: 1,
					  left: '0',
					  duration: 1300
					});
				}, 300)
				anime({
				  targets: '.sticky__footer_btn p',
				  width: '100%',
				  top: '50%',
				  // translateY: '0',
				  translateX: '0',
				  left: '480px',
				  duration: 100
				});
				document.querySelector('.sticky__footer_btn img').setAttribute('src', callIconImg);
			}
		})
	}

	document.addEventListener("DOMContentLoaded", function(event) {
		if (mql.matches) {
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (!footerContainerCheck) {
				addStickyFooter();

				var footerBtn = document.querySelector('.sticky__footer_btn');
				var footerPopUp = document.querySelector('.sticky__footer_popup');
				var btnWidth = footerBtn.clientWidth;
				var btnHeight = footerBtn.clientHeight;
			}
		}
	})

	window.addEventListener("resize", function(event) {
		if (mql.matches) {
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (!footerContainerCheck) {
				addStickyFooter();

				var footerBtn = document.querySelector('.sticky__footer_btn');
				var footerPopUp = document.querySelector('.sticky__footer_popup');
				var btnWidth = footerBtn.clientWidth;
				var btnHeight = footerBtn.clientHeight;

				addEffects();
			}
		}else{
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (footerContainerCheck) {
				document.querySelector('.sticky__footer_container').remove();
			}
		}
	})

	document.addEventListener("DOMContentLoaded", function(event) {
		if (mql.matches) {
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (footerContainerCheck) {
				addEffects();
			}
		}
	})

}

function startFooterStyle2(mql, company_name, call, email, whatsapp, primary_btn_color, primary_color, call_btn_color, call_text_color, whatsappIconImg, whatsapp_btn_color, whatsapp_text_color, callIconImg, emailIconImg, email_btn_color, email_text_color, cancelIconImg, contactFormat, callPos, whatsappPos, emailPos){

	var contactSize, contactIconUrl, contactUrl, contactType, contactText;

	var iconPos = {
      callPos,
      whatsappPos,
      emailPos
    },
    min = Infinity,
    max = 1,
    keyMin, keyMax, firstPos, lastPos, midPos, arrPos = [], allPos = ["whatsapp", "call", "email"];

    for(var j in iconPos) {
	  if(iconPos[j] < min) {
	    min = iconPos[j];
	    keyMin = j;
	  }
	}

	for(var j in iconPos) {
	  if(iconPos[j] > max) {
	    max = iconPos[j];
	    keyMax = j;
	  }
	}

	if (keyMin == 'whatsappPos') {
		firstPos = "whatsapp";
	}
	else if (keyMin == 'callPos'){
		firstPos = "call";
	}
	else if (keyMin == 'emailPos'){
		firstPos = "email";
	}
	arrPos.push(firstPos);
	index = allPos.indexOf(firstPos);
	if (index > -1) {
	  allPos.splice(index, 1); 
	}

	if (keyMax == 'whatsappPos') {
		lastPos = "whatsapp";
	}
	else if (keyMax == 'callPos'){
		lastPos = "call";
	}
	else if (keyMax == 'emailPos'){
		lastPos = "email";
	}
	index = allPos.indexOf(lastPos);
	if (index > -1) {
	  allPos.splice(index, 1); 
	}
	midPos = allPos[0];
	arrPos.push(midPos);
	arrPos.push(lastPos);

	// console.log('Final '+arrPos);
	contactFormat = arrPos;

	function addStickyFooter(){

		const parent = document.body;
		const stickyContainer = document.createElement('div');
		stickyContainer.classList = 'sticky__footer_container';

		const stickyContainerList = document.createElement('ul');
		stickyContainerList.classList = 'sticky__footer_list';

		if (whatsapp.length) {
			contactSize = 3;
		}else{
			contactSize = 2;
			contactFormat = contactFormat.filter(e => e !== 'whatsapp');
		}

		for (var i = 1; i <= contactSize; i++) {
			let SFLinkListItem = document.createElement('li');
			let SFLinkListItemLink = document.createElement('a');
			let SFLinkListItemIcon = document.createElement('img');
			let SFLinkListItemText = document.createElement('p');

			contactType = contactFormat[i-1];
			contactIconUrl = eval(`${contactType}IconImg`);

			// console.log(contactIconUrl);
			
			if (contactType == "whatsapp") {
				contactUrl = `https://api.whatsapp.com/send?phone=${whatsapp}`;
				SFLinkListItemLink.setAttribute('target', '_blank');
				SFLinkListItemText.innerHTML = contactType;
			}else if(contactType == "call") {
				contactUrl = `tel:${call}`;
				SFLinkListItemText.innerHTML = "Call Us";
			}else if(contactType == "email") {
				contactUrl = `mailto:${email}`;
				SFLinkListItemLink.setAttribute('target', '_blank');
				SFLinkListItemText.innerHTML = "Email Us";
			}

			SFLinkListItemLink.setAttribute('href', contactUrl);
			SFLinkListItemIcon.setAttribute('src', contactIconUrl);

			SFLinkListItem.classList = `sticky__footer_list_item sticky__footer_list_item_${i} sticky__footer_list_item_${contactType}`;
			SFLinkListItem.append(SFLinkListItemLink);
			SFLinkListItemLink.append(SFLinkListItemIcon);
			SFLinkListItemLink.append(SFLinkListItemText);
			stickyContainerList.append(SFLinkListItem);
		}

		parent.append(stickyContainer);
		stickyContainer.append(stickyContainerList);

		// Styles
		const styles = [{
			// container styles
		    width: '100%',
		    height: 'auto',
		    padding: '9.6px',
		    position: 'fixed',
		    bottom: '0rem',
		    right: '0rem',
		    zIndex: '9999',
		    display: 'flex',
		    justifyContent: 'center',
		    transform: 'translateY(120px)',
		    opacity: '0'
		}, {
			// List styles
		    width: '100%',
		    height: 'auto',
		    backgroundColor: '#ffffff',
		    borderRadius: '999px',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    gap: '6px',
		    boxShadow: '0px 3px 8px rgba(0,0,0,0.18)',
		    padding: '6.4px 8px',
		    listStyle: 'none'
		}, {
			// List Item styles
		    width: '100%',
		    transform: 'translateY(120px)',
		    opacity: '0'
		}, {
			// List btn styles
		    width: '100%',
		    padding: '6.4px 4.8px',
		    backgroundColor: '#d0d0d0',
		    borderRadius: '999px',
		    boxShadow: '0px 3px 8px rgba(0,0,0,0.06)',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    gap: '5px'
		}, {
			// List icon styles
		    width: '13px',
		    height: '13px',
		    objectFit: 'cover'
		}, {
			// List text styles
		    fontSize: '14px',
		    fontWeight: '500',
		    textTransform: 'capitalize'
		}, {
			// popup link styles - whatsapp
		    backgroundColor: whatsapp_btn_color,
		    color: whatsapp_text_color,
		}, {
			// popup link icon styles - whatsapp
		    // 
		}, {
			// popup link styles - call
		    backgroundColor: call_btn_color,
		    color: call_text_color,
		}, {
			// popup link icon styles - call
		    // 
		}, {
			// popup link styles - mail
		    backgroundColor:  email_btn_color,
		    color: email_text_color,
		}, {
			// popup link icon styles - mail
		    // 
		}];

		Object.assign(stickyContainer.style, styles[0]);
		Object.assign(stickyContainerList.style, styles[1]);

		var btnList = document.querySelectorAll('.sticky__footer_list_item');
		btnList.forEach(function(el){
			Object.assign(el.style, styles[2]);
			Object.assign(el.querySelector('a').style, styles[3]);
			Object.assign(el.querySelector('a img').style, styles[4]);
			Object.assign(el.querySelector('a p').style, styles[5]);
		})

		if (whatsapp.length) {
			Object.assign(document.querySelector('.sticky__footer_list_item_whatsapp a').style, styles[6]);
			Object.assign(document.querySelector('.sticky__footer_list_item_whatsapp a img').style, styles[7]);
		}

		Object.assign(document.querySelector('.sticky__footer_list_item_call a').style, styles[8]);
		Object.assign(document.querySelector('.sticky__footer_list_item_call a img').style, styles[9]);
		Object.assign(document.querySelector('.sticky__footer_list_item_call a p').style, styles[5]);

		Object.assign(document.querySelector('.sticky__footer_list_item_email a').style, styles[10]);
		Object.assign(document.querySelector('.sticky__footer_list_item_email a img').style, styles[11]);

		setTimeout(()=>{
			anime({
			  targets: stickyContainer,
			  translateY: 0,
			  opacity: 1,
			  duration: 3000
			});
			anime({
			  targets: '.sticky__footer_list_item',
			  translateY: 0,
			  opacity: 1,
			  duration: 2500,
			  delay: anime.stagger(100)
			});
		}, 1000);

	}

	document.addEventListener("DOMContentLoaded", function(event) {
		if (mql.matches) {
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (!footerContainerCheck) {
				addStickyFooter();
			}
		}
	})

	window.addEventListener("resize", function(event) {
		if (mql.matches) {
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (!footerContainerCheck) {
				addStickyFooter();
			}
		}else{
			var footerContainerCheck = document.querySelector('.sticky__footer_container');
			if (footerContainerCheck) {
				document.querySelector('.sticky__footer_container').remove();
			}
		}
	})
}