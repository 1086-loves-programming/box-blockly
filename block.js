/* —————————————— 自定义积木块设置 —————————————— */
Blockly.defineBlocksWithJsonArray([
  {
    type: "world_say",
    message0: "向所有玩家发送一条信息 %1",
    args0: [
      {
        type: "input_value",
        name: "MESSAGE",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "向所有玩家发送一条消息",
    helpUrl: "",
  },
  {
    "type": "world_projectname",
    "message0": "地图名称",
    "output": "String",
    "colour": 230,
    "tooltip": "地图的名称",
    "helpUrl": "",
  },
  {
    type: "world_url",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "地图URL",
      },
    ],
    output: "String",
    colour: 230,
    tooltip: "地图的URL（也就是地图链接）",
    helpUrl: "",
  },
  {
    type: "world_currentTick",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前Tick计数",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "世界当前的Tick计数",
    helpUrl: "",
  },
  {
    type: "world_entityQuota",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前还可以建造的实体数量",
      },
    ],
    output: "Number",
    colour: 255,
    tooltip: "世界上还可以建造的实体数量",
    helpUrl: "",
  },
  {
    type: "world_worldentitylength",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前存在的实体数量",
      },
    ],
    output: "Number",
    colour: 255,
    tooltip: "世界上当前存在的实体数量",
    helpUrl: "",
  },
  {
    type: "voxels_setid",
    message0: "设置 X %1 Y %2 Z %3 的方块ID为 %4 旋转码为 %5",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "ID",
        text: "127",
      },
      {
        type: "field_dropdown",
        name: "rid",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "放一个方块",
    helpUrl: "",
  },
  {
    type: "voxels_setname",
    message0: "设置 X %1 Y %2 Z %3 的方块名称为 %4 旋转码为 %5",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "ID",
        text: "grass",
      },
      {
        type: "field_dropdown",
        name: "rid",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "放一个方块",
    helpUrl: "",
  },
  {
    type: "voxels_get",
    message0: "读取 x %1 y %2 z %3 的方块，返回方块ID",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
    ],
    output: "Number",
    colour: 120,
    tooltip: "读取地形上的方块，返回方块ID",
    helpUrl: "",
  },
  {
    type: "voxels_Rotation",
    message0: "读取 x %1 y %2 z %3 的方块，返回方块旋转码（0~3）",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
    ],
    output: "Number",
    colour: 120,
    tooltip: "读取地形上的方块，返回方块旋转码（0~3）",
    helpUrl: "",
  },
  {
    type: "voxels_name",
    message0: "将方块ID %1 转换为名称",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "0",
      },
    ],
    output: "String",
    colour: 120,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_id",
    message0: "将方块名称 %1 转换为ID",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "grass",
      },
    ],
    output: "Number",
    colour: 120,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_types",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "所有方块的名称",
      },
    ],
    output: "Array",
    colour: 120,
    tooltip: "返回包含所有方块名称的数组",
    helpUrl: "",
  },
  {
    type: "voxels_typesid",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "所有方块的ID",
      },
    ],
    output: "Array",
    colour: 120,
    tooltip: "返回包含所有方块ID的数组",
    helpUrl: "",
  },
  {
    type: "world_onEntityDestroy",
    message0: "当实体被 %1 时 %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "t",
        options: [
          ["创建", "Create"],
          ["销毁", "Destroy"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "tex",
      },
    ],
    colour: 210,
    tooltip: "当创建或销毁实体时触发的事件",
    helpUrl: "",
  },
  {
    "type": "world_onInteract",
    "message0": "当实体/玩家被 %1 时 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "t",
        "options": [
          [
            "互动",
            "Interact"
          ],
          [
            "点击",
            "Click"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "tex"
      }
    ],
    "colour": 210,
    "tooltip": "当实体/玩家被互动或点击时触发的事件",
    "helpUrl": ""
  },
  {
    "type": "world_onPlayerJoin",
    "message0": "当玩家 %1 地图时 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "t",
        "options": [
          [
            "进入",
            "Join"
          ],
          [
            "离开",
            "Leave"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "tex"
      }
    ],
    "colour": 210,
    "tooltip": "当玩家进入或离开时触发的事件",
    "helpUrl": ""
  },{
    "type": "object_null",
    "message0": "建造一个空字典",
    "inputsInline": true,
    "output": "Object",
    "colour": 260,
    "tooltip": "建造一个空的字典，具体内容可以自己设置",
    "helpUrl": ""
  },{
    "type": "object_set",
    "message0": "设置对象 %1 %2 里的 %3 值为 %4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "object",
        "check": "Object"
      },
      {
        "type": "field_input",
        "name": "key",
        "text": "key"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "设置项",
    "helpUrl": ""
  },{
    "type": "object_get",
    "message0": "获取字典 %1 %2 里的 %3 值",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "object",
        "check": "Object"
      },
      {
        "type": "field_input",
        "name": "key",
        "text": "key"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 260,
    "tooltip": "获取项",
    "helpUrl": ""
  },{
  "type": "object_copy",
  "message0": "将字典 %1 %2 里的所有项复制到 %3 %4 字典里",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "target",
      "check": "Object"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "复制字典里的所有项到另外一个字典里",
  "helpUrl": ""
},{
  "type": "object_inc",
  "message0": "字典 %1 %2 里是否存在 %3 值",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    },
    {
      "type": "field_input",
      "name": "key",
      "text": "key"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 260,
  "tooltip": "判断某个字典是否存在某个项",
  "helpUrl": ""
},{
  "type": "object_geto",
  "message0": "获取字典 %1 %2 的 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    },
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "项数（数字）",
          "length"
        ],
        [
          "所有键（列表）",
          "keys"
        ],
        [
          "所有值（列表）",
          "values"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "Array"
  ],
  "colour": 260,
  "tooltip": "获取字典的项数等数据",
  "helpUrl": ""
},{
  "type": "object_delete",
  "message0": "删除字典 %1 %2 中的 %3 键",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    },
    {
      "type": "field_input",
      "name": "key",
      "text": "key"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "删除字典的某个键值",
  "helpUrl": ""
},{
  "type": "object_freeze",
  "message0": "冻结字典 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "冻结某个字典，冻结后不可以用代码修改，建造，删除它的键值，只能读取",
  "helpUrl": ""
},{
  "type": "object_isfreeze",
  "message0": "字典 %1 是否已冻结",
  "args0": [
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 260,
  "tooltip": "查看某个字典是否被冻结",
  "helpUrl": ""
},{
  "type": "box3_sleep",
  "message0": "等待 %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "object",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "秒",
          "s"
        ],
        [
          "毫秒",
          "ms"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "等待语句",
  "helpUrl": ""
},
]);

Blockly.JavaScript['object_freeze'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Object.freeze(${value_object || "{}"});\n';
  return code;
};
Blockly.JavaScript['box3_sleep'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `await sleep(${dropdown_type=="ms"?value_object:`${value_object}/1000`});\n`;
  return code;
};
Blockly.JavaScript['object_null'] = function(block) {
  return ["{}", Blockly.JavaScript.ORDER_NONE];;
};
Blockly.JavaScript['object_isfreeze'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Object.isFrozen(${value_object || "{}"})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_copy'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Object.assign(${value_object || "{}"},${value_target || "{}"});\n`;
  return code;
};
Blockly.JavaScript['object_delete'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  var code = `delete ${value_object || "{}"}['${text_key}'];\n`;
  return code;
};
Blockly.JavaScript['object_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_object || "{}"}['${text_key}'] = ${value_value};\n`;
  return code;
};
Blockly.JavaScript['object_inc'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  // TODO: Assemble JavaScript into code variable.
  var code = `('${text_key}' in ${value_object || "{}"})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  var code = `${value_object || "{}"}['${text_key}']`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_geto'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');
  if(dropdown_option=="length"){var code = `Object.keys(${value_object || "{}"}).length`;}else{var code = `Object.${dropdown_option}(${value_object || "{}"})`;}
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_say"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "MESSAGE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "world.say(" + value_name + ");\n";
};

Blockly.JavaScript["world_projectname"] = function () {
  return ["world.projectName", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_url"] = function () {
  return ["world.url", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_currentTick"] = function () {
  return ["world.currentTick", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_entityQuota"] = function () {
  return ["world.entityQuota", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_worldentitylength"] = function () {
  return [`world.querySelectorAll("*").length`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_setid"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  var text_ID = block.getFieldValue("ID");
  var text_rID = block.getFieldValue("rid");
  return (
    "voxels.setVoxel(" +
    text_x +
    "," +
    text_y +
    "," +
    text_z +
    "," +
    text_ID +
    "," +
    text_rID +
    ");\n"
  );
};
Blockly.JavaScript["voxels_setname"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  var text_ID = block.getFieldValue("ID");
  var text_rID = block.getFieldValue("rid");
  return (
    "voxels.setVoxel(" +
    text_x +
    "," +
    text_y +
    "," +
    text_z +
    ",'" +
    text_ID +
    "'," +
    text_rID +
    ");\n"
  );
};

Blockly.JavaScript["voxels_get"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  return ["voxels.getVoxelId(" + text_x + "," + text_y + "," + text_z + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_Rotation"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  return ["voxels.getVoxelRotation(" + text_x + "," + text_y + "," + text_z + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_id"] = function (block) {
  var id = block.getFieldValue("ID");
  return ["voxels.id(" + id + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_name"] = function (block) {
  var id = block.getFieldValue("ID");
  return ["voxels.name(" + id + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_types"] = function () {
  return ["voxels.VoxelTypes", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_typesid"] = function () {
  return ["voxels.VoxelTypes.map((x) => {return voxels.id(x)})", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_onEntityDestroy"] = function (block) {
  var id = block.getFieldValue("t");
  var value_name =  Blockly.JavaScript.statementToCode(
    block,
    "tex",
  );
  return `world.onEntity${id}(async({entity})=>{\n    ${value_name}});`;
};


Blockly.JavaScript["world_onPlayerJoin"] = function (block) {
  var id = block.getFieldValue("t");
  var value_name =  Blockly.JavaScript.statementToCode(
    block,
    "tex",
  );
  return `world.onPlayer${id}(async({entity})=>{\n    ${value_name}});`;
};

Blockly.JavaScript["world_onInteract"] = function (block) {
  var id = block.getFieldValue("t");
  var value_name = Blockly.JavaScript.statementToCode(
    block,
    "tex",
  ); 
  return `world.on${id}(async({entity,${id=="Interact"?"targetEntity":"clicker,button,distance,raycast"}})=>{\n    ${value_name}});`;
};
