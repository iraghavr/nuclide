/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @generated
 */

//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var ProcessWatcherMessage = module.exports.ProcessWatcherMessage = function(args) {
  this.kind = null;
  this.data = null;
  this.exitCode = null;
  this.signal = null;
  if (args) {
    if (args.kind !== undefined && args.kind !== null) {
      this.kind = args.kind;
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = args.data;
    }
    if (args.exitCode !== undefined && args.exitCode !== null) {
      this.exitCode = args.exitCode;
    }
    if (args.signal !== undefined && args.signal !== null) {
      this.signal = args.signal;
    }
  }
};
ProcessWatcherMessage.prototype = {};
ProcessWatcherMessage.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.kind = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.data = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BYTE) {
        this.exitCode = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.signal = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ProcessWatcherMessage.prototype.write = function(output) {
  output.writeStructBegin('ProcessWatcherMessage');
  if (this.kind !== null && this.kind !== undefined) {
    output.writeFieldBegin('kind', Thrift.Type.STRING, 1);
    output.writeString(this.kind);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 2);
    output.writeString(this.data);
    output.writeFieldEnd();
  }
  if (this.exitCode !== null && this.exitCode !== undefined) {
    output.writeFieldBegin('exitCode', Thrift.Type.BYTE, 3);
    output.writeByte(this.exitCode);
    output.writeFieldEnd();
  }
  if (this.signal !== null && this.signal !== undefined) {
    output.writeFieldBegin('signal', Thrift.Type.STRING, 4);
    output.writeString(this.signal);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

