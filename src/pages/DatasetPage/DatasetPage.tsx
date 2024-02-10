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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/yahoo-finance-business-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIBvnasI%2FLEYFnTzA%2BRa4lybAhFY6YEiG171ig3bO3Aw1AiA1p%2B010bK0U5z8CZV5zbLbuYc512cfmsOofGtNgKnbMSreAwgxEAAaDDUyMTY1NDYwMzQ2MSIMVrq0CcExZDVmRwbVKrsD4UenWZP2y6ELY4JraWtScP4M8xUQj%2FWb4qj6g3M5qphDdfmOWpw4%2BYeKSs15kbqhyZiCCmy%2BrAeci5tMCLGtp1H8qGNcmYrGTbMZuxAPe93XKBMsxfI5Jd%2FwVGXyLjzEgulelGA9G3KptMhDc3CuxhWrlonxI%2FnrBZMGoKfdQ0ZZGV1MH8pDhhAq9iq1C6OtBimQCIDFJs7%2F54Yut7grbIBWi%2BGoZHg23r7RFOukdfupJFVl%2BCnVjdEgmZ11LsX94wpcHQeR7G0boShnA3yW6%2BBevkNH9rTtwfmENfQW%2BdySYVGrx%2FgwWMkQCrBn3NxcF91sfMSHeNChToYDwRWDPXj6am2%2FZfotaxb5l2TrgLvIEyHyIF5wBthfOy5OAIK5uXpAPOzK%2BO9r%2Bupp8kytW9kji7DkTFcTn3cgm7kAIHIVXu%2Fhl9MvDDf4UqIEZI7%2BHl1qJsUUsilGIByNUmkG9N4%2F%2BQBAThrzEzmt8SYzvzFxSDeGqCyDRbxpEbXhdkWrsyoLicc8egIpq8geFSRhrZCk1HZ1e2s3OcLV6993SNfiCzFLxpFlKT9p0cItuzrP9v03H%2BHXi4M07lsws7eergY6lQLwcc0W0xk5tlh5ERHaUyzjLiMlhsAMlu4u2ElxQKERUL%2Bwj9Ceuf4CIEjoK%2BbMVfsHBN7HEt%2FhTmFVmt8i6Dptnrhh2DrKhAMn77iCRGRE9P%2BMv3b3DNcOQi4biQtn4OEaos6pu%2FLlsNY3T8ZLm5xNhXn42Q8Wg%2Bn0DyvpDpRv1vtT6YcDt0pVTxMnB9DwQB1I3A%2Bu%2BEp%2BsU7meLrXdKkTmhJh5W5sw5TbAGWkQrIPdF%2BXc8kSuvMw6B46k6wlgm9K5pab8dmtLtgoCk%2FvZ2eGAPnBvrZER3i7MtrlKHbCBkvIXNIiOX9%2FLeGWidmPWL4B3EtRa7Akdapd9JfjNAhqoaONjoxk9LVBSkMqf9OFiJyoYkqC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T155237Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CUDT7BEWD%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=367413a6fda7355608c40d382690934348e402ad7ab58d448a77d9637bc87306"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/crunchbase-companies-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIBvnasI%2FLEYFnTzA%2BRa4lybAhFY6YEiG171ig3bO3Aw1AiA1p%2B010bK0U5z8CZV5zbLbuYc512cfmsOofGtNgKnbMSreAwgxEAAaDDUyMTY1NDYwMzQ2MSIMVrq0CcExZDVmRwbVKrsD4UenWZP2y6ELY4JraWtScP4M8xUQj%2FWb4qj6g3M5qphDdfmOWpw4%2BYeKSs15kbqhyZiCCmy%2BrAeci5tMCLGtp1H8qGNcmYrGTbMZuxAPe93XKBMsxfI5Jd%2FwVGXyLjzEgulelGA9G3KptMhDc3CuxhWrlonxI%2FnrBZMGoKfdQ0ZZGV1MH8pDhhAq9iq1C6OtBimQCIDFJs7%2F54Yut7grbIBWi%2BGoZHg23r7RFOukdfupJFVl%2BCnVjdEgmZ11LsX94wpcHQeR7G0boShnA3yW6%2BBevkNH9rTtwfmENfQW%2BdySYVGrx%2FgwWMkQCrBn3NxcF91sfMSHeNChToYDwRWDPXj6am2%2FZfotaxb5l2TrgLvIEyHyIF5wBthfOy5OAIK5uXpAPOzK%2BO9r%2Bupp8kytW9kji7DkTFcTn3cgm7kAIHIVXu%2Fhl9MvDDf4UqIEZI7%2BHl1qJsUUsilGIByNUmkG9N4%2F%2BQBAThrzEzmt8SYzvzFxSDeGqCyDRbxpEbXhdkWrsyoLicc8egIpq8geFSRhrZCk1HZ1e2s3OcLV6993SNfiCzFLxpFlKT9p0cItuzrP9v03H%2BHXi4M07lsws7eergY6lQLwcc0W0xk5tlh5ERHaUyzjLiMlhsAMlu4u2ElxQKERUL%2Bwj9Ceuf4CIEjoK%2BbMVfsHBN7HEt%2FhTmFVmt8i6Dptnrhh2DrKhAMn77iCRGRE9P%2BMv3b3DNcOQi4biQtn4OEaos6pu%2FLlsNY3T8ZLm5xNhXn42Q8Wg%2Bn0DyvpDpRv1vtT6YcDt0pVTxMnB9DwQB1I3A%2Bu%2BEp%2BsU7meLrXdKkTmhJh5W5sw5TbAGWkQrIPdF%2BXc8kSuvMw6B46k6wlgm9K5pab8dmtLtgoCk%2FvZ2eGAPnBvrZER3i7MtrlKHbCBkvIXNIiOX9%2FLeGWidmPWL4B3EtRa7Akdapd9JfjNAhqoaONjoxk9LVBSkMqf9OFiJyoYkqC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T155259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CUDT7BEWD%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=96e6a1f631e20d6f1edf5bf3d8b95ef8999417fccaea7f4a74b63ba13ed4247b"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/google-maps-api.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIBvnasI%2FLEYFnTzA%2BRa4lybAhFY6YEiG171ig3bO3Aw1AiA1p%2B010bK0U5z8CZV5zbLbuYc512cfmsOofGtNgKnbMSreAwgxEAAaDDUyMTY1NDYwMzQ2MSIMVrq0CcExZDVmRwbVKrsD4UenWZP2y6ELY4JraWtScP4M8xUQj%2FWb4qj6g3M5qphDdfmOWpw4%2BYeKSs15kbqhyZiCCmy%2BrAeci5tMCLGtp1H8qGNcmYrGTbMZuxAPe93XKBMsxfI5Jd%2FwVGXyLjzEgulelGA9G3KptMhDc3CuxhWrlonxI%2FnrBZMGoKfdQ0ZZGV1MH8pDhhAq9iq1C6OtBimQCIDFJs7%2F54Yut7grbIBWi%2BGoZHg23r7RFOukdfupJFVl%2BCnVjdEgmZ11LsX94wpcHQeR7G0boShnA3yW6%2BBevkNH9rTtwfmENfQW%2BdySYVGrx%2FgwWMkQCrBn3NxcF91sfMSHeNChToYDwRWDPXj6am2%2FZfotaxb5l2TrgLvIEyHyIF5wBthfOy5OAIK5uXpAPOzK%2BO9r%2Bupp8kytW9kji7DkTFcTn3cgm7kAIHIVXu%2Fhl9MvDDf4UqIEZI7%2BHl1qJsUUsilGIByNUmkG9N4%2F%2BQBAThrzEzmt8SYzvzFxSDeGqCyDRbxpEbXhdkWrsyoLicc8egIpq8geFSRhrZCk1HZ1e2s3OcLV6993SNfiCzFLxpFlKT9p0cItuzrP9v03H%2BHXi4M07lsws7eergY6lQLwcc0W0xk5tlh5ERHaUyzjLiMlhsAMlu4u2ElxQKERUL%2Bwj9Ceuf4CIEjoK%2BbMVfsHBN7HEt%2FhTmFVmt8i6Dptnrhh2DrKhAMn77iCRGRE9P%2BMv3b3DNcOQi4biQtn4OEaos6pu%2FLlsNY3T8ZLm5xNhXn42Q8Wg%2Bn0DyvpDpRv1vtT6YcDt0pVTxMnB9DwQB1I3A%2Bu%2BEp%2BsU7meLrXdKkTmhJh5W5sw5TbAGWkQrIPdF%2BXc8kSuvMw6B46k6wlgm9K5pab8dmtLtgoCk%2FvZ2eGAPnBvrZER3i7MtrlKHbCBkvIXNIiOX9%2FLeGWidmPWL4B3EtRa7Akdapd9JfjNAhqoaONjoxk9LVBSkMqf9OFiJyoYkqC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T155313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CUDT7BEWD%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=56b3eeabd4d91a70fe4de4cfe2fa1d0558146e29dde98e2b415a63828c2931c1"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/amazon-reviews-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIBvnasI%2FLEYFnTzA%2BRa4lybAhFY6YEiG171ig3bO3Aw1AiA1p%2B010bK0U5z8CZV5zbLbuYc512cfmsOofGtNgKnbMSreAwgxEAAaDDUyMTY1NDYwMzQ2MSIMVrq0CcExZDVmRwbVKrsD4UenWZP2y6ELY4JraWtScP4M8xUQj%2FWb4qj6g3M5qphDdfmOWpw4%2BYeKSs15kbqhyZiCCmy%2BrAeci5tMCLGtp1H8qGNcmYrGTbMZuxAPe93XKBMsxfI5Jd%2FwVGXyLjzEgulelGA9G3KptMhDc3CuxhWrlonxI%2FnrBZMGoKfdQ0ZZGV1MH8pDhhAq9iq1C6OtBimQCIDFJs7%2F54Yut7grbIBWi%2BGoZHg23r7RFOukdfupJFVl%2BCnVjdEgmZ11LsX94wpcHQeR7G0boShnA3yW6%2BBevkNH9rTtwfmENfQW%2BdySYVGrx%2FgwWMkQCrBn3NxcF91sfMSHeNChToYDwRWDPXj6am2%2FZfotaxb5l2TrgLvIEyHyIF5wBthfOy5OAIK5uXpAPOzK%2BO9r%2Bupp8kytW9kji7DkTFcTn3cgm7kAIHIVXu%2Fhl9MvDDf4UqIEZI7%2BHl1qJsUUsilGIByNUmkG9N4%2F%2BQBAThrzEzmt8SYzvzFxSDeGqCyDRbxpEbXhdkWrsyoLicc8egIpq8geFSRhrZCk1HZ1e2s3OcLV6993SNfiCzFLxpFlKT9p0cItuzrP9v03H%2BHXi4M07lsws7eergY6lQLwcc0W0xk5tlh5ERHaUyzjLiMlhsAMlu4u2ElxQKERUL%2Bwj9Ceuf4CIEjoK%2BbMVfsHBN7HEt%2FhTmFVmt8i6Dptnrhh2DrKhAMn77iCRGRE9P%2BMv3b3DNcOQi4biQtn4OEaos6pu%2FLlsNY3T8ZLm5xNhXn42Q8Wg%2Bn0DyvpDpRv1vtT6YcDt0pVTxMnB9DwQB1I3A%2Bu%2BEp%2BsU7meLrXdKkTmhJh5W5sw5TbAGWkQrIPdF%2BXc8kSuvMw6B46k6wlgm9K5pab8dmtLtgoCk%2FvZ2eGAPnBvrZER3i7MtrlKHbCBkvIXNIiOX9%2FLeGWidmPWL4B3EtRa7Akdapd9JfjNAhqoaONjoxk9LVBSkMqf9OFiJyoYkqC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T155331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CUDT7BEWD%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2e920e95960109419162aa864b67464b73d9ab164dccb85dea4876f62d8ab9d"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/imdb-media-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIBvnasI%2FLEYFnTzA%2BRa4lybAhFY6YEiG171ig3bO3Aw1AiA1p%2B010bK0U5z8CZV5zbLbuYc512cfmsOofGtNgKnbMSreAwgxEAAaDDUyMTY1NDYwMzQ2MSIMVrq0CcExZDVmRwbVKrsD4UenWZP2y6ELY4JraWtScP4M8xUQj%2FWb4qj6g3M5qphDdfmOWpw4%2BYeKSs15kbqhyZiCCmy%2BrAeci5tMCLGtp1H8qGNcmYrGTbMZuxAPe93XKBMsxfI5Jd%2FwVGXyLjzEgulelGA9G3KptMhDc3CuxhWrlonxI%2FnrBZMGoKfdQ0ZZGV1MH8pDhhAq9iq1C6OtBimQCIDFJs7%2F54Yut7grbIBWi%2BGoZHg23r7RFOukdfupJFVl%2BCnVjdEgmZ11LsX94wpcHQeR7G0boShnA3yW6%2BBevkNH9rTtwfmENfQW%2BdySYVGrx%2FgwWMkQCrBn3NxcF91sfMSHeNChToYDwRWDPXj6am2%2FZfotaxb5l2TrgLvIEyHyIF5wBthfOy5OAIK5uXpAPOzK%2BO9r%2Bupp8kytW9kji7DkTFcTn3cgm7kAIHIVXu%2Fhl9MvDDf4UqIEZI7%2BHl1qJsUUsilGIByNUmkG9N4%2F%2BQBAThrzEzmt8SYzvzFxSDeGqCyDRbxpEbXhdkWrsyoLicc8egIpq8geFSRhrZCk1HZ1e2s3OcLV6993SNfiCzFLxpFlKT9p0cItuzrP9v03H%2BHXi4M07lsws7eergY6lQLwcc0W0xk5tlh5ERHaUyzjLiMlhsAMlu4u2ElxQKERUL%2Bwj9Ceuf4CIEjoK%2BbMVfsHBN7HEt%2FhTmFVmt8i6Dptnrhh2DrKhAMn77iCRGRE9P%2BMv3b3DNcOQi4biQtn4OEaos6pu%2FLlsNY3T8ZLm5xNhXn42Q8Wg%2Bn0DyvpDpRv1vtT6YcDt0pVTxMnB9DwQB1I3A%2Bu%2BEp%2BsU7meLrXdKkTmhJh5W5sw5TbAGWkQrIPdF%2BXc8kSuvMw6B46k6wlgm9K5pab8dmtLtgoCk%2FvZ2eGAPnBvrZER3i7MtrlKHbCBkvIXNIiOX9%2FLeGWidmPWL4B3EtRa7Akdapd9JfjNAhqoaONjoxk9LVBSkMqf9OFiJyoYkqC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T155346Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CUDT7BEWD%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9e078f20d42c13913fffc6e4ffa6c65f1a0653c65d2bc84e3536d91e0e7c7e29"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/wamart-products-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIBvnasI%2FLEYFnTzA%2BRa4lybAhFY6YEiG171ig3bO3Aw1AiA1p%2B010bK0U5z8CZV5zbLbuYc512cfmsOofGtNgKnbMSreAwgxEAAaDDUyMTY1NDYwMzQ2MSIMVrq0CcExZDVmRwbVKrsD4UenWZP2y6ELY4JraWtScP4M8xUQj%2FWb4qj6g3M5qphDdfmOWpw4%2BYeKSs15kbqhyZiCCmy%2BrAeci5tMCLGtp1H8qGNcmYrGTbMZuxAPe93XKBMsxfI5Jd%2FwVGXyLjzEgulelGA9G3KptMhDc3CuxhWrlonxI%2FnrBZMGoKfdQ0ZZGV1MH8pDhhAq9iq1C6OtBimQCIDFJs7%2F54Yut7grbIBWi%2BGoZHg23r7RFOukdfupJFVl%2BCnVjdEgmZ11LsX94wpcHQeR7G0boShnA3yW6%2BBevkNH9rTtwfmENfQW%2BdySYVGrx%2FgwWMkQCrBn3NxcF91sfMSHeNChToYDwRWDPXj6am2%2FZfotaxb5l2TrgLvIEyHyIF5wBthfOy5OAIK5uXpAPOzK%2BO9r%2Bupp8kytW9kji7DkTFcTn3cgm7kAIHIVXu%2Fhl9MvDDf4UqIEZI7%2BHl1qJsUUsilGIByNUmkG9N4%2F%2BQBAThrzEzmt8SYzvzFxSDeGqCyDRbxpEbXhdkWrsyoLicc8egIpq8geFSRhrZCk1HZ1e2s3OcLV6993SNfiCzFLxpFlKT9p0cItuzrP9v03H%2BHXi4M07lsws7eergY6lQLwcc0W0xk5tlh5ERHaUyzjLiMlhsAMlu4u2ElxQKERUL%2Bwj9Ceuf4CIEjoK%2BbMVfsHBN7HEt%2FhTmFVmt8i6Dptnrhh2DrKhAMn77iCRGRE9P%2BMv3b3DNcOQi4biQtn4OEaos6pu%2FLlsNY3T8ZLm5xNhXn42Q8Wg%2Bn0DyvpDpRv1vtT6YcDt0pVTxMnB9DwQB1I3A%2Bu%2BEp%2BsU7meLrXdKkTmhJh5W5sw5TbAGWkQrIPdF%2BXc8kSuvMw6B46k6wlgm9K5pab8dmtLtgoCk%2FvZ2eGAPnBvrZER3i7MtrlKHbCBkvIXNIiOX9%2FLeGWidmPWL4B3EtRa7Akdapd9JfjNAhqoaONjoxk9LVBSkMqf9OFiJyoYkqC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T155359Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CUDT7BEWD%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d6dbb2a5c610d45c6cce062901ce55b92585610e5cb974c29ddfd6ba7ef6ddf"
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
