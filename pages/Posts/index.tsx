import { gql, useQuery } from '@apollo/client';

import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Loader from '../../components/Loader';
const QUERY = gql`
{
    pageLandingCollection {
      items{
        title
      	slug
        seoFields {
          internalName
          pageTitle
          pageDescription
          canonicalUrl
          nofollow
          noindex
        }
      }
    }
}
`;


const Posts = () =>{
    const {data,loading} = useQuery(QUERY)
    console.log(data)
    return (
        <View>
            <Text>{JSON.stringify(data)}</Text>
        </View>
        )
}

export default Posts


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title:{
        fontsize:18,
        margin: 10
    }
})