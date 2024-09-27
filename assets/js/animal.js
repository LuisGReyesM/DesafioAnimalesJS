class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get nombre() {
    return this._nombre;
  }

  get edad() {
    return this._edad;
  }

  get img() {
    return this._img;
  }

  get sonido() {
    return this._sonido;
  }

  get comentarios() {
    return this._comentarios;
  }

  set comentarios(nuevosComentarios) {
    this._comentarios = nuevosComentarios;
  }
}

class Leon extends Animal {
  rugir() {
    return `${this._nombre} dice: ${this._sonido}`;
  }
}

class Lobo extends Animal {
  aullar() {
    return `${this._nombre} dice: ${this._sonido}`;
  }
}

class Oso extends Animal {
  grunir() {
    return `${this._nombre} dice: ${this._sonido}`;
  }
}

class Serpiente extends Animal {
  sisear() {
    return `${this._nombre} dice: ${this._sonido}`;
  }
}

class Aguila extends Animal {
  chillar() {
    return `${this._nombre} dice: ${this._sonido}`;
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };