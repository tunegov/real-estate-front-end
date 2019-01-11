import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ListingsSection from '../ListingsSection';
import ListingsMap from '../../frontEndContainers/ListingsMap';

const styles = theme => ({
  root: {
    height: 'calc(100vh - 106px)',
    fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
    backgroundColor: '#fff',
  },
  container: {
    height: '100%',
  },
});

const containerComponent = ({ children, ...props }) => (
  <div style={{ height: '100%' }} {...props}>
    {children}
  </div>
);

@observer
@withStyles(styles)
class MapAndListingsSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: null,
      address: null
    }
  }
  selectListings = selectedItem => {
    this.setState({ selectedItem: selectedItem})
  }
  flyToStore = address => {
    this.setState({ address, address });
  }
  render() {
    const { classes, listings } = this.props;
    const { selectListings } = this;
    console.log(listings);
    return (
      <div className={classes.root}>
        <Grid container component={containerComponent}>
          <Grid item xs={12} sm={6}>
            <ListingsMap listings={listings} selectListings={this.selectListings} address={this.state.address}/>
          </Grid>
          <Grid item sm={6}>
            <ListingsSection listings={listings} selectedItem={this.state.selectedItem} flyToStore={this.flyToStore}/>
          </Grid>          
        </Grid>
      </div>
    );
  }
}

export default MapAndListingsSection;
