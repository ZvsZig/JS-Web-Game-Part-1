const character = (image, leftPos, botPos) => {
let gameAsset = document.createElement('img')
gameAsset.src = image
gameAsset.style.position = 'fixed'
gameAsset.style.left = leftPos
gameAsset.style.bottom = botPos
document.body.append(gameAsset)
}


character('assets/green-character.gif', '100px', '100px')
character('assets/pine-tree.png', '450px', '200px')
character('assets/pillar.png', '350px', '100px')
character('assets/crate.png', '150px', '200px')
character('assets/well.png', '500px', '425px')

const newItem = (pic, x, y) => {
let equipment = document.createElement('img')
equipment.src = pic
equipment.style.position = 'fixed'
equipment.style.left = x
equipment.style.bottom = y
document.body.append(equipment)
    
equipment.addEventListener('dbclick', function(){
    equipment.remove()
}) 
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')