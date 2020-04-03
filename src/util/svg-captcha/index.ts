import  * as svgCaptcha from  "svg-captcha"

export  function createCode(){
		const cap = svgCaptcha.create();
		return cap;
}