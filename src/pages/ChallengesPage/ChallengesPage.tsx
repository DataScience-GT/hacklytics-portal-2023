import React, { FC, useEffect, useState } from "react";
import styles from "./ChallengesPage.module.scss";

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

interface ChallengesPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ChallengesTabMap = new Map<string, number>([
  ["/create-x", 4],
  ["/assurant", 1],
  ["/growth-factor-ai", 2],
  ["/capital-one", 3],
  ["/amazon", 0],
  ["/mlh", 5],
]);

const ChallengesPage: FC<ChallengesPageProps> = ({ user, signOut }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className={styles.ChallengesPage}>
      <Flex direction={"column"} padding="medium" alignItems={"center"}>
        <View width={"85%"}>
          <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
            Challenges
          </Heading>
          <Text marginBottom={"2em"}>
            You may submit to up AS MANY challenges as you'd like (update).
          </Text>
          <Tabs
            spacing="relative"
            defaultIndex={ChallengesTabMap.get(window.location.pathname) ?? 0}
            grow={1}
            onChange={(index: string | number) => {
              let ChallengesTabMapRev = Array.from(ChallengesTabMap.keys());
              let i = parseInt(index as string);
              window.history.pushState({}, "Challenge", ChallengesTabMapRev[i]);
            }}
            width={isMobile ? "100%" : "70%"}
          >
            <TabItem title="Amazon" width="10em">
              <Heading marginTop={"1em"} level={4}>
                Best Use of AWS
              </Heading>
              <Heading marginTop={"1em"} level={5}>
                Scenario
              </Heading>
              <Text>
                In this challenge, you are tasked with harnessing the full power
                of AWS to solve real-world problems. Design, build, and deploy
                an innovative solution that showcases the most effective and
                creative use of Amazon’s cloud services.
              </Text>
            </TabItem>

            <TabItem title="Assurant" width="10em">
              <Heading marginTop={"1em"} level={4}>
                Challenge 1 – Revolutionize AI Solutioning with Multimodal
                Agentic AI
              </Heading>
              <Heading marginTop={"1em"} level={5}>
                Scenario
              </Heading>
              <Text>
                AI/ML is transforming InsurTech—from risk assessment to customer
                engagement—but traditional models slow innovation. This
                challenge focuses on integrating Multimodal AI Reasoning to
                simulate human-like decision-making by analyzing images, videos,
                audio, and metadata for rapid, accurate insights.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Your Mission
              </Heading>
              <Text>
                Develop and deploy a Multimodal AI agent that generates
                real-time, actionable insights from raw data in sub-seconds.
                Your solution should deliver descriptive, predictive, or
                prescriptive insights to accelerate AI development and reduce
                time-to-market.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Use Cases
              </Heading>
              <Text>
                <b>1. Fraud Detection in Home Damage Claims:</b>
                <br></br>- Detect fraud patterns from images, videos, audio,
                PDFs, and metadata.
                <br></br>- Flag fraud risks promptly and predict potential
                issues over a 3–6 month period.
                <br></br>- Deliver actionable recommendations for tailored
                homeowner protection.
                <br></br>
                <br></br>
                <b>2. Predictive/Prescriptive Solution (Free Style):</b>
                <br></br>- Build an end-to-end workflow from data ingestion to
                insights.
                <br></br>- Focus on asset protection or social responsibility in
                disaster recovery.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Success Criteria
              </Heading>
              <Text>
                - Achieve 90%+ accuracy in fraud detection or insights
                generation.
                <br></br>- Reduce manual verification time.
                <br></br>- Enhance decision-making with AI-driven insights.
              </Text>

              <Heading marginTop={"2em"} level={4}>
                Challenge 2 – Accelerate Predictive Insights-at-Scale with
                Multi-Agent AI Systems
              </Heading>
              <Heading marginTop={"1em"} level={5}>
                Scenario
              </Heading>
              <Text>
                Traditional predictive models relying on historical 2D data
                often fail to capture real-time market dynamics. This challenge
                invites you to build a Multi-Agent AI System that integrates
                dynamic, unstructured data to deliver accurate, explainable
                recommendations and strategic insights.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Your Mission
              </Heading>
              <Text>
                Develop a Multi-Agent AI System that leverages mathematical
                reasoning, real-time market insights, and macroeconomic
                indicators. Your solution should support smarter decision-making
                in areas such as pricing optimization, demand forecasting,
                inventory management, and risk assessment.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Use Cases
              </Heading>
              <Text>
                <b>1. Pricing Strategy:</b>
                <br></br>- Predict the monthly price of a mobile device (e.g.,
                iPhone 11 Plus 256GB or iPhone 12 Mini 128GB) over the next 6
                months.
                <br></br>
                <br></br>
                <b>2. Insights Reporting (Free Style):</b>
                <br></br>- Create an analytical dashboard from raw data focusing
                on asset protection or disaster recovery.
                <br></br>- Present insights such as anomalies, trends, or
                predictions via clear visualizations or microservices.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Success Criteria
              </Heading>
              <Text>
                - Achieve 90% accuracy in insights generation.
                <br></br>- Develop an LLM-powered platform for trending
                analysis, forecasting, anomaly detection, and root cause
                analysis.
                <br></br>- Automate the end-to-end workflow for development,
                testing, and deployment.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Bonus Opportunities
              </Heading>
              <Text>
                <b>Challenge 1 Bonus:</b> Use GenAI to source additional data.
                <br></br>
                <b>Challenge 2 Bonus:</b> Create a mathematical optimization
                model and develop an API or microservice for seamless insights
                delivery.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Prizes (Team)
              </Heading>
              <Text>
                <br></br>
                <u>First Place:</u>
                <br></br>- Dinner/Lunch with Leadership (post-award)
                <br></br>- Conversation with Leadership
                <br></br>- Internship Interview
                <br></br>- Award Certificate with Frame
                <br></br>- Swag Bag (Assurant-branded: Bag, Bottle, Pen, Screen
                Washer, Band)
                <br></br>- Amazon Gift Card ($75 per person)
                <br></br>
                <br></br>
                <u>Second Place:</u>
                <br></br>- Dinner/Lunch with Leadership (post-award)
                <br></br>- Internship Interview
                <br></br>- Award Certificate with Frame
                <br></br>- Assurant Swag Bag
              </Text>
              <Text marginTop={"1em"}>
                For more information,{" "}
                <a
                  href="https://drive.google.com/file/d/1uhfhDi6gNmIMBLd-jliTF3L344tB5aag/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.Link}
                >
                  click here to view the full challenge
                </a>
                .
              </Text>
            </TabItem>

            <TabItem title="GrowthFactor AI" width="10em">
              <Heading marginTop={"1em"} level={4}>
                Overview
              </Heading>
              <Text>
                Suppose you are a commercial realtor trying to list a
                storefront. Among other factors, a key variable is how{" "}
                <em>visible</em> the storefront is from the street. Of course,
                this is a complicated problem.
              </Text>
              <Text>
                <b>Key Factors:</b>
                <br />
                1. Visibility depends on where the observer is situated.
                <br />
                2. Obstructions and seasonality will change visibility.
                <br />
                3. Visibility from the sidewalk is different than from the
                street.
                <br />
                4. A car driving one direction might have a different view than
                one driving the other way.
                <br />
                5. Storefronts span a range, and different segments may have
                varying visibilities.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                The Challenge
              </Heading>
              <Text>
                Create a function that takes in a store and returns a score
                representing the <strong>total impressions</strong> of the
                storefront. All implementation details are open.
              </Text>
              <Text>
                This is an open-ended problem—there is no "right" answer. The
                winner will be determined by the clarity, creativity, and
                scalability of your solution.
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Evaluation Criteria
              </Heading>
              <Text>
                - Does the solution provide a clear heuristic for calculating
                impressions?
                <br />- Can the solution be feasibly implemented?
              </Text>
              <Heading marginTop={"1em"} level={5}>
                Prizes
              </Heading>
              <Text>
                <b>First Place:</b> Gift cards equivalent to $175 per person (up
                to 4 persons)
                <br />
                <b>Second Place:</b> Gift cards equivalent to $75 per person (up
                to 4 persons)
              </Text>
              <Text marginTop={"1em"}>
                For more information,{" "}
                <a
                  href="https://growthfactor.notion.site/Impressions-Challenge-19cc364a10158055bd83d02f6346c305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.Link}
                >
                  click here to view the full challenge details
                </a>
                .
              </Text>
            </TabItem>

            <TabItem title="Capital One" width="10em">
              <Heading marginTop={"1em"} level={4}>
                Best Financial Hack
              </Heading>
              <Heading marginTop={"1em"} level={5}>
                Scenario
              </Heading>
              <Text>
                Develop a creative solution that leverages financial data and
                technology to tackle real-world challenges. Your hack should
                showcase innovative ways to improve financial services and
                simplify user experiences.
              </Text>
            </TabItem>
            <TabItem title="Create X - VC" width="10em">
              <Heading marginTop={"1em"} level={4}>
                Special Invite for Final Interview to Startup Launch
              </Heading>
              <Heading marginTop={"1em"} level={5}>
                Scenario
              </Heading>
              <Text>
                Selected teams will be invited to a final interview, offering a
                unique opportunity to launch your startup. Show off your
                innovative ideas and business potential in this exclusive
                challenge.
              </Text>
            </TabItem>
            <TabItem title="MLH Awards" width="10em">
              <Heading marginTop={"1em"} level={4}>
                MLH Awards
              </Heading>
              <Text>
                Celebrate excellence in innovation! Projects will be recognized
                for technical achievement, creativity, and overall impact. Aim
                high and let your work shine.
              </Text>
            </TabItem>
          </Tabs>
        </View>
      </Flex>
    </div>
  );
};

export default ChallengesPage;
