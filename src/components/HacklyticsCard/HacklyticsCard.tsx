import { FC } from "react";
import styles from "./HacklyticsCard.module.scss";

// import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
// import { API } from "aws-amplify";

import { Badge, Card, Heading, Loader, Text } from "@aws-amplify/ui-react";
// import { getAdminSettings } from "../../graphql";

interface HacklyticsCardProps {
  loading?: boolean;
  access?: boolean;
}

const HacklyticsCard: FC<HacklyticsCardProps> = ({ loading, access }) => {
  // const [loading, setLoading] = React.useState(true);
  // const [status, setStatus] = React.useState("Unprocessed");
  // const [statusColor, setStatusColor] = React.useState(false);

  // useEffect(() => {
  //   // load admin settings
  //   loadAdminSettings(() => {
  //     setLoading(false);
  //   });
  // }, []);

  // const loadAdminSettings = async (callback?: () => void) => {
  //   if (!user) {
  //     return;
  //   }
  //   const res: any = await API.graphql({
  //     query: getAdminSettings,
  //     variables: {
  //       id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
  //     },
  //     authMode: "AMAZON_COGNITO_USER_POOLS",
  //   });
  //   let adminSettings = res.data.getAdminSettings;

  //   // check if user is registered
  //   if (
  //     adminSettings &&
  //     adminSettings.participantEmails &&
  //     user.attributes &&
  //     user.attributes.email &&
  //     adminSettings.participantEmails.includes(user.attributes.email)
  //   ) {
  //     setStatus("Confirmed");
  //     setStatusColor(true);
  //   } else {
  //     setStatus("Unconfirmed");
  //     setStatusColor(false);
  //   }
  //   if (callback) callback();
  // };

  return (
    <div className={styles.HacklyticsCard} data-testid="HacklyticsCard">
      <Card padding="medium" variation="outlined">
        <Heading level={4}>Hacklytics 2025</Heading>
        <Text>February 21-23</Text>
        <Text>
          Your status:{" "}
          {loading ? (
            <Badge>
              <Loader />
            </Badge>
          ) : access ? (
            <Badge variation="success">Confirmed</Badge>
          ) : (
            <Badge>Unprocessed</Badge>
          )}
        </Text>
      </Card>
    </div>
  );
};

export default HacklyticsCard;
