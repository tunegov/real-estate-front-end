import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import InfoBar from './InfoBar';
import ContactCard from './ContactCard';
import DescriptionSection from './DescriptionSection';
import AmenitiesSection from './AmenitiesSection';
import MapSection from './MapSection';
import ListingsSection from './ListingsSection';

const styles = theme => ({
  root: {
    fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
    color: 'rgba(0,0,0,.8)',
  },
  scrollingGalleryWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '400px',
    width: '100%',
  },
  gridList: {
    display: 'flex',
    padding: 0,
    overflow: 'auto',
    flexWrap: 'nowrap',
    margin: 0,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  image: {
    padding: '0 2px',
    height: '100%',
    minHeight: '100%',
    objectFit: 'contain',
    '&:first-of-type': {
      padding: '0 0',
      paddingRight: '2px',
    },
    '&:last-of-type': {
      padding: '0 0',
      paddingLeft: '2px',
    },
    cursor: 'pointer',
  },
  mainSection: {
    padding: '0 40px 40px 40px',
    paddingTop: '30px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  secondarySection: {
    padding: '0 40px 40px 40px',
    paddingTop: '30px',
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

@withStyles(styles)
@observer
class Listing extends React.Component {
  renderListingImages = images => {
    const { classes } = this.props;

    return images.map(({ URL }) => (
      <img className={classes.image} src={URL} alt="listing images" />
    ));
  };
  render() {
    const { classes, listing, listingAgent, relatedListings } = this.props;
    const { description, neighborhood } = listing;
    const { renderListingImages } = this;

    return (
      <div className={classes.root}>
        <div className={classes.scrollingGalleryWrapper}>
          <ul className={classes.gridList}>
            {renderListingImages(listing.images)}
          </ul>
        </div>
        <InfoBar listing={listing} />
        <div className={classes.mainSection}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={7} lg={8}>
              <DescriptionSection description={description} />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <ContactCard
                listingAgent={listingAgent}
                neighborhood={neighborhood}
                listingID={listing.listingID}
                canApplyOnline={listing.canApplyOnline}
              />
            </Grid>

            <Grid item xs={12}>
              <AmenitiesSection
                listingAgent={listingAgent}
                listingID={listing.listingID}
                canApplyOnline={listing.canApplyOnline}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.secondarySection}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <MapSection listing={listing} />
            </Grid>

            <Grid item xs={12}>
              <ListingsSection listings={relatedListings} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Listing;
