			<script>
			function getIP(json) {
				var ip = ip2int(json.ip) * 7;
			}
			function ip2int(ip) {
    			return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
				}

			</script>
			<script>
				function getIP(json) {
				var ip = ip2int(json.ip) * 7;
  				jQuery(document).ready(function($){
                
				 if(window.location.href === "https://lp.dentaloffice.com.br/calculadora?cod=" + ip){
				 	
				 }

				 else{
				    window.location.href = "https://lp.dentaloffice.com.br/calculadora-para-abrir-consultorio";
				 	
				 }
			});
			}
			</script>

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"> </script>