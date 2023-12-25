import * as React from 'react'
import { useState } from 'react'
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import Loader from '../../components/Loader';
import { gql, useQuery } from '@apollo/client';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Profile: {
        page: {
            sys: string
        }
    }
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type ItemProps = { title: string, url: string, price: number };
const Item = ({ title, url, price }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.title}>Price: {price ? price : 'N/A'}</Text>
        <Image
            style={styles.tinyLogo}
            source={{
                uri: url,
            }}
        />
        {/* <Text style={styles.title}>URL: {url}</Text> */}


    </View>
);

const Flowers = ({ route, navigation }: Props) => {
    // console.log(route.params.page.flowersCollection.items)
    const {
        page: {
            sys: pageID
        } 
    } = route.params
    const QUERY = gql`
                {
                    productsCollection (limit: 10){
                        items{
                        sys {
                            id
                        }
                        title
                        }
                    }
                }
                `;
    const { data, loading } = useQuery(QUERY)

    return (
        <View>
            <Text>{JSON.stringify(route)}</Text>
            {/* <FlatList
                data={route.params.page.flowersCollection.items}
                renderItem={({ item }) => <Item title={item.title} url={item.image.url} price={item.price} />}
                keyExtractor={item => item.id}
            /> */}
        </View>
    )
}

export default Flowers


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 18,
        margin: 10
    },
    item: {

    },
    tinyLogo: {
        width: 100,
        height: 100
    }
})
