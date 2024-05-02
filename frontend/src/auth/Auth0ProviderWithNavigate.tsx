import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
  const redirecturi = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirecturi) {
    throw new Error("UNABLE TO LOGIN ");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirecturi }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
