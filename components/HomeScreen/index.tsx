import * as React from 'react'
import { useState } from 'react'
// import { Text, View, StyleSheet, FlatList } from 'react-native';
import Loader from '../../components/Loader';
import { gql, useQuery } from '@apollo/client';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, HStack, VStack, Pressable, Image, Text, Heading, FlatList} from 'native-base';
import NewsItem from '../News'



const HomeScreen = ({ route,navigation }: any) => {
    // console.log(route.params.page.flowersCollection.items)
    // const {
    //     page: {
    //         sys: pageID
    //     } 
    // } = route.params
    const QUERY = gql`
    query  {
      newsCollection(limit:10){
        items{
          title,
          slug,
          description,
          thumbnail{
            url,
            title
          },
          sys{
            id,
            publishedAt
          }
        }
      }
    }
                `;
    const { data, loading } = useQuery(QUERY)
    // 
    const itemList={

    }
    return (
          <NativeBaseProvider>
            <Heading fontSize="xl" p="4" pb="3">
              News
            </Heading>

            {/* <Text>{JSON.stringify(data)}</Text> */}
            <FlatList data={data?.newsCollection.items} renderItem={({
      item
    }) => <NewsItem id={item.sys.id} title={item.title} slug={item.slug} description={item.description} thumbnail={item.thumbnail} publishedAt={item.sys.publishedAt} navigation={navigation}/>}
    keyExtractor={item => item.sys.id}/>
        </NativeBaseProvider>
    )
}

export default HomeScreen


