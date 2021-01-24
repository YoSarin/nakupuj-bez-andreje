const red = '#f00'

function colorMark (node, matchingBrand) {
  const descendants = node.querySelectorAll('*')
  node.style.color = red
  for (const descendant of descendants) {
    descendant.style.color = red
  }
}

module.exports = {
  colorMark
}
