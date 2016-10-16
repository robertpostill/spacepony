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

  leg.position.x = positionX
  leg.position.y = positionY
  leg.position.z = positionZ

  return leg;

}
