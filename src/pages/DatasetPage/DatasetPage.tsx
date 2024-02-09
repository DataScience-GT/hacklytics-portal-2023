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
        <Heading level={3} marginTop={"medium"}>
          Datasets
        </Heading>
        <Text marginBottom={"medium"}>Sponsored datasets.</Text>
        <Table marginBottom={"1em"}>
          <TableHead>
            <TableRow>
              <TableCell as="th" width={"25%"}>Dataset</TableCell>
              <TableCell as="th">Price</TableCell>
              <TableCell as="th">Records</TableCell>
              <TableCell as="th" width={"30%"}>About</TableCell>
              <TableCell as="th">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.DatasetTableBody}>
            <TableRow>
              <TableCell>Yahoo Finance business dataset</TableCell>
              <TableCell>$1,411.11</TableCell>
              <TableCell>564.44K</TableCell>
              <TableCell>
                A robust compilation of financial intelligence, the Yahoo Finance Business Dataset 
                delivers a succinct snapshot of diverse companies and their market dynamics. Featuring essential 
                columns such as company identifiers (name and ID), entity classification, and a concise business summary, 
                this dataset equips analysts and investors with a wealth of insights.
              </TableCell>
              <TableCell>
                <a 
                  className={styles.Link} 
                  target="_blank"
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3pt5625bye1pdkt.1707450121087.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLWVhc3QtMSJIMEYCIQDwxGKzaHvXhXpTddEAuJDfYwGJ2brww20qiDQipaFo6AIhALR6cBWlExhOD%2FAhGDPySpvR6WKpjfQHa3fwNznnGlRJKucDCP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIxNjU0NjAzNDYxIgzgFreL%2Bnp32z%2Fwn2cquwPrzaEGzR6bciUkVxMHQFKSAUgQW%2BO4atkF%2BL0i4mXwLk9MsH29iH8tC7AcXu8Kf9rKTQfPftQFUxADVgkoQXEig06fQ8YB9ELebb4JDb3BlzXLmLtHDAnF8PMpdwP5Xnm4XuiD%2FE9HEXz80MVRAE5Box%2FNP94pulGYNcLNiTdf6o%2Br%2FLeGxXkf6x8%2FQtL5asDk%2BBnMTbmN0kIksGIjCfAAwhRNCKcz36ihk6Kk0qe7KNUTJVuER2LrxXGvGctfhkShB2zAuCm%2FhMPuZgo%2FXpZijhS9K2GFNrNh7Pzw70LdVF%2Ffp75nJwnrHyXDtKNMZrBba%2BZTIzJmwXcL4lfz941dUArXVVFfNoOmqv4CBgHHU1Nk9YEariyi2%2Fdc9JUjkXPbsmI%2FPImD8Zm1J6xsCCsQKfH0Q9dFkIN%2FBnoybK2Fg6d%2B1i5jgaR4DY5uEaEjRJk2Bdd6b0gJMTFo3AUUlNzQkhZI1ixEzxpCgDjmcpY7nc1bjdShEDQebaUKrVbyAFSznewWafsOoOGUpV1340sSrBx9%2BWqrRwcJ7h8uqNmUfvufGJbjJbgOuYq0xvoZkIifPFSbP7jrb8H75TCByZauBjqTAuDLqjOIN8rpc%2BJ6y6VDvyIkNi4%2FK9KNSXHbBq6e8HYLXLrNHBLzrAFHDldF48S9lXTNKU%2BhApRromqC3r1q%2FmyVnHziMDKJrdnlL8ON9h7NpD%2Fyr21yJZVD8kd74ArEVGyEdkEosS%2FyVVBYAnR1bdm0wFG5tSXPOlbWqWp2mFjabQV2g9658qgyA%2Bl%2Bb6QTPG0RoQfRw2AkQyZgjvfbx2RP6v4%2BB%2FkKVMaw%2FlVTmy4Tpwn9jMrCDhlR42o%2FBNvFIx6vsIx%2FZwT1eSK1yGSSE6aEcLjm99u2SDtgdd4fngOvs2O7hSws6slLKEWRsPRKS%2Fczoz19WliepeArs%2FlyAEfOeIKgRTGGQdjHyMhgw3t2utV3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T042757Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CZXBJTSE4%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1c0b06f57ab32ca9d3cb3664cab3dfe2b086b2e02308672415585e637ea40cc4"
                >
                  Link
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crunchbase companies information dataset</TableCell>
              <TableCell>$1,632.00</TableCell>
              <TableCell>200.00K</TableCell>
              <TableCell>
                The Crunchbase companies dataset includes over 100 data points per company and contains all the data you need for 
                competitive intelligence and to make informed business-related decisions. The dataset includes all major data points:
                  Overview,
                  Industry,
                  HQ location,
                  Ranking,
                  Company size,
                  Contact details,
                  News,
                  Financials,
                  Investors,
                  Products,
                  Last updated timestamp,
                  and more!
              </TableCell>
              <TableCell>
                <a 
                  className={styles.Link} 
                  target="_blank"
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3tgtd15wuwehypm.1707450291739.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLWVhc3QtMSJIMEYCIQDwxGKzaHvXhXpTddEAuJDfYwGJ2brww20qiDQipaFo6AIhALR6cBWlExhOD%2FAhGDPySpvR6WKpjfQHa3fwNznnGlRJKucDCP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIxNjU0NjAzNDYxIgzgFreL%2Bnp32z%2Fwn2cquwPrzaEGzR6bciUkVxMHQFKSAUgQW%2BO4atkF%2BL0i4mXwLk9MsH29iH8tC7AcXu8Kf9rKTQfPftQFUxADVgkoQXEig06fQ8YB9ELebb4JDb3BlzXLmLtHDAnF8PMpdwP5Xnm4XuiD%2FE9HEXz80MVRAE5Box%2FNP94pulGYNcLNiTdf6o%2Br%2FLeGxXkf6x8%2FQtL5asDk%2BBnMTbmN0kIksGIjCfAAwhRNCKcz36ihk6Kk0qe7KNUTJVuER2LrxXGvGctfhkShB2zAuCm%2FhMPuZgo%2FXpZijhS9K2GFNrNh7Pzw70LdVF%2Ffp75nJwnrHyXDtKNMZrBba%2BZTIzJmwXcL4lfz941dUArXVVFfNoOmqv4CBgHHU1Nk9YEariyi2%2Fdc9JUjkXPbsmI%2FPImD8Zm1J6xsCCsQKfH0Q9dFkIN%2FBnoybK2Fg6d%2B1i5jgaR4DY5uEaEjRJk2Bdd6b0gJMTFo3AUUlNzQkhZI1ixEzxpCgDjmcpY7nc1bjdShEDQebaUKrVbyAFSznewWafsOoOGUpV1340sSrBx9%2BWqrRwcJ7h8uqNmUfvufGJbjJbgOuYq0xvoZkIifPFSbP7jrb8H75TCByZauBjqTAuDLqjOIN8rpc%2BJ6y6VDvyIkNi4%2FK9KNSXHbBq6e8HYLXLrNHBLzrAFHDldF48S9lXTNKU%2BhApRromqC3r1q%2FmyVnHziMDKJrdnlL8ON9h7NpD%2Fyr21yJZVD8kd74ArEVGyEdkEosS%2FyVVBYAnR1bdm0wFG5tSXPOlbWqWp2mFjabQV2g9658qgyA%2Bl%2Bb6QTPG0RoQfRw2AkQyZgjvfbx2RP6v4%2BB%2FkKVMaw%2FlVTmy4Tpwn9jMrCDhlR42o%2FBNvFIx6vsIx%2FZwT1eSK1yGSSE6aEcLjm99u2SDtgdd4fngOvs2O7hSws6slLKEWRsPRKS%2Fczoz19WliepeArs%2FlyAEfOeIKgRTGGQdjHyMhgw3t2utV3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T043434Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CZXBJTSE4%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df562f3cb4062f4f7df4d4b00b69e1bc401ad340fb3a695a91204c03e7e196f2"
                >
                  Link
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Maps business dataset</TableCell>
              <TableCell>$2,500</TableCell>
              <TableCell>1M</TableCell>
              <TableCell>
                Our Google Maps dataset provides detailed information on businesses worldwide. Easily filter by location, 
                business type, and other factors to get the exact data you need. The dataset includes all major data points:
                Category
                Phone
                Location
                Opening hours
                Rating
                and more
              </TableCell>
              <TableCell>
                <a 
                  className={styles.Link} 
                  target="_blank"
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3vjbwu8uqs04ri.1707450388336.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLWVhc3QtMSJIMEYCIQDwxGKzaHvXhXpTddEAuJDfYwGJ2brww20qiDQipaFo6AIhALR6cBWlExhOD%2FAhGDPySpvR6WKpjfQHa3fwNznnGlRJKucDCP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIxNjU0NjAzNDYxIgzgFreL%2Bnp32z%2Fwn2cquwPrzaEGzR6bciUkVxMHQFKSAUgQW%2BO4atkF%2BL0i4mXwLk9MsH29iH8tC7AcXu8Kf9rKTQfPftQFUxADVgkoQXEig06fQ8YB9ELebb4JDb3BlzXLmLtHDAnF8PMpdwP5Xnm4XuiD%2FE9HEXz80MVRAE5Box%2FNP94pulGYNcLNiTdf6o%2Br%2FLeGxXkf6x8%2FQtL5asDk%2BBnMTbmN0kIksGIjCfAAwhRNCKcz36ihk6Kk0qe7KNUTJVuER2LrxXGvGctfhkShB2zAuCm%2FhMPuZgo%2FXpZijhS9K2GFNrNh7Pzw70LdVF%2Ffp75nJwnrHyXDtKNMZrBba%2BZTIzJmwXcL4lfz941dUArXVVFfNoOmqv4CBgHHU1Nk9YEariyi2%2Fdc9JUjkXPbsmI%2FPImD8Zm1J6xsCCsQKfH0Q9dFkIN%2FBnoybK2Fg6d%2B1i5jgaR4DY5uEaEjRJk2Bdd6b0gJMTFo3AUUlNzQkhZI1ixEzxpCgDjmcpY7nc1bjdShEDQebaUKrVbyAFSznewWafsOoOGUpV1340sSrBx9%2BWqrRwcJ7h8uqNmUfvufGJbjJbgOuYq0xvoZkIifPFSbP7jrb8H75TCByZauBjqTAuDLqjOIN8rpc%2BJ6y6VDvyIkNi4%2FK9KNSXHbBq6e8HYLXLrNHBLzrAFHDldF48S9lXTNKU%2BhApRromqC3r1q%2FmyVnHziMDKJrdnlL8ON9h7NpD%2Fyr21yJZVD8kd74ArEVGyEdkEosS%2FyVVBYAnR1bdm0wFG5tSXPOlbWqWp2mFjabQV2g9658qgyA%2Bl%2Bb6QTPG0RoQfRw2AkQyZgjvfbx2RP6v4%2BB%2FkKVMaw%2FlVTmy4Tpwn9jMrCDhlR42o%2FBNvFIx6vsIx%2FZwT1eSK1yGSSE6aEcLjm99u2SDtgdd4fngOvs2O7hSws6slLKEWRsPRKS%2Fczoz19WliepeArs%2FlyAEfOeIKgRTGGQdjHyMhgw3t2utV3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T043939Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CZXBJTSE4%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65b89fa3877e78fb1e6f56840076c5e36329f10cfb433d879f36e6ce3e56e9c6"
                >
                  Link
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amazon Reviews</TableCell>
              <TableCell>$1,500</TableCell>
              <TableCell>600K</TableCell>
              <TableCell>
                The Amazon Reviews Dataset is a comprehensive compilation, capturing a detailed panorama of user experiences on 
                the Amazon platform. With key columns such as product_name, product_rating, and product_reviews_number, it provides 
                a granular view of each product's reception. The dataset incorporates rich qualitative insights, including 
                review_text, review_header, and author_name, allowing for a nuanced exploration of consumer sentiments.
              </TableCell>
              <TableCell>
                <a 
                  className={styles.Link} 
                  target="_blank"
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3tgtd15wuwehypm.1707450291739.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLWVhc3QtMSJIMEYCIQDwxGKzaHvXhXpTddEAuJDfYwGJ2brww20qiDQipaFo6AIhALR6cBWlExhOD%2FAhGDPySpvR6WKpjfQHa3fwNznnGlRJKucDCP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIxNjU0NjAzNDYxIgzgFreL%2Bnp32z%2Fwn2cquwPrzaEGzR6bciUkVxMHQFKSAUgQW%2BO4atkF%2BL0i4mXwLk9MsH29iH8tC7AcXu8Kf9rKTQfPftQFUxADVgkoQXEig06fQ8YB9ELebb4JDb3BlzXLmLtHDAnF8PMpdwP5Xnm4XuiD%2FE9HEXz80MVRAE5Box%2FNP94pulGYNcLNiTdf6o%2Br%2FLeGxXkf6x8%2FQtL5asDk%2BBnMTbmN0kIksGIjCfAAwhRNCKcz36ihk6Kk0qe7KNUTJVuER2LrxXGvGctfhkShB2zAuCm%2FhMPuZgo%2FXpZijhS9K2GFNrNh7Pzw70LdVF%2Ffp75nJwnrHyXDtKNMZrBba%2BZTIzJmwXcL4lfz941dUArXVVFfNoOmqv4CBgHHU1Nk9YEariyi2%2Fdc9JUjkXPbsmI%2FPImD8Zm1J6xsCCsQKfH0Q9dFkIN%2FBnoybK2Fg6d%2B1i5jgaR4DY5uEaEjRJk2Bdd6b0gJMTFo3AUUlNzQkhZI1ixEzxpCgDjmcpY7nc1bjdShEDQebaUKrVbyAFSznewWafsOoOGUpV1340sSrBx9%2BWqrRwcJ7h8uqNmUfvufGJbjJbgOuYq0xvoZkIifPFSbP7jrb8H75TCByZauBjqTAuDLqjOIN8rpc%2BJ6y6VDvyIkNi4%2FK9KNSXHbBq6e8HYLXLrNHBLzrAFHDldF48S9lXTNKU%2BhApRromqC3r1q%2FmyVnHziMDKJrdnlL8ON9h7NpD%2Fyr21yJZVD8kd74ArEVGyEdkEosS%2FyVVBYAnR1bdm0wFG5tSXPOlbWqWp2mFjabQV2g9658qgyA%2Bl%2Bb6QTPG0RoQfRw2AkQyZgjvfbx2RP6v4%2BB%2FkKVMaw%2FlVTmy4Tpwn9jMrCDhlR42o%2FBNvFIx6vsIx%2FZwT1eSK1yGSSE6aEcLjm99u2SDtgdd4fngOvs2O7hSws6slLKEWRsPRKS%2Fczoz19WliepeArs%2FlyAEfOeIKgRTGGQdjHyMhgw3t2utV3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T043434Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CZXBJTSE4%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df562f3cb4062f4f7df4d4b00b69e1bc401ad340fb3a695a91204c03e7e196f2"
                >
                  Link
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IMDB media dataset</TableCell>
              <TableCell>$500</TableCell>
              <TableCell>200K</TableCell>
              <TableCell>
              The IMDB media dataset offers a list of films, TV shows, podcasts, and more with data points such as media type, 
              media title, URL, release date, IMDB rating, origin, cast, director, and more. Depending on your needs, you may 
              purchase the entire dataset or a customized subset using various filters. The dataset includes all major data points:
                Timestamp
                Media type
                URL
                Media title
                Release date
                IMDB rating (1-10)
                Media category / Genre
                Origin country
                Poster
                Awards
                Box office budget
                And more.
              </TableCell>
              <TableCell>
                <a 
                  className={styles.Link} 
                  target="_blank"
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse43e53os0nktrvx.1707450754811.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLWVhc3QtMSJIMEYCIQDwxGKzaHvXhXpTddEAuJDfYwGJ2brww20qiDQipaFo6AIhALR6cBWlExhOD%2FAhGDPySpvR6WKpjfQHa3fwNznnGlRJKucDCP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIxNjU0NjAzNDYxIgzgFreL%2Bnp32z%2Fwn2cquwPrzaEGzR6bciUkVxMHQFKSAUgQW%2BO4atkF%2BL0i4mXwLk9MsH29iH8tC7AcXu8Kf9rKTQfPftQFUxADVgkoQXEig06fQ8YB9ELebb4JDb3BlzXLmLtHDAnF8PMpdwP5Xnm4XuiD%2FE9HEXz80MVRAE5Box%2FNP94pulGYNcLNiTdf6o%2Br%2FLeGxXkf6x8%2FQtL5asDk%2BBnMTbmN0kIksGIjCfAAwhRNCKcz36ihk6Kk0qe7KNUTJVuER2LrxXGvGctfhkShB2zAuCm%2FhMPuZgo%2FXpZijhS9K2GFNrNh7Pzw70LdVF%2Ffp75nJwnrHyXDtKNMZrBba%2BZTIzJmwXcL4lfz941dUArXVVFfNoOmqv4CBgHHU1Nk9YEariyi2%2Fdc9JUjkXPbsmI%2FPImD8Zm1J6xsCCsQKfH0Q9dFkIN%2FBnoybK2Fg6d%2B1i5jgaR4DY5uEaEjRJk2Bdd6b0gJMTFo3AUUlNzQkhZI1ixEzxpCgDjmcpY7nc1bjdShEDQebaUKrVbyAFSznewWafsOoOGUpV1340sSrBx9%2BWqrRwcJ7h8uqNmUfvufGJbjJbgOuYq0xvoZkIifPFSbP7jrb8H75TCByZauBjqTAuDLqjOIN8rpc%2BJ6y6VDvyIkNi4%2FK9KNSXHbBq6e8HYLXLrNHBLzrAFHDldF48S9lXTNKU%2BhApRromqC3r1q%2FmyVnHziMDKJrdnlL8ON9h7NpD%2Fyr21yJZVD8kd74ArEVGyEdkEosS%2FyVVBYAnR1bdm0wFG5tSXPOlbWqWp2mFjabQV2g9658qgyA%2Bl%2Bb6QTPG0RoQfRw2AkQyZgjvfbx2RP6v4%2BB%2FkKVMaw%2FlVTmy4Tpwn9jMrCDhlR42o%2FBNvFIx6vsIx%2FZwT1eSK1yGSSE6aEcLjm99u2SDtgdd4fngOvs2O7hSws6slLKEWRsPRKS%2Fczoz19WliepeArs%2FlyAEfOeIKgRTGGQdjHyMhgw3t2utV3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T044926Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CZXBJTSE4%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0861a782a8c03536213b3c95ab77289b2d95cb04f1cee27d77777a5b9eaa250e"
                >
                  Link
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Walmart products dataset</TableCell>
              <TableCell>$639</TableCell>
              <TableCell>300K</TableCell>
              <TableCell>
                A Walmart products dataset with a complete overview of product pricing, 
                product strategies, and customer reviews. The dataset includes all major data points:
                  Product
                  SKU
                  GTIN
                  Currency
                  Timestamp
                  Price
                  and more
              </TableCell>
              <TableCell>
                <a 
                  className={styles.Link} 
                  target="_blank"
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse47yq6manlnhb2v.1707450968281.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLWVhc3QtMSJIMEYCIQDwxGKzaHvXhXpTddEAuJDfYwGJ2brww20qiDQipaFo6AIhALR6cBWlExhOD%2FAhGDPySpvR6WKpjfQHa3fwNznnGlRJKucDCP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIxNjU0NjAzNDYxIgzgFreL%2Bnp32z%2Fwn2cquwPrzaEGzR6bciUkVxMHQFKSAUgQW%2BO4atkF%2BL0i4mXwLk9MsH29iH8tC7AcXu8Kf9rKTQfPftQFUxADVgkoQXEig06fQ8YB9ELebb4JDb3BlzXLmLtHDAnF8PMpdwP5Xnm4XuiD%2FE9HEXz80MVRAE5Box%2FNP94pulGYNcLNiTdf6o%2Br%2FLeGxXkf6x8%2FQtL5asDk%2BBnMTbmN0kIksGIjCfAAwhRNCKcz36ihk6Kk0qe7KNUTJVuER2LrxXGvGctfhkShB2zAuCm%2FhMPuZgo%2FXpZijhS9K2GFNrNh7Pzw70LdVF%2Ffp75nJwnrHyXDtKNMZrBba%2BZTIzJmwXcL4lfz941dUArXVVFfNoOmqv4CBgHHU1Nk9YEariyi2%2Fdc9JUjkXPbsmI%2FPImD8Zm1J6xsCCsQKfH0Q9dFkIN%2FBnoybK2Fg6d%2B1i5jgaR4DY5uEaEjRJk2Bdd6b0gJMTFo3AUUlNzQkhZI1ixEzxpCgDjmcpY7nc1bjdShEDQebaUKrVbyAFSznewWafsOoOGUpV1340sSrBx9%2BWqrRwcJ7h8uqNmUfvufGJbjJbgOuYq0xvoZkIifPFSbP7jrb8H75TCByZauBjqTAuDLqjOIN8rpc%2BJ6y6VDvyIkNi4%2FK9KNSXHbBq6e8HYLXLrNHBLzrAFHDldF48S9lXTNKU%2BhApRromqC3r1q%2FmyVnHziMDKJrdnlL8ON9h7NpD%2Fyr21yJZVD8kd74ArEVGyEdkEosS%2FyVVBYAnR1bdm0wFG5tSXPOlbWqWp2mFjabQV2g9658qgyA%2Bl%2Bb6QTPG0RoQfRw2AkQyZgjvfbx2RP6v4%2BB%2FkKVMaw%2FlVTmy4Tpwn9jMrCDhlR42o%2FBNvFIx6vsIx%2FZwT1eSK1yGSSE6aEcLjm99u2SDtgdd4fngOvs2O7hSws6slLKEWRsPRKS%2Fczoz19WliepeArs%2FlyAEfOeIKgRTGGQdjHyMhgw3t2utV3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T045311Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CZXBJTSE4%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cefd079eca3fac4024c2fe3e40e7b91a5f5a9125bac76496295befb2b3c29f39"
                >
                  Link
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </View>
    </Flex>
  </div>
);

export default DatasetPage;
