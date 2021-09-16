// get env config from process.env or window.env
const getEnv = (name, defaultValue) => {
  if (window.env && window.env[name]) {
    return window.env[name];
  }

  if (defaultValue.includes('REACT_APP')) {
    return;
  }

  return defaultValue;
};

window.envMaps = [
  {
    name: 'REACT_APP_MAIN_API_DOMAIN',
    processValue: '%REACT_APP_MAIN_API_DOMAIN%'
  },
  {
    name: 'REACT_APP_NEXT_PUBLIC_MAIN_API_DOMAIN',
    processValue: '%REACT_APP_NEXT_PUBLIC_MAIN_API_DOMAIN%'
  },
  {
    name: 'REACT_APP_CLIENT_PORTAL_CONFIG_ID',
    processValue: '%REACT_APP_CLIENT_PORTAL_CONFIG_ID%'
  },
  {
    name: 'REACT_APP_HAS_COMPANY',
    processValue: '%REACT_APP_HAS_COMPANY%'
  }
];

for (var i = 0; i < window.envMaps.length; i++) {
  var envMap = window.envMaps[i];

  localStorage.setItem(
    `cp_env_${envMap.name}`,
    getEnv(envMap.name, envMap.processValue)
  );
}
