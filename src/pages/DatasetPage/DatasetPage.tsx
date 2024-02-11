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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/yahoo-finance-business-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLWVhc3QtMSJGMEQCIGqvH%2F0gEFwRtZ28e6%2F5cvco4QE66bHlGRxlZL7sgdDGAiBO1hPioyN6eZIJo%2FCUdsELUloill0PS7wqdXGwLAQILSreAwg9EAAaDDUyMTY1NDYwMzQ2MSIMJy79hcblsoKPAKWVKrsDOmH2tu2imhEyLx%2B8x2TmgR4eL4MfN3B3yPViMHejLb%2BN9cXc2mIcbGVKSQHste6EebBx7VB2gq0Zs9bQOdvNRVKb34G5gELo0UHruae0zh6YDPIS0FMvreT%2BjF76FUd1CHNa4WHjfqVDfmubFFvrG1xXvvzFJdY3pzBfS5IYhjvC94jz1TJ%2BMvCUstFL0HLTAj8bPHadBvTa04lHPFjMdegGRp3D4CUqJScnvZIViuEWFpU8y8W8TtvUspCc%2FC3ci0uQ9K%2FLEReI4mzzi%2FNRs%2BR9WAV7MfLJ%2FPdR3rpqXArxKwpTi2yIdS39Hu8061LTBQe7O7JcyBBzZlzfAa%2FQtF4OvSiVJaZCNb0FdanjTltzljXDILhq%2FLuUfEleaO5LE3m9sEDg0Ex5zHbFX07fLMgADWPRq3rUjCrLJ5fVeSduALjkA8XSVgVhkunh7xRa%2FlhSy8eSHcdK1eRHtmTEVjR4RrsuUZ0%2Ff7hnuWUC7dEmv5yR2ydlR%2FXwRiHX5WDknXwzDyi6FTxfL2UnTtMk%2BUSEYGhFSHMFcA2aNTAQJ3sxU0DZwUtBu5WtC3mo%2BgSFgagl%2B7cN2MgVZjcw65WhrgY6lQJ2qsB%2BOsqhWQJI4qvSTC9BnIvzFE67a%2FHwR9jqGJBw6M4TCQsGb6myR84N02Vns3l2cEk8%2BR4wUJEThO%2FNtyZ0TwEtWRHvhP%2BlB7HEABK6RJVwVD1SMr332x1K2GAmoGzB0PUKvlwAjBj5uc1Ftx8k8JCC5ezmzy9PHfimG9Dq8WXESO0nUIx7jd%2B5PLfFzGENMP6hzZvL1oj6%2BkWsny6UyxR0K8xxSFuZeQEjB65sfelT2VUn%2BLW67dS7qnh73ARp%2FLMQffWBaw7OAVmUKCytE1gIMWpuHkGmqyGb2jHTO8TPYPB7o6mrFqRpgnAUhprmNhUCqkLwD57N0sLj31ifftYC%2BA2MFodPmeTz%2BdtpcI9TqjaT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240211T042027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CQOG4EALL%2F20240211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18d8092c23f54e3d384e40535c83ae5d7729aa7f56aef87c1e339cd36f3c6ece"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/crunchbase-companies-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLWVhc3QtMSJGMEQCIGqvH%2F0gEFwRtZ28e6%2F5cvco4QE66bHlGRxlZL7sgdDGAiBO1hPioyN6eZIJo%2FCUdsELUloill0PS7wqdXGwLAQILSreAwg9EAAaDDUyMTY1NDYwMzQ2MSIMJy79hcblsoKPAKWVKrsDOmH2tu2imhEyLx%2B8x2TmgR4eL4MfN3B3yPViMHejLb%2BN9cXc2mIcbGVKSQHste6EebBx7VB2gq0Zs9bQOdvNRVKb34G5gELo0UHruae0zh6YDPIS0FMvreT%2BjF76FUd1CHNa4WHjfqVDfmubFFvrG1xXvvzFJdY3pzBfS5IYhjvC94jz1TJ%2BMvCUstFL0HLTAj8bPHadBvTa04lHPFjMdegGRp3D4CUqJScnvZIViuEWFpU8y8W8TtvUspCc%2FC3ci0uQ9K%2FLEReI4mzzi%2FNRs%2BR9WAV7MfLJ%2FPdR3rpqXArxKwpTi2yIdS39Hu8061LTBQe7O7JcyBBzZlzfAa%2FQtF4OvSiVJaZCNb0FdanjTltzljXDILhq%2FLuUfEleaO5LE3m9sEDg0Ex5zHbFX07fLMgADWPRq3rUjCrLJ5fVeSduALjkA8XSVgVhkunh7xRa%2FlhSy8eSHcdK1eRHtmTEVjR4RrsuUZ0%2Ff7hnuWUC7dEmv5yR2ydlR%2FXwRiHX5WDknXwzDyi6FTxfL2UnTtMk%2BUSEYGhFSHMFcA2aNTAQJ3sxU0DZwUtBu5WtC3mo%2BgSFgagl%2B7cN2MgVZjcw65WhrgY6lQJ2qsB%2BOsqhWQJI4qvSTC9BnIvzFE67a%2FHwR9jqGJBw6M4TCQsGb6myR84N02Vns3l2cEk8%2BR4wUJEThO%2FNtyZ0TwEtWRHvhP%2BlB7HEABK6RJVwVD1SMr332x1K2GAmoGzB0PUKvlwAjBj5uc1Ftx8k8JCC5ezmzy9PHfimG9Dq8WXESO0nUIx7jd%2B5PLfFzGENMP6hzZvL1oj6%2BkWsny6UyxR0K8xxSFuZeQEjB65sfelT2VUn%2BLW67dS7qnh73ARp%2FLMQffWBaw7OAVmUKCytE1gIMWpuHkGmqyGb2jHTO8TPYPB7o6mrFqRpgnAUhprmNhUCqkLwD57N0sLj31ifftYC%2BA2MFodPmeTz%2BdtpcI9TqjaT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240211T042043Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CQOG4EALL%2F20240211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=829559bd5e50b8b853166338536dbe06f4116ae57eacfa9e854596485385a705"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/google-maps-api.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLWVhc3QtMSJGMEQCIGqvH%2F0gEFwRtZ28e6%2F5cvco4QE66bHlGRxlZL7sgdDGAiBO1hPioyN6eZIJo%2FCUdsELUloill0PS7wqdXGwLAQILSreAwg9EAAaDDUyMTY1NDYwMzQ2MSIMJy79hcblsoKPAKWVKrsDOmH2tu2imhEyLx%2B8x2TmgR4eL4MfN3B3yPViMHejLb%2BN9cXc2mIcbGVKSQHste6EebBx7VB2gq0Zs9bQOdvNRVKb34G5gELo0UHruae0zh6YDPIS0FMvreT%2BjF76FUd1CHNa4WHjfqVDfmubFFvrG1xXvvzFJdY3pzBfS5IYhjvC94jz1TJ%2BMvCUstFL0HLTAj8bPHadBvTa04lHPFjMdegGRp3D4CUqJScnvZIViuEWFpU8y8W8TtvUspCc%2FC3ci0uQ9K%2FLEReI4mzzi%2FNRs%2BR9WAV7MfLJ%2FPdR3rpqXArxKwpTi2yIdS39Hu8061LTBQe7O7JcyBBzZlzfAa%2FQtF4OvSiVJaZCNb0FdanjTltzljXDILhq%2FLuUfEleaO5LE3m9sEDg0Ex5zHbFX07fLMgADWPRq3rUjCrLJ5fVeSduALjkA8XSVgVhkunh7xRa%2FlhSy8eSHcdK1eRHtmTEVjR4RrsuUZ0%2Ff7hnuWUC7dEmv5yR2ydlR%2FXwRiHX5WDknXwzDyi6FTxfL2UnTtMk%2BUSEYGhFSHMFcA2aNTAQJ3sxU0DZwUtBu5WtC3mo%2BgSFgagl%2B7cN2MgVZjcw65WhrgY6lQJ2qsB%2BOsqhWQJI4qvSTC9BnIvzFE67a%2FHwR9jqGJBw6M4TCQsGb6myR84N02Vns3l2cEk8%2BR4wUJEThO%2FNtyZ0TwEtWRHvhP%2BlB7HEABK6RJVwVD1SMr332x1K2GAmoGzB0PUKvlwAjBj5uc1Ftx8k8JCC5ezmzy9PHfimG9Dq8WXESO0nUIx7jd%2B5PLfFzGENMP6hzZvL1oj6%2BkWsny6UyxR0K8xxSFuZeQEjB65sfelT2VUn%2BLW67dS7qnh73ARp%2FLMQffWBaw7OAVmUKCytE1gIMWpuHkGmqyGb2jHTO8TPYPB7o6mrFqRpgnAUhprmNhUCqkLwD57N0sLj31ifftYC%2BA2MFodPmeTz%2BdtpcI9TqjaT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240211T042057Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CQOG4EALL%2F20240211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f5de139d0db1fb8d68c7985b281c357b75deb10b3a2146f0c13d9d2fd6e101d3"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/amazon-reviews-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLWVhc3QtMSJGMEQCIGqvH%2F0gEFwRtZ28e6%2F5cvco4QE66bHlGRxlZL7sgdDGAiBO1hPioyN6eZIJo%2FCUdsELUloill0PS7wqdXGwLAQILSreAwg9EAAaDDUyMTY1NDYwMzQ2MSIMJy79hcblsoKPAKWVKrsDOmH2tu2imhEyLx%2B8x2TmgR4eL4MfN3B3yPViMHejLb%2BN9cXc2mIcbGVKSQHste6EebBx7VB2gq0Zs9bQOdvNRVKb34G5gELo0UHruae0zh6YDPIS0FMvreT%2BjF76FUd1CHNa4WHjfqVDfmubFFvrG1xXvvzFJdY3pzBfS5IYhjvC94jz1TJ%2BMvCUstFL0HLTAj8bPHadBvTa04lHPFjMdegGRp3D4CUqJScnvZIViuEWFpU8y8W8TtvUspCc%2FC3ci0uQ9K%2FLEReI4mzzi%2FNRs%2BR9WAV7MfLJ%2FPdR3rpqXArxKwpTi2yIdS39Hu8061LTBQe7O7JcyBBzZlzfAa%2FQtF4OvSiVJaZCNb0FdanjTltzljXDILhq%2FLuUfEleaO5LE3m9sEDg0Ex5zHbFX07fLMgADWPRq3rUjCrLJ5fVeSduALjkA8XSVgVhkunh7xRa%2FlhSy8eSHcdK1eRHtmTEVjR4RrsuUZ0%2Ff7hnuWUC7dEmv5yR2ydlR%2FXwRiHX5WDknXwzDyi6FTxfL2UnTtMk%2BUSEYGhFSHMFcA2aNTAQJ3sxU0DZwUtBu5WtC3mo%2BgSFgagl%2B7cN2MgVZjcw65WhrgY6lQJ2qsB%2BOsqhWQJI4qvSTC9BnIvzFE67a%2FHwR9jqGJBw6M4TCQsGb6myR84N02Vns3l2cEk8%2BR4wUJEThO%2FNtyZ0TwEtWRHvhP%2BlB7HEABK6RJVwVD1SMr332x1K2GAmoGzB0PUKvlwAjBj5uc1Ftx8k8JCC5ezmzy9PHfimG9Dq8WXESO0nUIx7jd%2B5PLfFzGENMP6hzZvL1oj6%2BkWsny6UyxR0K8xxSFuZeQEjB65sfelT2VUn%2BLW67dS7qnh73ARp%2FLMQffWBaw7OAVmUKCytE1gIMWpuHkGmqyGb2jHTO8TPYPB7o6mrFqRpgnAUhprmNhUCqkLwD57N0sLj31ifftYC%2BA2MFodPmeTz%2BdtpcI9TqjaT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240211T042114Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CQOG4EALL%2F20240211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1fef0bf0bc01c9c9642e8ed85a4242dc2aba36dbdfdddc8a1fad2536b5cc4260"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/imdb-media-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLWVhc3QtMSJGMEQCIGqvH%2F0gEFwRtZ28e6%2F5cvco4QE66bHlGRxlZL7sgdDGAiBO1hPioyN6eZIJo%2FCUdsELUloill0PS7wqdXGwLAQILSreAwg9EAAaDDUyMTY1NDYwMzQ2MSIMJy79hcblsoKPAKWVKrsDOmH2tu2imhEyLx%2B8x2TmgR4eL4MfN3B3yPViMHejLb%2BN9cXc2mIcbGVKSQHste6EebBx7VB2gq0Zs9bQOdvNRVKb34G5gELo0UHruae0zh6YDPIS0FMvreT%2BjF76FUd1CHNa4WHjfqVDfmubFFvrG1xXvvzFJdY3pzBfS5IYhjvC94jz1TJ%2BMvCUstFL0HLTAj8bPHadBvTa04lHPFjMdegGRp3D4CUqJScnvZIViuEWFpU8y8W8TtvUspCc%2FC3ci0uQ9K%2FLEReI4mzzi%2FNRs%2BR9WAV7MfLJ%2FPdR3rpqXArxKwpTi2yIdS39Hu8061LTBQe7O7JcyBBzZlzfAa%2FQtF4OvSiVJaZCNb0FdanjTltzljXDILhq%2FLuUfEleaO5LE3m9sEDg0Ex5zHbFX07fLMgADWPRq3rUjCrLJ5fVeSduALjkA8XSVgVhkunh7xRa%2FlhSy8eSHcdK1eRHtmTEVjR4RrsuUZ0%2Ff7hnuWUC7dEmv5yR2ydlR%2FXwRiHX5WDknXwzDyi6FTxfL2UnTtMk%2BUSEYGhFSHMFcA2aNTAQJ3sxU0DZwUtBu5WtC3mo%2BgSFgagl%2B7cN2MgVZjcw65WhrgY6lQJ2qsB%2BOsqhWQJI4qvSTC9BnIvzFE67a%2FHwR9jqGJBw6M4TCQsGb6myR84N02Vns3l2cEk8%2BR4wUJEThO%2FNtyZ0TwEtWRHvhP%2BlB7HEABK6RJVwVD1SMr332x1K2GAmoGzB0PUKvlwAjBj5uc1Ftx8k8JCC5ezmzy9PHfimG9Dq8WXESO0nUIx7jd%2B5PLfFzGENMP6hzZvL1oj6%2BkWsny6UyxR0K8xxSFuZeQEjB65sfelT2VUn%2BLW67dS7qnh73ARp%2FLMQffWBaw7OAVmUKCytE1gIMWpuHkGmqyGb2jHTO8TPYPB7o6mrFqRpgnAUhprmNhUCqkLwD57N0sLj31ifftYC%2BA2MFodPmeTz%2BdtpcI9TqjaT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240211T042130Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CQOG4EALL%2F20240211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=240583bf69b325d57b2c55fec7bd3eeb32b638932a1524d5834ddbe701ab0e35"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/wamart-products-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLWVhc3QtMSJGMEQCIGqvH%2F0gEFwRtZ28e6%2F5cvco4QE66bHlGRxlZL7sgdDGAiBO1hPioyN6eZIJo%2FCUdsELUloill0PS7wqdXGwLAQILSreAwg9EAAaDDUyMTY1NDYwMzQ2MSIMJy79hcblsoKPAKWVKrsDOmH2tu2imhEyLx%2B8x2TmgR4eL4MfN3B3yPViMHejLb%2BN9cXc2mIcbGVKSQHste6EebBx7VB2gq0Zs9bQOdvNRVKb34G5gELo0UHruae0zh6YDPIS0FMvreT%2BjF76FUd1CHNa4WHjfqVDfmubFFvrG1xXvvzFJdY3pzBfS5IYhjvC94jz1TJ%2BMvCUstFL0HLTAj8bPHadBvTa04lHPFjMdegGRp3D4CUqJScnvZIViuEWFpU8y8W8TtvUspCc%2FC3ci0uQ9K%2FLEReI4mzzi%2FNRs%2BR9WAV7MfLJ%2FPdR3rpqXArxKwpTi2yIdS39Hu8061LTBQe7O7JcyBBzZlzfAa%2FQtF4OvSiVJaZCNb0FdanjTltzljXDILhq%2FLuUfEleaO5LE3m9sEDg0Ex5zHbFX07fLMgADWPRq3rUjCrLJ5fVeSduALjkA8XSVgVhkunh7xRa%2FlhSy8eSHcdK1eRHtmTEVjR4RrsuUZ0%2Ff7hnuWUC7dEmv5yR2ydlR%2FXwRiHX5WDknXwzDyi6FTxfL2UnTtMk%2BUSEYGhFSHMFcA2aNTAQJ3sxU0DZwUtBu5WtC3mo%2BgSFgagl%2B7cN2MgVZjcw65WhrgY6lQJ2qsB%2BOsqhWQJI4qvSTC9BnIvzFE67a%2FHwR9jqGJBw6M4TCQsGb6myR84N02Vns3l2cEk8%2BR4wUJEThO%2FNtyZ0TwEtWRHvhP%2BlB7HEABK6RJVwVD1SMr332x1K2GAmoGzB0PUKvlwAjBj5uc1Ftx8k8JCC5ezmzy9PHfimG9Dq8WXESO0nUIx7jd%2B5PLfFzGENMP6hzZvL1oj6%2BkWsny6UyxR0K8xxSFuZeQEjB65sfelT2VUn%2BLW67dS7qnh73ARp%2FLMQffWBaw7OAVmUKCytE1gIMWpuHkGmqyGb2jHTO8TPYPB7o6mrFqRpgnAUhprmNhUCqkLwD57N0sLj31ifftYC%2BA2MFodPmeTz%2BdtpcI9TqjaT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240211T042143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3CQOG4EALL%2F20240211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c61077966601e5e2230e8c756ca33705b231ab81986bb9d6f3ed5cbc64525dce"
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
