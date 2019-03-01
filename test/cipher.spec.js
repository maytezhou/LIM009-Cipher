describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');  
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');  
    });
    it('debería retornar "Ñ" para "ñ" con offset 33', () => {
      assert.equal(cipher.encode('ñ', 33), 'Ñ');  
    });
    it('debería retornar "Ñ" para "Ñ" con offset 33', () => {
      assert.equal(cipher.encode('Ñ', 33), 'Ñ');  
    });
    it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset 33', () => {
      assert.equal(cipher.encode(" !#$%&()*+,-./0123456789:;<=>?@", 33), " !#$%&()*+,-./0123456789:;<=>?@");  
    });
    it('debería retornar "[]^_`" para "[]^_`" con offset 33', () => {
      assert.equal(cipher.encode('[]^_`', 33), '[]^_`');   
    });
    it('debería retornar "{|}~" para "{|}~" con offset 33', () => {
      assert.equal(cipher.encode("{|}~", 33), "{|}~");   
    });
    it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', -33), 'TUVWXYZABCDEFGHIJKLMNOPQRS');  
    });
    it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "abcdefghijklmnopqrstuvwxyz" con offset -33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', -33), 'TUVWXYZABCDEFGHIJKLMNOPQRS');  
    });
    it('debería retornar "Ñ" para "ñ" con offset -33', () => {
      assert.equal(cipher.encode('ñ', -33), 'Ñ');  
    });
    it('debería retornar "Ñ" para "Ñ" con offset -33', () => {
      assert.equal(cipher.encode('Ñ', -33), 'Ñ');  
  });
  it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset -33', () => {
    assert.equal(cipher.encode(" !#$%&()*+,-./0123456789:;<=>?@", -33), " !#$%&()*+,-./0123456789:;<=>?@");  
  });
  it('debería retornar "[]^_`" para "[]^_`" con offset -33', () => {
    assert.equal(cipher.encode('[]^_`', -33), '[]^_`');   
  });
  it('debería retornar "{|}~" para "{|}~" con offset -33', () => {
    assert.equal(cipher.encode("{|}~", -33), "{|}~");   
  });
  it('debería retornar "¿" para "¿" con offset 33', () => {
    assert.equal(cipher.encode("¿", 33), "¿");   
  });
  it('debería retornar "¿" para "¿" con offset -33', () => {
    assert.equal(cipher.encode("¿", -33), "¿");   
  });
  it('debería retornar "GNKZ" para "HOLA" con offset -1', () => {
    assert.equal(cipher.encode("HOLA", -1), "GNKZ");   
  });
  it('debería retornar "GNKZ" para "hola" con offset -1', () => {
    assert.equal(cipher.encode("hola", -1), "GNKZ");   
  });
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.decode('abcdefghijklmnopqrstuvwxyz', 33), 'TUVWXYZABCDEFGHIJKLMNOPQRS');  
    });
    it('debería retornar "Ñ" para "ñ" con offset 33', () => {
      assert.equal(cipher.decode('ñ', 33), 'Ñ');  
    });
    it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset 33', () => {
      assert.equal(cipher.decode(" !#$%&()*+,-./0123456789:;<=>?@", 33), " !#$%&()*+,-./0123456789:;<=>?@");  
    });
    it('debería retornar "Ñ" para "Ñ" con offset 33', () => {
      assert.equal(cipher.decode('Ñ', 33), 'Ñ');  
    });
    it('debería retornar "[]^_`" para "[]^_`" con offset 33', () => {
      assert.equal(cipher.decode('[]^_`', 33), '[]^_`');   
    });
    it('debería retornar "{|}~" para "{|}~" con offset 33', () => {
      assert.equal(cipher.decode("{|}~", 33), "{|}~");   
    });
    it('debería retornar "OPQRSTUVWXYZABCDEFGHIJKLMN" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset -33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', -33), 'OPQRSTUVWXYZABCDEFGHIJKLMN');  
    });
    it('debería retornar "OPQRSTUVWXYZABCDEFGHIJKLMN" para "hijklmnopqrstuvwxyzabcdefg" con offset -33', () => {
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', -33), 'OPQRSTUVWXYZABCDEFGHIJKLMN');  
    });
  it('debería retornar "Ñ" para "ñ" con offset -33', () => {
    assert.equal(cipher.decode('ñ', -33), 'Ñ');  
  });
  it('debería retornar "Ñ" para "Ñ" con offset -33', () => {
    assert.equal(cipher.decode('Ñ', -33), 'Ñ');  
  });
  it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset -33', () => {
    assert.equal(cipher.decode(" !#$%&()*+,-./0123456789:;<=>?@", -33), " !#$%&()*+,-./0123456789:;<=>?@");  
  });
  it('debería retornar "[]^_`" para "[]^_`" con offset -33', () => {
    assert.equal(cipher.decode('[]^_`', -33), '[]^_`');   
  });
  it('debería retornar "{|}~" para "{|}~" con offset -33', () => {
    assert.equal(cipher.decode("{|}~", -33), "{|}~");   
  });
  it('debería retornar "¿" para "¿" con offset 33', () => {
    assert.equal(cipher.decode("¿", 33), "¿");   
  });
  it('debería retornar "¿" para "¿" con offset -33', () => {
    assert.equal(cipher.decode("¿", -33), "¿");   
  });
  it('debería retornar "I" para "H" con offset -1', () => {
    assert.equal(cipher.decode("H", -1), "I");   
  });
});
});