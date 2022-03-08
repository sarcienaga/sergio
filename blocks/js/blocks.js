Blockly.Blocks["f_avanza"] = {
init: function() {
this.appendDummyInput()
   .appendField("Mover adelante");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_xira"] = {
init: function() {
this.appendDummyInput()
   .appendField("Girar")
   .appendField(new Blockly.FieldDropdown([["Izquierda","E"], ["Derecha","D"]]), "direccion");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_hai_cElse"] = {init: function() {var DIRECTIONS =[["adelante","FR"],["Izquierda","ES"],["Derecha","DE"]];
this.setColour(210);
this.appendDummyInput().appendField("Si camino").appendField(new Blockly.FieldDropdown(DIRECTIONS),"DIR");
this.appendStatementInput("DO").appendField("hacer");
this.appendStatementInput("ELSE").appendField("de lo contrario");this.setTooltip("");
this.setPreviousStatement(true);this.setNextStatement(true);}};
