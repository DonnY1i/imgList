window.onload=function()
{
	var oLi = document.getElementsByTagName("li");
	for (var i = 0; i < oLi.length; i++)
	{
		oLi[i].firstChild.onmouseover = function()
		{
			this.className = "current";
		};
		oLi[i].firstChild.onmouseout = function()
		{
			this.className = "";
		};
	}
}