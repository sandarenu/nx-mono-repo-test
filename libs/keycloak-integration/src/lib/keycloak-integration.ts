import Keycloak from 'keycloak-js';

function getKeycloakUrl(): String {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return "http://localhost:8080";
  } else {
      return window.location.origin;
  }
}

export const keycloakConfig = Keycloak({
  url: `${getKeycloakUrl()}/auth`,
  realm: 'SanSoft',
  clientId: 'nx-test'
});
