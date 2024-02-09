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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3pt5625bye1pdkt.1707450121087.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T185325Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d090b77cd213f634288ffdb4c7536ddeed28726b99f63b512e91a11179bd2a5"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3tgtd15wuwehypm.1707450291739.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T185343Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=571600e7bbe0ffa47f30987bfc61d41028517b599e04fe0af56ffc14fce40a8e"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3vjbwu8uqs04ri.1707450388336.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T185358Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c83d680391c8faaff3e83277892d637e1523313636b05fb3df0290b90dd441f"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse3xwxhjdynex99p.1707450499246.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T185522Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92611216b3c2ce7e3f600401d0a8475bb9fd7426d30f47f51f7d3637b76074b5"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse43e53os0nktrvx.1707450754811.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T185535Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99072ffbd5495f73ac3880863145ec707ad023259af90889ab6248e79cd2005f"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/j_lse47yq6manlnhb2v.1707450968281.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLWVhc3QtMiJIMEYCIQC0J0dp0lbvByXkaH1LpfTHJRaxmjdqB6rCAFOkksC2IQIhALAmTZINp7ZjnEbS%2FtdnJSyGEpZzg%2Fvz10IOhm98euqHKt4DCBwQABoMNTIxNjU0NjAzNDYxIgy4muYQHT%2FKJbp4hgkquwN04HSjcxaFI3utnrJlP0VWPUXqgk3GTtxX42y59SrGNm54jQr%2FqoWzklurHnc7ewRostyFds5Fle%2BDQnFntKCBQY64G0iVUIdhI%2FZY7uUxUtlXMkqRZTrTWkJ%2BKvi2LRSXTYRop1Rikjkkd0pMUK47I5urdU7MTb5Hcre0wjpeH06ztLvtUdQoLtKsVRNP0hLwUSK3cp7CueIAPtWRoYIp6ohyKM76sMnRYR0W5ki%2FXJoP%2BM6b1L2UzsanF56w5yX4IpkdGJwomwlMVQohb6zVDkQhvS9f7Lum%2F1it7OEjFKCiYos%2BSSyy5J4F0fL5lceroASmxdMQJn73kRm%2FILSF64L0OugKyIIJvNSRFlDoXr5pYjob2841AqcEozTKJo0f9M09rZMm7jWyOyykg7QrrmYTtiBszGjWSHANyS5SeKqgSZkFn7oYpcmYhEYr3V8p4RPyENQRxTylJme9baUqm2I7TufrVz3EBQRNFC%2BZ%2F3LRyDBAEVfkMaOiQLGnC2FKmg%2B7A8G0CJ%2FoQvnnWZpYsx1nXbuWoYUopkRvCGI46pNDSfQRMAenFJLjhaTHc2y6rwnMLJL3SoJaCDDX3JmuBjqTAq%2BP%2FCNbylCtVY2s9jCKJVJy49jjp4oxcZnARRManyFM4Z%2B6JOCTPfDuyQmuXQALoVp485SeE7SVJQyJe7gPYrhhRzUiHfuihDnxCMABpg60LbpwV9BSE7On%2FYBb4BnV7ngm6oCN74wxrbKeCz6R%2BeK7Wixzn92pZ2kH5HUNLlm%2BwdIwSr4S%2Bdd3lHkwpeAAUykqijGIxxJ7QFHpDKCnNzQXPI9f1dxWwbzSpub9EbAu5OeLOyQEyKOU3caqPcNR09gvB2mBGeIIx19D8UUI3Gi9kccw%2BXGxm8gvJTgjvw6MHZeVYq0Z4Ewnzsk0z7QOIxNvn9fWUCUZpToMS5s5MmAlcasOcqvjz50A9GxmvXerwRa8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240209T185735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CWSLJE6YM%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dd151ff81329cebc223821a0713a89a88320ab05a408be24bd9587f06cdffac8"
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
