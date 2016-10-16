function createHorseBody() {
  var geometry = new THREE.BoxGeometry(2, 1, 5);
  var material = new THREE.MeshBasicMaterial({color: 0x8C5013});
  var body = new THREE.Mesh(geometry, material);

  return body;
}
