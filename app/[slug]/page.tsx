import { getTaxons, getTaxonsProducts } from "app/apis/taxons-api"

export default async function ProductsCategoryPage({ params }: { params: any }) {
  const { taxons } = await getTaxons();
  const taxon = taxons.find((taxon) => {
    const slugRoute = taxon.permalink.split('/').pop();
    return slugRoute == params.slug;
  });
  
  const taxonId = taxon ? taxon.id : 0
  
  const { products } = await getTaxonsProducts(taxonId);
  console.log('products: ', products);
  
  return (
    <div>Products: {params.slug}</div>
  )
}

