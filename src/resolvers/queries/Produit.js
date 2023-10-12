const produits = async (parent, args, context) => {
    try{
    const produit= await context.prisma.produit.findMany()
    return produit
  }
  catch(e){
    console.log("error",e)
    throw new Error(e)
    
  }
}
module.exports = {
    produits
}