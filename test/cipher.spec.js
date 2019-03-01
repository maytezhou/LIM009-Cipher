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
  it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXY" para "CDEFGHIJKLMNOPQRSTUVWXYZ" con offset -1', () => {
    assert.equal(cipher.encode("CDEFGHIJKLMNOPQRSTUVWXYZ", -1), "BCDEFGHIJKLMNOPQRSTUVWXY");   
  });
  it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXY" para "cdefghijklmnopqrstuvwxyz" con offset -1', () => {
    assert.equal(cipher.encode("cdefghijklmnopqrstuvwxyz", -1), "BCDEFGHIJKLMNOPQRSTUVWXY");   
  });
  it('debería retornar "Z" para "A" con offset -1', () => {
    assert.equal(cipher.encode("A", -1), "Z");   
  });
  it('debería retornar "Z" para "B" con offset -2', () => {
    assert.equal(cipher.encode("B", -2), "Z");   
  });
  it('debería retornar "Z" para "C" con offset -3', () => {
    assert.equal(cipher.encode("C", -3), "Z");   
  });
  it('debería retornar "Z" para "A" con offset -27', () => {
    assert.equal(cipher.encode("A", -27), "Z");   
  });
  it('debería retornar "Z" para "B" con offset -28', () => {
    assert.equal(cipher.encode("B", -28), "Z");   
  });
  it('debería retornar "Z" para "C" con offset -29', () => {
    assert.equal(cipher.encode("C", -29), "Z");   
  });
  it('debería retornar "Z" para "Y" con offset -25', () => {
    assert.equal(cipher.encode("Y", -25), "Z");   
  });
  it('debería retornar "Z" para "Z" con offset -26', () => {
    assert.equal(cipher.encode("Z", -26), "Z");   
  });
  it('debería retornar "A" para "B" con offset -1', () => {
    assert.equal(cipher.encode("B", -1), "A");   
  });
  it('debería retornar "A" para "Z" con offset -25', () => {
    assert.equal(cipher.encode("Z", -25), "A");   
  });
  it('debería retornar "A" para "A" con offset -26', () => {
    assert.equal(cipher.encode("A", -26), "A");   
  });
  it('debería retornar "A" para "B" con offset -1', () => {
    assert.equal(cipher.encode("B", -1), "A");   
  });
  it('debería retornar "A" para "C" con offset -2', () => {
    assert.equal(cipher.encode("C", -2), "A");   
  });
  it('debería retornar "A" para "Z" con offset -25', () => {
    assert.equal(cipher.encode("Z", -25), "A");   
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

  it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXY" para "CDEFGHIJKLMNOPQRSTUVWXYZ" con offset 1', () => {
    assert.equal(cipher.encode("CDEFGHIJKLMNOPQRSTUVWXYZ", 1), "BCDEFGHIJKLMNOPQRSTUVWXY");   
  });
  it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXY" para "cdefghijklmnopqrstuvwxyz" con offset 1', () => {
    assert.equal(cipher.encode("cdefghijklmnopqrstuvwxyz", 1), "BCDEFGHIJKLMNOPQRSTUVWXY");   
  });
  it('debería retornar "Z" para "A" con offset 1', () => {
    assert.equal(cipher.encode("A", 1), "Z");   
  });
  it('debería retornar "Z" para "B" con offset 2', () => {
    assert.equal(cipher.encode("B", 2), "Z");   
  });
  it('debería retornar "Z" para "C" con offset 3', () => {
    assert.equal(cipher.encode("C", 3), "Z");   
  });
  it('debería retornar "Z" para "A" con offset 27', () => {
    assert.equal(cipher.encode("A", 27), "Z");   
  });
  it('debería retornar "Z" para "B" con offset 28', () => {
    assert.equal(cipher.encode("B", 28), "Z");   
  });
  it('debería retornar "Z" para "C" con offset 29', () => {
    assert.equal(cipher.encode("C", 29), "Z");   
  });
  it('debería retornar "Z" para "Y" con offset 25', () => {
    assert.equal(cipher.encode("Y", 25), "Z");   
  });
  it('debería retornar "Z" para "Z" con offset 26', () => {
    assert.equal(cipher.encode("Z", 26), "Z");   
  });
  it('debería retornar "A" para "B" con offset 1', () => {
    assert.equal(cipher.encode("B", 1), "A");   
  });
  it('debería retornar "A" para "Z" con offset 25', () => {
    assert.equal(cipher.encode("Z", 25), "A");   
  });
  it('debería retornar "A" para "A" con offset 26', () => {
    assert.equal(cipher.encode("A", 26), "A");   
  });
  it('debería retornar "A" para "B" con offset 1', () => {
    assert.equal(cipher.encode("B", 1), "A");   
  });
  it('debería retornar "A" para "C" con offset 2', () => {
    assert.equal(cipher.encode("C", 2), "A");   
  });
  it('debería retornar "A" para "Z" con offset 25', () => {
    assert.equal(cipher.encode("Z", 25), "A");   
  });
});
});