import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'npm',
  proxy: {
    '/api': {
      target:
        'https://sam-ai-fe-3gkemo9bf0f2a730-1317887340.ap-shanghai.app.tcloudbase.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
