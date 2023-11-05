import { gql, useQuery } from '@apollo/client';

import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Loader from '../../components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => alert('Login with Facebook')}>
          Login with Facebook
        </Icon.Button>
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