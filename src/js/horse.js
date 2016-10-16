function createHorseBody() {
  var geometry = new THREE.BoxGeometry(1.5, 1, 5);
  var material = new THREE.MeshBasicMaterial({color: 0x8C5013});
  var body = new THREE.Mesh(geometry, material);

  return body;
}

function createHorseLeg(positionX, positionY, positionZ) {
  var geometry = new THREE.BoxGeometry(0.5, 2, 0.5);
  var material = new THREE.MeshBasicMaterial({color: 0x8C5013});
  var leg = new THREE.Mesh(geometry, material);

  leg.position.x = positionX;
  leg.position.y = positionY;
  leg.position.z = positionZ;

  return leg;

}

function createHorseNeck() {
  var geometry = new THREE.BoxGeometry(0.5, 0.75, 0.5);
  var material = new THREE.MeshBasicMaterial({color: 0x8C5013});
  var neck = new THREE.Mesh(geometry, material);

  neck.position.x = 0;
  neck.position.y = 0.75;
  neck.position.z = 2.25;

  return neck;
}

function createHorseHead() {
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-0.25, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0.25, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0.15, 0));
  geometry.vertices.push(new THREE.Vector3(0, -0.15, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, -0.15));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0.15));

  geometry.faces.push(new THREE.Face3(3, 0, 6));
  geometry.faces.push(new THREE.Face3(3, 6, 2));
  geometry.faces.push(new THREE.Face3(6, 0, 4));
  geometry.faces.push(new THREE.Face3(6, 4, 2));
  geometry.faces.push(new THREE.Face3(3, 2, 5));
  geometry.faces.push(new THREE.Face3(3, 5, 0));
  geometry.faces.push(new THREE.Face3(2, 4, 5));
  geometry.faces.push(new THREE.Face3(5, 4, 0));

  geometry.computeFaceNormals()
  var material = new THREE.MeshLambertMaterial({
      color: 0x8C5013
  });
  var head = new THREE.Mesh(geometry, material);

  return head;
}
