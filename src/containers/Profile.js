import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Chance from 'chance';
import faker from 'faker';
import Profile from '../components/Profile';

const chance = new Chance();

const description = `Lorem ipsum dolor amet beard cray man braid, taxidermy vape retro lumbersexual street art cornhole normcore. Deep v succulents pickled woke. Pinterest iceland typewriter tofu truffaut aesthetic. Listicle 3 wolf moon occupy, snackwave farm-to-table salvia knausgaard health goth wolf thundercats asymmetrical. Artisan scenester echo park mumblecore vape unicorn. Street art drinking vinegar gluten-free hot chicken hell of YOLO, gastropub pinterest lyft green juice.

Blue bottle street art taiyaki selfies listicle yr. Selvage ugh selfies unicorn, leggings snackwave cardigan forage kogi literally mixtape. Ennui meditation yuccie paleo yr occupy beard bitters sriracha before they sold out. Sartorial authentic wayfarers typewriter, chia chartreuse cold-pressed etsy pour-over intelligentsia swag literally pinterest fingerstache. Unicorn jianbing helvetica tattooed umami irony pabst 8-bit etsy deep v trust fund hashtag. IPhone green juice jean shorts neutra four loko meggings tattooed etsy.

Skateboard polaroid humblebrag jianbing cardigan af. Tofu tacos actually, roof party vape semiotics four loko woke kickstarter retro. Echo park venmo skateboard fixie wayfarers, mustache vape bushwick pork belly gentrify keytar lomo hoodie poutine. Plaid church-key ennui VHS, succulents health goth bespoke irony pop-up coloring book craft beer beard. Bitters thundercats ramps master cleanse poutine direct trade pickled af live-edge seitan affogato leggings. Pop-up kickstarter mumblecore vinyl.`;

@observer
class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    const user = this.createUser();

    this.state = {
      user: user,
      isEditing: false,
      tempUser: user,
      previousSavedUser: user,
    };
  }

  createUser = () => ({
    profilePhotoURL: `http://picsum.photos/325/325/?random?${chance.integer({
      min: 1,
      max: 1000,
    })}`,
    name: chance.name(),
    email: chance.email(),
    title: 'Licensed Real Estate Salesperson',
    description,
    officeNumber: `${chance.phone()} x${chance.integer({ min: 1, max: 999 })}`,
    areaOfFocus: 'none',
    mobileNumber: chance.phone(),
    region:
      chance.integer({ min: 0, max: 100 }) > 70
        ? chance.state({ full: true })
        : 'New York',
  });

  enterEditingMode = () => {
    this.setState({
      isEditing: true,
    });
  };

  cancelEditingMode = () => {
    this.setState({
      isEditing: false,
      tempUser: {
        ...this.state.user,
      },
    });
  };

  setDescription = description => {
    this.setState({
      tempUser: {
        ...this.state.tempUser,
        description,
      },
    });
  };

  setMobileNumber = mobileNumber => {
    this.setState({
      tempUser: {
        ...this.state.tempUser,
        mobileNumber,
      },
    });
  };

  saveUser = () => {
    this.setState({
      isEditing: false,
      user: {
        ...this.state.tempUser,
      },
      previousSavedUser: {
        ...this.state.user,
      },
    });
  };

  undoSave = () => {
    this.setState({
      user: {
        ...this.state.previousSavedUser,
      },
      tempUser: {
        ...this.state.previousSavedUser,
      },
    });
  };

  render() {
    const { user, uuid, isEditing, profileEdited } = this.state;
    const {
      toggleEditingMode,
      toggleProfileEdited,
      setMobileNumber,
      setDescription,
      enterEditingMode,
      cancelEditingMode,
      saveUser,
      undoSave,
    } = this;
    return (
      <Profile
        user={user}
        isEditing={isEditing}
        enterEditingMode={enterEditingMode}
        cancelEditingMode={cancelEditingMode}
        profileEdited={profileEdited}
        toggleProfileEdited={toggleProfileEdited}
        setMobileNumber={setMobileNumber}
        setDescription={setDescription}
        saveUser={saveUser}
        undoSave={undoSave}
      />
    );
  }
}

export default ProfileContainer;
