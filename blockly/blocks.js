var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['uv_setup'] = {
  init: function() {
    this.appendValueInput("uv")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_UV_SET, "設定")
        .appendField(new Blockly.FieldVariable("uv"), "uv")
        .appendField(Blockly.Msg.WEBDUINO_UV_PIN, "腳位為");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }

Blockly.Blocks['uv_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_UV_UV, "紫外線，")
        .appendField(Blockly.Msg.WEBDUINO_UV_UVPIN, "uv pin")
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"]]), "uno_Apin1");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['uv_sencing'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("uv"), "uv")
        .appendField(Blockly.Msg.WEBDUINO_UV_START, "開始偵測");
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_UV_GET_TIME , "毫(1/1000)秒偵測一次");
    this.appendStatementInput("uv_sencing_go")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_UV_DO, "執行");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['uv_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("uv"), "uv")
        .appendField(Blockly.Msg.WEBDUINO_UV_DETECTED, "所測得目前的紫外線比較強度")
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};
