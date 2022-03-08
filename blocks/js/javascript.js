Blockly.JavaScript["f_avanza"] = function(block) {var code="adddatamove(1);";return code;};
Blockly.JavaScript["f_xira"] = function(block) {var dropdown_direccion = block.getFieldValue("direccion");var code="adddatarot("+dropdown_direccion+");";return code;};
Blockly.JavaScript["f_hai_cElse"] = function(block) {var argument = block.getFieldValue("DIR") +
'(\'block_id_' + block.id + '\')';
var branch0 = Blockly.JavaScript.statementToCode(block,"DO");
var branch1 = Blockly.JavaScript.statementToCode(block,"ELSE");
var code = 'if (' + argument + ') {\n' + branch0 +'} else {\n' + branch1 + '}\n';
return code;};
