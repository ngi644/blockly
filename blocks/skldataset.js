/**
 * @fileoverview Dataset
 * @author ngi644@gmail.com(Takashi Nagai)
 */
'use strict';


goog.provide('Blockly.Blocks.skldataset');

goog.require('Blockly.Blocks');


Blockly.Blocks.skldataset.HUE = 30;


var dataUrl = 'https://us-central1-ngi-demo-app.cloudfunctions.net/api/lists';

Blockly.Blocks["skldataset_import"] = {
  init: function () {
    this.setInputsInline(true);
    this.appendDummyInput()
            .appendField('Dataset:');
    this.setColour(Blockly.Blocks.skldataset.HUE);
    this.setTooltip("dataset demo");
    this.setHelpUrl("url");
    this.setListData();
    this.setOutput(true, "Array");
    this.updateShape_();
  },
  setListData: function () {
      var self = this;
      fetch(dataUrl).then(function(response) {
        return response.json();
      }).then(function(resjson) {
        self.appendDummyInput('MAIN')
            .appendField(new Blockly.FieldDropdown(resjson['lists'], function(option) {
                            this.sourceBlock_.updateShape_(option);
                        }), "DATASET_NAME");
        self.appendDummyInput('SECOND')
            .appendField("Column");
      });
  },
  updateShape_: function(index, index_value) {
    var inputGroup = this.getInput('SECOND');
    var fieldExists = this.getField('COLUMN');
    if (fieldExists) {
        inputGroup.removeField('COLUMN');
    }
    fetch(dataUrl + '/' + index + '/header').then(function(response) {
        return response.json();
    }).then(function(resjson) {
        if (index != undefined && index != '(None)') {
            inputGroup.appendField(new Blockly.FieldDropdown(resjson['headers']), 'COLUMN');
        }
    });
  }
};
