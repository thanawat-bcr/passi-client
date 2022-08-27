export default function address(axios: any) {

  async function getAddresses() {
    try {
      const res = await axios.get('/address');
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] getAddresses', e);
      throw e;
    }
    return [];
  }

  async function getAddress(id: any) {
    try {
      const res = await axios.get(`/address/${id}`);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] getAddress', e);
      throw e;
    }
    return null;
  }

  async function getProvinces() {
    try {
      const res = await axios.get(`/address/provinces`);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] getProvinces', e);
      throw e;
    }
    return [];
  }

  async function getDistricts(province: String) {
    try {
      const res = await axios.get(`/address/district/${province}`);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] getDistricts', e);
      throw e;
    }
    return [];
  }

  async function createAddress(address: any) {
    try {
      const res = await axios.post(`/address/create`, address);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] createAddress', e);
      throw e;
    }
    return null;
  }

  async function updateAddress(address: any) {
    try {
      const res = await axios.post(`/address/update`, address);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] updateAddress', e);
      throw e;
    }
    return null;
  }

  async function deleteAddress(id: any) {
    try {
      const res = await axios.post(`/address/delete`, {
        id,
      });
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/address] deleteAddress', e);
      throw e;
    }
    return null;
  }

  return {
    getAddresses,
    getAddress,
    getProvinces,
    getDistricts,
    createAddress,
    updateAddress,
    deleteAddress,
  }
}