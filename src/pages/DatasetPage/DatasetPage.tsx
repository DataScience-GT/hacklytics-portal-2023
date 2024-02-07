import React, { FC } from "react";
import styles from "./DatasetPage.module.scss";

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
} from "@aws-amplify/ui-react";

interface DatasetPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const DatasetPage: FC<DatasetPageProps> = ({ user, signOut }) => (
  <div className={styles.DatasetPage}>
    <Flex direction={"column"} padding="medium" alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Datasets
        </Heading>
        <Text marginBottom={"1em"}>Optional datasets to try working with.</Text>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell as="th">Track</TableCell>
              <TableCell as="th">Datasets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.DatasetTableBody}>
            <TableRow>
              <TableCell>Sports</TableCell>
              <TableCell>
                <ul>
                  <li>
                    <a href="https://www.kaggle.com/datasets/abecklas/fifa-world-cup" target={"_blank"} rel="noreferrer">
                      FIFA World Cup Dataset
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/datasets/dansbecker/nba-shot-logs" target={"_blank"} rel="noreferrer">
                      NBA Shot Logs
                    </a>{" "}from the 2014-2015 season
                  </li>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/cjgdev/formula-1-race-data-19502017"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Formula 1 Race Data
                    </a>{" "}
                    from 1950 to 2017
                  </li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Healthcare</TableCell>
              <TableCell>
                <ul>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/allen-institute-for-ai/CORD-19-research-challenge"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      COVID-19 Open Research Dataset
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/maheshdadhich/us-healthcare-data"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      US Healthcare Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/amandam1/breastcancerdataset"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Breast Cancer Dataset
                    </a>
                  </li>
                  <br />
                  <Text>Other Dataset Resources:</Text>
                  <li>
                    <a
                      href="https://www.childhealthdata.org/home"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      National and state-level data on child health
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hints.cancer.gov/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Health Information National Trends Survey (HINTS) Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bigcitieshealthdata.org/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Big Cities Health Datasets
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Generative AI</TableCell>
              <TableCell>
                <ul>
                  <li>
                    <a
                      href="https://defined.ai/dataset/stem-question-answer-pairs-dataset-for-large-language-models"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      STEM Q&A Pairs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://defined.ai/dataset/healthcare-prompt-and-response-data"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Healthcare Prompt and Response Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://defined.ai/dataset/general-knowledge-prompt-and-response"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      General Knowledge Prompt and Response Data
                    </a>
                  </li>
                  <br />
                  <Text>Other Dataset Resources:</Text>
                  <li>
                    <a
                      href="https://guides.library.cmu.edu/machine-learning"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Carnegie Mellon: Open Source AI Datasets
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Finance</TableCell>
              <TableCell>
                <ul>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/maharshipandya/-cryptocurrency-historical-prices-dataset"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Cryptocurrency Historical Prices Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/paultimothymooney/stock-market-data"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Stock Market Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kaggle.com/datasets/unitednations/international-financial-statistics"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      International Financial Datasets
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </View>
    </Flex>
  </div>
);

export default DatasetPage;
