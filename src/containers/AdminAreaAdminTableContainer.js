import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Chance from 'chance';
import faker from 'faker';
import moment from 'moment';
import AdminAreaAdminTable from '../components/AdminAreaAdminTable';

const chance = new Chance();

const styles = theme => ({
  root: {
    position: 'relative',
  },
  progress: {
    margin: theme.spacing.unit * 2,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
  progressWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '60px 20px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    zIndex: 2,
  },
});

const columns = [
  { name: 'adminID', title: 'Admin ID' },
  { name: 'photo', title: 'Photo' },
  { name: 'name', title: 'Name' },
  { name: 'email', title: 'Email' },
  { name: 'mobileNumber', title: 'Mobile Number' },
  { name: 'companyNumberAndExt', title: 'Company Number/Extension' },
  { name: 'lastLoginTimestamp', title: 'Last Login Time' },
];

@observer
class AdminAreaAdminTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableIsLoading: true,
      rows: this.createRows(this.props.allAdmin),
    };
  }

  createRows = (allAdmin = []) => {
    const rows = [];
    allAdmin.forEach(admin => {
      const {
        admin: adminPart,
        firstName,
        lastName,
        email,
        uuid,
        lastLoginTimestamp,
      } = admin;
      const { profilePicURL, officeNumber, mobileNumber } = adminPart;
      rows.push({
        adminID: uuid,
        photo: {
          imageURL: profilePicURL,
          id: uuid,
        },
        name: `${firstName} ${lastName}`,
        email,
        mobileNumber,
        companyNumberAndExt: officeNumber,
        lastLoginTimestamp: lastLoginTimestamp
          ? moment(lastLoginTimestamp).format('MM/DD/YYYY, h:mm:ss a')
          : '',
      });
    });
    return rows;
  };

  render() {
    const { tableIsLoading, rows } = this.state;
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <AdminAreaAdminTable
          {...rest}
          onMount={() =>
            tableIsLoading ? this.setState({ tableIsLoading: false }) : null
          }
          columns={columns}
          rows={rows}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminAreaAdminTableContainer);
