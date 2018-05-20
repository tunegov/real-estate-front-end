import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Chance from 'chance';
import ListingCard from '../ListingCard';

const chance = new Chance();

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  lisingsOptions: {
    height: '48px',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  listingsWrapper: {
    padding: '20px',
    paddingBottom: '0',
    height: 'calc(100% - 48px)',
    overflow: 'auto',
  },
});

const containerComponent = ({ children, ...props }) => (
  <div
    style={{ height: '100%', overflow: 'auto' }}
    {...props}>{children}
  </div>
);

@observer
@withStyles(styles)
class ListingsSection extends Component {
  renderListings = listingItems => (
    listingItems.map(listingItem => {
      const {
        featuredPhotoURL,
        otherPhotoURLs,
        address,
        neighborhood,
        price,
        beds,
        baths,
        isLiked,
        isNoFee,
        monthsOfFreeRent,
        sqFootage,
        type,
      } = listingItem;

      return (
        <Grid item xs={12} md={6}>
          <ListingCard
            featuredPhotoURL={featuredPhotoURL}
            otherPhotoURLs={otherPhotoURLs}
            address={address}
            neighborhood={neighborhood}
            price={price}
            beds={beds}
            baths={baths}
            isLiked={isLiked}
            isNoFee={isNoFee}
            monthsOfFreeRent={monthsOfFreeRent}
            sqFootage={sqFootage}
            type={type}
          />
        </Grid>
      );
    })
  )

  render() {
    const { classes, listings } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.lisingsOptions}></div>
        <div className={classes.listingsWrapper}>
          <Grid container spacing={24} component={containerComponent}>
            {this.renderListings(listings)}
          </Grid>
        </div>
      </div>
    );
  }
}

export default ListingsSection;
