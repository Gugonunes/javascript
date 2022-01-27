<script type="text/javascript">

			function sumValues()
			{
				var num1, num2, num3, num4, res;
				num1 = parseInt(document.formcalc.textnum1.value);
				num2 = parseInt(document.formcalc.textnum2.value);
				num3 = parseInt(document.formcalc.textnum3.value);
				num4 = parseInt(document.formcalc.textnum4.value);
				if(isNaN(num4)){
				    res = num1*(58630.00)+num2*(1000.00)+num3*(4100.00);

				}
				else{
				    res = num1*(58630.00)+num2*(1000.00)+num3*(4100.00)+num4*(11300.00);

				}
				document.formcalc.textres.value='R$ ' + res + ',00';
				if(isNaN(document.formcalc.textnum1.value))
                    {
                        document.getElementById("txterro").style.display = "block";
                        
                        $('#texto_num1').attr( 'class', 'erro' );
                        document.formcalc.textres.value='Erro';
                    }
                    else{
                        $('#texto_num1').attr( 'class', 'inputs');
                    }
                if(isNaN(document.formcalc.textnum2.value))
                {
                    document.getElementById("txterro").style.display = "block";
                    
                    $('#texto_num2').attr( 'class', 'erro' );
                    document.formcalc.textres.value='Erro';
                }
                else{
                        $('#texto_num2').attr( 'class', 'inputs');
                    }
            if(isNaN(document.formcalc.textnum3.value))
                {
                    document.getElementById("txterro").style.display = "block";
                    
                    $('#texto_num3').attr( 'class', 'erro' );
                    document.formcalc.textres.value='Erro';
                }
                else{
                        $('#texto_num3').attr( 'class', 'inputs');
                    }
            if(isNaN(document.formcalc.textnum4.value))
                {
                    document.getElementById("txterro").style.display = "block";
                    
                    $('#texto_num4').attr( 'class', 'erro' );
                    document.formcalc.textres.value='Erro';
                }
                else{
                        $('#texto_num4').attr( 'class', 'inputs');
                    }
            if(!isNaN(document.formcalc.textnum1.value) && !isNaN(document.formcalc.textnum2.value) && !isNaN(document.formcalc.textnum3.value) && !isNaN(document.formcalc.textnum4.value))
			{
			    document.getElementById("txterro").style.display = "none";
			}
				
			}

			</script>