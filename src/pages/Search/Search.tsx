import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
// import Typography from '@material-ui/core/Typography';
import Skeleton from "@material-ui/lab/Skeleton";

import { ApiContext, Listing } from "../../api";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350,
    margin: theme.spacing(2)
  },
  media: {
    height: 200
  }
}));

function ListingSkeleton() {
  const classes = useStyles();
  return (
    <div data-test-locator="listing_skeleton">
      <Card className={classes.card}>
        <Skeleton variant="rect" className={classes.media} />
        <CardContent>
          <React.Fragment>
            <Skeleton height={12} width="70%" />
            <Skeleton height={6} width="80%" />
            <Skeleton height={6} width="90%" />
            <Skeleton height={6} width="50%" />
          </React.Fragment>
        </CardContent>
      </Card>
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  const classes = useStyles();
  return (
    <div data-test-locator="listing_card">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={listing.image}
          title={listing.title}
        />
      </Card>
    </div>
  );
}

function Search() {
  const api = React.useContext(ApiContext);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [listings, setListings] = React.useState<Listing[]>([]);

  React.useEffect(() => {
    api.getListings().then(response => {
      setIsLoaded(true);
      setListings(response);
    });
  }, []);

  if (!isLoaded) {
    return (
      <div>
        {[0, 1, 2, 3].map(key => {
          return <ListingSkeleton key={key} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        {listings.map(listing => {
          return <ListingCard listing={listing} key={listing.id} />;
        })}
      </div>
    );
  }
}

export default Search;
