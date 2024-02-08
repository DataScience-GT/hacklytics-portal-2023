import React, { FC } from "react";
import styles from "./TracksPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import {
  View,
  Heading,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Text,
  Flex,
  TabItem,
  Tabs,
} from "@aws-amplify/ui-react";

interface TracksPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const TracksTabMap = new Map<string, number>([
  ["/sports", 0],
  ["/healthcare", 1],
  ["/genai", 2],
  ["/finance", 3],
]);

const TracksPage: FC<TracksPageProps> = ({ user, signOut }) => (
  <div className={styles.TracksPage}>
    <Flex direction={"column"} padding="medium" alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Tracks
        </Heading>
        <Text marginBottom={"2em"}>You may submit to up to one track.</Text>
        <Tabs 
          spacing="relative" 
          defaultIndex={TracksTabMap.get(window.location.pathname) ?? 0} 
          grow={1}
          onChange={(index: string | number) => {
            let TracksTabMapRev = Array.from(TracksTabMap.keys());
            let i = parseInt(index as string);
            window.history.pushState({}, "Tracks", TracksTabMapRev[i]);
          }}
          width={"70%"}
        >
          <TabItem title="Sports" width="20%" className={styles.TabItem}>
            <Heading level={4} marginBottom={"medium"} marginTop={"medium"}>Sports</Heading>
            <Text marginBottom={"2em"}>
                From historical data and fundamental scorekeeping to algorithmic performance and 
                player statistics, data analytics is an integral part of sports. In this track, you will be working on 
                sports analytics challenges that will take your data science and machine learning skills to the next level.
            </Text>
            <Text>Relevant datasets</Text>
            <Text>
                <a href="https://www.kaggle.com/datasets/abecklas/fifa-world-cup" target={"_blank"} rel="noreferrer" className={styles.Link}>
                    FIFA World Cup Dataset
                </a>
            </Text>
            <Text>
                <a href="https://www.kaggle.com/datasets/dansbecker/nba-shot-logs" target={"_blank"} rel="noreferrer" className={styles.Link}>
                    NBA Shot Logs
                </a>{" "}from the 2014-2015 season
            </Text>
            <Text>
                <a href="https://www.kaggle.com/datasets/cjgdev/formula-1-race-data-19502017" target={"_blank"} rel="noreferrer" className={styles.Link}>
                    Formula 1 Race Data
                </a>{" "}
                from 1950 to 2017
            </Text>
          </TabItem>
          <TabItem title="Healthcare" width="20%" className={styles.TabItem}>
            <Heading level={4} marginBottom={"medium"} marginTop={"medium"}>Healthcare</Heading>
            <Text marginBottom={"2em"}>
                Health data science is a growing field that incorporates health informatics, data science, analytics, and 
                computational modeling to assess large volumes of data from healthcare-related sources. In this track, 
                you will be analyzing some of these datasets to help solve crucial, real-world problems in public health 
                or the biomedical sciences.
            </Text>
            <Text>Relevant datasets</Text>
            <Text>
                <a
                    href="https://www.kaggle.com/datasets/allen-institute-for-ai/CORD-19-research-challenge"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    COVID-19 Open Research Dataset
                </a>
            </Text>
            <Text>
                <a
                    href="https://www.kaggle.com/datasets/maheshdadhich/us-healthcare-data"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    US Healthcare Data
                </a>
            </Text>
            <Text>
                <a
                    href="https://www.kaggle.com/datasets/amandam1/breastcancerdataset"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    Breast Cancer Dataset
                </a>
            </Text>
          </TabItem>
          <TabItem title="Generative AI" width="20%" className={styles.TabItem}>
            <Heading level={4} marginBottom={"medium"} marginTop={"medium"}>Generative AI - Brought to you by Microsoft</Heading>
            <Text marginBottom={"2em"}>
                In this track, participants will delve into the exciting domain of Generative AI, exploring its potential 
                applications. Whether you're interested in creating novel artworks, generating innovative solutions to 
                complex problems, or pushing the boundaries of what AI can create, this track offers a unique opportunity 
                to harness the power of Generative AI. Participants will work on projects with objectives ranging from 
                designing generative models for creative endeavors to solving real-world challenges through innovative 
                AI-powered solutions.
            </Text>
            <Text>Relevant datasets</Text>
            <Text>
                <a
                    href="https://defined.ai/dataset/stem-question-answer-pairs-dataset-for-large-language-models"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    STEM Q&A Pairs
                </a>
            </Text>
            <Text>
                <a
                    href="https://defined.ai/dataset/healthcare-prompt-and-response-data"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    Healthcare Prompt and Response Data
                </a>
            </Text>
            <Text>
                <a
                    href="https://defined.ai/dataset/general-knowledge-prompt-and-response"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                General Knowledge Prompt and Response Data
            </a>
            </Text>
          </TabItem>
          <TabItem title="Finance" width="20%" className={styles.TabItem}>
            <Heading level={4} marginBottom={"medium"} marginTop={"medium"}>Finance</Heading>
            <Text marginBottom={"2em"}>
                The financial industry, which includes both traditional financial institutions as well as fintech companies, 
                deals with large volumes of unique types of data and comes with some peculiarities that other industries don’t 
                share. In this track, you will be working on data science challenges that touch almost every area of finance 
                and banking, such as trading decisions, market forecasting, customer sentiment, and more.
            </Text>
            <Text>Relevant datasets</Text>
            <Text>
                <a
                    href="https://www.kaggle.com/datasets/maharshipandya/-cryptocurrency-historical-prices-dataset"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    Cryptocurrency Historical Prices Data
                </a>
            </Text>
            <Text>
                <a
                    href="https://www.kaggle.com/datasets/paultimothymooney/stock-market-data"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    Stock Market Data
                </a>
            </Text>
            <Text>
                <a
                    href="https://www.kaggle.com/datasets/unitednations/international-financial-statistics"
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.Link}
                >
                    International Financial Datasets
                </a>
            </Text>
          </TabItem>
        </Tabs>
      </View>
    </Flex>
  </div>
);

export default TracksPage;
