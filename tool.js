// 生成随机数
export function getUUid(){
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
}