import { fetchNodeApp } from '@/api';
import cloudbase from '@cloudbase/js-sdk';
import { useEffect, useState } from 'react';

const Index = () => {
  const [app, setApp] = useState<any>(null);

  const init = async () => {
    const instance = cloudbase.init({
      env: 'sam-ai-fe-3gkemo9bf0f2a730',
      clientId: 'AAU5PwABUzQtw1TxcxU',
    });
    setApp(instance);
    const auth = instance.auth();
    await auth.signInAnonymously();
    const user = await auth.getCurrentUser();
    console.log(user, 'user');
  };

  useEffect(() => {
    init();
  }, []);

  const onNodeApp = async () => {
    try {
      const result = await fetchNodeApp({ id: 10086, sex: 'female' });
      console.log(result);
    } catch (err) {
      console.log(err, 'err');
    }
  };

  const onNodeAppByTcb = async () => {
    const result = await app.callFunction({
      name: 'node-app',
      data: { id: 10086, sex: 'female' },
    });
    console.log(result);
  };

  const getDb = async () => {
    const db = app.database();
    const samDb = db.collection('sam-ai');
    const result = await samDb
      .where({
        username: 'sxt',
      })
      .get();
    console.log(result);
  };

  const getDbByFunction = async () => {
    const result = await app.callFunction({
      name: 'get-username-db',
      data: { value: 'sxt' },
    });
    console.log(result, 'result');
  };

  return (
    <div>
      <button type="button" onClick={onNodeApp}>
        get cb
      </button>
      <button type="button" onClick={onNodeAppByTcb}>
        get cb by tcb
      </button>
      <button type="button" onClick={getDb}>
        get db
      </button>
      <button type="button" onClick={getDbByFunction}>
        get db by callFunction
      </button>
    </div>
  );
};

export default Index;
