import request from '@/utils/request';
export const fetchNodeApp = (payload: any = {}) => {
  return request.post('/api/node-app', payload, {});
};
