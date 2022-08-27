export default function product(axios: any) {

  async function getProducts(filter: any = {}, sort: any = {}, paginate: any) {
    try {
      const body = {
        filter,
        sort,
        lang: "en_us",
        pagination: paginate,
      }
      const res = await axios.post('/product/products', body);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/product] getProducts', e);
      throw e;
    }
    return null;
  };

  async function getProduct(id: string) {
    try {
      const body = {
        lang: "en_us",
      }
      const res = await axios.post(`/product/${id}`, body);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/product] getProductByID', e);
      throw e;
    }
    return null;
  };

  return {
    getProducts,
    getProduct,
  }
}