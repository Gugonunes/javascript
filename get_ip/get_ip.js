<script type="text/javascript">

function ip2int(ip) {
    return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
}

function getIP(json) {
        var ip = ip2int(json.ip) * 7;
    $('#conversion-form').submit(function() {
        
let redirectTo = (lpConversionForm.dataset.assetAction)
        ? atob(lpConversionForm.dataset.assetAction)
        : $("input[name='redirect_to']").val();

      if (redirectTo.length > 0) {
        top.location.href = redirectTo + "?cod=" + ip;
      }
    });
}
</script>