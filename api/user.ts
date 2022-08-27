export default function user(axios: any) {

  async function getAuth() {
    try {
      const res = await axios.get('/auth');
      if (res?.status === 200) return true;
    } catch (e) {
      console.error('[api/user] getAuth', e);
      throw e;
    }
    return null;
  }
  
  async function getIsCreated() {
    try {
      const res = await axios.get('/user/isCreated');
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/user] getIsCreated', e);
      throw e;
    }
    return false;
  }

  async function getProfile() {
    try {
      const res = await axios.get('/user/profile');
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/user] getProfile', e);
      throw e;
    }
    return null;
  }
  
  async function updateProfile(user: any) {
    try {
      const res = await axios.post('/user/profile', user);
      console.log(res);
      if (res?.status === 200) return res.data;
    } catch (e) {
      console.error('[api/user] createProfile', e);
      throw e;
    }
    return null;
  }

  return {
    getAuth,
    getIsCreated,
    getProfile,
    updateProfile,
  }
}