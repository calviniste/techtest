const  createProduit = async (parent, args, context) => {

    const { nom, imageUrl, montant, devise} = args;
    try {
      
      const produit = await context.prisma.produit.create({
        data: {
            nom, imageUrl, montant, devise
        },
      }); 
     
      if (produit) {
        return produit;
      }
    } catch (e) {
      console.log("error",e);
      throw new Error(e);
    }
  };
  
  module.exports = {
    createProduit
  };