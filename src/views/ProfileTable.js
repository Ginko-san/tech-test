import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getInitialFormValues } from '../components/ProfileDetails';
import db from '../firebase.config';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const ProfileTable = ({ dataSubmited }) => {
  const classes = useStyles();
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const response = db.collection('profiles');
    const data = await response.get();
    const profilesData = data.docs.map((item) => item.data());
    setProfiles(profilesData);
  };

  useEffect(() => {
    fetchProfiles();
  }, [dataSubmited]);

  return (
    <Paper className={classes.root} variant="outlined">
      {profiles.length !== 0 && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.keys(getInitialFormValues()).map((element) => (
                  <TableCell key={element}>{element}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {profiles.map((profile) => (
                <TableRow key={`${profile.name}-${profile.age}`}>
                  <TableCell component="th" scope="row">
                    {profile.name}
                  </TableCell>
                  <TableCell>{profile.age}</TableCell>
                  <TableCell>{profile.isSingle ? 'Single' : 'No'}</TableCell>
                  <TableCell>{profile.birthday}</TableCell>
                  <TableCell>{profile.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

ProfileTable.propTypes = {
  dataSubmited: PropTypes.string.isRequired,
};

export default ProfileTable;
