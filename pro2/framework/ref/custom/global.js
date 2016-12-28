function isDomain(str){
  if(/^[0-9a-z\.]+[0-9a-z\-0-9a-z]+[\.]+[0-9a-z]+$/.test(str)==false) return false;
  else return true;
}

function isEmail(s){
	var regx = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	return regx.test(s);
}

function isTel(s){
	var regx = /^(86\-)?\d{2,4}\-\d{6,10}(\-\d+)?$/;
	return regx.test(s);
}

function isMobile(s){
	var regx = /^(0)?(1)\d{10}$/;
	return regx.test(s);
}

function isPostCode(s){
	var regx = /^\d{6}$/;
	return regx.test(s);
}

function isChinese(s){
	var rxp = /^[\u4e00-\u9fa5]+$/g;
	return rxp.test(s);
}

function isPostCode(str)
{
    var reg = /^[0-9]{6}$/;
    return (reg.test(str));
}

function isNumber(s)
{
	var rxp = /^(-|\+)?\d+(\.\d+)?$/;	
	return rxp.test(s);
}

function isInt(s)
{
    var rxp = /^\d+$/
	return rxp.test(s);
}

function setCookie(){
   var never = new Date();
   never.setTime(never.getTime()+10*365*24*60*60*1000);    
   var expString = "expires="+ never.toGMTString()+";";
   
   document.cookie = "area="+escape("北京海淀")+"; "+expString;
   document.cookie = "zipcode=100080;";
   
}// end function

function getCookie(name){
   var result = null;
   var myCookie = document.cookie+";";
   var searchName = name + "=";
   var startOfCookie = myCookie.indexOf(searchName);
   var endOfCookie;
   if(startOfCookie != -1){
       startOfCookie += searchName.length;
       endOfCookie = myCookie.indexOf(";",startOfCookie);
       result = (myCookie.substring(startOfCookie,endOfCookie));
   }
   return result;
} //end function

if(!formatColorHex){
	function formatColorHex(color) {
		var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
		/*RGB颜色转换为16进制*/
		if (/^(rgb)/i.test(color)) {
			var aColor = color.replace(/(?:\(|\)|rgb)*/gi, "").split(",");
			var strHex = "#";
			for (var i = 0; i < aColor.length; i++) {
				var hex = Number(aColor[i]).toString(16);
				if (hex.length == 1) {
					hex = "0" + hex;
				} //问题出在这里
				if (hex === "0") {
					hex += hex;
				}
				strHex += hex;
			}
			if (strHex.length !== 7) {
				strHex = color;
			}
			return strHex;
		} else if (reg.test(color)) {
			var aNum = color.replace(/#/, "").split("");
			if (aNum.length === 6) {
				return color;
			} else if (aNum.length === 3) {
				var numHex = "#";
				for (var i = 0; i < aNum.length; i += 1) {
					numHex += (aNum[i] + aNum[i]);
				}
				return numHex;
			}
		} else {
			return color;
		}
	}
}

function getDomain(dom){
	if(!dom) dom = location.host;
	if(dom.indexOf(".admin.") > -1) dom = dom.replace(".admin.",".");
	if(dom.replace(".yz168.cc","").split(".").length > 1) dom = dom.replace(".yz168.cc","");
	return dom;
}

function getCheckVal(value){
	if(typeof(value) == 'function') value = value();
	if(value == '0' || value == 'false') return false;
	return value;
}
