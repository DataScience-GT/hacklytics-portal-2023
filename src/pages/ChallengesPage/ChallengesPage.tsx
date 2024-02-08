import React, { FC } from "react";
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
  ["/nsa", 0],
  ["/assurant", 1],
  ["/archetypeai", 2],
  ["/elevance", 3],
  ["/traversaalai", 3],
]);

const ChallengesPage: FC<ChallengesPageProps> = ({ user, signOut }) => (
  <div className={styles.ChallengesPage}>
    <Flex direction={"column"} padding="medium" alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Challenges
        </Heading>
        <Text marginBottom={"2em"}>You may submit to up to two challenges.</Text>
        <Tabs 
          spacing="relative" 
          defaultIndex={ChallengesTabMap.get(window.location.pathname) ?? 0} 
          grow={1}
          onChange={(index: string | number) => {
            let ChallengesTabMapRev = Array.from(ChallengesTabMap.keys());
            let i = parseInt(index as string);
            window.history.pushState({}, "Challenge", ChallengesTabMapRev[i]);
          }}
          width={"70%"}
        >
          <TabItem title="National Security Agency" width="20%">
            <Heading marginTop={"1em"} level={4}>NSA Cybersecurity Anomaly Detection Challenge</Heading>
            <Heading marginTop={"1em"} level={5}>Scenario</Heading>
            <Text>You are in charge of detecting anomalous logins, domains, and IPs to defend a company and a college campus.</Text>
            <Heading marginTop={"1em"} level={5}>Overview</Heading>
            <Text>
              There are 3 challenges of increasing difficulty. The last challenge will tie break on score and efficiency.
              Your mission is to: Determine which logins, domains, and IP addresses are anomalous to answer the guided questions. 
              (Each challenge is independent of each other.)
            </Text>
            <Heading level={5} marginTop={"1em"}>The Challenges</Heading>
            <Text>
              1. Given a company's login and logout events, determine which users are working weird shifts or whose account 
              become active after they're no longer with the company.
              <br></br>
              2. Given the DNS lookups from a college campus, determine which domains and hosts exhibit odd behaviors.
              <br></br>
              3. Given the netflow for SSH connections into a campus, determine friend from foe.
            </Text>
            <Heading level={5} marginTop={"1em"}>How to Register</Heading>
            <Text>
              1. Navigate to <a href="https://100.25.103.10/" target="_blank">this link</a>.
              <br></br>
              2. Register using an email you have access to in case we need to reach out.
              <br></br>
              3. Create or join a team.
              <br></br>
              4. Navigate to the "Challenges" tab to begin solving!
            </Text>
            <Heading level={5} marginTop={"1em"}>Prizes (team): 1st: $500. 2nd: $300. 3rd: $200. 
            $80 swag.</Heading>
          </TabItem>

          <TabItem title="Assurant" width="10%">
            <Heading marginTop={"1em"} level={4}>Assurant Challenge</Heading>
            <Heading marginTop={"1em"} level={5}>Challenge 1 – AI Driven House Assessment</Heading>
            <Text>
              Implement Multi-Mode Generative AI technology to evaluate the health of a property through image analysis and 
              feature examination. This project aims to effectively distill critical information, presenting a clear summary of 
              a house's overall state and specific issues.
            </Text>
            <Text marginTop={"1em"}>Additionally, the project will focus on:</Text>
            <Text>
              1. Summarizing the overall health of the house using photographic and text data.
              <br></br>
              2. Promptly identifying and diagnosing immediate structural or functional concerns.
              <br></br>
              3. Predicting and highlighting potential issues likely to arise within a 3-6 month timeframe.
              <br></br>
              4. Generating the top three insights as tailored maintenance and protection recommendations for homeowners, 
                based on the individual condition of their house.
            </Text>
            <Heading marginTop={"1em"} level={5}>Challenge 2 – Insuring the Future: AI-Driven Drone Insurance Landscape</Heading>
            <Text marginBottom={"1em"}>
              As an insurer specializing in drone coverage, you are tasked with evaluating the drone market's growth sectors and 
              identifying potential risks for personal and commercial drones. Your analysis should encompass one or multiple of the 
              following areas:
            </Text>
            <Text>
              1. Market Analysis: Investigate market trends, price elasticity, and sensitivity across various customer segments, including 
                categories and geographical locations.
              <br></br>
              2. Cost Analysis: Conduct a comprehensive analysis of the cost structure for different drone categories.
              <br></br>
              3. Risk Assessment: Identify and evaluate the most common risks and their consequences for drones, along with the Lifetime Value 
                (LTV) of various drone categories.
              <br></br>
              4. Environmental Impact Study: Assess the CO2 emissions associated with each drone category.
            </Text>
            <Text marginTop={"1em"}>
              Furthermore, develop a Machine Learning solution for rapid insight generation. The insights can be descriptive 
              analytics or predictive analytics. The creation of an API or Microservice for proactive insight delivery would be 
              advantageous. Finally, devise an Optimal Strategy for initiating drone insurance in the market, taking into account 
              the aforementioned factors. A Mathematical Model with Optimal Solution is a bonus.
            </Text>

            <Heading level={5} marginTop={"1em"}>Prizes: 1st: Job interview for all team members. $1200 plaque. $200 swag. 2nd: Job interview for one member. 
            $80 swag.</Heading>
          </TabItem>

          <TabItem title="Archetype AI" width="10%">
            <Heading marginTop={"1em"} level={4}>Archetype AI Challenge</Heading>
            <Heading marginTop={"1em"} level={5}>Multimodal AI Challenge</Heading>
            <Text>
              Archetype AI has built a multimodal AI foundation model that fuses real time sensor data (video, audio, radar, 
              time series) and natural language to reason about the physical world and discover hidden insights. This pre-trained 
              foundational model makes it possible for developers to rapidly build physical AI applications. For this challenge,
              build a camera-based physical AI application to uncover something in the world around you.
              
              Submit your results in any form.
            </Text>
            <Heading level={5} marginTop={"1em"}>Prizes (team): 1st: $400. 2nd: $100.</Heading>
          </TabItem>

          <TabItem title="Elevance Healthcare" width="20%">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell as="th" width={"10%"}>Theme</TableCell>
                  <TableCell as="th" width={"20%"}>Challenge Statement</TableCell>
                  <TableCell as="th" width={"40%"}>Description</TableCell>
                  <TableCell as="th">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Gen AI</TableCell>
                  <TableCell>Build Text to SQL translation using generative AI.</TableCell>
                  <TableCell>
                    Develop a model using any opensource LLM.
                    <ul>
                      <li>Use clear instructions — simple and straightforward natural language prompts are easier for 
                        the LLM to comprehend and translate.</li>
                      <li>Provide sufficient context — the LLM needs to understand the user is asking for an SQL query and 
                          details about the database schema like table and column names.</li>
                      <li>Include examples — providing a few sample natural language prompt and SQL query pairs can help guide 
                          the LLM to generate queries in the right syntax.</li>
                      <li>Leverage RAG (Retrieval Augmented Generation) — retrieving relevant sample natural language prompt and 
                        SQL query pairs can improve accuracy.</li>
                    </ul>
                  </TableCell>
                  <TableCell>English will be the new SQL. Analyze Enterprise Data in a More Intuitive and Interactive Way with the 
                    generative AI model. Business users can generate analytics without a dependency on IT Teams.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gen AI</TableCell>
                  <TableCell>Develop a solution using generative AI that synthesizes comprehensive and contextually accurate clinical notes 
                    from fragmented electronic health records (EHR) data.</TableCell>
                  <TableCell>
                    When an individual’s health record is stitched together from various sources from where an individual 
                    receives care or generates signal about one’s health, it enhances communication and decision making among 
                    healthcare providers, ensuring a more holistic view of the patient’s medical history. Develop a solution 
                    that intelligently summarizes and renders an individual’s exhaustive medical history for streamlined and 
                    accelerated access and understanding. The solution may address any part of the provider EHR workflow, 
                    including documentation or chart review, or both.
                  </TableCell>
                  <TableCell>
                    Clinicians spend an average of 16 minutes on each patient at the time of each encounter for chart 
                    review (33%), documentation (24%) and ordering (17%). Novel techniques in generative AI have the capacity to
                    accelerate both clinically accurate and semantic understanding of prior records or generate new documentation 
                    based upon an encounter. 

                    Streamline information exchange, improve continuity of care, increase efficiency in healthcare delivery, 
                    reduce administrative burden on clinicians to allow for more impactful interaction with the patient.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Heading level={5} marginTop={"1em"}>Prizes: 1st: Job interview for all team members. 2nd: $200 swag. 3rd: $200 swag.</Heading>
          </TabItem>

          <TabItem title="Traversaal AI" width="10%">
          <Heading marginTop={"1em"} level={4}>Traversaal AI</Heading>
            <Text>
              Link to full challenge - <a href="https://huggingface.co/traversaal-ai-hackathon" target="_blank">here</a>.
            </Text>
            <Heading marginTop={"1em"} level={5}>Challenge Overview</Heading>
            <Text>
              Traversaal.ai is thrilled to host a cutting-edge hackathon that challenges participants across three progressive 
              levels, each designed to push the boundaries of AI-driven hotel search and recommendation systems. With a focus on 
              enhancing user experiences and leveraging advanced models, the hackathon unfolds in three distinct levels.
            </Text>
            <Heading marginTop={"1em"} level={5}>Data Overview</Heading>
            <Text>
              Participants will be working with a comprehensive dataset comprising hotel information across five vibrant cities. 
              Each city dataset encompasses 30 hotels, with approximately 40 reviews for each hotel. The dataset includes various 
              attributes, such as hotel names, descriptions, images, price ranges, ratings, reviews, and location details.
            </Text>
            <Heading level={5} marginTop={"1em"}>Hackathon Level 1: Semantic Hotel Search RAG System</Heading>
            <Text>
              Objective: Build a RAG (Retrieval-Augmented Generation) based system using Qdrant as Vector db, that empowers users 
              to input semantic queries about the hotels they are searching for. The system should not only retrieve relevant hotels 
              in the corresponding city but also utilize a decoder model to explain why a particular hotel matches their preferences.
            </Text>
            <Heading level={5} marginTop={"1em"}>Hackathon Level 2: Integration with Traversaal AI Ares API</Heading>
            <Text>
              Objective: Augment the Level 1 RAG model by integrating Traversaal.ai's Ares API, which performs real-time internet 
              searches. Participants are encouraged to enhance their RAG applications by incorporating relevant details about hotels 
              or locations obtained dynamically through the Ares API. E.g. “food near these hotels”, “things to do in this area” or “
              articles/blogs about the hotel not available in the dataset”. Participants can utilize this api endpoint by signing up at:
              api.traversaal.ai and get access to 100 web searches for free per user - no credit card needed.
            </Text>
            <Heading level={5} marginTop={"1em"}>Hackathon Level 3: Conversation Chatbot</Heading>
            <Text>
              Objective: Develop a conversational style chatbot capable of engaging in multiple conversations with users 
              about their hotel preferences. The chatbot should seamlessly invoke OpenAI functions to generate RAG outputs. 
              Additionally, participants are expected to leverage the Ares API endpoint within the chatbot to provide users 
              with real-time information.
            </Text>
            <Heading level={5} marginTop={"1em"}>Prizes (team): 1st: $500. 2nd: $250 swag. 3rd: $150 swag.</Heading>
          </TabItem>
        </Tabs>
      </View>
    </Flex>
  </div>
);

export default ChallengesPage;
