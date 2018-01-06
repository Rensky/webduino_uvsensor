Blockly.JavaScript['uv_setup'] = function(block) {
  var variable_uv = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uv'), Blockly.Variables.NAME_TYPE);
  var value_uv = Blockly.JavaScript.valueToCode(block, 'uv', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['uv_pin'] = function(block) {
  var dropdown_uno_apin1 = block.getFieldValue('uno_Apin1');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uv_sencing'] = function(block) {
  var variable_uv = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uv'), Blockly.Variables.NAME_TYPE);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_uv_sencing_go = Blockly.JavaScript.statementToCode(block, 'uv_sencing_go');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['uv_display'] = function(block) {
  var variable_uv = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uv'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};