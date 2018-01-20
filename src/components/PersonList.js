import React from 'react';
import {Item} from 'semantic-ui-react';

import PersonChart from './PersonChart';

const PersonList = ({people}) => {
//  if (data.loading) return <div>Loading...</div>;
/*
  if (data.error) {
    console.log(data);
    return <div>Error!</div>;
  }
*/
  if(people.length === 0) return <div>No people found!</div>

  return(
    <Item.Group divided>
      {people.map(person => (
        <PersonChart
          key={person.name}
          id={person.name}
          name={person.name}
          movieCount={person.movieCount}
          coStaffCount={person.coStaffCount}
          firstYear={person.firstYear}
          lastYear={person.lastYear}
          moviesPerYear={person.moviesPerYear}
          movies={person.movies}
/*
          owner={person.ownedBy.name}
          centrality={person.centrality}
          partition={person.partition}
          cluster={person.cluster}
          totalOutgoing={person.totalOutgoing}
          totalIncoming={person.totalIncoming}
          numOutgoing={person.numOutgoingTransfers}
          numIncoming={person.numIncomingTransfers}
          linkedAccount={person.linkedAccounts}
          toCluster1={person.toCluster1}
          toCluster2={person.toCluster2}
          toCluster3={person.toCluster3}
          toCluster4={person.toCluster4}
          toCluster5={person.toCluster5}
          fromCluster1={person.fromCluster1}
          fromCluster2={person.fromCluster2}
          fromCluster3={person.fromCluster3}
          fromCluster4={person.fromCluster4}
          fromCluster5={person.fromCluster5}
          incomingSeries={person.incomingSeries}
          outgoingSeries={person.outgoingSeries}
          allSeries={person.allSeries}
*/
        />
      ))}
    </Item.Group>
  );
};
export default PersonList;