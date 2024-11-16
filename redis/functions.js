export default async function getProducts( productsCode ) {
    const productList = [];
    for (let productCode in productsCode) {
        productList.push(await redis.getAll(productCode));
    }
    console.log(productList);

    return productList;
}