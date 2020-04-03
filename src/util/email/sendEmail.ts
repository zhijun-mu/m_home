import * as nmail from 'nodemailer'

const transporter=nmail.createTransport({
	host:'smtp.exmail.qq.com',/* 服务器邮箱 */
	service: 'qq',
	secureConnection:true,/* 使用ssl加密 */
	auth: {
	  user: '1478919527@qq.com',
	  pass: 'msabjftbbkjfbaeg'
	}
});

export function sendEmail(a){
		let mailOptions={
			     from:'1478919527@qq.com',
				 to:a.receive,// 接受者,可以同时发送多个,以逗号隔开
			     subject:a.sub,// 标题
				 html:a.html,//html
				 text:a.text,//文本
				 attachments:a.fj//附件
		}
        transporter.sendMail(mailOptions,function(error,info){
			if(error){
				console.log("sendEmail：sendEmail发送邮件报错 ------》");
				console.log(error);
				a.err(error);
			}else{
				a.success(info);
			}
		})
    }