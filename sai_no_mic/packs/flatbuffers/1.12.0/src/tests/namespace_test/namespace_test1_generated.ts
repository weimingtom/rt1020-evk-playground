// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum {number}
 */
export namespace NamespaceA.NamespaceB{
export enum EnumInNestedNS{
  A= 0,
  B= 1,
  C= 2
};
}

/**
 * @constructor
 */
export namespace NamespaceA.NamespaceB{
export class TableInNestedNS {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TableInNestedNS
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TableInNestedNS {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TableInNestedNS= obj
 * @returns TableInNestedNS
 */
static getRootAsTableInNestedNS(bb:flatbuffers.ByteBuffer, obj?:TableInNestedNS):TableInNestedNS {
  return (obj || new TableInNestedNS()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TableInNestedNS= obj
 * @returns TableInNestedNS
 */
static getSizePrefixedRootAsTableInNestedNS(bb:flatbuffers.ByteBuffer, obj?:TableInNestedNS):TableInNestedNS {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TableInNestedNS()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
foo():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_foo(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTableInNestedNS(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param number foo
 */
static addFoo(builder:flatbuffers.Builder, foo:number) {
  builder.addFieldInt32(0, foo, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTableInNestedNS(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createTableInNestedNS(builder:flatbuffers.Builder, foo:number):flatbuffers.Offset {
  TableInNestedNS.startTableInNestedNS(builder);
  TableInNestedNS.addFoo(builder, foo);
  return TableInNestedNS.endTableInNestedNS(builder);
}

/**
 * @returns TableInNestedNST
 */
unpack(): TableInNestedNST {
  return new TableInNestedNST(
    this.foo()
  );
};

/**
 * @param TableInNestedNST _o
 */
unpackTo(_o: TableInNestedNST): void {
  _o.foo = this.foo();
};
}

export class TableInNestedNST {
/**
 * @constructor
 * @param number foo
 */
constructor(
  public foo: number = 0
){};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return NamespaceA.NamespaceB.TableInNestedNS.createTableInNestedNS(builder,
    this.foo
  );
};
}
}
/**
 * @constructor
 */
export namespace NamespaceA.NamespaceB{
export class StructInNestedNS {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns StructInNestedNS
 */
__init(i:number, bb:flatbuffers.ByteBuffer):StructInNestedNS {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
a():number {
  return this.bb!.readInt32(this.bb_pos);
};

/**
 * @param number value
 * @returns boolean
 */
mutate_a(value:number):boolean {
  this.bb!.writeInt32(this.bb_pos + 0, value);
  return true;
};

/**
 * @returns number
 */
b():number {
  return this.bb!.readInt32(this.bb_pos + 4);
};

/**
 * @param number value
 * @returns boolean
 */
mutate_b(value:number):boolean {
  this.bb!.writeInt32(this.bb_pos + 4, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 * @param number a
 * @param number b
 * @returns flatbuffers.Offset
 */
static createStructInNestedNS(builder:flatbuffers.Builder, a: number, b: number):flatbuffers.Offset {
  builder.prep(4, 8);
  builder.writeInt32(b);
  builder.writeInt32(a);
  return builder.offset();
};


/**
 * @returns StructInNestedNST
 */
unpack(): StructInNestedNST {
  return new StructInNestedNST(
    this.a(),
    this.b()
  );
};

/**
 * @param StructInNestedNST _o
 */
unpackTo(_o: StructInNestedNST): void {
  _o.a = this.a();
  _o.b = this.b();
};
}

export class StructInNestedNST {
/**
 * @constructor
 * @param number a
 * @param number b
 */
constructor(
  public a: number = 0,
  public b: number = 0
){};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return NamespaceA.NamespaceB.StructInNestedNS.createStructInNestedNS(builder,
    this.a,
    this.b
  );
};
}
}