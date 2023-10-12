
const info = async (parent, args, context) => {
  return "no info"
}

const {produits}=require('./Produit')
module.exports = {
  info,
  produits
}
