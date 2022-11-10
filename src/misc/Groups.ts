import { AmplifyUser } from "@aws-amplify/ui";

const getGroups = (user: AmplifyUser): string[] => {
  return (
    user?.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] ??
    []
  );
};

export default getGroups;
