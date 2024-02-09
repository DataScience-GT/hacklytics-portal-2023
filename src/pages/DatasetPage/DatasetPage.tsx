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
              <TableCell as="th">Free Download</TableCell>
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/yahoo-finance-business-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T193316Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b696123eca91da92ca2e53a9b9d3ee0d593c342e09093308d3dfc431288d8ba2"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/crunchbase-companies-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T193337Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11990991c90d436ed403d9827b090cdec8b90332323d57b995e3fcf0af8cfcb4"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/google-maps-api.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T193355Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c26015a20fdde72b3ef9e461a7c76a5c33ed17900137b6b9c0158be2d0cd3a0e"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/amazon-reviews-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T193413Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=653cec8cfe8dbff27cdc27702fc14dbf72ec7c9c94676bb04a0a05343638a7d5"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/imdb-media-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T193426Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8dc7310f32fcf7ab8c7bf2325421136dba8a43a6c24bd2de9b9f936f65d83a12"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/wamart-products-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T193537Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c157324a033b489f2d067c6ee42ff02aad8f3a20034380b6c7ac9952d1b21818"
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
