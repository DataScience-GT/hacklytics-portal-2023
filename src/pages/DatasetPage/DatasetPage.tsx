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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/yahoo-finance-business-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJGMEQCIADl28fOluGUv7IJJfTYSZCHOMQJh65sGwe3SIE%2FZqQiAiA7hM0Oyh5S95%2FVF1srowj9aCL0%2Fbwh0SQu5VVyHtRalireAwgnEAAaDDUyMTY1NDYwMzQ2MSIMOQ9mZsFN7UBhv6OPKrsDC4r%2BUcVje2tiL7A6pijpQEfUle25pzHCYZff3z5GBZZATg4Vu2w6Cq2INOvT5S1kTbJZYMpYB1AIhn2zkpNRurZiJOX3frfh6QsMSz2YI6J95wdgdXmcJ51nvaxnoD09eww%2BKSsqgLrbVQxnrXh7cUIPFyPY8b8VCvHJS6LKiagP2spAvwKvLNc6vz6ZR%2FNzDJDY4dwEum%2Fcr76rkOG1Je9ESVz9SgoRO1vPAzywJxPfPUqAcjXhbAoAuorDoD0%2B0LL%2BwpA5SNK8SG8Z7SNNfwW7OiOMS5zvGFay3UBWzlsG6D9236iHCBCTXuXRi2l%2FoePFtxtxeFBcljI%2Fwo5Qphn%2B50UsbbiTOynVya%2Fn08LWpesDZz77FE9AekOn4nRe8rSJtwFajZ5ApqHhst9RtKpb%2FpHMhMNb1zZCUTGp3O56jJDgGRKvvEqaZGtE5yZ3VotFixkQ7dsk4nQTI%2BhjfIOkYVPCPM6wQK5KTWpEoegC730XdNDUhBTefgpMYRgFql4vVW85lnFXbaOn9MwKWvmNIhym%2Fv9hNgi%2Bdl46IbuiSejaik2DoXT4ewn10C31enTz0GtEKR1a8gEwxJ%2BcrgY6lQK20i6x9L%2FIK1XD4XtflNnngC38BoYhXFUZXkAOfzQXoLRQ%2BoyQIRoxvA37lDcHhxELbzTASBh4igt%2FGvsNqYXYDoTjiy4Hj3YTbcgfqLVJpji8TTpCosQwf3ieKFBd%2B2LQ3VltQtZyQGAfeGYjdbvz5a%2FJwRo0zsqfKKsfoyZrLD3p6sC5DSohVmtmCBd%2FO1kZeHQhDagNG8cAXx%2Fa3ZCvdBRKQKKXwun7ubCZwJUWx2eU1iYuRKVd%2FcSTx23wobUxnJi7pViVEHIgQJMUevu%2Bdt0pRAhBjVmeK8nr1Lw%2FBSZw09S2co%2Ba9m3mOSjh12thLHjz%2FkqJpunDYAx4oevXaXxOhCRdles%2BGsHvMlgsBN7EqqVq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T055929Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3C4UNNN5VN%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c40ea5851fb9cbc18a9f36c6ec1fca8f10d7381277e1202e237d75fdcaf92dc2"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/crunchbase-companies-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJGMEQCIADl28fOluGUv7IJJfTYSZCHOMQJh65sGwe3SIE%2FZqQiAiA7hM0Oyh5S95%2FVF1srowj9aCL0%2Fbwh0SQu5VVyHtRalireAwgnEAAaDDUyMTY1NDYwMzQ2MSIMOQ9mZsFN7UBhv6OPKrsDC4r%2BUcVje2tiL7A6pijpQEfUle25pzHCYZff3z5GBZZATg4Vu2w6Cq2INOvT5S1kTbJZYMpYB1AIhn2zkpNRurZiJOX3frfh6QsMSz2YI6J95wdgdXmcJ51nvaxnoD09eww%2BKSsqgLrbVQxnrXh7cUIPFyPY8b8VCvHJS6LKiagP2spAvwKvLNc6vz6ZR%2FNzDJDY4dwEum%2Fcr76rkOG1Je9ESVz9SgoRO1vPAzywJxPfPUqAcjXhbAoAuorDoD0%2B0LL%2BwpA5SNK8SG8Z7SNNfwW7OiOMS5zvGFay3UBWzlsG6D9236iHCBCTXuXRi2l%2FoePFtxtxeFBcljI%2Fwo5Qphn%2B50UsbbiTOynVya%2Fn08LWpesDZz77FE9AekOn4nRe8rSJtwFajZ5ApqHhst9RtKpb%2FpHMhMNb1zZCUTGp3O56jJDgGRKvvEqaZGtE5yZ3VotFixkQ7dsk4nQTI%2BhjfIOkYVPCPM6wQK5KTWpEoegC730XdNDUhBTefgpMYRgFql4vVW85lnFXbaOn9MwKWvmNIhym%2Fv9hNgi%2Bdl46IbuiSejaik2DoXT4ewn10C31enTz0GtEKR1a8gEwxJ%2BcrgY6lQK20i6x9L%2FIK1XD4XtflNnngC38BoYhXFUZXkAOfzQXoLRQ%2BoyQIRoxvA37lDcHhxELbzTASBh4igt%2FGvsNqYXYDoTjiy4Hj3YTbcgfqLVJpji8TTpCosQwf3ieKFBd%2B2LQ3VltQtZyQGAfeGYjdbvz5a%2FJwRo0zsqfKKsfoyZrLD3p6sC5DSohVmtmCBd%2FO1kZeHQhDagNG8cAXx%2Fa3ZCvdBRKQKKXwun7ubCZwJUWx2eU1iYuRKVd%2FcSTx23wobUxnJi7pViVEHIgQJMUevu%2Bdt0pRAhBjVmeK8nr1Lw%2FBSZw09S2co%2Ba9m3mOSjh12thLHjz%2FkqJpunDYAx4oevXaXxOhCRdles%2BGsHvMlgsBN7EqqVq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T055944Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3C4UNNN5VN%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a7b6ee2be3337072eed8a21bb1d67f2ed43f5e6794509c50b7a28dd4027a239"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/google-maps-api.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJGMEQCIADl28fOluGUv7IJJfTYSZCHOMQJh65sGwe3SIE%2FZqQiAiA7hM0Oyh5S95%2FVF1srowj9aCL0%2Fbwh0SQu5VVyHtRalireAwgnEAAaDDUyMTY1NDYwMzQ2MSIMOQ9mZsFN7UBhv6OPKrsDC4r%2BUcVje2tiL7A6pijpQEfUle25pzHCYZff3z5GBZZATg4Vu2w6Cq2INOvT5S1kTbJZYMpYB1AIhn2zkpNRurZiJOX3frfh6QsMSz2YI6J95wdgdXmcJ51nvaxnoD09eww%2BKSsqgLrbVQxnrXh7cUIPFyPY8b8VCvHJS6LKiagP2spAvwKvLNc6vz6ZR%2FNzDJDY4dwEum%2Fcr76rkOG1Je9ESVz9SgoRO1vPAzywJxPfPUqAcjXhbAoAuorDoD0%2B0LL%2BwpA5SNK8SG8Z7SNNfwW7OiOMS5zvGFay3UBWzlsG6D9236iHCBCTXuXRi2l%2FoePFtxtxeFBcljI%2Fwo5Qphn%2B50UsbbiTOynVya%2Fn08LWpesDZz77FE9AekOn4nRe8rSJtwFajZ5ApqHhst9RtKpb%2FpHMhMNb1zZCUTGp3O56jJDgGRKvvEqaZGtE5yZ3VotFixkQ7dsk4nQTI%2BhjfIOkYVPCPM6wQK5KTWpEoegC730XdNDUhBTefgpMYRgFql4vVW85lnFXbaOn9MwKWvmNIhym%2Fv9hNgi%2Bdl46IbuiSejaik2DoXT4ewn10C31enTz0GtEKR1a8gEwxJ%2BcrgY6lQK20i6x9L%2FIK1XD4XtflNnngC38BoYhXFUZXkAOfzQXoLRQ%2BoyQIRoxvA37lDcHhxELbzTASBh4igt%2FGvsNqYXYDoTjiy4Hj3YTbcgfqLVJpji8TTpCosQwf3ieKFBd%2B2LQ3VltQtZyQGAfeGYjdbvz5a%2FJwRo0zsqfKKsfoyZrLD3p6sC5DSohVmtmCBd%2FO1kZeHQhDagNG8cAXx%2Fa3ZCvdBRKQKKXwun7ubCZwJUWx2eU1iYuRKVd%2FcSTx23wobUxnJi7pViVEHIgQJMUevu%2Bdt0pRAhBjVmeK8nr1Lw%2FBSZw09S2co%2Ba9m3mOSjh12thLHjz%2FkqJpunDYAx4oevXaXxOhCRdles%2BGsHvMlgsBN7EqqVq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T060012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3C4UNNN5VN%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c6e76975abf18d35e63292662f7f8ec099ca2460fcd789f09dff268beac0a690"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/amazon-reviews-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJGMEQCIADl28fOluGUv7IJJfTYSZCHOMQJh65sGwe3SIE%2FZqQiAiA7hM0Oyh5S95%2FVF1srowj9aCL0%2Fbwh0SQu5VVyHtRalireAwgnEAAaDDUyMTY1NDYwMzQ2MSIMOQ9mZsFN7UBhv6OPKrsDC4r%2BUcVje2tiL7A6pijpQEfUle25pzHCYZff3z5GBZZATg4Vu2w6Cq2INOvT5S1kTbJZYMpYB1AIhn2zkpNRurZiJOX3frfh6QsMSz2YI6J95wdgdXmcJ51nvaxnoD09eww%2BKSsqgLrbVQxnrXh7cUIPFyPY8b8VCvHJS6LKiagP2spAvwKvLNc6vz6ZR%2FNzDJDY4dwEum%2Fcr76rkOG1Je9ESVz9SgoRO1vPAzywJxPfPUqAcjXhbAoAuorDoD0%2B0LL%2BwpA5SNK8SG8Z7SNNfwW7OiOMS5zvGFay3UBWzlsG6D9236iHCBCTXuXRi2l%2FoePFtxtxeFBcljI%2Fwo5Qphn%2B50UsbbiTOynVya%2Fn08LWpesDZz77FE9AekOn4nRe8rSJtwFajZ5ApqHhst9RtKpb%2FpHMhMNb1zZCUTGp3O56jJDgGRKvvEqaZGtE5yZ3VotFixkQ7dsk4nQTI%2BhjfIOkYVPCPM6wQK5KTWpEoegC730XdNDUhBTefgpMYRgFql4vVW85lnFXbaOn9MwKWvmNIhym%2Fv9hNgi%2Bdl46IbuiSejaik2DoXT4ewn10C31enTz0GtEKR1a8gEwxJ%2BcrgY6lQK20i6x9L%2FIK1XD4XtflNnngC38BoYhXFUZXkAOfzQXoLRQ%2BoyQIRoxvA37lDcHhxELbzTASBh4igt%2FGvsNqYXYDoTjiy4Hj3YTbcgfqLVJpji8TTpCosQwf3ieKFBd%2B2LQ3VltQtZyQGAfeGYjdbvz5a%2FJwRo0zsqfKKsfoyZrLD3p6sC5DSohVmtmCBd%2FO1kZeHQhDagNG8cAXx%2Fa3ZCvdBRKQKKXwun7ubCZwJUWx2eU1iYuRKVd%2FcSTx23wobUxnJi7pViVEHIgQJMUevu%2Bdt0pRAhBjVmeK8nr1Lw%2FBSZw09S2co%2Ba9m3mOSjh12thLHjz%2FkqJpunDYAx4oevXaXxOhCRdles%2BGsHvMlgsBN7EqqVq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T060028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3C4UNNN5VN%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19fc0519339def0cb3c0948e917c4ce44abcf8135eb2e262923cb821c5e58e23"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/imdb-media-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJGMEQCIADl28fOluGUv7IJJfTYSZCHOMQJh65sGwe3SIE%2FZqQiAiA7hM0Oyh5S95%2FVF1srowj9aCL0%2Fbwh0SQu5VVyHtRalireAwgnEAAaDDUyMTY1NDYwMzQ2MSIMOQ9mZsFN7UBhv6OPKrsDC4r%2BUcVje2tiL7A6pijpQEfUle25pzHCYZff3z5GBZZATg4Vu2w6Cq2INOvT5S1kTbJZYMpYB1AIhn2zkpNRurZiJOX3frfh6QsMSz2YI6J95wdgdXmcJ51nvaxnoD09eww%2BKSsqgLrbVQxnrXh7cUIPFyPY8b8VCvHJS6LKiagP2spAvwKvLNc6vz6ZR%2FNzDJDY4dwEum%2Fcr76rkOG1Je9ESVz9SgoRO1vPAzywJxPfPUqAcjXhbAoAuorDoD0%2B0LL%2BwpA5SNK8SG8Z7SNNfwW7OiOMS5zvGFay3UBWzlsG6D9236iHCBCTXuXRi2l%2FoePFtxtxeFBcljI%2Fwo5Qphn%2B50UsbbiTOynVya%2Fn08LWpesDZz77FE9AekOn4nRe8rSJtwFajZ5ApqHhst9RtKpb%2FpHMhMNb1zZCUTGp3O56jJDgGRKvvEqaZGtE5yZ3VotFixkQ7dsk4nQTI%2BhjfIOkYVPCPM6wQK5KTWpEoegC730XdNDUhBTefgpMYRgFql4vVW85lnFXbaOn9MwKWvmNIhym%2Fv9hNgi%2Bdl46IbuiSejaik2DoXT4ewn10C31enTz0GtEKR1a8gEwxJ%2BcrgY6lQK20i6x9L%2FIK1XD4XtflNnngC38BoYhXFUZXkAOfzQXoLRQ%2BoyQIRoxvA37lDcHhxELbzTASBh4igt%2FGvsNqYXYDoTjiy4Hj3YTbcgfqLVJpji8TTpCosQwf3ieKFBd%2B2LQ3VltQtZyQGAfeGYjdbvz5a%2FJwRo0zsqfKKsfoyZrLD3p6sC5DSohVmtmCBd%2FO1kZeHQhDagNG8cAXx%2Fa3ZCvdBRKQKKXwun7ubCZwJUWx2eU1iYuRKVd%2FcSTx23wobUxnJi7pViVEHIgQJMUevu%2Bdt0pRAhBjVmeK8nr1Lw%2FBSZw09S2co%2Ba9m3mOSjh12thLHjz%2FkqJpunDYAx4oevXaXxOhCRdles%2BGsHvMlgsBN7EqqVq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T060043Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3C4UNNN5VN%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=476de25dce5cf530ba6619e41757e006c42dedf7a3fcbdcf0d7bd615edf13323"
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
                  href="https://hacklytics24-datasets.s3.us-east-1.amazonaws.com/datasets/wamart-products-bd.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJGMEQCIADl28fOluGUv7IJJfTYSZCHOMQJh65sGwe3SIE%2FZqQiAiA7hM0Oyh5S95%2FVF1srowj9aCL0%2Fbwh0SQu5VVyHtRalireAwgnEAAaDDUyMTY1NDYwMzQ2MSIMOQ9mZsFN7UBhv6OPKrsDC4r%2BUcVje2tiL7A6pijpQEfUle25pzHCYZff3z5GBZZATg4Vu2w6Cq2INOvT5S1kTbJZYMpYB1AIhn2zkpNRurZiJOX3frfh6QsMSz2YI6J95wdgdXmcJ51nvaxnoD09eww%2BKSsqgLrbVQxnrXh7cUIPFyPY8b8VCvHJS6LKiagP2spAvwKvLNc6vz6ZR%2FNzDJDY4dwEum%2Fcr76rkOG1Je9ESVz9SgoRO1vPAzywJxPfPUqAcjXhbAoAuorDoD0%2B0LL%2BwpA5SNK8SG8Z7SNNfwW7OiOMS5zvGFay3UBWzlsG6D9236iHCBCTXuXRi2l%2FoePFtxtxeFBcljI%2Fwo5Qphn%2B50UsbbiTOynVya%2Fn08LWpesDZz77FE9AekOn4nRe8rSJtwFajZ5ApqHhst9RtKpb%2FpHMhMNb1zZCUTGp3O56jJDgGRKvvEqaZGtE5yZ3VotFixkQ7dsk4nQTI%2BhjfIOkYVPCPM6wQK5KTWpEoegC730XdNDUhBTefgpMYRgFql4vVW85lnFXbaOn9MwKWvmNIhym%2Fv9hNgi%2Bdl46IbuiSejaik2DoXT4ewn10C31enTz0GtEKR1a8gEwxJ%2BcrgY6lQK20i6x9L%2FIK1XD4XtflNnngC38BoYhXFUZXkAOfzQXoLRQ%2BoyQIRoxvA37lDcHhxELbzTASBh4igt%2FGvsNqYXYDoTjiy4Hj3YTbcgfqLVJpji8TTpCosQwf3ieKFBd%2B2LQ3VltQtZyQGAfeGYjdbvz5a%2FJwRo0zsqfKKsfoyZrLD3p6sC5DSohVmtmCBd%2FO1kZeHQhDagNG8cAXx%2Fa3ZCvdBRKQKKXwun7ubCZwJUWx2eU1iYuRKVd%2FcSTx23wobUxnJi7pViVEHIgQJMUevu%2Bdt0pRAhBjVmeK8nr1Lw%2FBSZw09S2co%2Ba9m3mOSjh12thLHjz%2FkqJpunDYAx4oevXaXxOhCRdles%2BGsHvMlgsBN7EqqVq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T060057Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXS5IJR3C4UNNN5VN%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=17234f6c31118cda43870ae54d57c1da172df90a7ba169e99a4cc886a33f6e4e"
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
