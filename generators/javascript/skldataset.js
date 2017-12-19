/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.skldataset');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['skldataset_import'] = function(block) {
  var dataset_name = block.getFieldValue('DATASET_NAME');
  var dataset_column = block.getFieldValue('COLUMN');
  // TODO:
  var code = '[' + block.VALUE.join(',') + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
