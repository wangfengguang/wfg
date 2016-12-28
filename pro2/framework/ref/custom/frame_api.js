IWF = window.IWF = {};
IWF.plugins = {};
IWF.ui = {};
IWF.version = "1.0.0.1";
IWF.shortName = "联动";
IWF.extName = "优站后台管理系统";
IWF.name = "后台管理系统";
IWF.company = "联动天下";
IWF.sid = null;

(function () {
    var reg = new RegExp("(^|&)sid=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    /*if (r != null) {
        IWF.sid = unescape(r[2]);
        document.write('<script type="text/javascript" src="admin/login?act=getalljs&sid=' + IWF.sid + '"></script>');
    }*/
	IWF.sid = "";
	if (r != null) IWF.sid = unescape(r[2]);
	//document.write('<script type="text/javascript" src="admin/jsutil?act=getalljs&sid=' + IWF.sid + '"></script>');
	document.write('<script type="text/javascript" src="/admin/jsutil.php?act=getalljs&sid=' + IWF.sid + '"></script>');
	var loader = "/aspnet/site"+getCookie('InitSiteID')+"/admin/loader.js";
	document.write('<script type="text/javascript" src="'+loader+'"></script>');
})();
